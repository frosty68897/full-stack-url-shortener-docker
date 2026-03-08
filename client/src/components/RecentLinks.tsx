import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Trash2,
  BarChart2,
  Calendar,
  Link as LinkIcon,
  AlertCircle,
} from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { toast } from "sonner";
import axios from "axios";

const API_BASE =
  import.meta.env.VITE_API_BASE + "/api/url" || "http://localhost:4000/api/url";

interface Link {
  shortCode: string;
  originalUrl: string;
  clicks: number;
  createdAt: string;
}

export function RecentLinks() {
  const [links, setLinks] = useState<Link[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLinks = async () => {
    try {
      const { data } = await axios.get(`${API_BASE}/links`);
      setLinks(data);
    } catch {
      console.error("Failed to fetch links");
    } finally {
      setLoading(false);
    }
  };

  const deleteLink = async (shortCode: string) => {
    try {
      await axios.delete(`${API_BASE}/${shortCode}`);
      setLinks((prev) => prev.filter((l) => l.shortCode !== shortCode));
      toast.success("Link deleted successfully");
    } catch {
      toast.error("Failed to delete link");
    }
  };

  useEffect(() => {
    fetchLinks();
    // Poll for updates every 10 seconds or use a refresh button
    const interval = setInterval(fetchLinks, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading && links.length === 0) {
    return (
      <div className="flex justify-center py-20">
        <div className="w-8 h-8 border-4 border-brand-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <section id="stats" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="space-y-2 mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Recent Activity</h2>
        <p className="text-muted-foreground">
          Keep track of your latest links and their performance.
        </p>
      </div>

      <div className="grid gap-4">
        <AnimatePresence mode="popLayout">
          {links.length > 0 ? (
            links.map((link, index) => (
              <motion.div
                key={link.shortCode}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-4 bg-glass border-glass-border hover:bg-white/5 transition-all group overflow-hidden relative">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className="p-3 rounded-lg bg-brand-primary/10 text-brand-primary shrink-0">
                        <LinkIcon size={20} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-lg text-brand-secondary truncate">
                            {API_BASE}/{link.shortCode}
                          </span>
                          <Badge
                            variant="outline"
                            className="text-[10px] uppercase tracking-wider bg-brand-primary/5 border-brand-primary/20 text-brand-primary"
                          >
                            Active
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground truncate max-w-md">
                          {link.originalUrl}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 self-end md:self-auto">
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest flex items-center gap-1">
                          <BarChart2 size={10} /> Clicks
                        </span>
                        <span className="text-xl font-black text-foreground">
                          {link.clicks || 0}
                        </span>
                      </div>

                      <div className="flex flex-col items-end">
                        <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest flex items-center gap-1">
                          <Calendar size={10} /> Created
                        </span>
                        <span className="text-sm font-medium">
                          {new Date(link.createdAt).toLocaleDateString()}
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:text-destructive transition-colors"
                          onClick={() => deleteLink(link.shortCode)}
                        >
                          <Trash2 size={18} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            window.open(
                              `${API_BASE}/${link.shortCode}`,
                              "_blank",
                            )
                          }
                        >
                          <ExternalLink size={18} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center space-y-4"
            >
              <div className="p-4 rounded-full bg-muted/20">
                <AlertCircle size={40} className="text-muted-foreground" />
              </div>
              <p className="text-muted-foreground text-lg">
                No links generated yet. Start by shortening one!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
