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
    <section id="community" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-comfortaa font-bold text-4xl text-black mb-6">
            Our Amazing Community
          </h2>
          <div className="max-w-4xl mx-auto mb-6">
            <img 
              src="/attached_assets/Group 1_1753397447548.png" 
              alt="Diverse community of 200+ creative fox characters representing our amazing Fouxy Squad members"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
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
                <h3 className="font-comfortaa font-bold text-2xl text-orange-600 mb-2">
                  200+ Members
                </h3>
                <p className="text-gray-700">
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
                <h3 className="font-comfortaa font-bold text-2xl text-orange-600 mb-2">
                  Diverse Backgrounds
                </h3>
                <p className="text-gray-700">
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
                <h3 className="font-comfortaa font-bold text-2xl text-orange-600 mb-2">
                  20-35 Years
                </h3>
                <p className="text-gray-700">
                  Young professionals and students passionate about design and
                  technology
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>


      </div>
    </section>
  );
}
