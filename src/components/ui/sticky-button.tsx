"use client";

import { Button } from "@/components/ui/button";

export function StickyButton() {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Button size="lg" className="shadow-lg animate-pulse hover:animate-none">
        Reservar ya
      </Button>
    </div>
  );
}
