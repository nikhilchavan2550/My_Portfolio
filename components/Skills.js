import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, FiDatabase, FiServer, FiMonitor, FiTool, 
  FiLayers, FiPackage, FiHardDrive, FiTerminal, FiBookOpen
} from 'react-icons/fi';

export default function Skills() {
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
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } }
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FiCode />,
      skills: ["Java", "C++", "Python", "JavaScript", "TypeScript"]
    },
    {
      title: "Backend & Enterprise",
      icon: <FiServer />,
      skills: ["Spring Boot", "JPA", "EclipseLink", "Oracle Database", "MySQL"]
    },
    {
      title: "Frontend & UI",
      icon: <FiMonitor />,
      skills: ["React", "Angular", "Knockout.js", "Oracle JET", "HTML/CSS"]
    },
    {
      title: "DevOps & Tools",
      icon: <FiTool />,
      skills: ["Jenkins", "Git", "Docker", "Maven", "Eclipse", "VS Code"]
    },
    {
      title: "AI & Machine Learning",
      icon: <FiLayers />,
      skills: ["Python", "TensorFlow", "OpenCV", "Pandas", "Scikit-learn"]
    },
    {
      title: "Other Technologies",
      icon: <FiPackage />,
      skills: ["Node.js", "MongoDB", "Postman", "Jupyter Notebook"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1),transparent_70%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-6 text-light/80 max-w-2xl mx-auto">
            Here are the technologies and tools I've worked with. I'm constantly learning and expanding my skillset.
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card"
            >
              <div className="flex items-center mb-6">
                <div className="text-primary text-2xl mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="skill-item"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Progress Bars for Key Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Skill Proficiency</h3>
          
          {[
            { skill: "Java & Spring Boot", level: 90 },
            { skill: "Oracle Technologies", level: 85 },
            { skill: "Frontend Development", level: 80 },
            { skill: "Machine Learning", level: 75 },
            { skill: "DevOps & CI/CD", level: 70 }
          ].map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="mb-4">
              <div className="flex justify-between mb-1">
                <span>{item.skill}</span>
                <span>{item.level}%</span>
              </div>
              <div className="w-full h-2 bg-dark-light rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary to-secondary"
                  initial={{ width: 0 }}
                  animate={{ width: `${item.level}%` }}
                  transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}