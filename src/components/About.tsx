import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Brain, Webhook } from "lucide-react";

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  const skills = [
    { name: "Python", level: 90, icon: Code },
    { name: "FastAPI & Flask", level: 88, icon: Webhook },
    { name: "REST APIs", level: 85, icon: Webhook },
    { name: "PostgreSQL / MySQL", level: 82, icon: Database },
    { name: "JavaScript", level: 75, icon: Code },
    { name: "Machine Learning", level: 72, icon: Brain },
  ];

  return (
    <section
      id="about"
      className={`py-20 ${isDarkMode ? "bg-orange-950" : "bg-gradient-to-br from-white to-blue-50"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? "text-orange-100" : "text-gray-900"}`}>
            About Me
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? "text-orange-200" : "text-gray-600"}`}>
            A passionate Software Developer and MCA graduate with expertise in
            backend development, FastAPI, Flask, and REST APIs. I build scalable
            systems and LLM-based applications with a focus on PostgreSQL, MySQL,
            and modern web technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? "text-orange-100" : "text-gray-900"}`}>
              My Journey
            </h3>
            <p className={`text-lg mb-6 ${isDarkMode ? "text-orange-200" : "text-gray-600"}`}>
              MCA graduate currently working at Wentrite Technologies Pvt Ltd as
              a Software Developer. Skilled in backend development with FastAPI
              and Flask, focusing on building scalable RESTful APIs and working
              with PostgreSQL for database design and management.
            </p>
            <p className={`text-lg mb-6 ${isDarkMode ? "text-orange-200" : "text-gray-600"}`}>
              Previously interned at Wentrite Technologies developing web
              scraping solutions and ATS tools using LLMs, and at Pantech
              Solutions as a Machine Learning intern working on Python ML models
              and Streamlit applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? "text-orange-100" : "text-gray-900"}`}>
              Technical Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <skill.icon className={`w-6 h-6 ${isDarkMode ? "text-orange-300" : "text-blue-500"}`} />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className={`text-sm font-medium ${isDarkMode ? "text-orange-100" : "text-gray-900"}`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${isDarkMode ? "text-orange-300" : "text-gray-500"}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${isDarkMode ? "bg-orange-900" : "bg-gray-200"}`}>
                      <motion.div
                        className={`h-2 rounded-full ${isDarkMode ? "bg-gradient-to-r from-orange-400 to-pink-500" : "bg-gradient-to-r from-teal-500 to-blue-500"}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
