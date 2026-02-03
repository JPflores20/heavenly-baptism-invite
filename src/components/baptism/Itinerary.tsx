import { motion } from "framer-motion";
import { Church, Camera, UtensilsCrossed, Music, Baby, Star } from "lucide-react";

interface ItineraryEvent {
  time: string;
  title: string;
  description?: string;
  icon?: "ceremony" | "photos" | "lunch" | "music" | "blessing" | "celebration";
}

interface ItineraryProps {
  events: ItineraryEvent[];
}

const iconMap = {
  ceremony: Church,
  photos: Camera,
  lunch: UtensilsCrossed,
  music: Music,
  blessing: Baby,
  celebration: Star,
};

const TimelineEvent = ({ 
  event, 
  index, 
  isLast 
}: { 
  event: ItineraryEvent; 
  index: number; 
  isLast: boolean;
}) => {
  const Icon = iconMap[event.icon || "ceremony"];

  return (
    <motion.div
      className="relative flex gap-6"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-card border-2 border-sky-deep shadow-md flex items-center justify-center z-10">
          <Icon className="w-5 h-5 text-charcoal" />
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-gradient-to-b from-sky-deep to-silver-light min-h-[60px]" />
        )}
      </div>

      {/* Content */}
      <div className="pb-10 flex-1">
        <span className="text-sm text-silver font-medium tracking-wider">
          {event.time}
        </span>
        <h3 className="text-lg font-serif text-charcoal mt-1">
          {event.title}
        </h3>
        {event.description && (
          <p className="text-muted-foreground text-sm mt-1">
            {event.description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export const Itinerary = ({ events }: ItineraryProps) => {
  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-background to-primary/20">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-serif text-charcoal mb-4">
            Itinerario del Día
          </h2>
          <p className="text-muted-foreground">
            Los momentos especiales de nuestra celebración
          </p>
        </motion.div>

        <div className="relative">
          {/* Cloud decorations */}
          <motion.div
            className="absolute -left-20 top-0 w-16 h-8 bg-gradient-to-r from-transparent via-silver-light/30 to-transparent rounded-full blur-sm"
            animate={{ x: [0, 10, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-16 top-1/3 w-20 h-10 bg-gradient-to-r from-transparent via-silver-light/20 to-transparent rounded-full blur-sm"
            animate={{ x: [0, -10, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          {events.map((event, index) => (
            <TimelineEvent
              key={index}
              event={event}
              index={index}
              isLast={index === events.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Itinerary;