import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
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

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryItems.length - 1);
    } else {
      setSelectedImage(selectedImage < galleryItems.length - 1 ? selectedImage + 1 : 0);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage === null) return;

      switch (event.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
      }
    };

    if (selectedImage !== null) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-24 bg-fouxy-neutral">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-semibold text-4xl sm:text-5xl text-fouxy-text mb-6 tracking-tight">
            Gallery
          </h2>
          <p className="text-xl text-fouxy-text-secondary max-w-2xl mx-auto font-light">
            Moments from our community events
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group overflow-hidden rounded-xl cursor-pointer transition-all duration-200"
              onClick={() => openLightbox(index)}
              data-testid={`gallery-img-${index}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous button */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
            >
              <span className="text-white text-xl font-bold">‹</span>
            </button>

            {/* Next button */}
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
            >
              <span className="text-white text-xl font-bold">›</span>
            </button>

            {/* Main image */}
            <img
              src={galleryItems[selectedImage].src}
              alt={galleryItems[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
            />

            {/* Image info */}
            <div className="absolute bottom-6 left-4 right-4 text-center">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-3 mx-auto max-w-md">
                <p className="text-white text-xs">
                  {selectedImage + 1} / {galleryItems.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
