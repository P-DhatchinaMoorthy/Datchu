import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  category: string;
}

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects = ({ isDarkMode }: ProjectsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Wound Recovery Analysis",
      description: "A machine learning project to analyze and predict wound recovery progress using image analysis and metadata.",
      fullDescription: "A machine learning-based system that analyzes wound images to track and predict recovery progress. Utilizes image processing techniques along with metadata integration to provide insights into healing patterns. Built with Python and Streamlit for an interactive user interface.",
      technologies: ["Python", "Machine Learning", "Streamlit", "Image Analysis", "Metadata Integration"],
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600",
      githubUrl: "https://github.com/P-DhatchinaMoorthy/Wound-Recovery-Analysis",
      category: "Machine Learning",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section
      id="projects"
      className={`py-20 px-6 transition-colors duration-300 ${
        isDarkMode ? "bg-orange-950" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={cardVariants}
            className={`text-3xl sm:text-5xl font-bold mb-6 ${isDarkMode ? "text-orange-100" : "text-gray-900"}`}
          >
            My{" "}
            <span className={`text-transparent bg-clip-text ${isDarkMode ? "bg-gradient-to-r from-orange-400 to-pink-400" : "bg-gradient-to-r from-teal-500 to-blue-600"}`}>
              Projects
            </span>
          </motion.h2>
          <motion.div variants={cardVariants} className={`w-24 h-1 mx-auto mb-8 ${isDarkMode ? "bg-gradient-to-r from-orange-400 to-pink-400" : "bg-gradient-to-r from-teal-500 to-blue-600"}`} />
          <motion.p
            variants={cardVariants}
            className={`text-lg max-w-2xl mx-auto ${isDarkMode ? "text-orange-200" : "text-gray-600"}`}
          >
            Showcasing my work in machine learning and backend development
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`group relative backdrop-blur-sm rounded-2xl overflow-hidden border cursor-pointer transition-colors duration-300 ${
                isDarkMode ? "bg-orange-900/40 border-orange-700/50" : "bg-blue-50 border-blue-200"
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${isDarkMode ? "text-orange-300 bg-orange-400/20" : "text-teal-700 bg-teal-100"}`}>
                    {project.category}
                  </span>
                </div>
                <h3 className={`text-xl font-bold mb-3 transition-colors ${isDarkMode ? "text-orange-100 group-hover:text-orange-300" : "text-gray-900 group-hover:text-blue-600"}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 line-clamp-2 ${isDarkMode ? "text-orange-200" : "text-gray-600"}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className={`text-xs px-2 py-1 rounded ${isDarkMode ? "text-pink-300 bg-pink-400/20" : "text-blue-700 bg-blue-100"}`}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={`text-xs ${isDarkMode ? "text-orange-300" : "text-gray-500"}`}>
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                    isDarkMode
                      ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600"
                      : "bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:from-teal-600 hover:to-blue-700"
                  }`}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className={`rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto ${isDarkMode ? "bg-orange-950" : "bg-white"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className={`text-3xl font-bold mb-2 ${isDarkMode ? "text-orange-100" : "text-gray-900"}`}>
                    {selectedProject.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? "text-orange-300 bg-orange-400/20" : "text-teal-700 bg-teal-100"}`}>
                    {selectedProject.category}
                  </span>
                </div>
                <button onClick={() => setSelectedProject(null)} className={`p-2 transition-colors ${isDarkMode ? "text-orange-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>
              <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? "text-orange-200" : "text-gray-700"}`}>
                {selectedProject.fullDescription}
              </p>
              <div className="mb-6">
                <h4 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-orange-100" : "text-gray-900"}`}>Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className={`px-3 py-2 rounded-lg border ${isDarkMode ? "text-pink-300 bg-pink-400/10 border-pink-400/20" : "text-blue-700 bg-blue-50 border-blue-200"}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {selectedProject.githubUrl && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors border ${
                    isDarkMode ? "bg-orange-900/40 text-orange-100 hover:bg-orange-800/60 border-orange-700/50" : "bg-gray-100 text-gray-900 hover:bg-gray-200 border-gray-300"
                  }`}
                >
                  <Github className="w-5 h-5" />
                  Source Code
                </motion.a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
