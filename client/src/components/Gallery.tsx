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
      src: "/attached_assets/9504e6604cd0e27a3c9c470fd2f930d7 1_1753397342850.png",
      alt: "Fouxy Squad community dining together at restaurant meetup in London",
      title: "Community Dining Experience",
      description: "Building connections over great food and conversation",
      gradient: "from-fouxy-secondary/80"
    },
    {
      src: "/attached_assets/IMG_3466 1_1753397342850.png",
      alt: "Large group photo of Fouxy Squad members at outdoor picnic event",
      title: "Design Picnic Gathering",
      description: "Our amazing outdoor community event with 40+ members",
      gradient: "from-fouxy-accent/80"
    },
    {
      src: "/attached_assets/IMG_3765 1_1753397342851.png",
      alt: "Indoor meetup with Fouxy Squad members networking and collaborating",
      title: "Indoor Networking Session",
      description: "Creative professionals connecting in central London",
      gradient: "from-fouxy-primary/80"
    },
    {
      src: "/attached_assets/4-1 1_1753397342850.png",
      alt: "Digital collaboration tools and design workflows in action",
      title: "Digital Workshop Tools",
      description: "Exploring modern design and development workflows",
      gradient: "from-fouxy-secondary/80"
    },
    {
      src: "/attached_assets/4 1_1753397342850.png",
      alt: "Virtual gaming session with community members exploring creative spaces",
      title: "Creative Gaming Sessions",
      description: "Building community through interactive experiences",
      gradient: "from-fouxy-accent/80"
    },
    {
      src: "/attached_assets/1 1_1753397342848.png",
      alt: "Virtual meetup space with multiple participants joining online",
      title: "Virtual Community Events",
      description: "Connecting globally through digital platforms",
      gradient: "from-fouxy-primary/80"
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
