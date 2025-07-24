import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Linkedin, QrCode } from "lucide-react";

export default function SocialSection() {
  const [qrGenerated, setQrGenerated] = useState(false);

  const handleSocialLink = (platform: string) => {
    const urls = {
      instagram: "https://instagram.com/fouxy_squad",
      linkedin: "https://linkedin.com/company/fouxy-squad"
    };
    
    if (urls[platform as keyof typeof urls]) {
      window.open(urls[platform as keyof typeof urls], "_blank");
    }
  };

  const generateQRCode = () => {
    setQrGenerated(true);
    // In a real implementation, this would generate an actual QR code
    // using a library like qrcode or similar
    console.log("QR code generated for group chat");
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
          <h2 className="font-comfortaa font-bold text-4xl text-fouxy-text mb-4">
            Connect With Us
          </h2>
          <p className="text-xl text-fouxy-text/70 max-w-3xl mx-auto">
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
                <h3 className="font-comfortaa font-bold text-xl text-fouxy-text mb-2">
                  Instagram
                </h3>
                <p className="text-fouxy-text/70 mb-4">
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
                <h3 className="font-comfortaa font-bold text-xl text-fouxy-text mb-2">
                  LinkedIn
                </h3>
                <p className="text-fouxy-text/70 mb-4">
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
                <h3 className="font-comfortaa font-bold text-xl text-fouxy-text mb-2">
                  Join Group Chat
                </h3>
                <p className="text-fouxy-text/70 mb-4">
                  Scan QR code to join our active community chat
                </p>

                <div className="w-32 h-32 bg-fouxy-neutral border-2 border-dashed border-fouxy-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                  {qrGenerated ? (
                    <div className="text-center">
                      <div className="grid grid-cols-4 gap-1 mb-2">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 ${
                              Math.random() > 0.5 ? "bg-fouxy-primary" : "bg-transparent"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-xs text-fouxy-text/70">QR Code</div>
                    </div>
                  ) : (
                    <div className="text-center text-fouxy-text/50">
                      <QrCode className="w-8 h-8 mx-auto mb-2" />
                      <div className="text-xs">QR Code</div>
                    </div>
                  )}
                </div>

                <Button
                  onClick={generateQRCode}
                  className="bg-fouxy-primary text-white px-6 py-2 rounded-full hover:bg-fouxy-secondary transition-colors duration-300"
                >
                  {qrGenerated ? "QR Generated!" : "Get QR Code"}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="font-comfortaa font-bold text-3xl text-fouxy-primary mb-2">
              2.5K
            </div>
            <div className="text-fouxy-text/70">Instagram Followers</div>
          </div>
          <div className="text-center">
            <div className="font-comfortaa font-bold text-3xl text-fouxy-primary mb-2">
              1.8K
            </div>
            <div className="text-fouxy-text/70">LinkedIn Connections</div>
          </div>
          <div className="text-center">
            <div className="font-comfortaa font-bold text-3xl text-fouxy-primary mb-2">
              95%
            </div>
            <div className="text-fouxy-text/70">Active in Group Chat</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
