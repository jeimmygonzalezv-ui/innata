"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent } from '@/components/ui/card';
import { submitContactForm } from '@/app/actions';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un email válido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: { name: "", email: "", message: "" }
    });

    async function onSubmit(data: ContactFormValues) {
        setIsSubmitting(true);
        try {
            const result = await submitContactForm(data);
            if (result.success) {
                toast({
                    title: "¡Éxito!",
                    description: result.message,
                });
                form.reset();
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }
    }
  
  return (
    <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-headline font-bold text-center mb-12">Hablemos</h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                    <CardContent className="p-8">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nombre</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Tu nombre completo" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="tu@email.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Mensaje</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Cuéntanos cómo podemos ayudarte..." className="min-h-[120px]" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="w-full text-lg" disabled={isSubmitting}>
                                    {isSubmitting ? "Enviando..." : "Habla con el equipo"}
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
                <div className="space-y-6 text-lg pt-4">
                    <h3 className="text-3xl font-bold font-headline">O contáctanos directamente</h3>
                    <p className="text-muted-foreground">
                        Si tienes preguntas sobre patrocinios, prensa o cualquier otra cosa, no dudes en contactarnos.
                    </p>
                    <div className="space-y-4">
                        <a href="mailto:info@bloomempower.com" className="flex items-center gap-3 transition-colors hover:text-primary">
                            <Mail className="w-6 h-6" />
                            <span>info@bloomempower.com</span>
                        </a>
                        <a href="tel:+573001234567" className="flex items-center gap-3 transition-colors hover:text-primary">
                            <Phone className="w-6 h-6" />
                            <span>+57 300 123 4567</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
