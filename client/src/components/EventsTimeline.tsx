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

  const getEventImage = (title: string, imageUrl?: string | null): string => {
    // Use database imageUrl if available, otherwise fall back to local assets
    if (imageUrl) return imageUrl;
    
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
    image: getEventImage(event.title, event.imageUrl)
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

  const handleEventClick = (event: TimelineEvent, dbEvent: Event) => {
    // If event has a Luma URL, open it
    if (dbEvent.lumaUrl) {
      window.open(dbEvent.lumaUrl, "_blank");
    } else if (event.isUpcoming) {
      // If it's upcoming but no specific URL, go to main Luma page
      window.open("https://lu.ma/user/FouxySquad", "_blank");
    } else {
      // For completed events without Luma URL, could show event details or do nothing
      console.log("Event clicked:", event.title);
    }
  };

  return (
    <section id="events" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-semibold text-4xl sm:text-5xl text-fouxy-text mb-6 tracking-tight">
            Events
          </h2>
          <p className="text-xl text-fouxy-text-secondary max-w-2xl mx-auto font-light">
            Bringing the design community together through meaningful gatherings
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => {
            const dbEvent = dbEvents?.[dbEvents.length - 1 - index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => dbEvent && handleEventClick(event, dbEvent)}
                data-testid={`event-card-${index}`}
              >
                {event.image ? (
                  <div className="relative overflow-hidden rounded-2xl aspect-square transition-all duration-200">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-white/90 text-xs font-medium">
                          {event.date}
                        </span>
                        {event.isUpcoming && (
                          <span className="bg-fouxy-secondary text-white px-2 py-0.5 rounded-full text-xs font-medium">
                            Upcoming
                          </span>
                        )}
                      </div>
                      <h3 className="font-medium text-base text-white mb-1 line-clamp-2">
                        {event.title}
                      </h3>
                      {event.participants && (
                        <span className="text-white/80 text-xs">
                          {event.participants} participants
                        </span>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="bg-fouxy-neutral border border-gray-200/60 rounded-2xl p-8 text-center aspect-square flex flex-col justify-center transition-all duration-200 hover:border-gray-300">
                    <h3 className="font-medium text-base text-fouxy-text mb-2">
                      {event.title}
                    </h3>
                    <p className="text-xs text-fouxy-text-secondary">
                      {event.date}
                    </p>
                  </div>
                )}
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
