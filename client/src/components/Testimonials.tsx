import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Thanks for continuing to organize these amazing Fouxy Squad events",
      author: "Emma Thompson"
    },
    {
      text: "Great social UX meet-up with the Fouxy Squad community",
      author: "James Mitchell"
    },
    {
      text: "A fantastic design meetup with incredible networking",
      author: "Sophie Chen"
    },
    {
      text: "Had a wonderful time at the Fouxy Squad picnic event",
      author: "Alex Rivera"
    },
    {
      text: "Last night's Fouxy Squad UX Meetup was absolutely brilliant!",
      author: "Maya Patel"
    },
    {
      text: "I highly recommend joining the Fouxy Squad community",
      author: "Oliver Brown"
    },
    {
      text: "Had a fantastic time at the Fouxy Squad meet-up",
      author: "Isabella Davis"
    },
    {
      text: "Already looking forward to the next Fouxy Squad event!",
      author: "Ryan Williams"
    },
    {
      text: "The London design community needs more events like these ❤",
      author: "Zara Ahmed"
    },
    {
      text: "Last night's Fouxy Squad UX Meetup in London was an absolute win!",
      author: "Noah Johnson"
    },
    {
      text: "Absolutely enriching experience with fellow designers!",
      author: "Lily Garcia"
    },
    {
      text: "Amazing event, Squad! Looking forward to the next one",
      author: "Ethan Wilson"
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

  return (
    <section className="py-32 bg-fouxy-bg">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
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
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-start">
                <div className="w-8 h-8 bg-gradient-to-br from-fouxy-primary to-fouxy-secondary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs font-bold">
                    {testimonial.author.split(' ').map(name => name[0]).join('')}
                  </span>
                </div>
                <p className="text-gray-600 text-xs font-medium">
                  {testimonial.author}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}