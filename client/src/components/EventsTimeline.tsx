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
}

export default function EventsTimeline() {
  const events: TimelineEvent[] = [
    {
      date: "Feb 2025",
      title: "Founded in London",
      description: "The beginning of our amazing design community journey",
      icon: "🚀",
      color: "bg-fouxy-primary"
    },
    {
      date: "Mar 2025",
      title: "First Meetup",
      description: "20 participants joined our inaugural event",
      participants: 20,
      icon: "👥",
      color: "bg-fouxy-secondary"
    },
    {
      date: "Apr 2025",
      title: "Second Meetup",
      description: "Growing to 30 participants with amazing energy",
      participants: 30,
      icon: "📈",
      color: "bg-fouxy-accent"
    },
    {
      date: "May 2025",
      title: "Design Picnic",
      description: "40 participants enjoyed outdoor creativity and networking",
      participants: 40,
      icon: "🌳",
      color: "bg-fouxy-primary"
    },
    {
      date: "May 2025",
      title: "First Online Meetup",
      description: "30 participants connected virtually from around the world",
      participants: 30,
      icon: "💻",
      color: "bg-fouxy-secondary"
    },
    {
      date: "June 2025",
      title: "Two Amazing Meetups",
      description: "100 participants total across our biggest events yet!",
      participants: 100,
      icon: "🎉",
      color: "bg-fouxy-accent"
    },
    {
      date: "July 2025",
      title: "Vibe Coding for Designers",
      description: "Upcoming: Bridging design and development skills",
      icon: "🔮",
      color: "bg-fouxy-primary",
      isUpcoming: true
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
    <section id="events" className="py-20 bg-fouxy-bg">
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
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From our humble beginnings in February 2025 to hosting events with
            100+ participants. Here's our incredible growth story.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-fouxy-accent/40"></div>

          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`timeline-item relative flex items-center justify-between w-full mb-8 ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="order-1 w-5/12"></div>
              <div
                className={`z-20 flex items-center order-1 ${event.color} shadow-xl w-12 h-12 rounded-full ${
                  event.isUpcoming ? "animate-pulse" : ""
                }`}
              >
                <span className="mx-auto text-lg text-white">{event.icon}</span>
              </div>
              <Card
                className={`order-1 ${
                  event.isUpcoming
                    ? "bg-gradient-to-br from-fouxy-bg to-white border-2 border-dashed border-fouxy-primary"
                    : "bg-white"
                } rounded-2xl shadow-lg w-5/12 card-hover`}
              >
                <CardContent className="px-6 py-4">
                  <h3
                    className={`mb-2 font-comfortaa font-bold text-xl ${
                      event.color === "bg-fouxy-primary"
                        ? "text-orange-600"
                        : event.color === "bg-fouxy-secondary"
                        ? "text-orange-600"
                        : "text-orange-600"
                    }`}
                  >
                    {event.date}
                  </h3>
                  <h4 className="mb-2 font-bold text-lg text-black">
                    {event.title}
                  </h4>
                  <p className="text-sm leading-snug tracking-wide text-gray-700">
                    {event.description}
                  </p>
                  {event.isUpcoming && (
                    <Button
                      onClick={handleRegisterInterest}
                      size="sm"
                      className="mt-3 bg-fouxy-primary text-white rounded-full hover:bg-fouxy-secondary transition-colors"
                    >
                      Register Interest
                    </Button>
                  )}
                </CardContent>
              </Card>
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
