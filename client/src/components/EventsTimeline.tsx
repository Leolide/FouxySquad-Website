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
    <section id="events" className="py-20 bg-gradient-to-b from-fouxy-bg to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-comfortaa font-bold text-4xl text-black mb-4">
            Our Journey & Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From our humble beginnings to exciting community events, follow our growth story through memorable moments
          </p>
        </motion.div>

        <div className="grid gap-8 md:gap-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex-col`}
            >
              {/* Event Image */}
              <div className="lg:w-1/2 w-full">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                  {event.image ? (
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-80 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                      <span className="text-6xl">{event.icon}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`${event.color} text-white px-4 py-2 rounded-full text-sm font-bold`}>
                      {event.date}
                    </span>
                  </div>
                  {event.isUpcoming && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-white text-orange-600 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        Upcoming
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Event Content */}
              <div className="lg:w-1/2 w-full">
                <Card className={`${event.isUpcoming ? 'ring-2 ring-orange-500 ring-opacity-30' : ''} bg-white rounded-3xl shadow-xl border-0 hover:shadow-2xl transition-all duration-300`}>
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 ${event.color} rounded-2xl flex items-center justify-center`}>
                        <span className="text-white text-xl">{event.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-comfortaa font-bold text-2xl text-black">
                          {event.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    
                    {event.participants && (
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center bg-orange-50 px-4 py-2 rounded-full">
                          <span className="text-orange-600 font-bold text-lg">
                            {event.participants}
                          </span>
                          <span className="text-gray-600 ml-2">participants</span>
                        </div>
                        <div className="text-gray-400">•</div>
                        <div className="text-gray-600">
                          Community Growth: +{Math.round(event.participants * 0.3)} new members
                        </div>
                      </div>
                    )}

                    {event.isUpcoming && (
                      <div className="mt-6">
                        <Button
                          onClick={handleLumaRedirect}
                          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-2xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105"
                        >
                          Register on Luma →
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
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
