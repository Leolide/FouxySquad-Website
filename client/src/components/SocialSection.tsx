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
    <section className="py-20 bg-fouxy-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-comfortaa font-bold text-4xl text-black mb-4">
            Connect With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow our journey, join our chat, and stay updated with the latest
            events and community highlights.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants}>
            <Card className="bg-white rounded-2xl card-hover text-center border border-fouxy-accent/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Instagram className="text-white text-2xl w-8 h-8" />
                </div>
                <h3 className="font-comfortaa font-bold text-xl text-black mb-2">
                  Instagram
                </h3>
                <p className="text-gray-600 mb-4">
                  Follow our visual journey and event highlights
                </p>
                <Button
                  onClick={() => handleSocialLink("instagram")}
                  className="bg-gradient-to-br from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
                >
                  @fouxy_squad
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-white rounded-2xl card-hover text-center border border-fouxy-accent/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="text-white text-2xl w-8 h-8" />
                </div>
                <h3 className="font-comfortaa font-bold text-xl text-black mb-2">
                  LinkedIn
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional updates and industry insights
                </p>
                <Button
                  onClick={() => handleSocialLink("linkedin")}
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Fouxy Squad
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-white rounded-2xl card-hover text-center border border-fouxy-accent/20 md:col-span-2 lg:col-span-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-fouxy-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <QrCode className="text-white text-2xl w-8 h-8" />
                </div>
                <h3 className="font-comfortaa font-bold text-xl text-black mb-2">
                  Join Group Chat
                </h3>
                <p className="text-gray-600 mb-6">
                  Scan QR code to join our active community chat
                </p>

                <Button
                  onClick={openQRModal}
                  className="bg-fouxy-primary text-white px-6 py-2 rounded-full hover:bg-fouxy-secondary transition-colors duration-300"
                >
                  View QR Code
                </Button>
              </CardContent>
            </Card>
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
