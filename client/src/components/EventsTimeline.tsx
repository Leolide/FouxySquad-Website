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
      date: "July 2025",
      title: "Vibe Coding for Designers",
      description: "Upcoming: Bridging design and development skills",
      icon: "🔮",
      color: "bg-fouxy-primary",
      isUpcoming: true,
      image: "/attached_assets/Screenshot 2025-07-24 at 23.16.12_1753395373670.png"
    },
    {
      date: "June 2025",
      title: "Two Amazing Meetups",
      description: "100 participants total across our biggest events yet!",
      participants: 100,
      icon: "🎉",
      color: "bg-fouxy-accent",
      image: "/attached_assets/Screenshot 2025-07-24 at 23.15.54_1753395355549.png"
    },
    {
      date: "May 2025",
      title: "First Online Meetup",
      description: "30 participants connected virtually from around the world",
      participants: 30,
      icon: "💻",
      color: "bg-fouxy-secondary",
      image: "/attached_assets/Screenshot 2025-07-24 at 23.13.46_1753395227760.png"
    },
    {
      date: "May 2025",
      title: "Design Picnic",
      description: "40 participants enjoyed outdoor creativity and networking",
      participants: 40,
      icon: "🌳",
      color: "bg-fouxy-primary",
      image: "/attached_assets/Screenshot 2025-07-24 at 23.10.46_1753395048052.png"
    },
    {
      date: "Apr 2025",
      title: "Second Meetup",
      description: "Growing to 30 participants with amazing energy",
      participants: 30,
      icon: "📈",
      color: "bg-fouxy-accent",
      image: "/attached_assets/Screenshot 2025-07-24 at 23.10.41_1753395042464.png"
    },
    {
      date: "Mar 2025",
      title: "First Meetup",
      description: "20 participants joined our inaugural event",
      participants: 20,
      icon: "👥",
      color: "bg-fouxy-secondary",
      image: "/attached_assets/Screenshot 2025-07-24 at 23.10.36_1753395037598.png"
    },
    {
      date: "Feb 2025",
      title: "Founded in London",
      description: "The beginning of our amazing design community journey",
      icon: "🚀",
      color: "bg-fouxy-primary",
      image: "/attached_assets/Weixin Image_20250712202539_2095_1753394670431.jpg"
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
            Our Journey
          </h2>
        </motion.div>

        <div className="space-y-20">
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
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {event.date}
                      </span>
                      {event.isUpcoming && (
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          Upcoming
                        </span>
                      )}
                    </div>
                    <h3 className="font-comfortaa font-bold text-2xl text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-white/90 text-lg">
                      {event.description}
                    </p>
                    {event.participants && (
                      <div className="mt-4">
                        <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                          {event.participants} participants
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-2xl p-12 text-center">
                  <span className="text-6xl mb-4 block">{event.icon}</span>
                  <h3 className="font-comfortaa font-bold text-2xl text-black mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {event.description}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-white rounded-2xl shadow-lg card-hover max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="font-comfortaa font-bold text-2xl text-black mb-4">
                Event Management via Luma
              </h3>
              <p className="text-gray-700 mb-6">
                All our events are seamlessly managed through Luma for easy
                registration, updates, and community interaction.
              </p>
              <Button
                onClick={handleLumaRedirect}
                className="bg-fouxy-primary text-white px-8 py-3 rounded-full hover:bg-fouxy-secondary transition-colors font-comfortaa font-medium"
              >
                View Events on Luma
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
