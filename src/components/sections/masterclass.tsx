import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export function MasterclassSection() {
    return (
        <section id="masterclass" className="py-24 px-4">
            <div className="container mx-auto max-w-6xl">
                <Card className="bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden">
                    <div className="grid md:grid-cols-2 items-center">
                        <div className="p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Masterclass Exclusiva con Enrique Trujillo</h2>
                            <p className="text-muted-foreground mb-6 text-lg">"Desata tu Poder Interior: Estrategias de Liderazgo y Autoconfianza"</p>
                            <p className="mb-6">En este taller intensivo, Enrique te guiará a través de un viaje de autodescubrimiento para que te apropies de tu narrativa, fortalezcas tu presencia ejecutiva y lideres con autenticidad y poder.</p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-primary"/><span>Define tu marca personal como líder.</span></li>
                                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-primary"/><span>Domina el arte de la comunicación influyente.</span></li>
                                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-primary"/><span>Construye una red de apoyo imparable.</span></li>
                            </ul>
                            <HoverBorderGradient
                                containerClassName="rounded-full"
                                as="button"
                                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                            >
                                Quiero esta transformación
                            </HoverBorderGradient>
                        </div>
                        <div className="relative w-full h-80 md:h-full min-h-[400px]">
                            <Image
                                src="/enrique-t.jpg"
                                alt="Enrique Trujillo, experto en liderazgo y ponente de la masterclass"
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}
