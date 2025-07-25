'use server';

/**
 * @fileOverview Generates an inspirational quote related to women empowerment for the testimonials section.
 *
 * - generateInspirationalQuote - A function that generates the inspirational quote.
 * - GenerateInspirationalQuoteInput - The input type for the generateInspirationalQuote function.
 * - GenerateInspirationalQuoteOutput - The return type for the generateInspirationalQuote function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInspirationalQuoteInputSchema = z.object({
  topic: z
    .string()
    .default('women empowerment')
    .describe('The topic of the inspirational quote.'),
});
export type GenerateInspirationalQuoteInput = z.infer<
  typeof GenerateInspirationalQuoteInputSchema
>;

const GenerateInspirationalQuoteOutputSchema = z.object({
  quote: z.string().describe('The inspirational quote.'),
});
export type GenerateInspirationalQuoteOutput = z.infer<
  typeof GenerateInspirationalQuoteOutputSchema
>;

export async function generateInspirationalQuote(
  input: GenerateInspirationalQuoteInput
): Promise<GenerateInspirationalQuoteOutput> {
  return generateInspirationalQuoteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateInspirationalQuotePrompt',
  input: {schema: GenerateInspirationalQuoteInputSchema},
  output: {schema: GenerateInspirationalQuoteOutputSchema},
  prompt: `You are an AI assistant specialized in generating inspirational quotes.

  Generate a quote related to {{topic}}. The quote should be suitable for display in the testimonials section of a landing page.
  Do not include the author of the quote.
  Quote:`,
});

const generateInspirationalQuoteFlow = ai.defineFlow(
  {
    name: 'generateInspirationalQuoteFlow',
    inputSchema: GenerateInspirationalQuoteInputSchema,
    outputSchema: GenerateInspirationalQuoteOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
