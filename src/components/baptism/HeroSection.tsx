import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import DecorativeClouds from "./DecorativeClouds";

interface HeroSectionProps {
  babyName: string;
  date: string;
  welcomeMessage?: string;
}

export const HeroSection = ({ 
  babyName, 
  date, 
  welcomeMessage = "Estás cordialmente invitado a celebrar el Bautizo de" 
}: HeroSectionProps) => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-sky-light via-background to-primary/30">
      {/* Decorative Clouds */}
      <DecorativeClouds position="top-left" />
      <DecorativeClouds position="top-right" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          className="text-silver text-sm md:text-base tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Mi Bautizo
        </motion.p>

        <motion.p
          className="text-muted-foreground text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {welcomeMessage}
        </motion.p>

        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-charcoal mb-6 tracking-wide"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          {babyName}
        </motion.h1>

        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <span className="w-16 h-px bg-silver" />
          <DoveIcon className="w-8 h-8 text-silver" />
          <span className="w-16 h-px bg-silver" />
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-charcoal font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {date}
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-silver hover:text-charcoal transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        aria-label="Desplazarse al contenido"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>

      {/* Bottom clouds */}
      <DecorativeClouds position="bottom-left" className="opacity-60" />
      <DecorativeClouds position="bottom-right" className="opacity-60" />
    </section>
  );
};

const DoveIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 3C10.73 3 9.6 3.8 9.18 5H6C4.34 5 3 6.34 3 8C3 9.66 4.34 11 6 11H7.82C8.24 12.2 9.37 13 10.64 13H11V15H6C4.34 15 3 16.34 3 18C3 19.66 4.34 21 6 21H18C19.66 21 21 19.66 21 18C21 16.34 19.66 15 18 15H13V13H13.36C14.63 13 15.76 12.2 16.18 11H18C19.66 11 21 9.66 21 8C21 6.34 19.66 5 18 5H14.82C14.4 3.8 13.27 3 12 3M12 5C12.55 5 13 5.45 13 6S12.55 7 12 7 11 6.55 11 6 11.45 5 12 5M6 7H9C9 7.55 9.45 8 10 8H14C14.55 8 15 7.55 15 7H18C18.55 7 19 7.45 19 8S18.55 9 18 9H15C15 9.55 14.55 10 14 10H10C9.45 10 9 9.55 9 9H6C5.45 9 5 8.55 5 8S5.45 7 6 7M6 17H11V19H6C5.45 19 5 18.55 5 18S5.45 17 6 17M13 17H18C18.55 17 19 17.45 19 18S18.55 19 18 19H13V17Z" />
  </svg>
);

export default HeroSection;