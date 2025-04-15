
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern, animated portfolio website built with React, Tailwind CSS and Framer Motion.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with user authentication, payment processing and order management.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["React", "Firebase", "Redux", "Material UI"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather data based on location.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["React", "OpenWeather API", "Chart.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      className="glass-card h-full overflow-hidden group transition-all duration-300 hover:shadow-glow-lg dark:hover:shadow-glow-pink-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="overflow-hidden h-48 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold font-display mb-2 text-glow-sm">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span 
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 mt-auto">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-secondary hover:bg-primary/20 text-foreground transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-secondary hover:bg-primary/20 text-foreground transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-glow mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each one represents a unique challenge and solution.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
