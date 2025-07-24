import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function CommunitySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const companies = [
    "Amazon", "Figma", "Palantir", "Burberry", 
    "UAL", "RCA", "Cambridge", "Startups"
  ];

  return (
    <section id="community" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-comfortaa font-bold text-4xl text-fouxy-text mb-4">
            Our Amazing Community
          </h2>
          <p className="text-xl text-fouxy-text/70 max-w-3xl mx-auto">
            A diverse group of passionate designers and creatives fostering
            design-driven tech conversations through inclusive events.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <motion.div variants={itemVariants}>
            <Card className="bg-fouxy-bg rounded-2xl card-hover border border-fouxy-accent/20">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="font-comfortaa font-bold text-2xl text-fouxy-primary mb-2">
                  200+ Members
                </h3>
                <p className="text-fouxy-text/70">
                  Highly active professionals and students across UX, UI, and
                  product design
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-fouxy-bg rounded-2xl card-hover border border-fouxy-accent/20">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="font-comfortaa font-bold text-2xl text-fouxy-primary mb-2">
                  Diverse Backgrounds
                </h3>
                <p className="text-fouxy-text/70">
                  From top design schools (UAL, RCA, Cambridge) and leading tech
                  companies
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-fouxy-bg rounded-2xl card-hover border border-fouxy-accent/20">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="font-comfortaa font-bold text-2xl text-fouxy-primary mb-2">
                  20-35 Years
                </h3>
                <p className="text-fouxy-text/70">
                  Young professionals and students passionate about design and
                  technology
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-fouxy-neutral rounded-2xl p-12"
        >
          <h3 className="font-comfortaa font-bold text-2xl text-center text-fouxy-text mb-8">
            Our Members Work At
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white px-6 py-3 rounded-lg shadow-sm font-medium text-fouxy-text"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
