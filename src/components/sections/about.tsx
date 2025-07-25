import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Users, VenetianMask } from "lucide-react";

const benefits = [
  {
    icon: <Sparkles className="w-12 h-12 text-primary" />,
    title: "Conferencias de Alto Impacto",
    description: "Aprende de mujeres que han roto barreras y lideran la innovación en sus industrias.",
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "Networking Estratégico",
    description: "Amplía tu red de contactos con empresarias y emprendedoras influyentes.",
  },
  {
    icon: <VenetianMask className="w-12 h-12 text-primary" />,
    title: "Masterclass Exclusiva",
    description: "Desbloquea tu potencial con herramientas prácticas de liderazgo y crecimiento personal.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">Un Evento Diseñado para Ti</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Bloom Empower es más que un evento; es una plataforma para catalizar tu crecimiento profesional y personal. Aquí, la inspiración se encuentra con la acción.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 text-center p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:border-primary">
              <div className="mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-headline font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
