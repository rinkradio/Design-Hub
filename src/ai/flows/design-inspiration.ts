// src/ai/flows/design-inspiration.ts
'use server';
/**
 * @fileOverview Provides design recommendations and inspirational visuals based on user input.
 *
 * - getDesignInspiration - A function that handles the design inspiration process.
 * - DesignInspirationInput - The input type for the getDesignInspiration function.
 * - DesignInspirationOutput - The return type for the getDesignInspiration function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DesignInspirationInputSchema = z.object({
  roomType: z
    .string()
    .describe('The type of room (e.g., living room, bedroom, kitchen).'),
  designPreferences: z
    .string()
    .describe(
      'The design preferences of the user (e.g., modern, minimalist, rustic).'
    ),
});
export type DesignInspirationInput = z.infer<typeof DesignInspirationInputSchema>;

const DesignInspirationOutputSchema = z.object({
  recommendations: z.string().describe('Design recommendations based on the input.'),
  visualInspiration: z
    .string()
    .describe(
      'A data URI containing a Base64 encoded image that visually represents the design inspiration.'
    ),
});
export type DesignInspirationOutput = z.infer<typeof DesignInspirationOutputSchema>;

export async function getDesignInspiration(
  input: DesignInspirationInput
): Promise<DesignInspirationOutput> {
  return designInspirationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'designInspirationPrompt',
  input: {schema: DesignInspirationInputSchema},
  output: {schema: DesignInspirationOutputSchema},
  prompt: `You are an AI design assistant that provides design recommendations and inspirational visuals based on user input.

  Room Type: {{{roomType}}}
  Design Preferences: {{{designPreferences}}}

  Generate design recommendations and an image that visually represents the design inspiration.  The image should be returned as a data URI.
  Here is an example output:
  {
    "recommendations": "Consider a minimalist approach with neutral colors and natural light.",
    "visualInspiration": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUg..."
  }
  `,
});

const designInspirationFlow = ai.defineFlow(
  {
    name: 'designInspirationFlow',
    inputSchema: DesignInspirationInputSchema,
    outputSchema: DesignInspirationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);

    if (!output) {
      throw new Error('No output from prompt');
    }

    // Attempt to parse the visualInspiration to ensure it is a valid data URI
    try {
      const dataUri = output.visualInspiration;
      if (!dataUri.startsWith('data:image')) {
        throw new Error('Invalid data URI format');
      }
      // Decode the Base64 string to check if it's a valid image
      const base64Image = dataUri.split(',')[1];
      if (!base64Image) {
        throw new Error('Missing Base64 data');
      }
      Buffer.from(base64Image, 'base64');
    } catch (error: any) {
      console.error('Error validating visualInspiration data URI:', error.message);
      // Fallback to a default image or handle the error as needed
      output.visualInspiration = ''; // Or a default image data URI
    }

    return output;
  }
);





