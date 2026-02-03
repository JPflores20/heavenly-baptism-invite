import { motion } from "framer-motion";

interface DecorativeCloudsProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "divider";
  className?: string;
}

const Cloud = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <motion.svg
    viewBox="0 0 200 100"
    className={className}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, delay, ease: "easeOut" }}
  >
    <defs>
      <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--dove-white))" />
        <stop offset="100%" stopColor="hsl(var(--silver-light))" />
      </linearGradient>
    </defs>
    <ellipse cx="70" cy="60" rx="50" ry="30" fill="url(#cloudGradient)" />
    <ellipse cx="100" cy="50" rx="40" ry="25" fill="url(#cloudGradient)" />
    <ellipse cx="130" cy="55" rx="45" ry="28" fill="url(#cloudGradient)" />
    <ellipse cx="90" cy="45" rx="35" ry="22" fill="hsl(var(--dove-white))" />
    <ellipse cx="110" cy="42" rx="30" ry="20" fill="hsl(var(--dove-white))" />
  </motion.svg>
);

const SmallCloud = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <motion.svg
    viewBox="0 0 120 60"
    className={className}
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 0.8, x: 0 }}
    transition={{ duration: 1.5, delay, ease: "easeOut" }}
  >
    <ellipse cx="40" cy="35" rx="25" ry="15" fill="hsl(var(--silver-light))" fillOpacity="0.6" />
    <ellipse cx="60" cy="30" rx="30" ry="18" fill="hsl(var(--dove-white))" fillOpacity="0.8" />
    <ellipse cx="80" cy="32" rx="22" ry="14" fill="hsl(var(--silver-light))" fillOpacity="0.5" />
  </motion.svg>
);

export const DecorativeClouds = ({ position = "top-left", className = "" }: DecorativeCloudsProps) => {
  if (position === "divider") {
    return (
      <div className={`flex justify-center items-center py-8 ${className}`}>
        <SmallCloud className="w-24 h-12 -mr-4" delay={0} />
        <Cloud className="w-40 h-20" delay={0.2} />
        <SmallCloud className="w-24 h-12 -ml-4" delay={0.4} />
      </div>
    );
  }

  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0 scale-x-[-1]",
    "bottom-left": "bottom-0 left-0 scale-y-[-1]",
    "bottom-right": "bottom-0 right-0 scale-[-1]",
  };

  return (
    <div className={`absolute ${positionClasses[position]} pointer-events-none ${className}`}>
      <Cloud className="w-48 h-24 md:w-64 md:h-32" delay={0} />
      <SmallCloud className="w-32 h-16 absolute top-12 left-20" delay={0.3} />
    </div>
  );
};

export const FloatingClouds = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <motion.div
      className="absolute top-10 left-[5%]"
      animate={{ x: [0, 30, 0], y: [0, -10, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    >
      <SmallCloud className="w-32 h-16 opacity-40" />
    </motion.div>
    <motion.div
      className="absolute top-[20%] right-[10%]"
      animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
    >
      <SmallCloud className="w-40 h-20 opacity-30" />
    </motion.div>
    <motion.div
      className="absolute top-[40%] left-[15%]"
      animate={{ x: [0, 25, 0], y: [0, -8, 0] }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
    >
      <SmallCloud className="w-24 h-12 opacity-25" />
    </motion.div>
    <motion.div
      className="absolute bottom-[30%] right-[20%]"
      animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    >
      <SmallCloud className="w-36 h-18 opacity-35" />
    </motion.div>
  </div>
);

export default DecorativeClouds;
