import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full py-20 md:py-32 bg-cover bg-center"
      style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')" }}
      data-ai-hint="elegant living room"
    >
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
      <div className="container relative z-10 mx-auto max-w-7xl text-center px-4">
        <h1 className="text-4xl font-extrabold tracking-tight font-headline text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          Crafting Spaces, Inspiring Lives
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/80 md:text-xl">
          At Ascher Designs, we transform your vision into reality with bespoke interior designs that blend elegance, comfort, and functionality.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="#contact">Book an Appointment</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <Link href="#portfolio">View Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
