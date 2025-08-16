import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiCode, FiYoutube, FiPlay, FiX } from 'react-icons/fi';
import { useState } from 'react';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [showVideo, setShowVideo] = useState({
    skillCrafter: false,
    mlExpert: false,
    homeLoanApp: false
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

  const toggleVideo = (project) => {
    setShowVideo(prev => ({
      ...prev,
      [project]: !prev[project]
    }));
  };

  const projects = [
    {
      title: "Home Loan App",
      description: "A comprehensive home loan management system with a microservices architecture featuring user authentication, loan application processing, EMI calculation, and admin dashboards.",
      image: "/Images/project_pho.jpg",
      youtubeId: "LyEy0jTBzfs",
      videoId: "homeLoanApp",
      technologies: ["Spring Boot", "Oracle Database", "Microservices", "JPA", "Hibernate"],
      points: [
        "User registration & login with Google OAuth",
        "Loan application submission with document upload",
        "EMI calculator & schedule generation",
        "Real-time application status updates"
      ],
      github: "https://github.com/nikhilchavan2550/Home-loan-app.git",
      demo: "#"
    },
    
    {
      title: "SkillCrafter",
      description: "A skill-sharing platform enabling profile creation, skill exchange, and real-time chat via Socket.io.",
      image: "/Images/SkillCrafter.jpeg",
      // videoPath: "/images/Skill_Crafter.mp4", // Local video removed in favor of YouTube
      youtubeId: "nUPFp16Zx04", // Linked to the correct YouTube video
      videoId: "skillCrafter",
      technologies: ["React", "Node.js", "MongoDB", "JWT", "Socket.io"],
      points: [
        "Integrated JWT authentication and Socket.io for secure real-time chat", 
        "Enhanced functionality with React hooks, MongoDB aggregation, and Express middleware for scalability"
      ],
      github: "https://github.com/nikhilchavan2550/Skill_Share",
      demo: "#"
    },
    {
      title: "ML Expert",
      description: "An end-to-end machine learning platform with automated data processing, model training, and evaluation.",
      image: "/Images/MLForge.jpeg",
      // videoPath: "/images/Ml_Expert.mp4", // Local video removed in favor of YouTube
      youtubeId: "a8X0Z6L3nvQ", // Linked to the correct YouTube video
      videoId: "mlExpert",
      technologies: ["Python", "Streamlit", "XGBoost", "Keras", "Pandas", "Matplotlib"],
      points: [
        "Automated data ingestion and preprocessing using Pandas with visual EDA powered by Matplotlib",
        "Integrated and fine-tuned diverse ML models using XGBoost and Keras, with ML chat assistance using Ollama"
      ],
      github: "https://github.com/nikhilchavan2550/ML-XPERT",
      demo: "#"
    },
    {
      title: "HealthConnect",
      description: "A healthcare platform for real-time doctor availability, appointment booking, and secure messaging.",
      image: "/Images/Healthconnect.jpeg",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      points: [
        "Developed a healthcare platform for real-time doctor availability and appointment booking",
        "Designed an intuitive scheduler that streamlines doctor consultations and patient communications"
      ],
      github: "https://github.com/nikhilchavan2550/Remote-Patient-Healthcare-Monitoring",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-light relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(14,165,233,0.15),transparent_70%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-6 text-light/80 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents my skills and experience in different areas.
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              style={{ direction: index % 2 === 1 ? 'rtl' : 'ltr' }}
            >
              {/* Project Image/Display */}
              <div style={{ direction: 'ltr' }} className="bg-dark rounded-lg overflow-hidden relative group">
                {showVideo[project.videoId] ? (
                  <div className="w-full overflow-hidden rounded-lg">
                    {project.youtubeId ? (
                      // YouTube embed
                      <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                        <iframe
                          src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1`}
                          title={project.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute top-0 left-0 w-full h-full"
                        ></iframe>
                      </div>
                    ) : (
                      // Direct video file
                      <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                        <video 
                          src={project.videoPath} 
                          controls 
                          className="absolute top-0 left-0 w-full h-full object-cover"
                          autoPlay
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )}
                    <button 
                      onClick={() => toggleVideo(project.videoId)}
                      className="absolute top-2 right-2 bg-dark/80 text-light p-2 rounded-full z-10"
                    >
                      <FiX className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <div className="w-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden rounded-lg">
                    {project.image ? (
                      <div className="relative w-full pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="absolute top-0 left-0 w-full h-full object-contain" 
                        />
                      </div>
                    ) : (
                      <div className="text-6xl text-primary/30 font-bold py-16">{project.title.substring(0, 2)}</div>
                    )}
                    <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-light hover:text-primary transition-colors duration-300 bg-dark/50 p-3 rounded-full"
                      >
                        <FiGithub className="w-6 h-6" />
                      </a>
                      {(project.videoPath || project.youtubeId) && (
                        <button
                          onClick={() => toggleVideo(project.videoId)}
                          className="text-light hover:text-primary transition-colors duration-300 bg-dark/50 p-3 rounded-full"
                        >
                          <FiPlay className="w-6 h-6" />
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Project Info */}
              <div style={{ direction: 'ltr' }} className="space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-light/80">{project.description}</p>
                
                <ul className="space-y-2 text-light/80">
                  {project.points?.map((point, i) => (
                    <li key={i} className="pl-4 relative before:absolute before:content-[''] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full before:left-0 before:top-2">
                      {point}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-dark rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4 flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline text-sm flex items-center space-x-2"
                  >
                    <FiGithub />
                    <span>View Code</span>
                  </a>
                  {(project.videoPath || project.youtubeId) && (
                    <button
                      onClick={() => toggleVideo(project.videoId)}
                      className="btn btn-primary text-sm flex items-center space-x-2"
                    >
                      {project.youtubeId ? <FiYoutube /> : <FiPlay />}
                      <span>Watch Demo</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Achievements Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Achievements & Publications</h3>
          
          <motion.div variants={itemVariants} className="card border-t-4 border-primary">
            <h4 className="text-xl font-semibold mb-2">Research Publication</h4>
            <p className="text-light/80 mb-4">
              Published a research paper on SMEG Signal Detection and Analysis for Prosthetic Arm Control at SmartCom India.
            </p>
            
            <h4 className="text-xl font-semibold mb-2 mt-6">Competitions</h4>
            <p className="text-light/80">
              Won several state and national-level paper presentation competitions, demonstrating strong communication and technical research skills.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="card border-t-4 border-secondary mt-8">
            <h4 className="text-xl font-semibold mb-4">Certifications</h4>
            <ul className="space-y-2 text-light/80">
              <li className="pl-4 relative before:absolute before:content-[''] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full before:left-0 before:top-2">
                SQL Mathematical Functions - Coursera Project Network
              </li>
              <li className="pl-4 relative before:absolute before:content-[''] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full before:left-0 before:top-2">
                Introduction to Generative AI - Google Cloud
              </li>
              <li className="pl-4 relative before:absolute before:content-[''] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full before:left-0 before:top-2">
                Introduction to Large Language Models - Google Cloud
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}