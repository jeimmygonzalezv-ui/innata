"use client";

import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import Image from 'next/image';

export function HeroSection() {
  const handleClick = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Rostro de una mujer con maquillaje profesional, representando belleza y poder"
          data-ai-hint="woman face makeup"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#180624] via-[#320b58]/60 to-transparent"></div>
      </div>
      <div className="relative z-10 p-4 max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 drop-shadow-lg">
          El Liderazgo, la Belleza y Poder que habita en ti.
        </h1>
        <p className="font-body text-lg md:text-xl text-gray-200 mb-8 max-w-3xl drop-shadow-md">
          Aquí la voz de una, impulsa a muchas. Conéctate, inspírate y transforma tu futuro en el evento de liderazgo femenino más importante de LATAM.
        </p>
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          onClick={handleClick}
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          Reserva tu lugar
        </HoverBorderGradient>
      </div>
    </section>
  );
}
