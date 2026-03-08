import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  BarChart3,
  Globe,
  Smartphone,
  Coffee,
} from "lucide-react";

const features = [
  {
    icon: <Zap className="text-amber-400" />,
    title: "Lightning Fast",
    description:
      "Our redirection engine is optimized for speed, ensuring your links load instantly across the globe.",
  },
  {
    icon: <Shield className="text-emerald-400" />,
    title: "Secure & Reliable",
    description:
      "Built with enterprise-grade security to protect your links and your visitors' data.",
  },
  {
    icon: <BarChart3 className="text-blue-400" />,
    title: "Live Analytics",
    description:
      "Track every click in real-time. Understand your audience and optimize your campaigns.",
  },
  {
    icon: <Globe className="text-indigo-400" />,
    title: "Global Reach",
    description:
      "Connect with visitors from everywhere. Our infrastructure handles millions of redirects.",
  },
  {
    icon: <Smartphone className="text-rose-400" />,
    title: "Mobile Optimized",
    description:
      "Every link works perfectly on any device, from desktop to the latest smartphones.",
  },
  {
    icon: <Coffee className="text-orange-400" />,
    title: "Simple Workflow",
    description:
      "No complex dashboards. Just paste, shorten, and share. It's that easy.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-glass/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight">
            Everything you need
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Packed with features to help you manage and track your links like a
            professional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-glass border border-glass-border hover:border-brand-primary/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center mb-6 border border-glass-border group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
