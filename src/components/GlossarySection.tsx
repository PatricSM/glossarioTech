import { useState, useMemo, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import { useTerms } from '@/contexts/TermsContext'
import { useDebounce } from '@/hooks/use-debounce'
import { termCategories } from '@/data/terms'

export const GlossarySection = () => {
  const { terms } = useTerms()
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [displayCount, setDisplayCount] = useState(10)
  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  const sortedTerms = useMemo(() => {
    return [...terms].sort((a, b) => a.term.localeCompare(b.term))
  }, [terms])

  const filteredTerms = useMemo(() => {
    return sortedTerms.filter((term) => {
      const matchesCategory =
        categoryFilter === 'all' || term.category === categoryFilter
      const matchesSearch =
        !debouncedSearchTerm ||
        term.term.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        term.explanation
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [debouncedSearchTerm, sortedTerms, categoryFilter])

  const displayedTerms = useMemo(() => {
    return filteredTerms.slice(0, displayCount)
  }, [filteredTerms, displayCount])

  const hasMore = displayCount < filteredTerms.length

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 10)
  }

  // Reset display count when filters change
  useEffect(() => {
    setDisplayCount(10)
  }, [debouncedSearchTerm, categoryFilter])

  return (
    <section id="glossary" className="container mx-auto px-4 md:px-6 py-8">
      <header className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Glossário Técnico
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground md:text-xl">
          Encontre definições claras e concisas para termos, siglas e gírias do
          mundo da tecnologia.
        </p>
      </header>

      <div className="max-w-4xl mx-auto mb-12">
        <div className="relative max-w-2xl mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar no glossário..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-card h-12 text-base"
          />
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4 text-center">Categorias</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={categoryFilter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCategoryFilter('all')}
              className="text-sm"
            >
              Todas
            </Button>
            {termCategories.map((cat) => (
              <Button
                key={cat}
                variant={categoryFilter === cat ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCategoryFilter(cat)}
                className="text-sm"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {filteredTerms.length > 0 && (
        <div className="max-w-4xl mx-auto mb-6">
          <p className="text-muted-foreground text-sm text-center">
            Mostrando {Math.min(displayCount, filteredTerms.length)} de {filteredTerms.length} termos
          </p>
        </div>
      )}

      <main>
        {filteredTerms.length > 0 ? (
          <>
            <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
              {displayedTerms.map((term, index) => (
              <Card
                key={term.id}
                className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-200 ease-out animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={term.id} className="border-b-0 p-6">
                    <AccordionTrigger className="flex flex-1 items-start justify-between py-0 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-left gap-4">
                      <div className="flex flex-col items-start gap-2">
                        <span className="tracking-tight text-xl font-semibold">
                          {term.term}
                        </span>
                        <Badge variant="secondary">{term.category}</Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 text-muted-foreground text-base">
                      <p className="mb-4">{term.explanation}</p>
                      {term.example && (
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            Exemplo:
                          </h4>
                          <pre className="code-block">
                            <code>{term.example}</code>
                          </pre>
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
              ))}
            </div>
            
            {hasMore && (
              <div className="flex justify-center mt-12">
                <Button
                  onClick={handleLoadMore}
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-base font-medium"
                >
                  Carregar Mais ({filteredTerms.length - displayCount} restantes)
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Nenhum termo encontrado.
            </p>
            <p className="text-muted-foreground mt-2">
              Tente uma busca ou filtro diferente.
            </p>
          </div>
        )}
      </main>
    </section>
  )
}
