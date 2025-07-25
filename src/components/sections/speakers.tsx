import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const speakers = [
  {
    name: "Nombre Speaker 1",
    title: "CEO & Fundadora de TechCorp",
    image: "https://placehold.co/400x400.png",
    aiHint: "professional woman ceo",
  },
  {
    name: "Nombre Speaker 2",
    title: "Experta en Innovación y Estrategia Digital",
    image: "https://placehold.co/400x400.png",
    aiHint: "woman tech speaker",
  },
  {
    name: "Nombre Speaker 3",
    title: "Inversionista y Mentora de Startups",
    image: "https://placehold.co/400x400.png",
    aiHint: "female investor portrait",
  },
];

export function SpeakersSection() {
  return (
    <section id="speakers" className="py-24 px-4 bg-background/50">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">Mujeres que Inspiran</h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-16">
          Conoce a las mentes brillantes que compartirán sus historias, estrategias y visión de futuro.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <Card key={index} className="bg-transparent border-none text-center group">
              <div className="relative w-full aspect-square rounded-full overflow-hidden mx-auto mb-4 border-4 border-transparent group-hover:border-primary transition-all duration-300 transform group-hover:scale-105">
                <Image
                  src={speaker.image}
                  alt={`Foto de ${speaker.name}`}
                  data-ai-hint={speaker.aiHint}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-headline font-semibold">{speaker.name}</h3>
              <p className="text-primary">{speaker.title}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
