import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Logo = () => (
    <svg width="200" height="70" viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>
            {`
                .ascher-text {
                    font-family: 'Alegreya', serif;
                    font-size: 24px;
                    letter-spacing: 0.1em;
                    fill: hsl(var(--primary));
                }
                .subtitle-text {
                    font-family: 'Alegreya', serif;
                    font-size: 10px;
                    letter-spacing: 0.25em;
                    fill: hsl(var(--primary));
                }
                .icon-path {
                    fill: hsl(var(--primary));
                }
            `}
        </style>
        
        <g transform="translate(10, 0)">
            <path className="icon-path" d="M60.2,7.2C54.9,1.1,47.4-1.2,40-1.2c-7.9,0-15.7,2.5-21.2,7.7c-0.2,0.2-0.5,0.4-0.7,0.6c-4.9,5.5-7.8,12.7-7.8,20.5v22.2h9.4V29.9c0-6.9,2.5-13.3,6.8-17.9c4.2-4.6,9.9-7.2,16-7.2c5.8,0,11.2,2.3,15.3,6.4l0.3,0.3c4,4.2,6.4,9.8,6.4,15.9v22.2h9.4V29.9C70,20.1,66.5,12.3,60.2,7.2z M49.5,41.4h-19v-9.4h19V41.4z M47.5,38.4h-15v-3.4h15V38.4z M47.5,30h-15v-3.4h15V30z"/>
            <path className="icon-path" d="M12.9,59.9c-2.3-1.8-5-2.8-7.8-2.8c-8.8,0-16.1,7-16.1,16.2c0,3.4,1,6.5,2.7,9.1c-1.7-2.9-2.7-6.2-2.7-9.8c0-8.1,6.1-14.7,14.1-14.7c2.5,0,4.8,0.6,6.9,1.7C10,50.8,10,41.9,10,41.9s2.8,2,4.8,2.7c3.1,1.1,6.5,1.7,9.9,1.7c11.4,0,20.6-9.2,20.6-20.6c0-0.6,0-1.2-0.1-1.7C39.4,32.3,28.6,48.9,12.9,59.9z"/>
        </g>

        <text x="130" y="35" textAnchor="middle" className="ascher-text">ASCHER</text>
        <text x="130" y="55" textAnchor="middle" className="subtitle-text">INTERIOR DESIGN</text>
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
      <div className="container flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
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
