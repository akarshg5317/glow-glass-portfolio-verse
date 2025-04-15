
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p 
            className="text-muted-foreground text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} Your Name. All rights reserved.
          </motion.p>
          
          <motion.p 
            className="flex items-center gap-2 text-muted-foreground text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Made with 
            <motion.span 
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "mirror"
              }}
            >
              <Heart className="w-4 h-4 text-red-500" fill="#ef4444" />
            </motion.span>
            using React and Tailwind
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
