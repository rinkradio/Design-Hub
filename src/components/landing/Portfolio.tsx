import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const portfolioItems = [
  { src: 'https://storage.googleapis.com/gcp-solutions-prod.appspot.com/static/ugc/24/05/1716301389-1311094032.png', alt: 'Cozy balcony with hanging plants', hint: 'cozy balcony' },
  { src: 'https://storage.googleapis.com/gcp-solutions-prod.appspot.com/static/ugc/24/05/1716302522-1925184768.png', alt: 'Rustic kitchen design', hint: 'rustic kitchen' },
  { src: 'https://placehold.co/600x400.png', alt: 'Scandinavian bedroom style', hint: 'scandinavian bedroom' },
  { src: 'https://placehold.co/600x400.png', alt: 'Bohemian chic patio', hint: 'bohemian patio' },
  { src: 'https://placehold.co/600x400.png', alt: 'Industrial-style home office', hint: 'industrial office' },
  { src: 'https://placehold.co/600x400.png', alt: 'Luxury bathroom interior', hint: 'luxury bathroom' },
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
