import { motion } from "framer-motion";
import { MapPin, ExternalLink, Church, Cake } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface LocationInfo {
  name: string;
  address: string;
  time?: string;
  mapsUrl?: string;
}

interface LocationCardsProps {
  church: LocationInfo;
  reception: LocationInfo;
}

const LocationCard = ({ 
  location, 
  icon: Icon, 
  title, 
  index 
}: { 
  location: LocationInfo; 
  icon: typeof Church; 
  title: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="w-full md:w-1/2 px-4 mb-8 md:mb-0"
  >
    <Card className="h-full bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="text-center pb-2">
        <div className="mx-auto w-16 h-16 rounded-full bg-primary/50 flex items-center justify-center mb-4">
          <Icon className="w-8 h-8 text-charcoal" />
        </div>
        <CardTitle className="text-xl font-serif text-charcoal">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <h3 className="font-medium text-charcoal mb-2">{location.name}</h3>
        
        <div className="flex items-start justify-center gap-2 text-muted-foreground mb-4">
          <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-silver" />
          <p className="text-sm">{location.address}</p>
        </div>
        
        {location.time && (
          <p className="text-silver font-medium mb-4">{location.time}</p>
        )}
        
        {location.mapsUrl && (
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-silver text-silver hover:bg-primary hover:text-charcoal hover:border-primary"
            asChild
          >
            <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer">
              Ver en Mapa
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  </motion.div>
);

export const LocationCards = ({ church, reception }: LocationCardsProps) => {
  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-background to-primary/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-serif text-charcoal mb-4">
            Ubicación y Detalles
          </h2>
          <p className="text-muted-foreground">
            Será un honor contar con tu compañía
          </p>
        </motion.div>

        <div className="flex flex-wrap -mx-4">
          <LocationCard 
            location={church} 
            icon={Church} 
            title="Ceremonia" 
            index={0} 
          />
          <LocationCard 
            location={reception} 
            icon={Cake} 
            title="Celebración" 
            index={1} 
          />
        </div>
      </div>
    </section>
  );
};

export default LocationCards;