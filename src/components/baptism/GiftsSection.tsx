import { motion } from "framer-motion";
import { Heart, Gift, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Godparent {
  name: string;
  role: "Madrina" | "Padrino" | "Godmother" | "Godfather";
}

interface GiftsSectionProps {
  godparents: Godparent[];
  message?: string;
  registryUrl?: string;
  registryName?: string;
}

const DoveDecor = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-silver">
    <path d="M12 3C10.73 3 9.6 3.8 9.18 5H6C4.34 5 3 6.34 3 8C3 9.66 4.34 11 6 11H7.82C8.24 12.2 9.37 13 10.64 13H11V15H6C4.34 15 3 16.34 3 18C3 19.66 4.34 21 6 21H18C19.66 21 21 19.66 21 18C21 16.34 19.66 15 18 15H13V13H13.36C14.63 13 15.76 12.2 16.18 11H18C19.66 11 21 9.66 21 8C21 6.34 19.66 5 18 5H14.82C14.4 3.8 13.27 3 12 3M12 5C12.55 5 13 5.45 13 6S12.55 7 12 7 11 6.55 11 6 11.45 5 12 5M6 7H9C9 7.55 9.45 8 10 8H14C14.55 8 15 7.55 15 7H18C18.55 7 19 7.45 19 8S18.55 9 18 9H15C15 9.55 14.55 10 14 10H10C9.45 10 9 9.55 9 9H6C5.45 9 5 8.55 5 8S5.45 7 6 7M6 17H11V19H6C5.45 19 5 18.55 5 18S5.45 17 6 17M13 17H18C18.55 17 19 17.45 19 18S18.55 19 18 19H13V17Z" />
  </svg>
);

export const GiftsSection = ({ 
  godparents, 
  message = "Su presencia es el mejor regalo. Sin embargo, si desean tener un detalle con nuestro pequeño, aquí hay algunas ideas.",
  registryUrl,
  registryName = "Mesa de Regalos"
}: GiftsSectionProps) => {
  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-background to-primary/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-serif text-charcoal mb-4">
            Padrinos y Regalos
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <DoveDecor />
            <span className="text-silver">✦</span>
            <DoveDecor />
          </div>
        </motion.div>

        {/* Godparents */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {godparents.map((godparent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="bg-card border-border shadow-md hover:shadow-lg transition-shadow text-center py-8">
                <CardContent>
                  <div className="w-16 h-16 rounded-full bg-primary/50 mx-auto mb-4 flex items-center justify-center">
                    <Heart className="w-7 h-7 text-charcoal" />
                  </div>
                  <p className="text-sm text-silver uppercase tracking-widest mb-2">
                    {godparent.role}
                  </p>
                  <h3 className="text-xl font-serif text-charcoal">
                    {godparent.name}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Gift Message */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-card rounded-2xl p-8 border border-border shadow-md max-w-2xl mx-auto">
            <Gift className="w-10 h-10 text-silver mx-auto mb-4" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              {message}
            </p>
            
            {registryUrl && (
              <Button
                variant="outline"
                className="rounded-full border-silver text-silver hover:bg-primary hover:text-charcoal hover:border-primary"
                asChild
              >
                <a href={registryUrl} target="_blank" rel="noopener noreferrer">
                  {registryName}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftsSection;