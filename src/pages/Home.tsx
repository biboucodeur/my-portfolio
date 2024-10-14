import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Layout,
  Server,
  User,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";
import ad from "../assets/ad.jpg";
import biddew from "../assets/ba.jpg";
import etoile from "../assets/ep.jpg";
import "../index.css";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100"
    >
      {/* Hero Section */}
      <section className="bgc text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Bienvenue dans mon Portfolio
          </motion.h1>
          <motion.p
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8"
          >
            Je suis un développeur web passionné qui crée des sites web beaux et
            fonctionnels.
          </motion.p>
          <Link
            to="/projects"
            className="bg-white text-blue-600 py-2 px-6 rounded-full font-bold hover:bg-blue-100 transition duration-300"
          >
            Voir mes réalisations
          </Link>
        </div>
      </section>

      {/* Personal Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <User size={48} className="mx-auto text-blue-600 mb-4" />
            <h2 className="text-3xl font-bold mb-4">A propos de moi</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Salut, je suis [Abibou Wade]. Avec plus de [1] ans d'expérience
              dans le développement Web, je me spécialise dans la création de
              sites Web réactifs et conviviaux. Ma passion consiste à
              transformer des problèmes complexes en conceptions simples, belles
              et intuitives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Mes services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <SkillCard
              icon={<Code size={40} />}
              title="Développement Web"
              description="Création d'applications Web réactives et performantes à l'aide de React, Node.js, etc."
            />
            <SkillCard
              icon={<Layout size={40} />}
              title="UI/UX Design"
              description="Créer des interfaces utilisateur intuitives et visuellement attrayantes pour une expérience utilisateur exceptionnelle."
            />
            <SkillCard
              icon={<Server size={40} />}
              title="Développement Backend"
              description="Développer des applications et API côté serveur robustes pour alimenter les applications Web et mobiles."
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Briefcase size={48} className="mx-auto text-blue-600 mb-4" />
            <h2 className="text-3xl font-bold mb-8">Mes projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <ProjectCard
                title="AAD Pharma"
                description="A full-featured online store built with React and Node.js"
                image={ad}
              />
              <ProjectCard
                title="Biddew Academy"
                description="A sleek and responsive portfolio for a professional photographer"
                image={biddew}
              />
              <ProjectCard
                title="Etoile Production"
                description="A user-friendly app to help teams organize and track their projects"
                image={etoile}
              />
            </div>
            <Link
              to="/projects"
              className="inline-block mt-8 bg-blue-600 text-white py-2 px-6 rounded-full font-bold hover:bg-blue-700 transition duration-300"
            >
              Voir les projets
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à démarrer votre projet?
          </h2>
          <p className="text-xl mb-8">
            Travaillons ensemble pour donner vie à vos idées!
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 py-2 px-6 rounded-full font-bold hover:bg-blue-100 transition duration-300 inline-flex items-center"
          >
            Contactez-moi <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

const SkillCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-lg shadow-md text-center"
  >
    <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const ProjectCard = ({ title, description, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

export default Home;
