import { motion } from "framer-motion";
import { Link2 } from "lucide-react";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background/50 border-b border-border/50"
    >
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-xl bg-brand-primary/20 text-brand-primary">
          <Link2 size={24} />
        </div>
        <span className="text-xl font-bold tracking-tight">Shorten.it</span>
      </div>

      <div className="flex items-center gap-6">
        <a
          href="#features"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Features
        </a>
        <a
          href="#stats"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Recent
        </a>
        <button className="px-4 py-2 text-sm font-bold rounded-lg bg-brand-primary text-white hover:opacity-90 transition-all shadow-lg shadow-brand-primary/20">
          Get Started
        </button>
      </div>
    </motion.nav>
  );
}
