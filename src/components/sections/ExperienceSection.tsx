
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    company: "Tech Innovations Inc.",
    position: "Senior Frontend Developer",
    duration: "2020 - Present",
    location: "San Francisco, CA",
    responsibilities: [
      "Lead a team of 5 frontend developers, mentoring junior members",
      "Architected and developed the company's main product using React, TypeScript, and Tailwind CSS",
      "Implemented CI/CD pipelines that reduced deployment time by 40%",
      "Collaborated with designers to improve UI/UX, resulting in a 25% increase in user engagement"
    ]
  },
  {
    company: "WebSolutions Agency",
    position: "Full Stack Developer",
    duration: "2018 - 2020",
    location: "Boston, MA",
    responsibilities: [
      "Developed full-stack applications using MERN stack for various clients",
      "Created RESTful APIs that served data to frontend applications",
      "Implemented responsive designs that worked across all devices",
      "Optimized existing applications, improving load time by 30%"
    ]
  },
  {
    company: "Digital Creations",
    position: "Junior Web Developer",
    duration: "2016 - 2018",
    location: "Remote",
    responsibilities: [
      "Built and maintained websites for small businesses using HTML, CSS, JavaScript",
      "Implemented responsive designs using Bootstrap and custom CSS",
      "Ensured websites were SEO optimized and accessible",
      "Collaborated with design team to implement visual elements"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-glow mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in the tech industry.
          </p>
        </motion.div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div 
                className="glass-card overflow-hidden"
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 0 20px rgba(155, 135, 245, 0.3)",
                  transition: { duration: 0.2 }
                }}
              >
                {/* Company & role header */}
                <div className="p-6 border-b border-border">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-glow-sm">{exp.position}</h3>
                      <h4 className="text-lg font-medium text-primary mt-1">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Responsibilities */}
                <div className="p-6">
                  <h5 className="flex items-center text-foreground font-medium mb-3">
                    <Briefcase className="w-4 h-4 mr-2 text-primary" />
                    Responsibilities
                  </h5>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-start text-muted-foreground"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 + (i * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
