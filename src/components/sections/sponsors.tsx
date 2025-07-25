"use client";

import Image from "next/image";

const sponsors = [
    { name: "TechCorp", logo: "https://placehold.co/150x50.png", aiHint: "tech company logo" },
    { name: "InnovateSphere", logo: "https://placehold.co/150x50.png", aiHint: "innovation logo" },
    { name: "CloudScale", logo: "https://placehold.co/150x50.png", aiHint: "cloud tech logo" },
    { name: "DataPro", logo: "https://placehold.co/150x50.png", aiHint: "data analysis logo" },
    { name: "FutureNet", logo: "https://placehold.co/150x50.png", aiHint: "networking logo" },
    { name: "FemPower", logo: "https://placehold.co/150x50.png", aiHint: "women empowerment logo" },
];

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-20 px-4 bg-background/50">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">Marcas que Impulsan el Cambio</h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
          Agradecemos a nuestros socios estratégicos por creer en el poder del liderazgo femenino y hacer posible este evento.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {sponsors.map((sponsor) => (
                <div key={sponsor.name} className="grayscale hover:grayscale-0 transition-all duration-300">
                    <Image 
                        src={sponsor.logo} 
                        alt={sponsor.name}
                        data-ai-hint={sponsor.aiHint}
                        width={150}
                        height={50}
                        className="object-contain"
                    />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
