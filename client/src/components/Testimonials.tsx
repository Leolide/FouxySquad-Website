import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    "Amazing event! Many thanks for organising it!",
    "Amazing event thanks to you and the team for putting it together.",
    "Thanks for this brilliant event! 🙏🙏",
    "Great event - nice to meet everyone 👋",
    "Big thanks for organising the event! I had a lot of fun meeting new designers and learning from each other. Matcha makes it even more perfect!",
    "Thanks for continuing to organize these amazing Fouxy Squad events",
    "Great social UX meet-up with the Fouxy Squad community",
    "Yesterday's Fouxy Squad UX Meetup was absolutely brilliant!",
    "The London design community needs more events like these ❤",
    "Yesterday's Fouxy Squad UX Meetup in London was an absolute win!",
    "I've become great friends with people I met through Fouxy Squad - this community truly brings designers together!",
    "Not only did I learn so much, but I've made lasting friendships with fellow designers from the community"
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
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-semibold text-4xl sm:text-5xl text-fouxy-text mb-6 tracking-tight">
            Testimonials
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-fouxy-neutral rounded-xl p-6 transition-all duration-200"
              data-testid={`testimonial-${index}`}
            >
              <p className="text-fouxy-text-secondary text-sm leading-relaxed">
                {testimonial.replace(/[🙏👋❤]/g, '')}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}