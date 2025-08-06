import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { GlossarySection } from '@/components/GlossarySection'

const Index = () => {
  const handleScrollToGlossary = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const glossarySection = document.getElementById('glossary')
    if (glossarySection) {
      glossarySection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <section className="py-20 md:py-32 lg:py-40 bg-background">
        <div className="container mx-auto text-center px-4 md:px-6">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <div className="mb-4 inline-block rounded-full bg-orange text-orange-foreground px-4 py-1.5 text-sm font-semibold animate-fade-in-up">
              Codando Sem Codar
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60 animate-fade-in-up [animation-delay:200ms]">
              Dicionário Tech Completo
            </h1>
            <p className="mt-6 text-lg max-w-xl text-muted-foreground md:text-xl animate-fade-in-up [animation-delay:400ms]">
              Desvende 241 termos técnicos da programação com explicações claras e exemplos práticos. De APIs a Webhooks, tudo em um só lugar.
            </p>
            <div className="mt-8 flex justify-center gap-4 animate-fade-in-up [animation-delay:600ms]">
              <Button
                asChild
                size="lg"
                className="group bg-foreground text-background hover:bg-foreground/90 h-11 rounded-md px-8"
              >
                <a href="#glossary" onClick={handleScrollToGlossary}>
                  Explorar Glossário
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <GlossarySection />
    </>
  )
}

export default Index
