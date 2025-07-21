import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const portfolioItems = [
  { src: 'https://placehold.co/600x400.png', alt: 'A bright, modern living room with minimalist furniture.', hint: 'modern living room' },
  { src: 'https://placehold.co/600x400.png', alt: 'A beautiful kitchen with rustic wooden cabinets and modern appliances.', hint: 'rustic kitchen' },
  { src: 'https://placehold.co/600x400.png', alt: 'A cozy, modern balcony with lush hanging plants and comfortable seating.', hint: 'cozy balcony' },
  { src: 'https://placehold.co/600x400.png', alt: 'Scandinavian bedroom with clean lines and neutral colors.', hint: 'scandinavian bedroom' },
  { src: 'https://placehold.co/600x400.png', alt: 'Bohemian chic patio with layered textiles and natural materials.', hint: 'bohemian patio' },
  { src: 'https://placehold.co/600x400.png', alt: 'Industrial-style home office with exposed brick and metal accents.', hint: 'industrial office' },
  { src: 'https://placehold.co/600x400.png', alt: 'Luxury bathroom with marble countertops and a freestanding tub.', hint: 'luxury bathroom' },
  { src: 'https://placehold.co/600x400.png', alt: 'Elegant dining room with a large wooden table and statement lighting.', hint: 'elegant dining' },
  { src: 'https://placehold.co/600x400.png', alt: 'A welcoming entryway with a stylish console table and artwork.', hint: 'welcoming entryway' },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="w-full py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl">Our Portfolio</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            A glimpse into the spaces we've transformed.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group transition-shadow duration-300 hover:shadow-xl bg-card">
              <CardContent className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    data-ai-hint={item.hint}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
                <div className="p-4">
                  <p className="text-foreground/90 capitalize">{item.hint}</p>
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
