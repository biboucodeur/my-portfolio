import { motion } from "framer-motion";
import {
  Code,
  Book,
  Coffee,
  Briefcase,
  Award,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import aw from "../assets/abibou2.png";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-12 bg-gray-100"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
          Apropos de moi
        </h1>

        {/* Profile Section */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src={aw}
                alt="Profile"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Designer Graphic
              </div>
              <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
                Abibou Wade
              </h2>
              <p className="mt-2 text-gray-500">
                Passionate web developer with 5 years of experience in creating
                beautiful and functional websites. I love turning complex
                problems into simple, beautiful, and intuitive designs.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Compètences Techniques
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Skill icon={<Code size={24} />} name="Frontend Development" />
            <Skill icon={<Coffee size={24} />} name="Backend Development" />
            <Skill icon={<Book size={24} />} name="UI/UX Design" />
            <Skill icon={<Briefcase size={24} />} name="Project Management" />
            <Skill icon={<Award size={24} />} name="Agile Methodologies" />
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Expériences</h2>
          <div className="space-y-4">
            <ExperienceItem
              title="Graphiste"
              company="Star Group."
              period="2020 - Present"
              description="Lead developer for multiple high-profile web applications, mentoring junior developers, and implementing best practices."
            />
            <ExperienceItem
              title="Community manager"
              company="Agir Business Center"
              period="2018 - 2020"
              description="Developed and maintained various client websites, focusing on responsive design and performance optimization."
            />
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Diplome et certification
          </h2>
          <div className="space-y-4">
            <EducationItem
              degree="Master 1 Développement web fullstack et mobile (en cours)"
              school="Université Numérique Cheikh Hamidou Kane (UNCHK)"
              year="2024"
            />
          </div>
          <div className="space-y-4">
            <EducationItem
              degree="Licence Multimédia Internet et Communication"
              school="Université Numérique Cheikh Hamidou Kane (UNCHK)"
              year="2023"
            />
            <EducationItem
              degree="Full Stack Web Development Bootcamp"
              school="Lycée Abdoulaye Sadji"
              year="2019"
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">
            Me suivre
          </h2>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">GitHub</span>
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:abibouwade2298@gmail.com"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Email</span>
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skill = ({ icon, name }) => (
  <div className="flex items-center space-x-2">
    <div className="text-indigo-500">{icon}</div>
    <span>{name}</span>
  </div>
);

const ExperienceItem = ({ title, company, period, description }) => (
  <div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-indigo-500">{company}</p>
    <p className="text-sm text-gray-500">{period}</p>
    <p className="mt-1">{description}</p>
  </div>
);

const EducationItem = ({ degree, school, year }) => (
  <div>
    <h3 className="text-lg font-semibold">{degree}</h3>
    <p className="text-indigo-500">{school}</p>
    <p className="text-sm text-gray-500">{year}</p>
  </div>
);

export default About;
