export const phpPortfolioData = {
  name: "Dinesh Rao",
  title: "Full Stack Developer",
  description: "I am a Full Stack Developer with over 2 years of experience in building web applications. My expertise includes Laravel(PHP Framework), React.js, Node.js, and various databases.",

  about: {
    intro: "I'm a Full Stack Developer based in Indore, India, with over 2 years of professional experience in building modern web applications. I specialize in full-stack development, with expertise in technologies like PHP (Laravel), JavaScript, MySQL, and modern frontend frameworks like React.",
    experience: "Currently working at Fiftyfive Technologies, where I'm contributing to the development of scalable web applications using Laravel, React, and MySQL. Previously at Sofmen Technologies, I've contributed to several real-world projects including Bumble Roofing, Franchisee Management System, Wallaby Windows, One Stop Jewellery, FFTL, and Koala Insulation, where I developed robust full-stack solutions and integrated RESTful APIs."
  },

  experience: [
    {
      company: "Fiftyfive Technologies",
      position: "PHP Developer",
      duration: "Oct 2024 - Present",
      location: "Indore (M.P.)",
      responsibilities: [
        "Contributing to the development of scalable web applications using PHP (Laravel), JavaScript, and MySQL.",
        "Focusing on performance optimization, secure coding practices, and seamless user experiences."
      ]
    },
    {
      company: "Sofmen Technologies",
      position: "PHP Developer",
      duration: "May 2022 - Oct 2024",
      location: "Indore (M.P.)",
      responsibilities: [
        "Designed and developed scalable web applications using Laravel.",
        "Built and integrated RESTful APIs for seamless communication between client and server.",
        "Implemented authentication and authorization mechanisms using JWT and OAuth.",
        "Optimized database queries, resulting in a 40% improvement in application performance.",
        "Collaborated with cross-functional teams using Agile methodologies.",
        "Maintained legacy codebases while introducing modern development practices."
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Computer Application",
      institution: "Shri Vaishnav Institute of Management",
      duration: "2019 - 2022",
      grade: "8.5 CGPA"
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Shri Vaishnav Vidhyapeeth",
      duration: "2018 - 2019",
      grade: "72.60%"
    },
    {
      degree: "Secondary (10th)",
      institution: "Shri Vaishnav Vidhyapeeth",
      duration: "2016 - 2017",
      grade: "76.83%"
    }
  ],

  certifications: [
    {
      title: "Python Basics - IIT Bombay",
      date: "May 2022",
      url: "https://drive.google.com/drive/u/0/folders/1dalGJXqyOBlt36fm04wi9w80UZp803Kz"
    }
  ],

  projects: [
    {
      title: "Bumble Roofing",
      url: "http://bumbleroofing.com/",
      description: "I developed the official website for Bumble Roofing using Laravel, creating a robust and user-friendly platform that showcases their wide range of roofing services, including roof replacement, repairs, inspections, and commercial solutions. The site highlights their 60+ years of combined experience and over 2,700 successful projects, while offering seamless features like free quote requests, service area details, and customer-friendly navigation.",
      skills: ["Laravel", "Javascript", "Python", "JQuery", "AJAX", "Bootstrap", "HTML", "CSS", "PHP", "MySQL", "Third Party API"]
    },
    {
      title: "Wallaby Windows",
      description: "Wallaby Windows, established in 2021 and headquartered in Melbourne, Florida, is a window and door replacement company operating through a network of local franchise partners across multiple U.S. states. Acquired by Empower Brands in April 2023, Wallaby offers a variety of premium impact and non-impact replacement windows and doors, including styles like awning, casement, sliding, and French doors.",
      skills: ["Laravel", "Javascript", "JQuery", "AJAX", "Bootstrap", "HTML", "CSS", "PHP", "MySQL", "Third Party API"]
    },
    {
      title: "Koala Insulation",
      description: "Koala Insulation is a U.S.-based insulation services company founded in 2018 and headquartered in Melbourne, Florida. Operating through a franchise model, it has expanded to over 100 locations across more than 40 states. Koala offers a comprehensive range of residential and commercial insulation solutions, including spray foam, blown-in, batt insulation, air sealing, crawl space encapsulation, insulation removal, and solar attic fan installations.",
      skills: ["Laravel", "JavaScript", "JQuery", "AJAX", "Bootstrap", "HTML", "CSS", "PHP"]
    },
    {
      title: "Faculty Feedback for Teaching and Learning",
      date: "2023",
      description: "I developed the FFTL (Faculty Feedback on Teaching and Learning) system for Shri Vaishnav Institute of Management, Indore (M.P.) to digitize and streamline the process of collecting student feedback on faculty performance. Built using Laravel and MySQL, the application provides a secure and user-friendly interface for students, faculty, and administrators.",
      skills: ["JavaScript", "Laravel", "MySQL", "AJAX", "Bootstrap", "jQuery", "HTML", "CSS", "PHP"]
    }
  ],

  skills: {
    frontend: [
      { name: "React.js", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5/CSS3", level: 90 },
      { name: "Tailwind CSS", level: 75 },
      { name: "Bootstrap", level: 85 }
    ],
    backend: [
      { name: "PHP & Laravel", level: 90 },
      { name: "Node.js", level: 75 },
      { name: "MySQL", level: 85 },
      { name: "RESTful APIs", level: 70 },
      { name: "Python", level: 50 }
    ],
    tools: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 80 },
      { name: "Docker", level: 60 }
    ]
  },

  contact: {
    email: "dineshrao0275@gmail.com",
    phone: "+91 9479646327",
    linkedin: "https://www.linkedin.com/in/dinesh-rao-539508206/",
    github: "https://github.com/dineshrao275"
  }
};

export type PortfolioData = typeof phpPortfolioData;
