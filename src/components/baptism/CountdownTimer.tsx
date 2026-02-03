import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = targetDate.getTime() - new Date().getTime();
  
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const TimeUnit = ({ value, label, index }: { value: number; label: string; index: number }) => (
  <motion.div
    className="flex flex-col items-center"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <div className="relative">
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-card border border-border shadow-lg flex items-center justify-center overflow-hidden">
        <motion.span
          key={value}
          className="text-3xl md:text-4xl font-light text-charcoal"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {value.toString().padStart(2, "0")}
        </motion.span>
      </div>
      {/* Decorative shine effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
    </div>
    <span className="mt-3 text-xs md:text-sm text-silver tracking-widest uppercase">
      {label}
    </span>
  </motion.div>
);

const Separator = () => (
  <div className="flex flex-col justify-center gap-2 px-2">
    <div className="w-1.5 h-1.5 rounded-full bg-silver" />
    <div className="w-1.5 h-1.5 rounded-full bg-silver" />
  </div>
);

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: "Días" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Minutos" },
    { value: timeLeft.seconds, label: "Segundos" },
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-primary/20 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-serif text-charcoal mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Cuenta Regresiva para el Gran Día
        </motion.h2>
        
        <motion.p
          className="text-muted-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Acompáñanos a celebrar esta bendecida ocasión
        </motion.p>

        <div className="flex items-center justify-center flex-wrap gap-2 md:gap-0">
          {timeUnits.map((unit, index) => (
            <div key={unit.label} className="flex items-center">
              <TimeUnit value={unit.value} label={unit.label} index={index} />
              {index < timeUnits.length - 1 && (
                <div className="hidden md:block">
                  <Separator />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;