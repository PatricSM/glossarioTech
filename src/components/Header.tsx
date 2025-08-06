import { Link } from 'react-router-dom'
import { BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 md:h-14 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-full">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold text-foreground"
        >
          <BookOpen className="h-6 w-6 text-primary" />
        </Link>
        <nav className="flex items-center gap-4">
          <Button
            asChild
            className="bg-orange text-orange-foreground hover:bg-orange/90"
          >
            <a
              href="https://codandosemcodar.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              Entrar na Comunidade
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
