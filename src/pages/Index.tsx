
import { useEffect, useState } from "react";
import { Linkedin, Github, Mail, Phone, ArrowDown, ArrowUp, ExternalLink } from "lucide-react";
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
    <div className="min-h-screen bg-white">
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
          <div className="absolute inset-0 bg-portfolio-lightpurple/30 -z-10" />
          <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-portfolio-darkblue">Hello, I'm </span>
                <span className="text-portfolio-purple">Dinesh Rao</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-portfolio-blue font-medium mb-6">
                Full Stack Developer
              </h2>
              <p className="text-gray-700 mb-8 md:text-lg">
                I am a Full Stack Developer with over 2 years of experience in building web applications.
                My expertise includes Python, Django, React.js, Vue.js, Node.js, and various databases.
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
                  href="https://linkedin.com/in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-portfolio-blue hover:text-portfolio-blue/80 transition-colors"
                >
                  <Linkedin size={24} />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                  <Github size={24} />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="text-red-500 hover:text-red-400 transition-colors"
                >
                  <Mail size={24} />
                  <span className="sr-only">Email</span>
                </a>
                <a
                  href="tel:+1234567890"
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
                    src="/lovable-uploads/0007965a-73e2-4cd1-a801-e78d0ee10acb.png"
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
            <h2 className="text-3xl font-bold text-center mb-12 text-portfolio-darkblue">
              About <span className="text-portfolio-purple">Me</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 mb-6 text-lg">
                I am a Full Stack Developer based in India with a passion for creating efficient, 
                scalable, and user-friendly web applications. With over 2 years of professional 
                experience, I specialize in Python programming and modern web technologies.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                My journey in software development began during my education at SRM University, 
                where I honed my skills in various programming languages and frameworks. I'm constantly 
                learning and adapting to new technologies to stay at the forefront of web development.
              </p>
              <p className="text-gray-700 text-lg">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
                projects, and sharing my knowledge with the developer community.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-portfolio-darkblue">
              Work <span className="text-portfolio-purple">Experience</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative border-l-2 border-portfolio-purple pl-8 pb-8 ml-4">
                <div className="absolute w-4 h-4 bg-portfolio-purple rounded-full -left-[9px] top-0" />
                <div className="mb-6">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-portfolio-blue">Full Stack Developer</h3>
                    <Badge className="bg-portfolio-purple">TRG Global</Badge>
                  </div>
                  <p className="text-gray-500 italic mb-4">Apr 2022 - Present</p>
                  <div className="text-gray-700 space-y-3">
                    <p>• Developed and maintained efficient, reusable, and reliable code for web applications.</p>
                    <p>• Collaborated with cross-functional teams to design, develop, and test new features.</p>
                    <p>• Built responsive user interfaces using modern JavaScript frameworks.</p>
                    <p>• Implemented server-side logic using Python and Django.</p>
                    <p>• Worked with databases like PostgreSQL and MongoDB for data storage and retrieval.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-portfolio-darkblue">
              Education & <span className="text-portfolio-purple">Certifications</span>
            </h2>
            <div className="max-w-4xl mx-auto grid gap-8">
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-portfolio-blue">SRM Institute of Science and Technology</h3>
                  </div>
                  <p className="text-gray-500 italic mb-4">Bachelor of Technology • Computer Science • 2018 - 2022</p>
                  <p className="text-gray-700">
                    Studied Computer Science with a focus on software development and web technologies.
                    Participated in various coding competitions and hackathons.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-portfolio-blue">Manisha Sahasra University</h3>
                  </div>
                  <p className="text-gray-500 italic mb-4">Pre-University Education • Science • 2016 - 2018</p>
                  <p className="text-gray-700">
                    Completed my pre-university education with a focus on sciences.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-portfolio-blue">Certifications</h3>
                  </div>
                  <div className="space-y-4 mt-4">
                    <div>
                      <h4 className="font-medium text-portfolio-darkblue">AWS Certified Developer - Associate</h4>
                      <p className="text-gray-500 italic">Oct 2023</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-portfolio-darkblue">Python</h4>
                      <p className="text-gray-500 italic">Jun 2022</p>
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
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-portfolio-blue mb-2">Kiosk Application</h3>
                  <p className="text-gray-500 italic mb-4">Jan 2023 - Apr 2023</p>
                  <p className="text-gray-700 mb-4">
                    A kiosk application providing info of services, menu, etc. in public spaces using Python Flask for backend and Vue.js for the frontend.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-portfolio-lightblue text-portfolio-blue">Python</Badge>
                    <Badge className="bg-portfolio-lightblue text-portfolio-blue">Flask</Badge>
                    <Badge className="bg-portfolio-lightblue text-portfolio-blue">Vue.js</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-portfolio-blue mb-2">Drone monitoring</h3>
                  <p className="text-gray-500 italic mb-4">Apr 2022 - Jun 2022</p>
                  <p className="text-gray-700 mb-4">
                    Built a real-time monitoring system for drones using Python Django for the backend and React for the frontend.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-portfolio-lightblue text-portfolio-blue">Python</Badge>
                    <Badge className="bg-portfolio-lightblue text-portfolio-blue">Django</Badge>
                    <Badge className="bg-portfolio-lightblue text-portfolio-blue">React</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-portfolio-blue mb-2">OpenAI Copilot AI & Alexa Type design Studio</h3>
                  <p className="text-gray-500 italic mb-4">2023</p>
                  <p className="text-gray-700 mb-4">
                    Developed a voice assistant integration using AI technologies, similar to Alexa, with custom UX/UI design.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-portfolio-lightblue text-portfolio-blue">Python</Badge>
                    <Badge className="bg-portfolio-lightblue text-portfolio-blue">JavaScript</Badge>
                    <Badge className="bg-portfolio-lightblue text-portfolio-blue">AI</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-portfolio-blue mb-2">Browser Monitoring</h3>
                  <p className="text-gray-500 italic mb-4">2022</p>
                  <p className="text-gray-700 mb-4">
                    Chrome extension for website metrics and user behavior tracking with dashboard visualization.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-portfolio-lightblue text-portfolio-blue">JavaScript</Badge>
                    <Badge className="bg-portfolio-lightblue text-portfolio-blue">Chrome Extensions</Badge>
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
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-portfolio-blue mb-6">Languages</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700">Python</span>
                        <span className="text-gray-500">Advanced</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-portfolio-purple h-2.5 rounded-full w-[90%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700">JavaScript</span>
                        <span className="text-gray-500">Advanced</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-portfolio-purple h-2.5 rounded-full w-[85%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700">TypeScript</span>
                        <span className="text-gray-500">Intermediate</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-portfolio-purple h-2.5 rounded-full w-[75%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700">HTML/CSS</span>
                        <span className="text-gray-500">Advanced</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-portfolio-purple h-2.5 rounded-full w-[90%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-portfolio-blue mb-6">Frameworks & Technologies</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700">Django</span>
                        <span className="text-gray-500">Advanced</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-portfolio-blue h-2.5 rounded-full w-[85%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700">React.js</span>
                        <span className="text-gray-500">Advanced</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-portfolio-blue h-2.5 rounded-full w-[80%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700">Node.js</span>
                        <span className="text-gray-500">Intermediate</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-portfolio-blue h-2.5 rounded-full w-[75%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700">Docker</span>
                        <span className="text-gray-500">Intermediate</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-portfolio-blue h-2.5 rounded-full w-[70%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold text-portfolio-blue mb-6">Other Skills</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-portfolio-lightpurple text-portfolio-purple py-2 px-4">RESTful APIs</Badge>
                  <Badge className="bg-portfolio-lightpurple text-portfolio-purple py-2 px-4">PostgreSQL</Badge>
                  <Badge className="bg-portfolio-lightpurple text-portfolio-purple py-2 px-4">MongoDB</Badge>
                  <Badge className="bg-portfolio-lightpurple text-portfolio-purple py-2 px-4">Git</Badge>
                  <Badge className="bg-portfolio-lightpurple text-portfolio-purple py-2 px-4">AWS</Badge>
                  <Badge className="bg-portfolio-lightpurple text-portfolio-purple py-2 px-4">CI/CD</Badge>
                  <Badge className="bg-portfolio-lightpurple text-portfolio-purple py-2 px-4">Agile Methodology</Badge>
                  <Badge className="bg-portfolio-lightpurple text-portfolio-purple py-2 px-4">Vue.js</Badge>
                  <Badge className="bg-portfolio-lightpurple text-portfolio-purple py-2 px-4">Flask</Badge>
                  <Badge className="bg-portfolio-lightpurple text-portfolio-purple py-2 px-4">Database Design</Badge>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold text-portfolio-blue mb-6">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-portfolio-lightblue text-portfolio-blue py-2 px-4">English</Badge>
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
                <Card className="overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-portfolio-lightpurple mb-4">
                      <Mail className="text-portfolio-purple" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-portfolio-blue mb-2">Email</h3>
                    <p className="text-gray-700">contact@example.com</p>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-portfolio-lightpurple mb-4">
                      <Linkedin className="text-portfolio-purple" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-portfolio-blue mb-2">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com/in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-portfolio-purple hover:underline"
                    >
                      Connect on LinkedIn
                    </a>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
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
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
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
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
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
              <span className="text-xl font-bold">Dinesh<span className="text-portfolio-purple">.dev</span></span>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-portfolio-purple transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-portfolio-purple transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
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
