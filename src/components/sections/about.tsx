import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Users, GlassWater } from "lucide-react";

const benefits = [
  {
    icon: <Sparkles className="w-10 h-10 text-primary" />,
    title: "Paneles de inspiración femenina",
    description: "Escucha historias de mujeres que están cambiando el mundo con su visión y liderazgo.",
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Taller transformador",
    description: "Participa en un taller exclusivo con Enrique Trujillo para desbloquear tu máximo potencial.",
  },
  {
    icon: <GlassWater className="w-10 h-10 text-primary" />,
    title: "Networking VIP con coctel",
    description: "Conecta con otras líderes y emprendedoras en un ambiente exclusivo y relajado.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <Card className="bg-card/80 backdrop-blur-sm border-border/50 mb-16 transition-transform duration-300 hover:scale-[1.02]">
          <CardContent className="p-8 text-center">
            <p className="text-2xl md:text-3xl font-light italic">
              “Creemos en el poder de las historias, el empoderamiento colectivo y la magia de las conexiones reales.”
            </p>
          </CardContent>
        </Card>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 text-center p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-headline font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
