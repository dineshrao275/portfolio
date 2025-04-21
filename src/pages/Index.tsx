import { useEffect, useState } from "react";
import {
  Linkedin,
  Github,
  Mail,
  Phone,
  ArrowDown,
  ArrowUp,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import MobileNav from "@/components/MobileNav";
import SectionTitle from "@/components/SectionTitle";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute("id") || "";
        if (sectionTop < 100 && sectionTop >= -100) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  // Helper function for navigation item classes
  const getNavItemClasses = (sectionId: string) => {
    return `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
      activeSection === sectionId
        ? "bg-portfolio-lightpurple text-portfolio-purple"
        : "text-gray-600 hover:text-portfolio-purple hover:bg-portfolio-lightpurple/50"
    }`;
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header/Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-portfolio-purple">
            Dinesh<span className="text-portfolio-blue">.dev</span>
          </a>
          <nav className="hidden md:flex space-x-1">
            <button
              onClick={() => scrollToSection("home")}
              className={getNavItemClasses("home")}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={getNavItemClasses("about")}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={getNavItemClasses("experience")}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className={getNavItemClasses("education")}
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={getNavItemClasses("projects")}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className={getNavItemClasses("skills")}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={getNavItemClasses("contact")}
            >
              Contact
            </button>
          </nav>
          <div className="md:hidden">
            <MobileNav
              activeSection={activeSection}
              scrollToSection={scrollToSection}
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
          <div className="absolute inset-0 bg-gradient-to-br from-portfolio-lightpurple/40 to-white/60 -z-10" />
          <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center fade-in">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-portfolio-darkblue">Hello, I'm </span>
                <span className="text-portfolio-purple">Dinesh Rao</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-portfolio-blue font-medium mb-6">
                Full Stack Developer
              </h2>
              <p className="text-gray-700 mb-8 md:text-lg">
                I am a Full Stack Developer with over 2 years of experience in
                building web applications. My expertise includes Laravel(Php
                Framework), React.js, Node.js, and various databases.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-portfolio-purple hover:bg-portfolio-purple/90"
                >
                  Contact Me
                </Button>
                <Button
                  onClick={() => scrollToSection("projects")}
                  variant="outline"
                  className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-lightpurple"
                >
                  View Projects
                </Button>
              </div>
              <div className="flex space-x-4 mt-8">
                <a
                  href="https://www.linkedin.com/in/dinesh-rao-921905199/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-portfolio-blue hover:text-portfolio-blue/80 transition-colors"
                >
                  <Linkedin size={24} />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/dineshrao275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                  <Github size={24} />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="mailto:dineshrao275@gmail.com"
                  className="text-red-500 hover:text-red-400 transition-colors"
                >
                  <Mail size={24} />
                  <span className="sr-only">Email</span>
                </a>
                <a
                  href="tel:8290667849"
                  className="text-green-600 hover:text-green-500 transition-colors"
                >
                  <Phone size={24} />
                  <span className="sr-only">Phone</span>
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-portfolio-purple/20 animate-pulse" />
                <div className="absolute inset-2 rounded-full bg-white overflow-hidden">
                  <img
                    src="/uploads/dinesh-rao.jpg"
                    alt="Dinesh Rao"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <ArrowDown className="text-portfolio-purple" size={20} />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle title="About" highlight="Me" />
            <div className="max-w-3xl mx-auto glass p-8 fade-in">
              <p className="text-gray-700 mb-6 text-lg">
                I’m a Full Stack Developer based in Indore, India, with over 2
                years of professional experience in building dynamic and
                responsive web applications. I specialize in both front-end and
                back-end development, with expertise in technologies like
                ReactJS, Node.js, Laravel, and MySQL.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                Currently working at Sofmen Technologies, I’ve contributed to
                several real-world projects including Bumble Roofing, Franchisee
                Management System, and Wallaby Windows & Koala Insulation, where
                I developed scalable web interfaces, integrated secure RESTful
                APIs, and optimized backend performance.
              </p>
              <p className="text-gray-700 text-lg">
                I’m passionate about continuous learning, exploring emerging
                technologies, and solving complex problems with scalable, secure
                solutions. When I’m not coding, I enjoy contributing to
                open-source projects and staying active in the developer
                community.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle title="Work" highlight="Experience" />
            <div className="max-w-4xl mx-auto">
              <div className="relative border-l-2 border-portfolio-purple pl-8 pb-8 ml-4 glass fade-in">
                <div className="absolute w-4 h-4 bg-portfolio-purple rounded-full -left-[9px] top-0" />
                <div className="mb-6">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-portfolio-blue">
                      Full Stack Developer
                    </h3>
                    <Badge className="bg-portfolio-purple">
                      Sofmen Technologies
                    </Badge>
                  </div>
                  <p className="text-gray-500 italic mb-4">
                    Mar 2023 - Present
                  </p>
                  <div className="text-gray-700 space-y-3">
                    <p>
                      • Developed and maintained efficient, reusable, and
                      reliable code for web applications.
                    </p>
                    <p>
                      • Collaborated with cross-functional teams to design,
                      develop, and test new features.
                    </p>
                    <p>
                      • Built responsive user interfaces using modern JavaScript
                      frameworks.
                    </p>
                    <p>• Implemented server-side logic using Laravel.</p>
                    <p>
                      • Worked with database like MySQL for data storage and
                      retrieval.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle title="Education &" highlight="Certifications" />
            <div className="max-w-4xl mx-auto grid gap-8">
              <Card className="overflow-hidden glass fade-in">
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-portfolio-blue">
                      Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal (M.P.)
                    </h3>
                  </div>
                  <p className="text-gray-500 italic mb-4">
                    Master of Computer Application • Computer Science • 2021 -
                    2023
                  </p>
                  <p className="text-gray-700">
                    Completed my Master degree with a focus on computer science.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden glass fade-in">
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-portfolio-blue">
                      Mohanlal Sukhadia University, Udaipur (Raj.)
                    </h3>
                  </div>
                  <p className="text-gray-500 italic mb-4">
                    Bachelor of Computer Application • Computer Science • 2018 -
                    2021
                  </p>
                  <p className="text-gray-700">
                    Studied Computer Science with a focus on software
                    development and web technologies.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden glass fade-in">
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-portfolio-blue">
                      Certifications
                    </h3>
                  </div>
                  <div className="space-y-4 mt-4">
                    <div>
                      <h4 className="font-medium text-portfolio-darkblue">
                        <a
                          href="https://drive.google.com/drive/u/0/folders/1dalGJXqyOBlt36fm04wi9w80UZp803Kz"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Python Basics - IIT Bombay
                        </a>
                      </h4>
                      <p className="text-gray-500 italic">May 2022</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-portfolio-darkblue">
                        <a
                          href="https://drive.google.com/drive/u/0/folders/1dalGJXqyOBlt36fm04wi9w80UZp803Kz"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          C++ Basics - IIT Bombay
                        </a>
                      </h4>
                      <p className="text-gray-500 italic">jan 2022</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-portfolio-darkblue">
                        <a
                          href="https://drive.google.com/drive/u/0/folders/1dalGJXqyOBlt36fm04wi9w80UZp803Kz"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          C Basics - IIT Bombay
                        </a>
                      </h4>
                      <p className="text-gray-500 italic">jan 2022</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-portfolio-darkblue">
                        <a
                          href="https://drive.google.com/drive/u/0/folders/1dalGJXqyOBlt36fm04wi9w80UZp803Kz"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          ReactJS Full Course – Ypsilon IT Solutions.
                        </a>
                      </h4>
                      <p className="text-gray-500 italic">jan 2022</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle title="Featured" highlight="Projects" />
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden glass fade-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-portfolio-blue mb-2">
                    <a
                      href="http://bumbleroofing.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Bumble Roofing
                    </a>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    I developed the official website for Bumble Roofing using
                    Laravel, creating a robust and user-friendly platform that
                    showcases their wide range of roofing services, including
                    roof replacement, repairs, inspections, and commercial
                    solutions. The site highlights their 60+ years of combined
                    experience and over 2,700 successful projects, while
                    offering seamless features like free quote requests, service
                    area details, and customer-friendly navigation. Emphasizing
                    performance, clarity, and scalability, the website supports
                    Bumble Roofing's mission to deliver reliable, eco-conscious
                    roofing solutions across the Los Angeles area.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-portfolio-lightblue text-portfolio-blue">
                      Laravel
                    </Badge>
                    <Badge className="bg-portfolio-lightblue text-portfolio-blue">
                      Javascript
                    </Badge>
                    <Badge className="bg-portfolio-lightblue text-portfolio-blue">
                      Python
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden glass fade-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-portfolio-blue mb-2">
                    Wallaby Windows
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Wallaby Windows, established in 2021 and headquartered in
                    Melbourne, Florida, is a window and door replacement company
                    operating through a network of local franchise partners
                    across multiple U.S. states. Acquired by Empower Brands in
                    April 2023, Wallaby offers a variety of premium impact and
                    non-impact replacement windows and doors, including styles
                    like awning, casement, sliding, and French doors. The
                    company emphasizes energy efficiency, expert installation,
                    and a customer-centric approach, highlighted by their
                    "No-Pane Guarantee" and White Glove service. Wallaby is
                    BBB-accredited with high ratings and is known for its
                    transparent, no-pressure consultations and commitment to
                    local community needs.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-portfolio-lightblue text-portfolio-blue">
                      Laravel
                    </Badge>
                    <Badge className="bg-portfolio-lightblue text-portfolio-blue">
                      Javascript
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden glass fade-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-portfolio-blue mb-2">
                    Koala Insulation
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Koala Insulation is a U.S.-based insulation services company
                    founded in 2018 and headquartered in Melbourne, Florida.
                    Operating through a franchise model, it has expanded to over
                    100 locations across more than 40 states. Koala offers a
                    comprehensive range of residential and commercial insulation
                    solutions, including spray foam, blown-in, batt insulation,
                    air sealing, crawl space encapsulation, insulation removal,
                    and solar attic fan installations. The company emphasizes
                    energy efficiency, comfort, and environmental benefits,
                    noting that proper insulation can reduce energy bills by up
                    to 15% and improve indoor air quality by minimizing
                    moisture, mold, and allergens. Koala Insulation provides
                    free evaluations and highlights potential tax credits of up
                    to $1,200 under the Inflation Reduction Act for qualifying
                    insulation upgrades. In April 2023, the company was acquired
                    by Empower Franchising, aligning it with other home service
                    brands like Wallaby Windows.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-portfolio-lightblue text-portfolio-blue">
                      Laravel
                    </Badge>
                    <Badge className="bg-portfolio-lightblue text-portfolio-blue">
                      JavaScript
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden glass fade-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-portfolio-blue mb-2">
                    Faculty Feedback for Teaching andLearning()
                  </h3>
                  <p className="text-gray-500 italic mb-4">2023</p>
                  <p className="text-gray-700 mb-4">
                    I developed the FFTL (Faculty Feedback on Teaching and
                    Learning) system for Shri Vaishnav Institute of Management,
                    Indore (M.P.) to digitize and streamline the process of
                    collecting student feedback on faculty performance. Built
                    using Laravel and MySQL, the application provides a secure
                    and user-friendly interface for students, faculty, and
                    administrators. It includes role-based access, dynamic
                    feedback forms, real-time submission, and automated report
                    generation for performance analysis. The system enhances
                    transparency, efficiency, and data accuracy in the feedback
                    process. I also handled deployment on the institute’s
                    internal server, ensuring smooth access and operation for
                    all users.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-portfolio-lightblue text-portfolio-blue">
                      JavaScript
                    </Badge>
                    <Badge className="bg-portfolio-lightblue text-portfolio-blue">
                      Laravel
                    </Badge>
                    <Badge className="bg-portfolio-lightblue text-portfolio-blue">
                      MySQL
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle title="Technical" highlight="Skills" />
            <div className="max-w-4xl mx-auto glass p-8 fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-portfolio-blue mb-6">
                    Languages
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700">PHP</span>
                        <span className="text-gray-500">Advanced</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-portfolio-purple h-2.5 rounded-full w-[90%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700">
                          JavaScript
                        </span>
                        <span className="text-gray-500">Advanced</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-portfolio-purple h-2.5 rounded-full w-[85%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700">
                          TypeScript
                        </span>
                        <span className="text-gray-500">Intermediate</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-portfolio-purple h-2.5 rounded-full w-[75%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700">
                          HTML/CSS
                        </span>
                        <span className="text-gray-500">Advanced</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-portfolio-purple h-2.5 rounded-full w-[90%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-portfolio-blue mb-6">
                    Frameworks & Technologies
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700">
                          Laravel
                        </span>
                        <span className="text-gray-500">Advanced</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-portfolio-blue h-2.5 rounded-full w-[85%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700">
                          React.js
                        </span>
                        <span className="text-gray-500">Advanced</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-portfolio-blue h-2.5 rounded-full w-[80%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700">
                          Node.js
                        </span>
                        <span className="text-gray-500">Intermediate</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-portfolio-blue h-2.5 rounded-full w-[75%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold text-portfolio-blue mb-6">
                  Other Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-portfolio-lightpurple text-portfolio-purple py-2 px-4">
                    RESTful APIs
                  </Badge>
                  <Badge className="bg-portfolio-lightpurple text-portfolio-purple py-2 px-4">
                    MySQL
                  </Badge>
                  <Badge className="bg-portfolio-lightpurple text-portfolio-purple py-2 px-4">
                    Laravel
                  </Badge>
                  <Badge className="bg-portfolio-lightpurple text-portfolio-purple py-2 px-4">
                    GitHub/GitLab
                  </Badge>
                  <Badge className="bg-portfolio-lightpurple text-portfolio-purple py-2 px-4">
                    Javascript
                  </Badge>
                  <Badge className="bg-portfolio-lightpurple text-portfolio-purple py-2 px-4">
                    React Js
                  </Badge>
                  <Badge className="bg-portfolio-lightpurple text-portfolio-purple py-2 px-4">
                    CodeIgniter
                  </Badge>                 
                  <Badge className="bg-portfolio-lightpurple text-portfolio-purple py-2 px-4">
                    Database Design
                  </Badge>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold text-portfolio-blue mb-6">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-portfolio-lightblue text-portfolio-blue py-2 px-4">
                    English
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-portfolio-lightpurple/30">
          <div className="container mx-auto px-4">
            <SectionTitle title="Get In" highlight="Touch" />
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="overflow-hidden glass fade-in">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-portfolio-lightpurple mb-4">
                      <Mail className="text-portfolio-purple" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-portfolio-blue mb-2">
                      Email
                    </h3>
                    <p className="text-gray-700">dineshrao275@gmail.com</p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden glass fade-in">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-portfolio-lightpurple mb-4">
                      <Linkedin className="text-portfolio-purple" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-portfolio-blue mb-2">
                      LinkedIn
                    </h3>
                    <a
                      href="https://www.linkedin.com/in/dinesh-rao-921905199/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-portfolio-purple hover:underline"
                    >
                      Connect on LinkedIn
                    </a>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass fade-in">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-purple focus:border-transparent"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-purple focus:border-transparent"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-purple focus:border-transparent"
                        placeholder="Subject"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-purple focus:border-transparent"
                        placeholder="Your message..."
                      ></textarea>
                    </div>
                    <Button className="w-full md:w-auto bg-portfolio-purple hover:bg-portfolio-purple/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-portfolio-darkblue text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold">
                Dinesh<span className="text-portfolio-purple">.dev</span>
              </span>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/dinesh-rao-921905199/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-portfolio-purple transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/dineshrao275"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-portfolio-purple transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:dineshrao275@gmail.com"
                className="hover:text-portfolio-purple transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <div className="mt-4 md:mt-0 text-sm text-gray-400">
              © {new Date().getFullYear()} Dinesh Rao. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {isScrolled && (
        <button
          onClick={() => scrollToSection("home")}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-portfolio-purple text-white shadow-lg flex items-center justify-center hover:bg-portfolio-purple/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-portfolio-purple"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Index;
