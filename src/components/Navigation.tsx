import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import meImage from "./media/me.jpg";

interface NavigationProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navigation = ({ isDarkMode, toggleDarkMode }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 100);
  });

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href === "#home" ? "#root" : href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? "bg-orange-950/95 backdrop-blur-sm border-b border-orange-800/50"
            : "bg-white/95 backdrop-blur-sm border-b border-blue-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
            <img src={meImage} alt="DhatchinaMoorthy P" className={`w-12 h-12 rounded-full object-cover border-2 ${isDarkMode ? "border-orange-400" : "border-teal-400"}`} />
            <span className={`ml-3 text-base sm:text-xl font-bold truncate max-w-[160px] sm:max-w-none ${isDarkMode ? "text-orange-100" : "text-gray-900"}`}>
              DhatchinaMoorthy P
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`transition-colors font-medium ${isDarkMode ? "text-orange-100 hover:text-orange-400" : "text-gray-900 hover:text-teal-500"}`}
              >
                {item.label}
              </motion.button>
            ))}


            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${
                isDarkMode ? "bg-orange-900/50 text-orange-200 hover:bg-orange-800/70" : "bg-blue-50 text-gray-900 hover:bg-blue-100"
              }`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 ${isDarkMode ? "text-orange-100" : "text-gray-900"}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        <motion.div
          initial={false}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden overflow-hidden backdrop-blur-sm rounded-2xl mt-4 ${
            isDarkMode ? "bg-orange-950/95" : "bg-white/95"
          }`}
        >
          <div className="p-6 space-y-4">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ x: 10 }}
                className={`block w-full text-left transition-colors font-medium py-2 ${
                  isDarkMode ? "text-orange-100 hover:text-orange-400" : "text-gray-900 hover:text-teal-500"
                }`}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition-colors ${
                isDarkMode ? "bg-orange-900/50 text-orange-200 hover:bg-orange-800/70" : "bg-blue-50 text-gray-900 hover:bg-blue-100"
              }`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
