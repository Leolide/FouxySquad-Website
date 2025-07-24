import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Gallery() {
  const galleryItems = [
    {
      src: "/attached_assets/Weixin Image_20250712202539_2095_1753394670431.jpg",
      alt: "Fouxy Squad community event with diverse group of designers and creatives in London",
      title: "July Community Meetup",
      description: "Our amazing community gathering in London",
      gradient: "from-fouxy-primary/80"
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Creative professionals collaborating in design workshop",
      title: "Collaborative Sessions",
      description: "Creative minds working together",
      gradient: "from-fouxy-secondary/80"
    },
    {
      src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Design community networking event with professionals mingling",
      title: "Networking Events",
      description: "Building meaningful connections",
      gradient: "from-fouxy-accent/80"
    },
    {
      src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Outdoor community gathering with designers enjoying picnic",
      title: "Design Picnics",
      description: "Creative fun in the great outdoors",
      gradient: "from-fouxy-primary/80"
    },
    {
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Modern design workspace with creative tools and equipment",
      title: "Workshop Spaces",
      description: "Where creativity comes to life",
      gradient: "from-fouxy-secondary/80"
    },
    {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Team brainstorming session with designers sharing ideas",
      title: "Brainstorming Sessions",
      description: "Ideas flowing freely",
      gradient: "from-fouxy-accent/80"
    },
    {
      src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Diverse group of designers engaged in community discussion",
      title: "Community Discussions",
      description: "Learning from each other",
      gradient: "from-fouxy-primary/80"
    },
    {
      src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "Online virtual meetup with designers connecting remotely",
      title: "Virtual Meetups",
      description: "Connecting from anywhere in the world",
      gradient: "from-fouxy-secondary/80"
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
      alt: "London design community members presenting projects",
      title: "Project Showcases",
      description: "Sharing creative work and inspiration",
      gradient: "from-fouxy-accent/80"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleViewMore = () => {
    // In a real implementation, this would load more gallery images
    console.log("View more gallery clicked");
  };

  return (
    <section id="gallery" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-comfortaa font-bold text-4xl text-black mb-4">
            Community Gallery
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Capturing the energy, creativity, and connections from our events.
            See our amazing community in action!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group overflow-hidden rounded-2xl card-hover"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${item.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end`}
              >
                <div className="p-6 text-white">
                  <h4 className="font-comfortaa font-bold text-lg">
                    {item.title}
                  </h4>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={handleViewMore}
            variant="outline"
            className="border-2 border-fouxy-primary text-fouxy-primary px-8 py-3 rounded-full hover:bg-fouxy-primary hover:text-white transition-all duration-300 font-comfortaa font-medium"
          >
            View More Photos
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
