import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "E-commerce Website",
    category: "Web Development",
    image: "https://source.unsplash.com/random/800x600?mobile",
  },
  {
    id: 2,
    name: "Mobile App",
    category: "Mobile Development",
    image: "https://source.unsplash.com/random/800x600?mobile",
  },
  {
    id: 3,
    name: "Blog Platform",
    category: "Web Development",
    image: "https://source.unsplash.com/random/800x600?blog",
  },
  {
    id: 4,
    name: "Portfolio Website",
    category: "Web Design",
    image: "https://source.unsplash.com/random/800x600?portfolio",
  },
  {
    id: 5,
    name: "Task Management App",
    category: "Mobile Development",
    image: "https://source.unsplash.com/random/800x600?task",
  },
  {
    id: 6,
    name: "Restaurant Website",
    category: "Web Design",
    image: "https://source.unsplash.com/random/800x600?restaurant",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-12 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          My Projects
        </h1>
        <div className="mb-8">
          <button
            onClick={() => setFilter("All")}
            className={`mr-4 ${filter === "All" ? "font-bold" : ""}`}
          >
            Tous
          </button>
          <button
            onClick={() => setFilter("Web Development")}
            className={`mr-4 ${
              filter === "Web Development" ? "font-bold" : ""
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => setFilter("Mobile Development")}
            className={`mr-4 ${
              filter === "Mobile Development" ? "font-bold" : ""
            }`}
          >
            Logo
          </button>
          <button
            onClick={() => setFilter("Web Design")}
            className={`mr-4 ${filter === "Web Design" ? "font-bold" : ""}`}
          >
            Web Design
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
