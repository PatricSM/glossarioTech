import { createContext, useState, useContext, ReactNode } from 'react'
import { initialTerms, type Term } from '@/data/terms'

type TermsContextType = {
  terms: Term[]
  addTerm: (term: Omit<Term, 'id' | 'example'>) => void
}

const TermsContext = createContext<TermsContextType | undefined>(undefined)

export const TermsProvider = ({ children }: { children: ReactNode }) => {
  const [terms, setTerms] = useState<Term[]>(initialTerms)

  const addTerm = (newTermData: Omit<Term, 'id' | 'example'>) => {
    const newTerm: Term = {
      ...newTermData,
      id: crypto.randomUUID(),
      example: '', // Example is not part of the form yet
    }
    setTerms((prevTerms) => [newTerm, ...prevTerms])
  }

  return (
    <TermsContext.Provider value={{ terms, addTerm }}>
      {children}
    </TermsContext.Provider>
  )
}

export const useTerms = () => {
  const context = useContext(TermsContext)
  if (context === undefined) {
    throw new Error('useTerms must be used within a TermsProvider')
  }
  return context
}
