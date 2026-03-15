import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

interface FooterProps {
  isDarkMode: boolean;
}

const Footer = ({ isDarkMode }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/DhatchinaMoorthy", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/DhatchinaMoorthy", label: "LinkedIn" },
    { icon: Mail, href: "mailto:dhatchina1505@gmail.com", label: "Email" },
  ];

  return (
    <footer
      className={`py-12 px-6 transition-colors duration-300 ${
        isDarkMode
          ? "bg-gradient-to-r from-orange-900 to-pink-900"
          : "bg-gradient-to-r from-teal-800 to-blue-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className={`text-3xl font-bold text-transparent bg-clip-text mb-2 ${
                isDarkMode
                  ? "bg-gradient-to-r from-orange-300 to-pink-300"
                  : "bg-gradient-to-r from-teal-300 to-blue-300"
              }`}
            >
              DhatchinaMoorthy P
            </motion.h3>
            <p className="text-gray-300 text-sm max-w-md">
              Software Developer and MCA Graduate specializing in backend
              development with FastAPI, Flask, and REST APIs. Building scalable
              systems and LLM-based applications.
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors group"
              >
                <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className={`h-px my-8 origin-left ${
            isDarkMode
              ? "bg-gradient-to-r from-orange-400/50 to-pink-400/50"
              : "bg-gradient-to-r from-teal-400/50 to-blue-400/50"
          }`}
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
          <p>© {currentYear} DhatchinaMoorthy P. All rights reserved.</p>
          <motion.p whileHover={{ scale: 1.05 }} className="flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-400 fill-current" />{" "}
            using React & Tailwind CSS
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
