"use client";

import { Button } from "@/components/ui/button";

export function StickyButton() {
  const handleClick = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        onClick={handleClick}
        className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 animate-pulse hover:animate-none rounded-full px-8 py-7 text-base"
      >
        Reservar ya
      </Button>
    </div>
  );
}
