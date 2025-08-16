import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiCode } from 'react-icons/fi';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = React.useRef(null);

  function handleFormResponse(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    fetch('https://formspree.io/f/mrbpwawo', {
      method: 'POST',
      body: new FormData(formRef.current),
      headers: {
        Accept: 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          setSubmitMessage('Thank you! Your message has been sent.');
          formRef.current.reset();
        } else {
          setSubmitMessage('Oops! There was a problem submitting your form.');
        }
      })
      .catch(() => {
        setSubmitMessage('Oops! There was a problem submitting your form.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }
  
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
    <section id="contact" className="py-20 bg-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.15),transparent_70%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-6 text-light/80 max-w-2xl mx-auto">
            Feel free to contact me for collaboration opportunities, AI projects, or any questions
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className="card h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-full text-primary">
                    <FiMail />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-light/80">nikhil.chavan2550@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-full text-primary">
                    <FiPhone />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-light/80">+91-8766443531</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-full text-primary">
                    <FiMapPin />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-light/80">Pune, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium mb-4">Find me on</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/nikhilchavan2550" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-dark p-3 rounded-full text-light/80 hover:text-primary transition-colors duration-300"
                  >
                    <FiGithub />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/nikhil-chavan-a42006218/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-dark p-3 rounded-full text-light/80 hover:text-primary transition-colors duration-300"
                  >
                    <FiLinkedin />
                  </a>
                  <a 
                    href="https://leetcode.com/u/Nikhil_chavan11/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-dark p-3 rounded-full text-light/80 hover:text-primary transition-colors duration-300"
                  >
                    <FiCode />
                  </a>
                  <a 
                    href="https://www.codechef.com/users/nikhilchavan35" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-dark p-3 rounded-full text-light/80 hover:text-primary transition-colors duration-300"
                  >
                    <span className="font-bold">CC</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="card">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              
              {submitMessage && (
                <div className="mb-6 bg-primary/20 py-3 px-4 rounded-md text-primary">
                  {submitMessage}
                </div>
              )}
              
              <form ref={formRef} onSubmit={handleFormResponse} action="https://formspree.io/f/mrbpwawo" method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-dark border border-dark-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-light"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-dark border border-dark-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-light"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block mb-2 text-sm">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-dark border border-dark-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-light"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 bg-dark border border-dark-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-light resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary flex items-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <FiSend />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}