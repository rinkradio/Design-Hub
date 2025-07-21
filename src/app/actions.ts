'use server';

import { getDesignInspiration, type DesignInspirationInput, type DesignInspirationOutput } from '@/ai/flows/design-inspiration';

export async function handleGetDesignInspiration(input: DesignInspirationInput): Promise<DesignInspirationOutput> {
  try {
    const result = await getDesignInspiration(input);
    if (!result || !result.recommendations) {
      throw new Error('AI failed to generate a valid response.');
    }
    return result;
  } catch (error) {
    console.error('Error in getDesignInspiration server action:', error);
    // Re-throwing a generic error to the client to avoid leaking implementation details.
    throw new Error('An error occurred while generating design inspiration.');
  }
}
