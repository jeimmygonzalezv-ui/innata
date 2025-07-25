"use client";

import { useState, useEffect } from 'react';
import { getInspirationalQuote } from '@/app/actions';
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Skeleton } from '@/components/ui/skeleton';

export function QuoteSection() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuotes() {
      try {
        setLoading(true);
        const fetchedTestimonials = await Promise.all([
            getInspirationalQuote(),
            getInspirationalQuote(),
            getInspirationalQuote(),
            getInspirationalQuote(),
            getInspirationalQuote(),
        ]);
        
        const testimonialData = [
            {
                quote: fetchedTestimonials[0],
                name: "Ana Morales",
                designation: "Fundadora de 'Innovadoras'",
                src: "https://placehold.co/500x500.png",
                aiHint: "professional woman"
            },
            {
                quote: fetchedTestimonials[1],
                name: "Lucía Fernández",
                designation: "CEO de TechFem",
                src: "https://placehold.co/500x500.png",
                aiHint: "female tech ceo"
            },
            {
                quote: fetchedTestimonials[2],
                name: "Sofía Vargas",
                designation: "Directora de 'Mujer Líder'",
                src: "https://placehold.co/500x500.png",
                aiHint: "woman leader"
            },
            {
                quote: fetchedTestimonials[3],
                name: "Camila Ríos",
                designation: "Inversionista Ángel",
                src: "https://placehold.co/500x500.png",
                aiHint: "female angel investor"
            },
            {
                quote: fetchedTestimonials[4],
                name: "Valentina Navarro",
                designation: "Consultora de Negocios",
                src: "https://placehold.co/500x500.png",
                aiHint: "business consultant woman"
            },
        ];
        
        setTestimonials(testimonialData);
      } catch (error) {
        console.error(error);
        const fallbackTestimonials = [
            {
                quote: "La belleza es una herramienta, tu esencia es el poder.",
                name: "Ana Morales",
                designation: "Fundadora de 'Innovadoras'",
                src: "https://placehold.co/500x500.png",
                aiHint: "professional woman"
            },
        ];
        setTestimonials(fallbackTestimonials);
      } finally {
        setLoading(false);
      }
    }
    fetchQuotes();
  }, []);

  if (loading) {
    return (
        <section id="quote" className="py-20 px-4 bg-background/50">
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
    <section id="quote" className="py-20 px-4 bg-background/50">
        <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">Voces que Impulsan</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Escucha lo que las líderes que han participado en nuestros eventos tienen que decir.
            </p>
        </div>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </section>
  );
}
