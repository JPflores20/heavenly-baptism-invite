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

// Placeholder baby photos using unsplash
const placeholderPhotos = [
  "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=600&h=600&fit=crop",
];

// Placeholder data - replace with actual details
const baptismData = {
  babyName: "Sofia Grace",
  date: "Sunday, March 15, 2026",
  targetDate: new Date("2026-03-15T11:00:00"),
  
  church: {
    name: "St. Mary's Cathedral",
    address: "123 Cathedral Street, Downtown, City 12345",
    time: "11:00 AM",
    mapsUrl: "https://maps.google.com",
  },
  
  reception: {
    name: "The Garden Pavilion",
    address: "456 Garden Avenue, Riverside, City 12345",
    time: "1:00 PM",
    mapsUrl: "https://maps.google.com",
  },
  
  weather: {
    condition: "sunny" as const,
    temperature: 22,
    temperatureUnit: "C" as const,
    description: "Partly cloudy with sunshine",
    date: "March 15, 2026",
  },
  
  itinerary: [
    {
      time: "11:00 AM",
      title: "Holy Baptism Ceremony",
      description: "The sacred ceremony at St. Mary's Cathedral",
      icon: "ceremony" as const,
    },
    {
      time: "12:00 PM",
      title: "Photo Session",
      description: "Capture beautiful moments with family",
      icon: "photos" as const,
    },
    {
      time: "1:00 PM",
      title: "Celebration Lunch",
      description: "Join us for a joyful celebration at The Garden Pavilion",
      icon: "lunch" as const,
    },
    {
      time: "3:00 PM",
      title: "Cake & Blessings",
      description: "Special moment with our little angel",
      icon: "blessing" as const,
    },
  ],
  
  godparents: [
    { name: "Maria Elena Rodriguez", role: "Godmother" as const },
    { name: "James Michael Thompson", role: "Godfather" as const },
  ],
};

const BaptismInvite = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Floating background clouds */}
      <FloatingClouds />
      
      {/* Music Player */}
      <MusicPlayer />
      
      {/* Hero Section */}
      <HeroSection
        babyName={baptismData.babyName}
        date={baptismData.date}
      />
      
      {/* Countdown Timer */}
      <CountdownTimer targetDate={baptismData.targetDate} />
      
      {/* Location Cards */}
      <LocationCards
        church={baptismData.church}
        reception={baptismData.reception}
      />
      
      {/* Weather Section */}
      <WeatherSection weather={baptismData.weather} />
      
      {/* Itinerary Timeline */}
      <Itinerary events={baptismData.itinerary} />
      
      {/* Photo Gallery */}
      <PhotoGallery photos={placeholderPhotos} />
      
      {/* Godparents & Gifts */}
      <GiftsSection
        godparents={baptismData.godparents}
        message="Your presence is the greatest gift of all. However, if you wish to bless Sofia with a gift, she would love books, toys, or contributions to her college fund."
      />
      
      {/* RSVP Form */}
      <RSVPForm />
      
      {/* Footer */}
      <Footer
        babyName={baptismData.babyName}
        date={baptismData.date}
      />
    </div>
  );
};

export default BaptismInvite;
