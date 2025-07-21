import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Logo = () => (
  <Link href="/" className="flex items-center gap-2">
     <svg width="250" height="70" viewBox="0 0 250 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>
            {`
                .ascher-text {
                    font-family: 'Inter', sans-serif;
                    font-size: 24px;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    fill: hsl(var(--foreground));
                }
                .subtitle-text {
                    font-family: 'Inter', sans-serif;
                    font-size: 10px;
                    letter-spacing: 0.25em;
                    fill: hsl(var(--foreground));
                }
                .icon-path {
                    fill: hsl(var(--primary));
                }
            `}
        </style>
        <path d="M10 20 Q20 10, 30 20 T50 20 L50 50 L10 50 Z" className="icon-path" />
        <path d="M50 20 L70 20 L70 50 L50 50 Z" className="icon-path" />
        <text x="155" y="45" textAnchor="middle" className="ascher-text">
            ASCHER
        </text>
    </svg>
  </Link>
);


const Header = () => {
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'AI Assistant', href: '#ai-assistant' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0">
          <Logo />
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-6">
                 <div className="mb-4">
                  <Logo />
                </div>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                ))}
                 <Button asChild className="mt-4 w-full">
                    <Link href="#contact">Book an Appointment</Link>
                 </Button>
              </div>
            </SheetContent>
          </Sheet>
           <Button asChild className='hidden sm:flex'>
            <Link href="#contact">Book Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
