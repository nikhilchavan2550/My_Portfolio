import { motion } from 'framer-motion';
import TypewriterEffect from 'typewriter-effect';
import { FiArrowDown, FiGithub, FiLinkedin, FiCode } from 'react-icons/fi';

export default function Hero() {
  const socialLinks = [
    { icon: <FiGithub />, href: "https://github.com/nikhilchavan2550", label: "GitHub" },
    { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/nikhil-chavan-a42006218/", label: "LinkedIn" },
    { icon: <FiCode />, href: "https://leetcode.com/u/Nikhil_chavan11/", label: "LeetCode" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative pt-16 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-dark z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-xl md:text-2xl text-primary mb-2 font-mono"
          >
            Hello, I'm
          </motion.h2>
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            Nikhil Chavan
          </motion.h1>
          <motion.div 
            variants={itemVariants}
            className="text-xl md:text-2xl text-light/80 mb-8 font-mono h-12"
          >
            <TypewriterEffect
              options={{
                strings: [
                  'Full Stack Developer',
                  'Machine Learning Engineer',
                  'LLM & GenAI Enthusiast',
                  'AI Solutions Architect'
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex space-x-4 mb-12"
          >
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex space-x-6 mb-16"
          >
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-2xl hover:text-primary transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
          
          <motion.a
            href="#about"
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-primary text-2xl"
            >
              <FiArrowDown />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}