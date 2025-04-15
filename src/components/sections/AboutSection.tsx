
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <motion.div 
            className="w-full lg:w-1/3 flex-shrink-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative mx-auto lg:mx-0 w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 glow-border rounded-xl pointer-events-none" />
              
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary" />
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-glow mb-6">About Me</h2>
            
            <div className="glass-card p-6 mb-6 text-foreground">
              <p className="mb-4">
                I'm a passionate Full Stack Developer who loves crafting beautiful, user-friendly web applications. With a keen eye for design and a dedication to clean, efficient code, I enjoy turning complex problems into simple, intuitive solutions.
              </p>
              <p className="mb-4">
                My journey in web development began 5 years ago, and since then I've worked with various technologies across the stack. I specialize in modern JavaScript frameworks like React and Node.js, and I'm always eager to learn new technologies and approaches.
              </p>
              <p>
                When I'm not coding, you'll find me exploring nature trails, experimenting with photography, or diving into a good book. I believe that diverse experiences fuel creativity and problem-solving abilities.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="glass-card p-4"
                whileHover={{ y: -5, boxShadow: "0 0 20px rgba(155, 135, 245, 0.3)" }}
              >
                <h3 className="font-bold text-lg mb-2 text-glow-sm">Fun Facts</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  <li>Coffee enthusiast</li>
                  <li>Amateur photographer</li>
                  <li>Hiking lover</li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="glass-card p-4"
                whileHover={{ y: -5, boxShadow: "0 0 20px rgba(217, 70, 239, 0.3)" }}
              >
                <h3 className="font-bold text-lg mb-2 text-glow-pink">Interests</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  <li>UI/UX Design</li>
                  <li>Web Accessibility</li>
                  <li>AI Integration</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
