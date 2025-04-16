
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BackgroundPaths } from "@/components/ui/background-paths";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background animated gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
        <BackgroundPaths />
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-rotate-slow" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-glow-pink/20 rounded-full filter blur-3xl opacity-50 animate-rotate-slow" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p 
            className="text-primary text-glow font-medium tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            HELLO, I'M
          </motion.p>
          
          <motion.h1 
            className="text-4xl md:text-7xl font-bold font-display text-glow tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-foreground block">Your Name</span>
            <span className="text-primary text-glow-lg mt-2 block">Full Stack Developer</span>
          </motion.h1>
          
          <motion.p 
            className="max-w-2xl text-muted-foreground text-lg mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Crafting elegant digital experiences with modern web technologies.
            I build responsive, accessible, and performant web applications
            that help businesses grow.
          </motion.p>
          
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium shadow-glow-sm hover:shadow-glow-md transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
