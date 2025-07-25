import { Card } from "@/components/ui/card";

const agendaItems = [
    { time: "09:00 AM", title: "Masterclass", description: "Apertura y taller de liderazgo auténtico." },
    { time: "11:00 AM", title: "Panel: Mujeres que inspiran", description: "Conversatorio con líderes de la industria." },
    { time: "01:00 PM", title: "Coctel & Networking", description: "Conexiones valiosas para cerrar el evento." },
];

export function AgendaSection() {
  return (
    <section id="agenda" className="py-20 px-4 bg-background/50">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl font-headline font-bold mb-12">Agenda del Evento</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {agendaItems.map((item, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 text-left p-6 transition-transform duration-300 hover:-translate-y-2">
                    <p className="text-primary font-bold mb-1 text-lg">{item.time}</p>
                    <h3 className="text-2xl font-headline font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
