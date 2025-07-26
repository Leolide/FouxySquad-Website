import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    "Thanks for continuing to organize these amazing Fouxy Squad events",
    "Great social UX meet-up with the Fouxy Squad community",
    "A fantastic design meetup with incredible networking",
    "Had a wonderful time at the Fouxy Squad picnic event",
    "Last night's Fouxy Squad UX Meetup was absolutely brilliant!",
    "I highly recommend joining the Fouxy Squad community",
    "Had a fantastic time at the Fouxy Squad meet-up",
    "Already looking forward to the next Fouxy Squad event!",
    "The London design community needs more events like these ❤",
    "Last night's Fouxy Squad UX Meetup in London was an absolute win!",
    "Absolutely enriching experience with fellow designers!",
    "Big thanks to Lide for organising the event! I had a lot of fun meeting new designers and learning from each other. Matcha makes it even more perfect!"
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

  return (
    <section className="py-20 bg-fouxy-bg">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-comfortaa font-bold text-3xl text-black mb-6">
            What do people say about us
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-gray-700 text-sm leading-relaxed">
                "{testimonial}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}