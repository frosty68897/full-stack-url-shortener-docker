import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { RecentLinks } from "./components/RecentLinks";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground selection:bg-brand-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <RecentLinks />
      </main>
      <Footer />
      <Toaster position="bottom-right" theme="dark" closeButton />
    </div>
  );
}

export default App;
