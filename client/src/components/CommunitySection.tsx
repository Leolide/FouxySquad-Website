import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import type { CommunityStats } from "@shared/schema";

export default function CommunitySection() {
  const { data: stats } = useQuery<CommunityStats[]>({
    queryKey: ['/api/community-stats'],
  });

  const communityStats = stats?.[0];
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
    <section id="community" className="py-24 bg-fouxy-neutral">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-semibold text-4xl sm:text-5xl text-fouxy-text mb-6 tracking-tight">
            Our Community
          </h2>
          <p className="text-xl text-fouxy-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            A diverse group of designers and creatives fostering design-driven conversations through inclusive events.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-xl p-8 card-hover">
              <h3 className="font-semibold text-3xl text-fouxy-text mb-3">
                {communityStats?.totalMembers || 200}+
              </h3>
              <p className="text-base text-fouxy-text-secondary font-medium mb-2">
                Members
              </p>
              <p className="text-sm text-fouxy-text-secondary leading-relaxed">
                Active professionals and students across UX, UI, and product design
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-xl p-8 card-hover">
              <h3 className="font-semibold text-3xl text-fouxy-text mb-3">
                Diverse
              </h3>
              <p className="text-base text-fouxy-text-secondary font-medium mb-2">
                Backgrounds
              </p>
              <p className="text-sm text-fouxy-text-secondary leading-relaxed">
                From top design schools and leading tech companies
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-xl p-8 card-hover">
              <h3 className="font-semibold text-3xl text-fouxy-text mb-3">
                20-35
              </h3>
              <p className="text-base text-fouxy-text-secondary font-medium mb-2">
                Years Old
              </p>
              <p className="text-sm text-fouxy-text-secondary leading-relaxed">
                Young professionals and students passionate about design
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
