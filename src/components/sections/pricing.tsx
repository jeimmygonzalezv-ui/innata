import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Entrada General",
    price: "COP 59.000",
    description: "Acceso completo a la inspiración y el conocimiento.",
    features: [
      "Acceso a todas las conferencias y paneles",
      "Material exclusivo del evento",
      "Certificado de participación digital",
    ],
    cta: "Adquirir Entrada",
    variant: "default"
  },
  {
    name: "Experiencia VIP",
    price: "COP 89.000",
    description: "Eleva tu experiencia con acceso y networking exclusivo.",
    features: [
      "Todos los beneficios de la Entrada General",
      "Asientos preferenciales en primera fila",
      "Acceso al Almuerzo & Networking VIP",
      "Grabación completa de todas las ponencias",
    ],
    cta: "Convertirme en VIP",
    variant: "primary"
  }
]

export function PricingSection() {
    return (
        <section id="pricing" className="py-24 px-4">
            <div className="container mx-auto max-w-6xl text-center">
                <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">Invierte en Ti</h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">Elige la entrada que te abrirá las puertas a tu siguiente nivel de éxito. El cupo es limitado.</p>

                <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
                    {tiers.map((tier) => (
                      <CardContainer key={tier.name} containerClassName="w-full">
                        <CardBody className={`flex flex-col bg-card/80 backdrop-blur-sm border-border/50 rounded-xl w-full h-full p-8 ${tier.variant === 'primary' ? 'border-primary shadow-lg shadow-primary/20' : ''}`}>
                            <CardItem translateZ="20" className="w-full">
                                <CardHeader className="text-left p-0">
                                    <CardTitle className="text-2xl font-headline font-semibold">{tier.name}</CardTitle>
                                    <p className="text-4xl font-bold text-primary pt-2">{tier.price}</p>
                                    <CardDescription className="pt-2 text-base">{tier.description}</CardDescription>
                                </CardHeader>
                            </CardItem>
                            <CardItem translateZ="30" className="w-full flex-grow">
                                <CardContent className="flex-grow text-left p-0 pt-8">
                                    <ul className="space-y-4">
                                        {tier.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </CardItem>
                            <CardItem translateZ="40" className="w-full mt-auto">
                              <CardFooter className="p-0 pt-8">
                                  <Button size="lg" className={`w-full text-lg ${tier.variant === 'primary' ? 'bg-primary text-primary-foreground hover:bg-primary/90' : ''}`}>
                                      {tier.cta}
                                  </Button>
                              </CardFooter>
                            </CardItem>
                        </CardBody>
                      </CardContainer>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                     <h2 className="text-4xl font-headline font-bold mb-4">Conviértete en Socio Estratégico</h2>
                     <p className="text-lg text-muted-foreground mb-8">Posiciona tu marca ante una audiencia de mujeres líderes e influyentes.</p>
                     <Card className="bg-card/80 backdrop-blur-sm border-border/50 p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-colors duration-300 hover:border-primary/50">
                        <div className="text-left">
                            <h3 className="text-2xl font-bold">Patrocina Innata Women Latam</h3>
                            <p className="text-muted-foreground mt-1">Gana visibilidad, genera leads y asocia tu marca al empoderamiento femenino.</p>
                        </div>
                        <Button size="lg" variant="outline" className="w-full md:w-auto text-lg flex-shrink-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                            Ver Oportunidades
                        </Button>
                     </Card>
                </div>
            </div>
        </section>
    );
}
