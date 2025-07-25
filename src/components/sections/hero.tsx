import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Mujer empresaria sonriendo en un evento de networking"
          data-ai-hint="business woman conference"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#180624] via-[#180624]/60 to-transparent"></div>
      </div>
      <div className="relative z-10 p-4 max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 drop-shadow-lg">
          Liderazgo, Innovación y Belleza: El Poder de la Mujer que Transforma
        </h1>
        <p className="font-body text-lg md:text-xl text-gray-200 mb-8 max-w-3xl drop-shadow-md">
          Un día de inmersión total para conectar, aprender y potenciar tu liderazgo. Únete a las mujeres que están redefiniendo el éxito.
        </p>
        <Button size="lg" className="text-lg px-10 py-7 bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-transform">
          Asegura tu lugar ahora
        </Button>
      </div>
    </section>
  );
}
