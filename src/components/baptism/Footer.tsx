import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import DecorativeClouds from "./DecorativeClouds";

interface FooterProps {
  babyName: string;
  date: string;
}

export const Footer = ({ babyName, date }: FooterProps) => {
  return (
    <footer className="relative py-16 px-6 bg-gradient-to-t from-primary/30 to-background overflow-hidden">
      <DecorativeClouds position="divider" className="mb-8" />
      
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">
          {babyName}
        </h2>
        <p className="text-silver mb-6">{date}</p>
        
        <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
          <span>Hecho con</span>
          <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
          <span>para nuestra pequeña bendición</span>
        </div>
      </motion.div>

      {/* Background decorations */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;