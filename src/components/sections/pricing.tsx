import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Entrada General",
    price: "COP 59.000",
    features: [
      "Acceso a todos los paneles",
      "Acceso a la masterclass",
      "Material del evento",
    ],
    cta: "Comprar Entrada",
    variant: "default"
  },
  {
    name: "VIP",
    price: "COP 89.000",
    features: [
      "Todos los beneficios de General",
      "Asientos preferenciales",
      "Acceso a Coctel & Networking VIP",
      "Grabación del evento",
    ],
    cta: "Comprar VIP",
    variant: "primary"
  }
]

export function PricingSection() {
    return (
        <section id="pricing" className="py-20 px-4">
            <div className="container mx-auto max-w-6xl text-center">
                <h2 className="text-4xl font-headline font-bold mb-2">Entradas</h2>
                <p className="text-lg text-muted-foreground mb-12">Elige el plan perfecto para ti y vive esta experiencia única.</p>

                <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
                    {tiers.map((tier) => (
                        <Card key={tier.name} className={`flex flex-col bg-card/80 backdrop-blur-sm border-border/50 transition-all duration-300 hover:scale-105 ${tier.variant === 'primary' ? 'border-primary shadow-lg shadow-primary/10' : ''}`}>
                            <CardHeader className="text-left">
                                <h3 className="text-2xl font-headline font-semibold">{tier.name}</h3>
                                <p className="text-4xl font-bold text-primary pt-2">{tier.price}</p>
                            </CardHeader>
                            <CardContent className="flex-grow text-left">
                                <ul className="space-y-4">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2">
                                            <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button size="lg" className="w-full text-lg">
                                    {tier.cta}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                     <h2 className="text-4xl font-headline font-bold mb-2">Patrocinadores</h2>
                     <p className="text-lg text-muted-foreground mb-8">Únete a nosotros y posiciona tu marca frente a una audiencia de líderes.</p>
                     <Card className="bg-card/80 backdrop-blur-sm border-border/50 p-8 flex flex-col md:flex-row items-center justify-between gap-4 transition-colors duration-300 hover:border-primary/50">
                        <div className="text-left">
                            <h3 className="text-2xl font-bold">Conviértete en Patrocinador</h3>
                            <p className="text-muted-foreground">Apoya el empoderamiento femenino y gana visibilidad para tu marca.</p>
                        </div>
                        <Button size="lg" className="w-full md:w-auto text-lg flex-shrink-0">Quiero ser patrocinador</Button>
                     </Card>
                </div>
            </div>
        </section>
    );
}
