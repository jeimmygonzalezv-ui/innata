import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/30 backdrop-blur-lg">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-white font-headline">
          Bloom<span className="text-primary">Empower</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="transition-colors hover:text-primary">Sobre el Evento</a>
            <a href="#agenda" className="transition-colors hover:text-primary">Agenda</a>
            <a href="#pricing" className="transition-colors hover:text-primary">Entradas</a>
            <a href="#contact" className="transition-colors hover:text-primary">Contacto</a>
        </div>
        <Button>Reservar entrada</Button>
      </nav>
    </header>
  );
}
