import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Linkedin, QrCode } from "lucide-react";
import QRCodeModal from "./QRCodeModal";

export default function SocialSection() {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  const handleSocialLink = (platform: string) => {
    const urls = {
      instagram: "https://instagram.com/fouxy_squad",
      linkedin: "https://linkedin.com/company/fouxy-squad"
    };
    
    if (urls[platform as keyof typeof urls]) {
      window.open(urls[platform as keyof typeof urls], "_blank");
    }
  };

  const openQRModal = () => {
    setIsQRModalOpen(true);
  };

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

  return (
    <section id="connect" className="py-24 bg-fouxy-neutral">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-semibold text-4xl sm:text-5xl text-fouxy-text mb-6 tracking-tight">
            Connect
          </h2>
          <p className="text-xl text-fouxy-text-secondary max-w-2xl mx-auto font-light">
            Stay updated with events and community highlights
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-xl p-8 text-center card-hover">
              <div className="w-12 h-12 bg-fouxy-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Instagram className="text-white w-6 h-6" />
              </div>
              <h3 className="font-medium text-lg text-fouxy-text mb-3">
                Instagram
              </h3>
              <button
                onClick={() => handleSocialLink("instagram")}
                className="text-fouxy-text-secondary hover:text-fouxy-text text-sm transition-colors"
                data-testid="link-instagram"
              >
                @fouxy_squad
              </button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-xl p-8 text-center card-hover">
              <div className="w-12 h-12 bg-fouxy-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Linkedin className="text-white w-6 h-6" />
              </div>
              <h3 className="font-medium text-lg text-fouxy-text mb-3">
                LinkedIn
              </h3>
              <button
                onClick={() => handleSocialLink("linkedin")}
                className="text-fouxy-text-secondary hover:text-fouxy-text text-sm transition-colors"
                data-testid="link-linkedin"
              >
                Fouxy Squad
              </button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-xl p-8 text-center card-hover">
              <div className="w-12 h-12 bg-fouxy-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <QrCode className="text-white w-6 h-6" />
              </div>
              <h3 className="font-medium text-lg text-fouxy-text mb-3">
                Group Chat
              </h3>
              <button
                onClick={openQRModal}
                className="text-fouxy-text-secondary hover:text-fouxy-text text-sm transition-colors"
                data-testid="button-qr"
              >
                Scan QR Code
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <QRCodeModal 
        isOpen={isQRModalOpen} 
        onClose={() => setIsQRModalOpen(false)} 
      />
    </section>
  );
}
