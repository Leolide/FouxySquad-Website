import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Thanks for continuing organising these amazing events",
      author: "Qibin Cheng"
    },
    {
      text: "Great social UX meet-up",
      author: "Emilio Rodriguez"
    },
    {
      text: "A yummy design meetup",
      author: "Tawfik Manham"
    },
    {
      text: "Had a fantastic time at the Food and UX meeting",
      author: "Natalia Mitina"
    },
    {
      text: "Last night's FAUX UX Meetup was a blast!",
      author: "Deepti Otari"
    },
    {
      text: "Enjoyed the company and the food!",
      author: "Andy Walker"
    },
    {
      text: "I highly recommend FAUX",
      author: "Christian Harries"
    },
    {
      text: "Had a fantastic time at the FAUX meet-up",
      author: "Sarah Mahoney"
    },
    {
      text: "Already looking forward to the next one!",
      author: "Pranjal Dhiwar"
    },
    {
      text: "The design community needs you ❤",
      author: "Michele Canu"
    },
    {
      text: "Last night's FAUX UX Meetup in London was an absolute win!",
      author: "Divya Jangra"
    },
    {
      text: "Absolutely enriching!",
      author: "Anushka Motiani"
    },
    {
      text: "Such a valuable event!",
      author: "Nia Oleyede"
    },
    {
      text: "Amazing event, Simon! Looking forward to the next one",
      author: "Jack Fargher"
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
            What people have been saying about our events...
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
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-fouxy-primary to-fouxy-secondary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs font-bold">
                    {testimonial.author.split(' ').map(name => name[0]).join('')}
                  </span>
                </div>
                <p className="text-gray-600 text-xs font-medium italic">
                  -{testimonial.author}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}