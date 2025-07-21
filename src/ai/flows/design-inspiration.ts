
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

const recommendationsPrompt = ai.definePrompt({
  name: 'designRecommendationsPrompt',
  input: {schema: DesignInspirationInputSchema},
  output: {schema: z.object({ recommendations: DesignInspirationOutputSchema.shape.recommendations })},
  prompt: `You are an AI design assistant that provides design recommendations based on user input.

  Room Type: {{{roomType}}}
  Design Preferences: {{{designPreferences}}}

  Generate design recommendations.
  `,
});

const designInspirationFlow = ai.defineFlow(
  {
    name: 'designInspirationFlow',
    inputSchema: DesignInspirationInputSchema,
    outputSchema: DesignInspirationOutputSchema,
  },
  async input => {
    // Generate recommendations and the image in parallel
    const [recommendationsResult, imageResult] = await Promise.all([
        recommendationsPrompt(input),
        ai.generate({
            model: 'googleai/gemini-2.0-flash-preview-image-generation',
            prompt: `A photo of a ${input.designPreferences} ${input.roomType}`,
            config: {
                responseModalities: ['TEXT', 'IMAGE'],
            },
        }),
    ]);

    const recommendations = recommendationsResult.output?.recommendations || 'No recommendations generated.';
    const visualInspiration = imageResult.media?.url || '';

    if (!visualInspiration) {
        console.error('Image generation failed.');
    }

    return {
        recommendations,
        visualInspiration,
    };
  }
);
