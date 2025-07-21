import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Logo = () => (
    <svg width="180" height="50" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
        <text x="58" y="45" fontFamily="Alegreya, serif" fontSize="16" fill="currentColor">ASCHER DESIGNS</text>
        <g transform="translate(10, 0)">
            <path d="M43.6,23.6 L43.6,9.1 C43.6,5.2 40.5,2.1 36.6,2.1 L17.4,2.1 C13.5,2.1 10.4,5.2 10.4,9.1 L10.4,23.6 L3.2,23.6 L3.2,9.1 C3.2,1.3 10.6,-3.5 18.4,-3.5 L35.6,-3.5 C43.4,-3.5 50.8,1.3 50.8,9.1 L50.8,23.6 L43.6,23.6 Z" fill="currentColor" transform="translate(0, 1)"/>
            <path d="M30,5 C21.2,5 14,12.2 14,21 C14,26.8 17.7,31.7 22.5,34 C21.9,32.4 21.5,30.7 21.5,29 C21.5,22.9 26.4,18 32.5,18 C33.1,18 33.7,18.1 34.3,18.2 C33.3,12.6 32,8.1 30,5 Z" fill="currentColor" transform="scale(0.5) translate(28, -22)" />
            <path d="M30,5 L30,23.6 L25,23.6 L25,5 C27.5,4.5 28.5,4.8 30,5 Z" fill="currentColor" />
            <rect x="27" y="12" width="6" height="8" rx="1" fill="var(--background)" stroke="currentColor" strokeWidth="0.5"/>
            <rect x="28" y="13" width="4" height="2.5" fill="var(--background)" stroke="currentColor" strokeWidth="0.3"/>
            <rect x="28" y="16.5" width="4" height="2.5" fill="var(--background)" stroke="currentColor" strokeWidth="0.3"/>
        </g>
    </svg>
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
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>
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
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 py-6">
              <Link href="/" className="flex items-center gap-2 mb-4">
                 <Logo />
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
