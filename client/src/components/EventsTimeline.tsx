import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import type { Event } from "@shared/schema";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  participants?: number;
  icon: string;
  color: string;
  isUpcoming?: boolean;
  image?: string;
}

export default function EventsTimeline() {
  const { data: dbEvents, isLoading, error } = useQuery<Event[]>({
    queryKey: ['/api/events'],
  });

  // Function to convert database events to timeline format with appropriate icons and images
  const getEventIcon = (title: string, isOnline: boolean): string => {
    if (title.toLowerCase().includes('coding') || title.toLowerCase().includes('vibe')) return "🔮";
    if (title.toLowerCase().includes('roundtable') || isOnline) return "🎨";
    if (title.toLowerCase().includes('picnic')) return "🧺";
    if (title.toLowerCase().includes('meetup')) return "👥";
    return "🎯";
  };

  const getEventImage = (title: string): string => {
    if (title.toLowerCase().includes('coding') || title.toLowerCase().includes('vibe')) 
      return "/attached_assets/vibe coding_1753397105238.avif";
    if (title.toLowerCase().includes('roundtable')) 
      return "/attached_assets/Roundtable_1753397105237.avif";
    if (title.toLowerCase().includes('picnic')) 
      return "/attached_assets/design picnic_1753397105236.avif";
    return "/attached_assets/oucbuc _1753397105237.avif";
  };

  const getEventColor = (index: number): string => {
    const colors = ["bg-fouxy-primary", "bg-fouxy-secondary", "bg-fouxy-accent"];
    return colors[index % colors.length];
  };

  // Convert database events to timeline format
  const events: TimelineEvent[] = dbEvents ? dbEvents.map((event, index) => ({
    date: new Date(event.date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    title: event.title,
    description: event.description,
    participants: event.participants || 0,
    icon: getEventIcon(event.title, event.isOnline || false),
    color: getEventColor(index),
    isUpcoming: event.status === 'upcoming',
    image: getEventImage(event.title)
  })).reverse() : []; // Reverse to show latest events first

  if (isLoading) {
    return (
      <section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fouxy-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading events...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center">
            <p className="text-red-600">Error loading events. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }



  const handleLumaRedirect = () => {
    window.open("https://lu.ma/user/FouxySquad", "_blank");
  };

  const handleRegisterInterest = () => {
    // In a real implementation, this would handle event registration
    console.log("Register interest clicked");
  };

  return (
    <section id="events" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-comfortaa font-bold text-3xl text-black mb-6">
            Our Events
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              {event.image ? (
                <div className="relative overflow-hidden rounded-2xl aspect-square">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                        {event.date}
                      </span>
                      {event.isUpcoming && (
                        <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          Upcoming
                        </span>
                      )}
                    </div>
                    <h3 className="font-comfortaa font-bold text-lg text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {event.description}
                    </p>
                    {event.participants && (
                      <div className="mt-3">
                        <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                          {event.participants} participants
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-2xl p-8 text-center aspect-square flex flex-col justify-center">
                  <span className="text-4xl mb-3 block">{event.icon}</span>
                  <h3 className="font-comfortaa font-bold text-lg text-black mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {event.description}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
