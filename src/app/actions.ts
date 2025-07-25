
'use server';

import { z } from 'zod';
import { generateInspirationalQuote as genkitGenerateInspirationalQuote } from '@/ai/flows/generate-inspirational-quote';

const contactFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres.'),
  email: z.string().email('Por favor, introduce un email válido.'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres.'),
});

export async function submitContactForm(data: { name: string; email: string; message: string; }) {
  const validatedFields = contactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    throw new Error('Invalid form data.');
  }

  console.log('Form data submitted:', validatedFields.data);
  
  // Here you would integrate with your email provider, e.g., using Resend or Nodemailer.
  // await sendEmail(validatedFields.data);

  return { success: true, message: '¡Gracias! Tu mensaje ha sido enviado.' };
}

export async function getInspirationalQuote(): Promise<string> {
    try {
        const result = await genkitGenerateInspirationalQuote({ topic: 'women empowerment' });
        return result.quote;
    } catch (error) {
        console.error("Error generating quote:", error);
        // Fallback quote in case of an error
        return "La belleza es una herramienta, tu esencia es el poder.";
    }
}
