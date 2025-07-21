'use server';

import { getDesignInspiration, type DesignInspirationInput, type DesignInspirationOutput } from '@/ai/flows/design-inspiration';
import { Resend } from 'resend';
import { z } from 'zod';

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

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string(),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

export async function sendContactEmail(data: ContactFormInputs): Promise<{ success: boolean; error?: string }> {
  const result = contactFormSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: 'Invalid form data.' };
  }

  const { name, email, phone, message } = result.data;

  const resend = new Resend(process.env.RESEND_API_KEY);
  const toEmail = 'sourav2000ranjan@gmail.com';

  try {
    const { data: emailData, error } = await resend.emails.send({
      from: 'Ascher Designs <onboarding@resend.dev>',
      to: [toEmail],
      reply_to: email,
      subject: 'New Inquiry from Ascher Designs Website',
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: 'Failed to send email.' };
    }

    return { success: true };
  } catch (exception) {
    console.error('Email sending exception:', exception);
    return { success: false, error: 'An unexpected error occurred.' };
  }
}
