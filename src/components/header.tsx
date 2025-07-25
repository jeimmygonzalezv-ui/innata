import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/30 backdrop-blur-lg">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-white font-headline">
          Innata<span className="text-secondary">Women Latam</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-white">
            <a href="#about" className="transition-colors hover:text-secondary">El Evento</a>
            <a href="#agenda" className="transition-colors hover:text-secondary">Agenda</a>
            <a href="#speakers" className="transition-colors hover:text-secondary">Ponentes</a>
            <a href="#pricing" className="transition-colors hover:text-secondary">Entradas</a>
            <a href="#contact" className="transition-colors hover:text-secondary">Contacto</a>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Reservar entrada</Button>
      </nav>
    </header>
  );
}
