import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Logo = () => (
    <svg width="180" height="40" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
        <path d="M75.2 2.2C80.4 2.2 84.8 4 88.4 7.4C88.8 3.8 90.6 1 93.8 1C96.8 1 98.8 3.6 98.8 6.8V23.6H94.2V8.4C94.2 6.8 93.6 6 92.6 6C91.8 6 91.2 6.6 91 7.2L89.2 23.6H84.6L87.4 9.4C86.4 8.6 85.2 8 83.8 7.6L76.4 23.6H71.6L79.6 6.4C77.4 5 75.6 4.2 73.2 4.2C68.4 4.2 64.6 7.6 64.6 12.8C64.6 17.8 68.6 21.4 73.6 21.4C77.2 21.4 79.8 19.8 81.2 17.2L83.4 18.8C81.4 22.2 77.8 24.2 73.6 24.2C66.8 24.2 60 19.2 60 12.8C60 6.2 66.4 2.2 75.2 2.2ZM81.6 12.8C81.6 10.2 79.8 8.4 77.2 8.4C74.6 8.4 72.8 10.2 72.8 12.8C72.8 15.4 74.6 17.2 77.2 17.2C79.8 17.2 81.6 15.4 81.6 12.8Z" fill="currentColor"/>
        <path d="M102 23.6V1H106.6V23.6H102Z" fill="currentColor"/>
        <path d="M110.4 1H124.6V5H115V9.4H123.4V13.4H115V19.6H124.8V23.6H110.4V1Z" fill="currentColor"/>
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
      <div className="container flex h-16 max-w-7xl items-center justify-between">
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
