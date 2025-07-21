import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const portfolioItems = [
  { src: '/images/portfolio-1.png', alt: 'A bright, modern living room with minimalist furniture.', hint: 'modern living room' },
  { src: '/images/portfolio-2.png', alt: 'A beautiful kitchen with rustic wooden cabinets and modern appliances.', hint: 'rustic kitchen' },
  { src: '/images/portfolio-3.png', alt: 'A cozy, modern balcony with lush hanging plants and comfortable seating.', hint: 'cozy balcony' },
  { src: '/images/portfolio-4.png', alt: 'Scandinavian bedroom with clean lines and neutral colors.', hint: 'scandinavian bedroom' },
  { src: '/images/portfolio-5.png', alt: 'Bohemian chic patio with layered textiles and natural materials.', hint: 'bohemian patio' },
  { src: '/images/portfolio-6.png', alt: 'Industrial-style home office with exposed brick and metal accents.', hint: 'industrial office' },
  { src: '/images/portfolio-7.png', alt: 'Luxury bathroom with marble countertops and a freestanding tub.', hint: 'luxury bathroom' },
  { src: '/images/portfolio-8.png', alt: 'Elegant dining room with a large wooden table and statement lighting.', hint: 'elegant dining' },
  { src: '/images/portfolio-9.png', alt: 'A welcoming entryway with a stylish console table and artwork.', hint: 'welcoming entryway' },
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
                <Image
                  src={item.src}
                  alt={item.alt}
                  data-ai-hint={item.hint}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
