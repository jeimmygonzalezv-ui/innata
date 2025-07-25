import { Card } from "@/components/ui/card";
import { Clock, Coffee, Mic } from "lucide-react";

const agendaItems = [
    { icon: <Clock className="w-8 h-8 text-primary mb-3"/>, time: "01:30 PM", title: "Registro y Café de Bienvenida", description: "Comienza el día conectando con otras líderes." },
    { icon: <Mic className="w-8 h-8 text-primary mb-3"/>, time: "10:00 AM", title: "Paneles de Innovación y Liderazgo", description: "Conversatorios con mujeres que están marcando la diferencia." },
    { icon: <Coffee className="w-8 h-8 text-primary mb-3"/>, time: "01:00 PM", title: "Almuerzo y Networking VIP", description: "Conexiones valiosas para potenciar tu carrera y negocio." },
];

export function AgendaSection() {
  return (
    <section id="agenda" className="py-24 px-4 bg-background/50">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-16">La Agenda de un Día Inolvidable</h2>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border/50 -translate-y-1/2"></div>
          <div className="grid md:grid-cols-3 gap-12 relative">
              {agendaItems.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                      <Card className="w-full bg-card/80 backdrop-blur-sm border-2 border-transparent text-center p-8 transition-all duration-300 hover:border-primary hover:-translate-y-2">
                          {item.icon}
                          <h3 className="text-2xl font-headline font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground mb-4">{item.description}</p>
                          <p className="text-primary font-bold text-lg">{item.time}</p>
                      </Card>
                  </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
