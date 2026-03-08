import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link2, Sparkles, Copy, Check, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { toast } from "sonner";
import axios from "axios";

const API_BASE =
  import.meta.env.VITE_API_BASE + "/api/url" || "http://localhost:4000/api/url";

export function Hero() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [shortened, setShortened] = useState<{
    shortUrl: string;
    shortCode: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const handleShorten = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    try {
      const { data } = await axios.post(`${API_BASE}/shorten`, { url });
      setShortened(data);
      toast.success("URL shortened successfully!");
    } catch (error) {
      toast.error("Failed to shorten URL. Is the server running?");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (shortened) {
      navigator.clipboard.writeText(shortened.shortUrl);
      setCopied(true);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-secondary/20 rounded-full blur-[120px] -z-10 animate-pulse delay-700" />

      <div className="max-w-4xl w-full text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-wider">
            <Sparkles size={14} />
            The Ultimate URL Shortener
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight">
            Shorten your links, <br />
            <span className="bg-linear-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Expand your reach.
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create fast, secure, and trackable short links in seconds. Perfect
            for social media, marketing, and everything in between.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-2 backdrop-blur-xl bg-card border-glass-border shadow-2xl overflow-hidden">
            <form
              onSubmit={handleShorten}
              className="flex flex-col md:flex-row gap-2"
            >
              <div className="relative flex-1 group">
                <Link2
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-brand-primary transition-colors"
                  size={20}
                />
                <Input
                  placeholder="Paste your long URL here..."
                  className="pl-12 h-14 bg-transparent border-none focus-visible:ring-0 text-lg"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  disabled={loading}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="h-14 px-8 text-lg font-bold bg-brand-primary hover:opacity-90 shadow-lg shadow-brand-primary/30"
                disabled={loading || !url}
              >
                {loading ? "Shortening..." : "Shorten URL"}
              </Button>
            </form>
          </Card>
        </motion.div>

        <AnimatePresence>
          {shortened && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mt-8"
            >
              <Card className="p-4 bg-glass border-glass-border inline-flex items-center gap-4 flex-wrap justify-center">
                <div className="flex flex-col items-start px-2">
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
                    Your Short URL
                  </span>
                  <span className="text-xl font-bold text-brand-secondary">
                    {shortened.shortUrl}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="secondary"
                    onClick={copyToClipboard}
                    className="flex gap-2"
                  >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                    {copied ? "Copied" : "Copy"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open(shortened.shortUrl, "_blank")}
                  >
                    <span className="flex gap-2">
                      Visit <ArrowRight size={18} />
                    </span>
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
