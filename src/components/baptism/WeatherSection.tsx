import { motion } from "framer-motion";
import { Sun, Cloud, CloudRain, CloudSnow, Wind, Thermometer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface WeatherData {
  condition: "sunny" | "cloudy" | "rainy" | "snowy" | "windy";
  temperature: number;
  temperatureUnit?: "C" | "F";
  description: string;
  date: string;
}

interface WeatherSectionProps {
  weather: WeatherData;
}

const weatherIcons = {
  sunny: Sun,
  cloudy: Cloud,
  rainy: CloudRain,
  snowy: CloudSnow,
  windy: Wind,
};

const weatherGradients = {
  sunny: "from-amber-100/50 to-sky-100/50",
  cloudy: "from-slate-100/50 to-sky-100/50",
  rainy: "from-slate-200/50 to-blue-100/50",
  snowy: "from-slate-50/50 to-blue-50/50",
  windy: "from-sky-100/50 to-teal-100/50",
};

export const WeatherSection = ({ weather }: WeatherSectionProps) => {
  const WeatherIcon = weatherIcons[weather.condition];

  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-primary/20 to-background">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-serif text-charcoal mb-4">
            Pronóstico del Clima
          </h2>
          <p className="text-muted-foreground">
            Para que prepares tu vestimenta
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className={`bg-gradient-to-br ${weatherGradients[weather.condition]} border-border shadow-lg`}>
            <CardContent className="py-8 px-6">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                {/* Weather Icon */}
                <motion.div
                  className="w-24 h-24 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <WeatherIcon className="w-12 h-12 text-charcoal" />
                </motion.div>

                {/* Weather Info */}
                <div className="text-center md:text-left">
                  <p className="text-sm text-silver mb-1">{weather.date}</p>
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                    <Thermometer className="w-5 h-5 text-silver" />
                    <span className="text-4xl font-light text-charcoal">
                      {weather.temperature}°{weather.temperatureUnit || "C"}
                    </span>
                  </div>
                  <p className="text-muted-foreground capitalize">
                    {weather.description}
                  </p>
                </div>
              </div>

              {/* Suggestion */}
              <div className="mt-6 pt-6 border-t border-border/50 text-center">
                <p className="text-sm text-muted-foreground">
                  {weather.condition === "sunny" && "☀️ ¡No olvides tus lentes de sol y bloqueador!"}
                  {weather.condition === "cloudy" && "⛅ Una capa ligera de ropa podría ser cómoda."}
                  {weather.condition === "rainy" && "🌧️ Considera traer un paraguas por si acaso."}
                  {weather.condition === "snowy" && "❄️ Abrígate bien y usa calzado cómodo."}
                  {weather.condition === "windy" && "💨 Se recomienda una prenda resistente al viento."}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default WeatherSection;