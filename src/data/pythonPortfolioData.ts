export const pythonPortfolioData = {
  name: "Dinesh Rao",
  title: "Python Developer",
  description: "I am a Python Developer with over 2 years of experience in designing and building scalable server-side applications and APIs using Python (Django/FastAPI). My expertise includes optimizing database queries, implementing secure authentication/authorization, and integrating third-party services.",

  about: {
    intro: "I'm a Python Developer based in Indore, India, with over 2 years of professional experience in building scalable server-side applications and APIs. I specialize in backend development, with expertise in technologies like Python (Django/FastAPI), MySQL, and basic frontend skills in JavaScript, HTML5, and CSS3.",
    experience: "Currently working at Fiftyfive Technologies, where I'm contributing to the design and development of robust back-end systems using Python (Django/FastAPI), RESTful APIs, and secure database architectures. Previously at Sofmen Technologies, I've contributed to several real-world projects including Bumble Roofing, Franchisee Management System, Wallaby Windows, One Stop Jewellery, FFTL, and Koala Insulation, where I developed scalable backends, integrated secure RESTful APIs, and optimized performance."
  },

  experience: [
    {
      company: "Fiftyfive Technologies",
      position: "Python Developer",
      duration: "Oct 2024 - Present",
      location: "Indore (M.P.)",
      responsibilities: [
        "Contributing to the design and development of robust back-end systems using Python (Django/FastAPI), RESTful APIs, and secure database architectures.",
        "Focusing on scalability, performance optimization, and seamless integration with client-facing applications."
      ]
    },
    {
      company: "Sofmen Technologies",
      position: "Python Developer",
      duration: "May 2022 - Oct 2024",
      location: "Indore (M.P.)",
      responsibilities: [
        "Designed and developed scalable web applications using Python.",
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
      description: "Built the backend API layer with FastAPI, handling customer inquiries and quotes. Managed database operations and ensured data consistency for high traffic.",
      skills: ["FastAPI", "Python", "MySQL"]
    },
    {
      title: "Franchisee Management System",
      description: "Designed a multi-tenant backend using Django with RBAC and secure data workflows. Developed APIs for franchise operations, finance, and reporting.",
      skills: ["Django", "Python", "MySQL"]
    },
    {
      title: "Wallaby Windows",
      description: "Developed web interfaces for a modern, responsive experience. Integrated payment gateways and third-party APIs for enhanced functionality. Increased website load speed by 25% through optimized image loading and caching.",
      skills: ["JavaScript", "HTML5", "CSS3", "Python", "MySQL"]
    },
    {
      title: "One Stop Jewellery",
      description: "Built a Django REST Framework backend to manage suppliers, customers, and inventory. Implemented dynamic invoice generation logic with real-time calculations.",
      skills: ["Django", "Python", "REST APIs", "MySQL"]
    },
    {
      title: "FFTL (Faculty Feedback on Teaching Learning)",
      description: "Created a secure backend in Django and MySQL for role-based feedback submission and automated reports.",
      skills: ["Django", "Python", "MySQL"]
    },
    {
      title: "Koala Insulation",
      description: "Maintained and enhanced a Django-based CMS managing microsites for multiple franchisees. Developed a royalty report submission workflow with an approval process. Built secure APIs for cross-platform communication between US and Canadian portals.",
      skills: ["Django", "Python", "MySQL"]
    }
  ],

  skills: {
    frontend: [
      { name: "JavaScript", level: 70 },
      { name: "HTML5/CSS3", level: 75 },
      { name: "React.js", level: 60 }
    ],
    backend: [
      { name: "Python (Django/FastAPI)", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "RESTful APIs", level: 85 },
      { name: "PostgreSQL", level: 75 }    ],
    tools: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 80 },
      { name: "Docker", level: 70 }
    ]
  },

  contact: {
    email: "dineshrao0275@gmail.com",
    phone: "+91 9479646327",
    linkedin: "https://www.linkedin.com/in/dinesh-rao-539508206/",
    github: "https://github.com/dineshrao275"
  }
};

export type PortfolioData = typeof pythonPortfolioData;
