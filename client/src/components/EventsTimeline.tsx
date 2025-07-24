import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
  const events: TimelineEvent[] = [
    {
      date: "July 12, 2025",
      title: "London Vibe Coding × Design: From 0 to 1",
      description: "Build with AI, No Coding Experience needed - at Dyson School",
      participants: 30,
      icon: "🔮",
      color: "bg-fouxy-secondary",
      image: "/attached_assets/vibe coding_1753397105238.avif"
    },
    {
      date: "June 28, 2025",
      title: "London UX/UI RoundTable Online",
      description: "Interactive online discussion on design methodologies and trends",
      participants: 25,
      icon: "🎨",
      color: "bg-fouxy-accent",
      image: "/attached_assets/Roundtable_1753397105237.avif"
    },
    {
      date: "June 14, 2025",
      title: "London UX/UI Designer Picnic - Fourth Edition",
      description: "Outdoor creative session at The Hub",
      participants: 35,
      icon: "🌳",
      color: "bg-fouxy-secondary",
      image: "/attached_assets/design picnic_1753397105236.avif"
    },
    {
      date: "May 18, 2025",
      title: "London UX/UI Designer Picnic - Third Edition",
      description: "Parliament Hill Viewpoint picnic meetup",
      participants: 28,
      icon: "🏞️",
      color: "bg-fouxy-primary",
      image: "/attached_assets/oucbuc _1753397105237.avif"
    },
    {
      date: "Mar 29, 2025",
      title: "London UX/UI Designers - Online Mini Social",
      description: "Virtual networking event for London-based designers",
      participants: 15,
      icon: "💻",
      color: "bg-fouxy-primary",
      image: "/attached_assets/ChatGPT Image May 1, 2025, 12_57_38 AM 1_1753397526191.png"
    }
  ];

  const handleLumaRedirect = () => {
    window.open("https://lu.ma/user/FouxySquad", "_blank");
  };

  const handleRegisterInterest = () => {
    // In a real implementation, this would handle event registration
    console.log("Register interest clicked");
  };

  return (
    <section id="events" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
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
