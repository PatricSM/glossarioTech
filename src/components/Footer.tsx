export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto py-6 px-4 md:px-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dicionário Tech. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  )
}
