
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

interface Education {
  institution: string;
  degree: string;
  duration: string;
  description: string;
}

const educationList: Education[] = [
  {
    institution: "University of Technology",
    degree: "Master of Computer Science",
    duration: "2018 - 2020",
    description: "Specialized in web development and distributed systems. Graduated with distinction.",
  },
  {
    institution: "Digital Design Institute",
    degree: "UI/UX Design Certification",
    duration: "2017 - 2018",
    description: "Focused on user interface design principles and user experience methodologies.",
  },
  {
    institution: "State University",
    degree: "Bachelor of Science in Computer Engineering",
    duration: "2014 - 2018",
    description: "Studied computer architecture, algorithms, and software engineering fundamentals.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-glow mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and relevant qualifications.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-border md:-translate-x-px"></div>

          {educationList.map((item, index) => (
            <motion.div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? "md:pr-12 md:text-right md:mr-auto md:ml-0" : "md:pl-12 md:text-left md:ml-auto md:mr-0"
              } w-full md:w-1/2`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Timeline dot */}
              <div 
                className={`absolute top-5 ${
                  index % 2 === 0 ? "left-0 md:left-auto md:right-0 md:translate-x-1/2" : "left-0 md:-translate-x-1/2"
                } w-5 h-5 rounded-full bg-primary shadow-glow-sm animate-glow-pulse z-10`}
              ></div>

              <motion.div 
                className="glass-card p-6"
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 0 20px rgba(155, 135, 245, 0.3)",
                  transition: { duration: 0.2 }
                }}
              >
                <h3 className="text-xl font-bold mb-1 text-glow-sm">{item.degree}</h3>
                <h4 className="text-lg font-medium text-primary mb-2">{item.institution}</h4>
                
                <div className="flex items-center mb-3 text-sm text-muted-foreground gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{item.duration}</span>
                </div>
                
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
