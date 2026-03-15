import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

interface ContactProps {
  isDarkMode: boolean;
}

const Contact = ({ isDarkMode }: ContactProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const contactInfo = [
    { icon: Mail, title: "Email", value: "dhatchina1505@gmail.com", href: "mailto:dhatchina1505@gmail.com", isInstagram: false },
    { icon: null, title: "Instagram", value: "@itsmemadjoker_datchu", href: "https://www.instagram.com/itsmemadjoker_datchu/", isInstagram: true },
    { icon: MapPin, title: "Location", value: "Chennai, India", href: "#", isInstagram: false },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/P-DhatchinaMoorthy", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/dhatchinamoorthy-p-716865245/", label: "LinkedIn" },
    { icon: null, href: "https://www.instagram.com/itsmemadjoker_datchu/", label: "Instagram" },
  ];

  const instagramSvg = (cls: string) => (
    <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );

  const btnGradient = isDarkMode
    ? "bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
    : "bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700";

  const iconBg = isDarkMode
    ? "bg-gradient-to-r from-orange-500 to-pink-500"
    : "bg-gradient-to-r from-teal-500 to-blue-600";

  return (
    <section
      id="contact"
      className={`py-20 px-6 transition-colors duration-300 ${
        isDarkMode ? "bg-orange-950" : "bg-gradient-to-br from-blue-50 to-teal-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="text-center mb-16">
          <motion.h2 variants={itemVariants} className={`text-5xl font-bold mb-6 ${isDarkMode ? "text-orange-100" : "text-gray-900"}`}>
            Let's{" "}
            <span className={`text-transparent bg-clip-text ${isDarkMode ? "bg-gradient-to-r from-orange-400 to-pink-400" : "bg-gradient-to-r from-teal-500 to-blue-600"}`}>
              Connect
            </span>
          </motion.h2>
          <motion.div variants={itemVariants} className={`w-24 h-1 mx-auto mb-8 ${isDarkMode ? "bg-gradient-to-r from-orange-400 to-pink-400" : "bg-gradient-to-r from-teal-500 to-blue-600"}`} />
          <motion.p variants={itemVariants} className={`text-lg max-w-2xl mx-auto ${isDarkMode ? "text-orange-200" : "text-gray-600"}`}>
            Ready to collaborate? Let's discuss how we can build something great together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="space-y-8">
            <motion.div variants={itemVariants}>
              <h3 className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-orange-100" : "text-gray-900"}`}>Get in Touch</h3>
              <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? "text-orange-200" : "text-gray-600"}`}>
                I'm always open to discussing new opportunities, collaborations, or just having a conversation about tech. Feel free to reach out!
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  target={info.isInstagram ? "_blank" : undefined}
                  rel={info.isInstagram ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className={`flex items-center gap-4 p-4 backdrop-blur-sm rounded-xl border transition-colors group ${
                    isDarkMode ? "bg-orange-900/30 border-orange-700/40 hover:bg-orange-800/50" : "bg-white border-blue-100 hover:bg-blue-50"
                  }`}
                >
                  <div className={`p-3 rounded-xl ${iconBg}`}>
                    {info.icon ? <info.icon className="w-6 h-6 text-white" /> : instagramSvg("w-6 h-6 text-white")}
                  </div>
                  <div>
                    <h4 className={`font-semibold transition-colors ${isDarkMode ? "text-orange-100 group-hover:text-orange-300" : "text-gray-900 group-hover:text-blue-600"}`}>
                      {info.title}
                    </h4>
                    <p className={isDarkMode ? "text-orange-300" : "text-gray-600"}>{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className={`text-xl font-semibold mb-6 ${isDarkMode ? "text-orange-100" : "text-gray-900"}`}>Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 backdrop-blur-sm rounded-xl border transition-colors ${
                      isDarkMode ? "bg-orange-900/30 border-orange-700/40 hover:bg-orange-800/50" : "bg-white border-blue-100 hover:bg-blue-50"
                    }`}
                  >
                    {social.icon
                      ? <social.icon className={`w-6 h-6 ${isDarkMode ? "text-orange-200" : "text-gray-900"}`} />
                      : instagramSvg(`w-6 h-6 ${isDarkMode ? "text-orange-200" : "text-gray-900"}`)}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className={`backdrop-blur-sm rounded-2xl p-8 border ${
                isDarkMode ? "bg-orange-900/30 border-orange-700/40" : "bg-white border-blue-100"
              }`}
            >
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? "text-orange-100" : "text-gray-900"}`}>Send Message</h3>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { label: "Name", name: "name", type: "text", placeholder: "Your name", value: formData.name, error: errors.name },
                    { label: "Email", name: "email", type: "email", placeholder: "your.email@example.com", value: formData.email, error: errors.email },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className={`block font-medium mb-2 ${isDarkMode ? "text-orange-100" : "text-gray-900"}`}>{field.label}</label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type={field.type}
                        name={field.name}
                        value={field.value}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none transition-colors ${
                          isDarkMode
                            ? `bg-orange-900/40 ${field.error ? "border-red-400" : "border-orange-700/50"} text-orange-100 placeholder-orange-400 focus:border-orange-400`
                            : `bg-gray-50 ${field.error ? "border-red-400" : "border-gray-300"} text-gray-900 placeholder-gray-500 focus:border-teal-400`
                        }`}
                        placeholder={field.placeholder}
                      />
                      {field.error && <p className="text-red-400 text-sm mt-1">{field.error}</p>}
                    </div>
                  ))}
                </div>

                <div>
                  <label className={`block font-medium mb-2 ${isDarkMode ? "text-orange-100" : "text-gray-900"}`}>Subject</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none transition-colors ${
                      isDarkMode
                        ? `bg-orange-900/40 ${errors.subject ? "border-red-400" : "border-orange-700/50"} text-orange-100 placeholder-orange-400 focus:border-orange-400`
                        : `bg-gray-50 ${errors.subject ? "border-red-400" : "border-gray-300"} text-gray-900 placeholder-gray-500 focus:border-teal-400`
                    }`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label className={`block font-medium mb-2 ${isDarkMode ? "text-orange-100" : "text-gray-900"}`}>Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none transition-colors resize-none ${
                      isDarkMode
                        ? `bg-orange-900/40 ${errors.message ? "border-red-400" : "border-orange-700/50"} text-orange-100 placeholder-orange-400 focus:border-orange-400`
                        : `bg-gray-50 ${errors.message ? "border-red-400" : "border-gray-300"} text-gray-900 placeholder-gray-500 focus:border-teal-400`
                    }`}
                    placeholder="Tell me about your project or just say hello!"
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className={`w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-semibold transition-all text-white disabled:opacity-50 ${
                    isSubmitted ? "bg-green-600" : btnGradient
                  }`}
                >
                  {isSubmitting ? (
                    <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                  ) : isSubmitted ? (
                    <><CheckCircle className="w-5 h-5" />Message Sent!</>
                  ) : (
                    <><Send className="w-5 h-5" />Send Message</>
                  )}
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
