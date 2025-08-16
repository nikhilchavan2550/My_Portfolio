import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiBookOpen, FiBriefcase } from 'react-icons/fi';

export default function Experience() {
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

  const education = [
    {
      title: "BE Electronics and Telecommunications",
      institution: "Pune Institute of Computer Technology",
      duration: "2022 - 2025",
      details: "CGPA: 8.31"
    },
    {
      title: "Mechanical Engineering",
      institution: "Government Polytechnic Pune",
      duration: "2019 - 2022",
      details: "Percentage: 93.53%"
    }
  ];

  const workExperience = [
    {
      title: "Associate Consultant",
      company: "Oracle",
      duration: "June 2025 - Present",
      achievements: [
        "Working in Oracle Banking Digital Experience department as a Full Stack Java Spring Boot Developer",
        "Developing and maintaining enterprise-level banking applications using Java, Spring Boot, and Oracle technologies"
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "Mitu Skillologies",
      duration: "Jan 2024 - Mar 2024",
      achievements: [
        "Developed an automated attendance system using OpenCV (Haar Cascades) for robust face detection, achieving 95% accuracy as measured against a manually annotated dataset of 1000+ images.",
        "Optimized detection to process over 50 live feeds with latency <1s and integrated SQLite to reduce data retrieval times by 65%."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark-light relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_70%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* Education Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-8">
              <FiBookOpen className="text-3xl text-primary mr-4" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card relative border-l-4 border-primary pl-6"
                >

                  <h4 className="text-xl font-semibold">{item.title}</h4>
                  <p className="text-primary font-medium mb-1">{item.institution}</p>
                  <div className="flex items-center text-light/70 mb-2">
                    <FiCalendar className="mr-2" />
                    <span>{item.duration}</span>
                  </div>
                  <p className="text-light/80">{item.details}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Work Experience Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-8">
              <FiBriefcase className="text-3xl text-primary mr-4" />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            
            <div className="space-y-8">
              {workExperience.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card relative border-l-4 border-secondary pl-6"
                >
                  
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                  <p className="text-primary font-medium mb-1">{item.company}</p>
                  <div className="flex items-center text-light/70 mb-4">
                    <FiCalendar className="mr-2" />
                    <span>{item.duration}</span>
                  </div>
                  <ul className="space-y-2 text-light/80">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="pl-4 relative before:absolute before:content-[''] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full before:left-0 before:top-2">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}