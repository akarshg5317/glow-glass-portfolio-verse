
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, AlertCircle, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("error");
      return;
    }
    
    // Set submitting status
    setFormStatus("submitting");
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormStatus("success");
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setFormStatus("idle");
      }, 3000);
    }, 1500);
  };

  const inputClasses = "w-full bg-transparent border border-border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition";
  
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-glow mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's discuss the details!
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-10 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 glow-border">
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={inputClasses}
                  placeholder="Hello, I'd like to talk about..."
                  required
                ></textarea>
              </div>
              
              <div className="relative">
                <motion.button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-medium px-6 py-3 rounded-lg shadow-glow-sm hover:shadow-glow-md flex items-center justify-center gap-2 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={formStatus === "submitting"}
                >
                  {formStatus === "submitting" ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
                
                {/* Form status messages */}
                {formStatus === "success" && (
                  <motion.div 
                    className="absolute -top-12 left-0 right-0 bg-green-500/20 text-green-400 p-3 rounded-lg flex items-center justify-center gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <CheckCircle className="w-5 h-5" />
                    Message sent successfully!
                  </motion.div>
                )}
                
                {formStatus === "error" && (
                  <motion.div 
                    className="absolute -top-12 left-0 right-0 bg-red-500/20 text-red-400 p-3 rounded-lg flex items-center justify-center gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <AlertCircle className="w-5 h-5" />
                    Please fill out all fields.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="glass-card p-6 h-full flex flex-col">
              <h3 className="text-xl font-bold mb-6 text-glow-sm">Contact Information</h3>
              
              <p className="text-muted-foreground mb-6">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-4 mt-auto">
                <motion.a
                  href="mailto:yourname@example.com"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors p-2 -ml-2"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>yourname@example.com</span>
                </motion.a>
                
                <motion.a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors p-2 -ml-2"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Github className="w-5 h-5" />
                  </div>
                  <span>github.com/yourusername</span>
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors p-2 -ml-2"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span>linkedin.com/in/yourusername</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
