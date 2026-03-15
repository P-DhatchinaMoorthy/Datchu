import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Calendar, GraduationCap, Award } from "lucide-react";
import myResume from "./media/Datchu Resume.pdf";

interface ResumeProps {
  isDarkMode: boolean;
}

const Resume = ({ isDarkMode }: ResumeProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const timelineItems = [
    {
      year: "Sep 2025 – Present",
      title: "Software Developer",
      subtitle: "Wentrite Technologies Pvt Ltd, Chennai",
      description:
        "Developing backend applications using FastAPI and Flask, focusing on building scalable RESTful APIs. Working with PostgreSQL for database design, data management, and integration with backend services. Contributing to software development, API integration, and system optimization in a startup environment.",
      icon: Award,
      color: "from-teal-500 to-teal-600",
    },
    {
      year: "June 2025 – Sep 2025",
      title: "Software Developer Intern",
      subtitle: "Wentrite Technologies Pvt Ltd, Chennai",
      description:
        "Developed web scraping solutions using BeautifulSoup, Playwright, and browser extension. Built an ATS tool to classify resumes based on job roles using Large Language Models (LLM). Developed a basic MCP server using FastAPI, gaining experience in API development and backend services.",
      icon: Award,
      color: "from-blue-500 to-blue-600",
    },
    {
      year: "Dec 2024 – Mar 2025",
      title: "Machine Learning Intern",
      subtitle: "Pantech Solutions Pvt Ltd, Chennai",
      description:
        "Gained hands-on experience in Python machine learning, model development, and preprocessing. Worked with Streamlit, image analysis, and metadata integration for AI applications. Applied machine learning on real datasets, improving problem-solving and development.",
      icon: Award,
      color: "from-sky-500 to-sky-600",
    },
    {
      year: "July 2023 – April 2025",
      title: "Master of Computer Applications",
      subtitle: "SRM Institute of Science & Technology, Chennai",
      description: "Grade: 9.87",
      icon: GraduationCap,
      color: "from-blue-600 to-indigo-600",
    },
    {
      year: "July 2023 – May 2025",
      title: "Bachelor of Computer Applications",
      subtitle: "DRBCCC Hindu College, Chennai",
      description: "Grade: 8.42",
      icon: GraduationCap,
      color: "from-teal-600 to-cyan-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="resume"
      className={`py-20 px-6 transition-colors duration-300 ${
        isDarkMode ? "bg-orange-950" : "bg-gradient-to-br from-blue-50 to-teal-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className={`text-5xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Experience &{" "}
            <span className={`text-transparent bg-clip-text ${isDarkMode ? "bg-gradient-to-r from-orange-400 to-pink-400" : "bg-gradient-to-r from-teal-500 to-blue-600"}`}>
              Education
            </span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className={`w-24 h-1 mx-auto mb-8 ${isDarkMode ? "bg-gradient-to-r from-orange-400 to-pink-400" : "bg-gradient-to-r from-teal-500 to-blue-600"}`}
          />
          <motion.p
            variants={itemVariants}
            className={`text-lg max-w-2xl mx-auto mb-8 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            From academic excellence to professional experience - here's my
            journey in software development and backend engineering
          </motion.p>

          <motion.a
            href={myResume}
            download
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl text-white ${
              isDarkMode
                ? "bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
                : "bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700"
            }`}
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>
        </motion.div>

        <div className="relative">
          <div
            className={`absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 ${
              isDarkMode
                ? "bg-gradient-to-b from-orange-400 to-pink-500"
                : "bg-gradient-to-b from-teal-500 to-blue-600"
            }`}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.year + item.title}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:gap-16`}
              >
                <div
                  className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-orange-400 z-10 ${
                    isDarkMode ? "bg-orange-950" : "bg-white"
                  }`}
                />

                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"
                  } pl-20 md:pl-0`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-shadow ${
                      isDarkMode
                        ? "bg-orange-900 border-orange-800"
                        : "bg-white border-blue-100"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-4 mb-4 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color}`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div
                        className={`flex items-center gap-2 text-sm font-medium ${isDarkMode ? "text-orange-400" : "text-teal-600"} ${
                          index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <Calendar className="w-4 h-4" />
                        {item.year}
                      </div>
                    </div>

                    <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      {item.title}
                    </h3>
                    <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? "text-orange-300" : "text-blue-600"}`}>
                      {item.subtitle}
                    </h4>
                    <p className={`leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20"
        >
          <motion.div
            variants={itemVariants}
            className={`rounded-2xl p-8 text-white ${isDarkMode ? "bg-gradient-to-r from-orange-500 to-pink-500" : "bg-gradient-to-r from-teal-500 to-blue-600"}`}
          >
            <h3 className="text-3xl font-bold mb-6 text-center">Core Competencies</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Programming Languages", skills: ["Advanced Python", "JavaScript"] },
                { title: "Tech Stack", skills: ["Flask", "FastAPI", "REST APIs"] },
                { title: "Database & Tools", skills: ["PostgreSQL", "MySQL", "SQLite", "GitHub", "Docker", "Linux"] },
              ].map((category) => (
                <div key={category.title} className="text-center">
                  <h4 className="text-xl font-semibold mb-4">{category.title}</h4>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div key={skill} className="bg-white/20 rounded-lg py-2 px-4 text-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
