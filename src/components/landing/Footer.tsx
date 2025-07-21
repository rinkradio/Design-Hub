import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full border-t border-border/40 bg-background">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 py-6 text-sm md:flex-row">
        <p className="text-foreground/60">
          © {new Date().getFullYear()} Ascher Designs. All Rights Reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-foreground/60 transition-colors hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="#" className="text-foreground/60 transition-colors hover:text-foreground">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
