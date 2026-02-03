import {
  FloatingClouds,
  HeroSection,
  MusicPlayer,
  CountdownTimer,
  LocationCards,
  WeatherSection,
  Itinerary,
  PhotoGallery,
  GiftsSection,
  RSVPForm,
  Footer,
} from "@/components/baptism";

// Fotos de ejemplo (puedes cambiarlas por las reales)
const placeholderPhotos = [
  "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=600&h=600&fit=crop",
];

// Datos del Bautizo - Traducidos al Español
const baptismData = {
  babyName: "Sofía Grace", // Puedes poner solo Sofía si prefieres
  date: "Domingo, 15 de Marzo de 2026",
  targetDate: new Date("2026-03-15T11:00:00"),
  
  church: {
    name: "Catedral de Santa María",
    address: "Calle Catedral 123, Centro, Ciudad",
    time: "11:00 AM",
    mapsUrl: "https://maps.google.com",
  },
  
  reception: {
    name: "Jardín El Pabellón",
    address: "Av. Jardines 456, Ribera, Ciudad",
    time: "1:00 PM",
    mapsUrl: "https://maps.google.com",
  },
  
  weather: {
    condition: "sunny" as const,
    temperature: 22,
    temperatureUnit: "C" as const,
    description: "Soleado con algunas nubes",
    date: "15 de Marzo, 2026",
  },
  
  itinerary: [
    {
      time: "11:00 AM",
      title: "Ceremonia Religiosa",
      description: "La sagrada ceremonia en la Catedral de Santa María",
      icon: "ceremony" as const,
    },
    {
      time: "12:00 PM",
      title: "Sesión de Fotos",
      description: "Capturando momentos hermosos en familia",
      icon: "photos" as const,
    },
    {
      time: "1:00 PM",
      title: "Recepción y Comida",
      description: "Acompáñanos a celebrar en el Jardín El Pabellón",
      icon: "lunch" as const,
    },
    {
      time: "3:00 PM",
      title: "Pastel y Bendiciones",
      description: "Un momento especial con nuestro angelito",
      icon: "blessing" as const,
    },
  ],
  
  godparents: [
    { name: "Maria Elena Rodriguez", role: "Madrina" as const }, // Role cambiado a español manualmente si es necesario, o manejado en el componente
    { name: "James Michael Thompson", role: "Padrino" as const },
  ],
};

const BaptismInvite = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Nubes flotantes de fondo */}
      <FloatingClouds />
      
      {/* Reproductor de Música */}
      <MusicPlayer />
      
      {/* Sección Principal */}
      <HeroSection
        babyName={baptismData.babyName}
        date={baptismData.date}
      />
      
      {/* Cuenta Regresiva */}
      <CountdownTimer targetDate={baptismData.targetDate} />
      
      {/* Tarjetas de Ubicación */}
      <LocationCards
        church={baptismData.church}
        reception={baptismData.reception}
      />
      
      {/* Sección del Clima */}
      <WeatherSection weather={baptismData.weather} />
      
      {/* Itinerario */}
      <Itinerary events={baptismData.itinerary} />
      
      {/* Galería de Fotos */}
      <PhotoGallery photos={placeholderPhotos} />
      
      {/* Padrinos y Regalos */}
      <GiftsSection
        godparents={baptismData.godparents}
        message="Su presencia es el mejor regalo de todos. Sin embargo, si desean tener un detalle con Sofía, ella agradecería mucho juguetes didácticos o ropa."
      />
      
      {/* Formulario de Confirmación */}
      <RSVPForm />
      
      {/* Pie de página */}
      <Footer
        babyName={baptismData.babyName}
        date={baptismData.date}
      />
    </div>
  );
};

export default BaptismInvite;