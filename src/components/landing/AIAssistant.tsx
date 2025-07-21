'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { handleGetDesignInspiration } from '@/app/actions';
import type { DesignInspirationOutput } from '@/ai/flows/design-inspiration';
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const AIAssistant = () => {
  const [result, setResult] = useState<DesignInspirationOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [roomType, setRoomType] = useState('');
  const [designPreferences, setDesignPreferences] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!roomType || !designPreferences) {
      setError("Please fill out both fields to get your design inspiration.");
      return;
    }
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await handleGetDesignInspiration({ roomType, designPreferences });
      if (res && res.recommendations) {
        setResult(res);
      } else {
        setError('Could not generate design inspiration. Please try again.');
      }
    } catch (e) {
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-assistant" className="w-full py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold font-headline text-accent sm:text-4xl">AI Design Assistant</h2>
            <p className="mt-4 text-lg text-foreground/80">
              Need some inspiration? Describe your dream room, and our AI will generate personalized design ideas and visuals for you.
            </p>
            <Card className="mt-8 bg-card/50 border-primary/20">
              <form onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle>Get Inspired</CardTitle>
                  <CardDescription>Tell us about the space you want to design.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="roomType">Room Type</Label>
                    <Select onValueChange={setRoomType} value={roomType}>
                      <SelectTrigger id="roomType">
                        <SelectValue placeholder="Select a room" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Living Room">Living Room</SelectItem>
                        <SelectItem value="Bedroom">Bedroom</SelectItem>
                        <SelectItem value="Kitchen">Kitchen</SelectItem>
                        <SelectItem value="Dining Room">Dining Room</SelectItem>
                        <SelectItem value="Home Office">Home Office</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="designPreferences">Design Preferences</Label>
                    <Textarea
                      id="designPreferences"
                      placeholder="e.g., 'modern with a touch of rustic', 'minimalist and airy', 'cozy and traditional'"
                      value={designPreferences}
                      onChange={(e) => setDesignPreferences(e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={loading}>
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Generate Ideas
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>

          <div className="flex items-center justify-center">
            <Card className="w-full min-h-[400px] flex flex-col items-center justify-center bg-card/50 border-primary/20 transition-all duration-300">
              {loading && (
                <div className="flex flex-col items-center justify-center text-center p-8">
                  <Loader2 className="h-12 w-12 animate-spin text-accent" />
                  <p className="mt-4 text-lg font-medium text-foreground">Generating your design...</p>
                </div>
              )}
              {error && !loading && (
                <div className="p-4 sm:p-8 w-full">
                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
                </div>
              )}
              {!loading && !error && result && (
                <>
                  <CardHeader className="w-full px-4 sm:px-6">
                    <CardTitle className="text-xl sm:text-2xl">Your Design Inspiration</CardTitle>
                  </CardHeader>
                  <CardContent className="w-full text-center space-y-4 px-4 sm:px-6 pb-4 sm:pb-6">
                     {result.visualInspiration && (
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                            <Image src={result.visualInspiration} alt="AI-generated design inspiration" layout="fill" objectFit="cover" />
                        </div>
                    )}
                    <p className="text-left text-foreground/90 bg-primary/10 p-4 rounded-md">{result.recommendations}</p>
                  </CardContent>
                </>
              )}
              {!loading && !error && !result && (
                <div className="text-center p-8">
                  <p className="text-lg text-foreground/70">Your personalized inspiration will appear here.</p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
