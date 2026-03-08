import { Github, Twitter, Linkedin, Link2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border/50 bg-background/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-brand-primary/20 text-brand-primary">
              <Link2 size={20} />
            </div>
            <span className="text-lg font-bold tracking-tight">Shorten.it</span>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
            The world's most advanced URL shortening platform. Built for speed,
            security, and analytics.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-muted hover:bg-brand-primary/10 hover:text-brand-primary transition-all"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-muted hover:bg-brand-primary/10 hover:text-brand-primary transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-muted hover:bg-brand-primary/10 hover:text-brand-primary transition-all"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Shorten.it. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
