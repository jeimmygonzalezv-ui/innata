import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Mujeres líderes en un evento de empoderamiento"
          data-ai-hint="empowered women event"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4c1d95] via-[#4c1d95]/60 to-transparent"></div>
      </div>
      <div className="relative z-10 p-4 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 drop-shadow-lg">
          El Liderazgo, la Belleza y el Poder que habita en ti
        </h1>
        <p className="font-body text-lg md:text-xl text-gray-200 mb-8 max-w-2xl drop-shadow-md">
          Aquí la voz de una, impulsa a muchas.
        </p>
        <Button size="lg" className="text-lg px-8 py-6">
          Reservar mi entrada ahora
        </Button>
      </div>
    </section>
  );
}
