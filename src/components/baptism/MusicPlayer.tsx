import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Music } from "lucide-react";

interface MusicPlayerProps {
  audioUrl?: string;
}

export const MusicPlayer = ({ audioUrl }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Ocultar tooltip después de 3 segundos
    const timer = setTimeout(() => setShowTooltip(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        // Audio autoplay was blocked
        console.log("Audio autoplay blocked");
      });
    }
    setIsPlaying(!isPlaying);
  };

  // Si no hay URL de audio, mostrar placeholder
  if (!audioUrl) {
    return (
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="relative">
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap"
              >
                <span className="bg-card text-muted-foreground text-sm px-3 py-2 rounded-lg shadow-lg">
                  🎵 Música lista
                </span>
              </motion.div>
            )}
          </AnimatePresence>
          
          <button
            className="w-14 h-14 rounded-full bg-card shadow-lg border border-border flex items-center justify-center text-silver hover:text-charcoal hover:shadow-xl transition-all duration-300"
            aria-label="Reproductor de música de prueba"
          >
            <Music className="w-6 h-6" />
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <audio ref={audioRef} src={audioUrl} loop />
      
      <div className="relative">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap"
            >
              <span className="bg-card text-muted-foreground text-sm px-3 py-2 rounded-lg shadow-lg">
                🎵 Toca para escuchar
              </span>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button
          onClick={togglePlay}
          className="w-14 h-14 rounded-full bg-card shadow-lg border border-border flex items-center justify-center text-silver hover:text-charcoal hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
        >
          {isPlaying ? (
            <Volume2 className="w-6 h-6" />
          ) : (
            <VolumeX className="w-6 h-6" />
          )}
        </motion.button>

        {/* Anillos de animación al reproducir */}
        {isPlaying && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-sky-deep"
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-sky-deep"
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            />
          </>
        )}
      </div>
    </motion.div>
  );
};

export default MusicPlayer;