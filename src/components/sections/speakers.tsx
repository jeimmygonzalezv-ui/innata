"use client";

import { useState, useEffect } from 'react';
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Skeleton } from '@/components/ui/skeleton';

const speakersData = [
    {
        quote: "CEO & Fundadora de TechCorp, una de las startups de más rápido crecimiento en LATAM. Apasionada por el futuro de la inteligencia artificial.",
        name: "Mariana Costa",
        designation: "CEO & Fundadora de TechCorp",
        src: "https://placehold.co/500x500.png",
        aiHint: "professional woman ceo"
    },
    {
        quote: "Experta en escalar negocios digitales y en crear marcas que conectan con el consumidor moderno. Ha liderado equipos en empresas multinacionales.",
        name: "Isabella Rojas",
        designation: "Experta en Estrategia Digital",
        src: "https://placehold.co/500x500.png",
        aiHint: "female tech speaker"
    },
    {
        quote: "Reconocida inversionista ángel que ha impulsado a más de 20 startups lideradas por mujeres. Su misión es cerrar la brecha de género en el capital de riesgo.",
        name: "Gabriela Castillo",
        designation: "Inversionista y Mentora de Startups",
        src: "https://placehold.co/500x500.png",
        aiHint: "female investor portrait"
    },
    {
        quote: "Consultora de innovación para empresas Fortune 500, ayudándolas a navegar la transformación digital y a construir culturas de creatividad.",
        name: "Daniela Morales",
        designation: "Consultora de Innovación",
        src: "https://placehold.co/500x500.png",
        aiHint: "innovation consultant woman"
    },
    {
        quote: "Pionera en el campo de la biotecnología y defensora de la ciencia y la tecnología como motores de cambio social.",
        name: "Valeria Jiménez",
        designation: "Científica y Emprendedora Biotech",
        src: "https://placehold.co/500x500.png",
        aiHint: "female scientist"
    },
    {
        quote: "Promotora de la belleza diversa y el empoderamiento femenino a través de la inclusión en la industria de la moda.",
        name: "Sabrina Lauviah",
        designation: "Directora, Miss Plus Size Colombia",
        src: "https://placehold.co/500x500.png",
        aiHint: "plus size model director"
    },
];

export function SpeakersSection() {
  const [loading, setLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
        setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
        <section id="speakers" className="py-20 px-4 bg-background/50">
            <div className="container mx-auto max-w-6xl text-center">
                <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">Mujeres que Inspiran</h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                    Conoce a las mentes brillantes que compartirán sus historias, estrategias y visión de futuro.
                </p>
            </div>
             <div className="container mx-auto max-w-4xl flex items-center justify-center min-h-[400px]">
                <div className="grid md:grid-cols-2 gap-10 w-full">
                    <div className='flex items-center justify-center'>
                         <Skeleton className="h-80 w-80 rounded-3xl" />
                    </div>
                    <div className="space-y-4">
                        <Skeleton className="h-8 w-1/2" />
                        <Skeleton className="h-4 w-1/4" />
                        <Skeleton className="h-20 w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
  }

  return (
    <section id="speakers" className="py-20 px-4 bg-background/50">
        <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">Mujeres que Inspiran</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Conoce a las mentes brillantes que compartirán sus historias, estrategias y visión de futuro.
            </p>
        </div>
      <AnimatedTestimonials testimonials={speakersData} autoplay={true} />
    </section>
  );
}
