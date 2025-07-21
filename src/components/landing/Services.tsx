import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sofa, Home, ClipboardSignature } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const services = [
  {
    icon: Sofa,
    title: 'Interior Design',
    description: 'Comprehensive design services to create stylish and functional living spaces tailored to your lifestyle.',
  },
  {
    icon: Home,
    title: 'Architectural Plans',
    description: 'Detailed architectural planning and blueprints to lay the perfect foundation for your dream home.',
  },
  {
    icon: ClipboardSignature,
    title: 'Project Management',
    description: 'End-to-end project oversight ensuring your design is executed flawlessly, on time, and within budget.',
  },
];

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => (
  <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card border-border/20">
    <CardHeader>
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-accent">
        <Icon className="h-8 w-8" />
      </div>
      <CardTitle className="font-headline text-2xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-foreground/70">{description}</p>
    </CardContent>
  </Card>
);

const Services = () => {
  return (
    <section id="services" className="w-full py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl">Our Expertise</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            We offer a complete range of services to bring your vision to life.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
