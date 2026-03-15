import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroProps {
  isDarkMode: boolean;
}

const Hero = ({ isDarkMode }: HeroProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const particles = Array.from({ length: 50 }, (_, i) => i);

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300 ${
        isDarkMode
          ? "bg-gradient-to-br from-orange-900 via-pink-900 to-orange-800"
          : "bg-gradient-to-br from-teal-50 via-white to-blue-100"
      }`}
    >
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle}
            className={`absolute w-1 h-1 rounded-full ${
              isDarkMode
                ? "bg-gradient-to-r from-orange-400 to-pink-400"
                : "bg-gradient-to-r from-teal-400 to-blue-500"
            }`}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random(),
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{ duration: Math.random() * 20 + 10, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <motion.div
        className="fixed w-96 h-96 pointer-events-none z-0"
        animate={{ x: mousePosition.x - 192, y: mousePosition.y - 192 }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      >
        <div
          className={`w-full h-full rounded-full blur-xl ${
            isDarkMode
              ? "bg-gradient-radial from-orange-500/20 via-pink-500/10 to-transparent"
              : "bg-gradient-radial from-blue-300/30 via-teal-300/20 to-transparent"
          }`}
        />
      </motion.div>

      <motion.div className="relative z-10 text-center px-6" style={{ y }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <motion.h1
            className={`text-6xl md:text-8xl font-bold text-transparent bg-clip-text mb-4 ${
              isDarkMode
                ? "bg-gradient-to-r from-orange-300 via-pink-300 to-orange-300"
                : "bg-gradient-to-r from-teal-600 via-blue-600 to-teal-600"
            }`}
            animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            DhatchinaMoorthy P
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.8 }}
            className={`h-1 mx-auto max-w-md ${
              isDarkMode
                ? "bg-gradient-to-r from-orange-400 to-pink-400"
                : "bg-gradient-to-r from-teal-500 to-blue-500"
            }`}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed ${
            isDarkMode ? "text-orange-100" : "text-gray-700"
          }`}
        >
          Software Developer • MCA Graduate • Backend Specialist
          <br />
          <span className={isDarkMode ? "text-orange-300" : "text-blue-600"}>
            Building scalable systems with FastAPI, Flask & REST APIs
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center gap-6 mb-12"
        >
          {[
            { icon: Github, href: "https://github.com/P-DhatchinaMoorthy", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/dhatchinamoorthy-p-716865245/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:dhatchina1505@gmail.com", label: "Email" },
            { icon: null, href: "https://www.instagram.com/itsmemadjoker_datchu/", label: "Instagram" },
            { icon: MapPin, href: "#", label: "Chennai, India" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={label === "Instagram" ? "_blank" : undefined}
              rel={label === "Instagram" ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 backdrop-blur-sm rounded-full border transition-colors ${
                isDarkMode
                  ? "bg-orange-900/40 border-orange-400/30 hover:bg-orange-800/60"
                  : "bg-blue-50/80 border-blue-200 hover:bg-blue-100"
              }`}
            >
              {Icon ? (
                <Icon className={`w-6 h-6 ${isDarkMode ? "text-orange-200" : "text-blue-700"}`} />
              ) : (
                <svg viewBox="0 0 24 24" className={`w-6 h-6 ${isDarkMode ? "text-orange-200" : "text-blue-700"}`} fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              )}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col items-center"
        >
          <span className={`mb-4 ${isDarkMode ? "text-orange-200" : "text-gray-500"}`}>Scroll to explore</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown className={`w-6 h-6 ${isDarkMode ? "text-orange-400" : "text-blue-500"}`} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
