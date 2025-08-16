import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiMapPin, FiPhone, FiBriefcase } from 'react-icons/fi';
import ImageSlider from './ImageSlider';

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
              Hi! I'm <span className="highlight">Nikhil Chavan</span>, a Full Stack Developer passionate about building scalable enterprise applications and exploring emerging technologies.
            </p>
            
            <p className="mb-4 text-light/80 leading-relaxed">
              I graduated from <span className="highlight">Pune Institute of Computer Technology</span> with a Bachelor's degree in Electronics and Telecommunications Engineering. 
              Currently, I am working as an <span className="highlight">Associate Consultant at Oracle Financial Services Software</span>, 
              where I am part of the <span className="highlight">Oracle Banking Digital Experience (OBDX)</span> department. 
              My role involves designing and developing enterprise-level banking solutions using modern full stack technologies.
            </p>
            
            <p className="mb-6 text-light/80 leading-relaxed">
              Beyond my professional role, I am deeply passionate about <span className="highlight">Artificial Intelligence</span>. 
              I am actively learning and experimenting with <span className="highlight">AI agents, MCP servers, and integrating open-source models into real-world applications</span>. 
              My current focus is on understanding the core <span className="highlight">architectures of AI</span>, including <span className="highlight">Self-attention mechanisms</span> and <span className="highlight">large language model (LLM) design</span>. 
              As a dedicated AI enthusiast, I continuously explore research and development opportunities in this field, striving to stay at the forefront of innovation while expanding my expertise.
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
                <FiBriefcase className="text-primary" />
                <span>Oracle - Associate Consultant</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="w-full max-w-md">
              <ImageSlider 
                images={[
                  { src: '/images/me_pho.jpeg', alt: 'Profile Photo' },
                  { src: '/images/building.jpeg', alt: 'Building Project' },
                  { src: '/images/goodies.jpeg', alt: 'Goodies Project' },
                  { src: '/images/presentation.jpeg', alt: 'Presentation' },
                  { src: '/images/imgoff.jpeg', alt: 'Office' }
                ]} 
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
