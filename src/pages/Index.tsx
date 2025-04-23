import { useEffect, useState, useRef } from "react";
import {
  Linkedin,
  Github,
  Mail,
  Phone,
  ArrowDown,
  ArrowUp,
  ExternalLink,
  Moon,
  Sun,
  Code,
  Briefcase,
  GraduationCap,
  Layers,
  Terminal,
  UserCircle,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MobileNav from "@/components/MobileNav";
import SectionTitle from "@/components/SectionTitle";
import image from "@/assets/images/dinesh-rao.jpg";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const sectionsRef = useRef({});

  // Initialize observer for sections
  useEffect(() => {
    const options = {
      threshold: 0.2,
      rootMargin: "-80px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observe all sections
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
      sectionsRef.current[section.id] = section;
    });

    return () => {
      document.querySelectorAll("section[id]").forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle theme (dark/light) mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const getNavItemClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId;
  
    return `px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
      isActive
        ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300"
        : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-100 dark:text-gray-300 dark:hover:text-indigo-300 dark:hover:bg-indigo-900/20"
    }`;
  };
  

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    },
  };

  // Get icon for section
  const getSectionIcon = (sectionId) => {
    switch(sectionId) {
      case "home": return <UserCircle size={16} />;
      case "about": return <UserCircle size={16} />;
      case "experience": return <Briefcase size={16} />;
      case "education": return <GraduationCap size={16} />;
      case "projects": return <Layers size={16} />;
      case "skills": return <Terminal size={16} />;
      case "contact": return <MessageCircle size={16} />;
      default: return null;
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Header/Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 backdrop-blur-md ${
          isScrolled 
            ? darkMode 
              ? "bg-gray-900/90 shadow-lg shadow-indigo-500/10" 
              : "bg-white/90 shadow-md"
            : darkMode 
              ? "bg-transparent" 
              : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          <motion.a 
            href="/" 
            className="text-2xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-indigo-500">Dinesh</span>
            <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}> Portfolio</span>
          </motion.a>
          
          <motion.nav 
            className="hidden md:flex space-x-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {["home", "about", "experience", "education", "projects", "skills", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={getNavItemClasses(section)}
              >
                <div className="flex items-center space-x-1">
                  {getSectionIcon(section)}
                  <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                </div>
              </button>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-2 p-2 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-indigo-600" />}
            </button>
          </motion.nav>
          
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-indigo-600" />}
            </button>
            <MobileNav
              activeSection={activeSection}
              scrollToSection={scrollToSection}
              darkMode={darkMode}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center relative overflow-hidden"
        >
          <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-indigo-950/40 to-gray-900' : 'bg-gradient-to-br from-indigo-100/40 to-white/60'} -z-10`} />
          <div className="absolute inset-0 -z-20">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute left-1/4 top-1/4 w-64 h-64 rounded-full bg-indigo-500 filter blur-3xl animate-blob"></div>
              <div className="absolute right-1/4 bottom-1/3 w-80 h-80 rounded-full bg-purple-500 filter blur-3xl animate-blob animation-delay-2000"></div>
              <div className="absolute left-1/3 bottom-1/4 w-72 h-72 rounded-full bg-blue-500 filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
            <motion.div 
              className="order-2 md:order-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                variants={fadeInUp}
              >
                <span className={`${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Hello, I'm </span>
                <span className="text-indigo-500">Dinesh Rao</span>
              </motion.h1>
              
              <motion.h2 
                className="text-xl md:text-2xl font-medium mb-6 text-indigo-400"
                variants={fadeInUp}
              >
                Full Stack Developer
              </motion.h2>
              
              <motion.p 
                className={`mb-8 md:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                variants={fadeInUp}
              >
                I am a Full Stack Developer with over 2 years of experience in
                building web applications. My expertise includes Laravel(PHP
                Framework), React.js, Node.js, and various databases.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-3"
                variants={fadeInUp}
              >
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  Contact Me
                </Button>
                <Button
                  onClick={() => scrollToSection("projects")}
                  variant="outline"
                  className={`border-indigo-500 text-indigo-500 hover:bg-indigo-500/10 ${darkMode ? 'hover:text-indigo-300' : 'hover:text-indigo-700'}`}
                >
                  View Projects
                </Button>
              </motion.div>
              
              <motion.div 
                className="flex space-x-4 mt-8"
                variants={fadeInUp}
              >
                <motion.a
                  href="https://www.linkedin.com/in/dinesh-rao-921905199/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Linkedin size={24} />
                  <span className="sr-only">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://github.com/dineshrao275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}
                  whileHover={{ scale: 1.1 }}
                >
                  <Github size={24} />
                  <span className="sr-only">GitHub</span>
                </motion.a>
                <motion.a
                  href="mailto:dineshrao275@gmail.com"
                  className="text-red-400 hover:text-red-300 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Mail size={24} />
                  <span className="sr-only">Email</span>
                </motion.a>
                <motion.a
                  href="tel:8290667849"
                  className="text-green-400 hover:text-green-300 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Phone size={24} />
                  <span className="sr-only">Phone</span>
                </motion.a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="order-1 md:order-2 flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <motion.div 
                  animate={pulseAnimation}
                  className={`absolute inset-0 rounded-full ${darkMode ? 'bg-indigo-600/20' : 'bg-indigo-500/20'}`} 
                />
                <motion.div 
                  className={`absolute inset-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} overflow-hidden shadow-xl`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <img
                    src={image}
                    alt="Dinesh Rao"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.button
              onClick={() => scrollToSection("about")}
              className={`flex items-center justify-center w-10 h-10 rounded-full ${darkMode ? 'bg-gray-800 shadow-lg shadow-indigo-500/20' : 'bg-white shadow-md'} hover:shadow-lg transition-shadow`}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="text-indigo-500" size={20} />
            </motion.button>
          </motion.div>
        </section>

        {/* About Section */}
        <section 
          id="about" 
          className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4">
            <SectionTitle title="About" highlight="Me" darkMode={darkMode} />
            <motion.div 
              className={`max-w-3xl mx-auto ${darkMode ? 'bg-gray-800/50 shadow-lg shadow-indigo-500/10' : 'bg-white shadow-lg'} rounded-xl p-8 backdrop-blur-sm`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <motion.p className={`mb-6 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} variants={fadeIn}>
                I'm a Full Stack Developer based in Indore, India, with over 2
                years of professional experience in building dynamic and
                responsive web applications. I specialize in both front-end and
                back-end development, with expertise in technologies like
                ReactJS, Node.js, Laravel, and MySQL.
              </motion.p>
              <motion.p className={`mb-6 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} variants={fadeIn}>
                Currently working at Sofmen Technologies, I've contributed to
                several real-world projects including Bumble Roofing, Franchisee
                Management System, and Wallaby Windows & Koala Insulation, where
                I developed scalable web interfaces, integrated secure RESTful
                APIs, and optimized backend performance.
              </motion.p>
              <motion.p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} variants={fadeIn}>
                I'm passionate about continuous learning, exploring emerging
                technologies, and solving complex problems with scalable, secure
                solutions. When I'm not coding, I enjoy contributing to
                open-source projects and staying active in the developer
                community.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section 
          id="experience" 
          className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4">
            <SectionTitle title="Work" highlight="Experience" darkMode={darkMode} />
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div 
                className={`relative border-l-2 border-indigo-500 pl-8 pb-8 ml-4 ${darkMode ? 'bg-gray-800/50 shadow-lg shadow-indigo-500/10' : 'bg-white/50 shadow-lg'} rounded-xl p-6 backdrop-blur-sm`}
                variants={fadeInUp}
              >
                <motion.div 
                  className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[9px] top-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                />
                <div className="mb-6">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-indigo-400">
                      Full Stack Developer
                    </h3>
                    <Badge className="bg-indigo-600 text-white">
                      Sofmen Technologies
                    </Badge>
                  </div>
                  <p className={`italic mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Mar 2023 - Present
                  </p>
                  <motion.div 
                    className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    variants={staggerContainer}
                  >
                    {[
                      "Developed and maintained efficient, reusable, and reliable code for web applications.",
                      "Collaborated with cross-functional teams to design, develop, and test new features.",
                      "Built responsive user interfaces using modern JavaScript frameworks.",
                      "Implemented server-side logic using Laravel.",
                      "Worked with database like MySQL for data storage and retrieval."
                    ].map((item, index) => (
                      <motion.p key={index} variants={fadeIn}>
                        • {item}
                      </motion.p>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section 
          id="education" 
          className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4">
            <SectionTitle title="Education &" highlight="Certifications" darkMode={darkMode} />
            <motion.div 
              className="max-w-4xl mx-auto grid gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Card className={`overflow-hidden ${darkMode ? 'bg-gray-800/50 border-gray-700 shadow-lg shadow-indigo-500/10' : 'bg-white shadow-lg'} rounded-xl backdrop-blur-sm transition-all duration-300 hover:shadow-xl`}>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-indigo-400">
                        Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal (M.P.)
                      </h3>
                    </div>
                    <p className={`italic mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Master of Computer Application • Computer Science • 2021 -
                      2023
                    </p>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Completed my Master degree with a focus on computer science.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className={`overflow-hidden ${darkMode ? 'bg-gray-800/50 border-gray-700 shadow-lg shadow-indigo-500/10' : 'bg-white shadow-lg'} rounded-xl backdrop-blur-sm transition-all duration-300 hover:shadow-xl`}>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-indigo-400">
                        Mohanlal Sukhadia University, Udaipur (Raj.)
                      </h3>
                    </div>
                    <p className={`italic mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Bachelor of Computer Application • Computer Science • 2018 -
                      2021
                    </p>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Studied Computer Science with a focus on software
                      development and web technologies.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className={`overflow-hidden ${darkMode ? 'bg-gray-800/50 border-gray-700 shadow-lg shadow-indigo-500/10' : 'bg-white shadow-lg'} rounded-xl backdrop-blur-sm transition-all duration-300 hover:shadow-xl`}>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-indigo-400">
                        Certifications
                      </h3>
                    </div>
                    <motion.div 
                      className="space-y-4 mt-4"
                      variants={staggerContainer}
                    >
                      {[
                        {
                          title: "Python Basics - IIT Bombay",
                          date: "May 2022",
                          url: "https://drive.google.com/drive/u/0/folders/1dalGJXqyOBlt36fm04wi9w80UZp803Kz"
                        },
                        {
                          title: "C++ Basics - IIT Bombay",
                          date: "Jan 2022",
                          url: "https://drive.google.com/drive/u/0/folders/1dalGJXqyOBlt36fm04wi9w80UZp803Kz"
                        },
                        {
                          title: "C Basics - IIT Bombay",
                          date: "Jan 2022",
                          url: "https://drive.google.com/drive/u/0/folders/1dalGJXqyOBlt36fm04wi9w80UZp803Kz"
                        },
                        {
                          title: "ReactJS Full Course – Ypsilon IT Solutions",
                          date: "Jan 2022",
                          url: "https://drive.google.com/drive/u/0/folders/1dalGJXqyOBlt36fm04wi9w80UZp803Kz"
                        }
                      ].map((cert, index) => (
                        <motion.div key={index} variants={fadeIn}>
                          <h4 className="font-medium text-indigo-400">
                            <a
                              href={cert.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center hover:text-indigo-300 transition-colors"
                            >
                              {cert.title}
                              <ExternalLink size={14} className="ml-1" />
                            </a>
                          </h4>
                          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} italic`}>
                            {cert.date}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section 
          id="projects" 
          className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4">
            <SectionTitle title="Featured" highlight="Projects" darkMode={darkMode} />
            <motion.div 
              className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {[
                {
                  title: "Bumble Roofing",
                  url: "http://bumbleroofing.com/",
                  description: "I developed the official website for Bumble Roofing using Laravel, creating a robust and user-friendly platform that showcases their wide range of roofing services, including roof replacement, repairs, inspections, and commercial solutions. The site highlights their 60+ years of combined experience and over 2,700 successful projects, while offering seamless features like free quote requests, service area details, and customer-friendly navigation.",
                  skills: ["Laravel", "Javascript", "Python", "JQuery", "AJAX", "Bootstrap", "HTML", "CSS", "PHP","MySQL","Third Party API"]
                },
                {
                  title: "Wallaby Windows",
                  description: "Wallaby Windows, established in 2021 and headquartered in Melbourne, Florida, is a window and door replacement company operating through a network of local franchise partners across multiple U.S. states. Acquired by Empower Brands in April 2023, Wallaby offers a variety of premium impact and non-impact replacement windows and doors, including styles like awning, casement, sliding, and French doors.",
                  skills: ["Laravel", "Javascript", "JQuery", "AJAX", "Bootstrap", "HTML", "CSS", "PHP","MySQL","Third Party API"]
                },
                {
                  title: "Koala Insulation",
                  description: "Koala Insulation is a U.S.-based insulation services company founded in 2018 and headquartered in Melbourne, Florida. Operating through a franchise model, it has expanded to over 100 locations across more than 40 states. Koala offers a comprehensive range of residential and commercial insulation solutions, including spray foam, blown-in, batt insulation, air sealing, crawl space encapsulation, insulation removal, and solar attic fan installations.",
                  skills: ["Laravel", "JavaScript","JQuery","AJAX","Bootstrap","HTML","CSS","PHP"]
                },
                {
                  title: "Faculty Feedback for Teaching and Learning",
                  date: "2023",
                  description: "I developed the FFTL (Faculty Feedback on Teaching and Learning) system for Shri Vaishnav Institute of Management, Indore (M.P.) to digitize and streamline the process of collecting student feedback on faculty performance. Built using Laravel and MySQL, the application provides a secure and user-friendly interface for students, faculty, and administrators.",
                  skills: ["JavaScript", "Laravel", "MySQL","AJAX","Bootstrap","jQuery","HTML","CSS","PHP"],
                },
              ].map((project, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className={`overflow-hidden h-full ${darkMode ? 'bg-gray-800/50 border-gray-700 shadow-lg shadow-indigo-500/10' : 'bg-white shadow-lg'} rounded-xl backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
                    <CardContent className="p-6 h-full flex flex-col">
                      <h3 className="text-xl font-bold text-indigo-400 mb-2 group">
                        {project.url ? (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center hover:text-indigo-300 transition-colors"
                          >
                            {project.title}
                            <ExternalLink size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        ) : (
                          project.title
                        )}
                      </h3>
                      {project.date && (
                        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} italic mb-4`}>
                          {project.date}
                        </p>)}
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4 flex-grow`}>
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.skills.map((skill, idx) => (
                          <Badge key={idx} className="bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section 
          id="skills" 
          className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4">
            <SectionTitle title="Technical" highlight="Skills" darkMode={darkMode} />
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <Card className={`overflow-hidden ${darkMode ? 'bg-gray-800/50 border-gray-700 shadow-lg shadow-indigo-500/10' : 'bg-white shadow-lg'} rounded-xl backdrop-blur-sm transition-all duration-300`}>
                <CardContent className="p-8">
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={staggerContainer}
                  >
                    <motion.div variants={fadeInUp}>
                      <h3 className="text-xl font-bold text-indigo-400 mb-6 flex items-center">
                        <Code className="mr-2" /> Frontend
                      </h3>
                      <div className="space-y-5">
                        {[
                          { name: "React.js", level: 90 },
                          { name: "JavaScript", level: 85 },
                          { name: "HTML5 & CSS3", level: 90 },
                          { name: "Tailwind CSS", level: 80 },
                          { name: "Bootstrap", level: 85 }
                        ].map((skill, index) => (
                          <div key={index} className="space-y-1">
                            <div className="flex justify-between">
                              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium`}>{skill.name}</span>
                              <span className="text-indigo-400">{skill.level}%</span>
                            </div>
                            <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                              <motion.div 
                                className="h-full bg-indigo-500 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                    
                    <motion.div variants={fadeInUp}>
                      <h3 className="text-xl font-bold text-indigo-400 mb-6 flex items-center">
                        <Terminal className="mr-2" /> Backend
                      </h3>
                      <div className="space-y-5">
                        {[
                          { name: "PHP & Laravel", level: 90 },
                          { name: "Node.js", level: 75 },
                          { name: "MySQL", level: 85 },
                          { name: "RESTful APIs", level: 70 },
                          { name: "Python", level: 50 }
                        ].map((skill, index) => (
                          <div key={index} className="space-y-1">
                            <div className="flex justify-between">
                              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium`}>{skill.name}</span>
                              <span className="text-indigo-400">{skill.level}%</span>
                            </div>
                            <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                              <motion.div 
                                className="h-full bg-indigo-500 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="mt-10" 
                    variants={fadeInUp}
                  >
                    <h3 className="text-xl font-bold text-indigo-400 mb-6 flex items-center">
                      <Layers className="mr-2" /> Other Skills
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Git & GitHub", "Version Control", 
                        "Responsive Design", "API Integration", "Database Design", 
                        "Problem Solving", "Testing", "Third Party API", "Stripe (Payment Gateway)",
                        "Google Maps API","MapBox API"
                      ].map((skill, index) => (
                        <Badge 
                          key={index} 
                          className="px-3 py-2 bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section 
          id="contact" 
          className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4">
            <SectionTitle title="Get In" highlight="Touch" darkMode={darkMode} />
            <motion.div 
              className="max-w-4xl mx-auto flex justify-center items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="w-full max-w-4xl">
                <Card className={`h-full ${darkMode ? 'bg-gray-800/50 border-gray-700 shadow-lg shadow-indigo-500/10' : 'bg-white shadow-lg'} rounded-xl backdrop-blur-sm`}>
                  <CardContent className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-indigo-400 mb-6">
                        Contact Information
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                            <Mail size={20} className="text-indigo-500" />
                          </div>
                          <div className="ml-4">
                            <p className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              Email
                            </p>
                            <a
                              href="mailto:dineshrao275@gmail.com"
                              className="text-indigo-400 hover:text-indigo-300 transition-colors"
                            >
                              dineshrao275@gmail.com
                            </a>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                            <Phone size={20} className="text-indigo-500" />
                          </div>
                          <div className="ml-4">
                            <p className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              Phone
                            </p>
                            <a
                              href="tel:8290667849"
                              className="text-indigo-400 hover:text-indigo-300 transition-colors"
                            >
                              +91 8290667849
                            </a>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                            <Linkedin size={20} className="text-indigo-500" />
                          </div>
                          <div className="ml-4">
                            <p className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              LinkedIn
                            </p>
                            <a
                              href="https://www.linkedin.com/in/dinesh-rao-921905199/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-indigo-400 hover:text-indigo-300 transition-colors"
                            >
                              Dinesh Rao
                            </a>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                            <Github size={20} className="text-indigo-500" />
                          </div>
                          <div className="ml-4">
                            <p className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              GitHub
                            </p>
                            <a
                              href="https://github.com/dineshrao275"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-indigo-400 hover:text-indigo-300 transition-colors"
                            >
                              dineshrao275
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <motion.a
                      href="https://drive.google.com/drive/u/0/folders/1dgg7PZ-nKPnHDkz4rT6WiGHsmHExHUUQ"
                      target="_blank"
                      download
                      className="mt-8 inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ArrowDown size={16} className="mr-2" />
                      Download Resume
                    </motion.a>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer 
        className={`py-8 ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-700'}`}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Dinesh Rao. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <motion.a
              href="https://www.linkedin.com/in/dinesh-rao-921905199/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://github.com/dineshrao275"
              target="_blank"
              rel="noopener noreferrer"
              className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors`}
              whileHover={{ scale: 1.1 }}
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              href="mailto:dineshrao275@gmail.com"
              className="text-red-400 hover:text-red-300 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </motion.a>
            <motion.a
              href="tel:8290667849"
              className="text-green-400 hover:text-green-300 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Phone size={20} />
              <span className="sr-only">Phone</span>
            </motion.a>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-4 text-center">
          <motion.button
            onClick={() => scrollToSection("home")}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUp className="text-indigo-500" size={20} />
          </motion.button>
        </div>
      </footer>
    </div>
  );
};

export default Index;