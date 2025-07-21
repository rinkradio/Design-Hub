import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const portfolioItems = [
    { src: '/images/1.jpg', alt: 'Elegant living room with a neutral color palette', hint: 'elegant living room' },
    { src: '/images/2.jpg', alt: 'Modern kitchen with marble countertops', hint: 'modern kitchen' },
    { src: '/images/3.jpg', alt: 'Cozy bedroom with plush textiles', hint: 'cozy bedroom' },
    { src: '/images/4.jpg', alt: 'Luxurious bathroom with a standalone tub', hint: 'luxury bathroom' },
    { src: '/images/5.jpg', alt: 'Bohemian-style patio with greenery', hint: 'bohemian patio' },
    { src: '/images/6.jpg', alt: 'Minimalist home office setup', hint: 'minimalist office' },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="w-full py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline text-accent sm:text-4xl">Our Portfolio</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            A glimpse into the spaces we've transformed.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group transition-shadow duration-300 hover:shadow-xl">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    data-ai-hint={item.hint}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
