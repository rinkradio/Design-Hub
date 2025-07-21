import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Logo = () => (
  <Link href="/" className="flex items-center gap-3">
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4H20V20H4V4Z" stroke="hsl(var(--accent))" strokeWidth="4" strokeLinejoin="round"/>
      <path d="M28 4H44V20H28V4Z" fill="hsl(var(--secondary))" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinejoin="round"/>
      <path d="M4 28H20V44H4V28Z" fill="hsl(var(--secondary))" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinejoin="round"/>
      <path d="M28 28H44V44H28V28Z" stroke="hsl(var(--accent))" strokeWidth="4" strokeLinejoin="round"/>
    </svg>
    <span className="font-headline text-xl font-bold tracking-wider text-primary">ASCHER</span>
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
        <Logo />
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
          <Button asChild className='hidden sm:flex'>
            <Link href="#contact">Book Now</Link>
          </Button>
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
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <Logo />
                </div>
                <nav className="grid gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto">
                   <Button asChild className="w-full">
                      <Link href="#contact">Book an Appointment</Link>
                   </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
