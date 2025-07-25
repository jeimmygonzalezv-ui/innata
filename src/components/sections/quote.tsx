"use client";

import { useState, useEffect } from 'react';
import { getInspirationalQuote } from '@/app/actions';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function QuoteSection() {
  const [quote, setQuote] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuote() {
      try {
        setLoading(true);
        const newQuote = await getInspirationalQuote();
        setQuote(newQuote);
      } catch (error) {
        console.error(error);
        setQuote("La belleza es una herramienta, tu esencia es el poder.");
      } finally {
        setLoading(false);
      }
    }
    fetchQuote();
  }, []);

  return (
    <section id="quote" className="py-20 px-4 bg-background/50">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-card/80 backdrop-blur-sm border-border/50 transition-all duration-300 hover:border-primary/50">
          <CardContent className="p-10 text-center min-h-[150px] flex items-center justify-center">
            {loading ? (
                <div className="space-y-3 w-full">
                    <Skeleton className="h-6 w-3/4 mx-auto" />
                    <Skeleton className="h-6 w-1/2 mx-auto" />
                </div>
            ) : (
                <blockquote className="text-2xl md:text-3xl font-light italic">
                    “{quote}”
                </blockquote>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
