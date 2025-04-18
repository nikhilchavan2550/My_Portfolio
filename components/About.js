import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
    <section id="about" className="py-20 bg-dark relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="section-title">About Me</h2>
            <p className="mb-4 text-light/80 leading-relaxed">
              Hello! I'm <span className="highlight">Nikhil Chavan</span>, a passionate Full Stack Developer with expertise in Machine Learning, LLMs, and Generative AI technologies.
            </p>
            <p className="mb-4 text-light/80 leading-relaxed">
              Currently pursuing my Bachelor's degree at Pune Institute of Computer Technology, I combine my strong academic background with practical experience in developing innovative AI solutions and full stack applications.
            </p>
            <p className="mb-6 text-light/80 leading-relaxed">
              I recently completed a Machine Learning internship where I developed an automated attendance system using OpenCV with 95% accuracy. I'm now focused on building and integrating large language models and AI solutions for real-world applications.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-light/80">
              <div className="flex items-center space-x-2">
                <FiMail className="text-primary" />
                <span>nikhil.chavan2550@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiPhone className="text-primary" />
                <span>+91-8766443531</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiMapPin className="text-primary" />
                <span>Pune, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiCalendar className="text-primary" />
                <span>BE (2022 - Present)</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Profile image with design elements */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-secondary opacity-20 blur-2xl"></div>
              <div className="absolute inset-0 border-2 border-primary/30 rounded-xl transform rotate-6"></div>
              <div className="absolute inset-0 border-2 border-secondary/30 rounded-xl transform -rotate-6"></div>
              {/* Profile image */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <img 
                  src="/Images/Photo.jpeg" 
                  alt="Nikhil Chavan" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
