import list1 from '../assets/CourseListing/list1.jpeg'
import list2 from '../assets/CourseListing/list2.jpeg'
import list3 from '../assets/CourseListing/list3.jpeg'
import list4 from '../assets/CourseListing/list4.jpeg'

export const courses = [

{
  id: 1,
  slug: "python-full-stack-development-with-devops",
  title: "Python Full Stack Development with DevOps",
  location: "Calicut",
  desc: "Become a job-ready Full Stack Python Developer by mastering frontend development, backend development, databases, REST APIs, cloud deployment, and DevOps practices. Build real-world projects using HTML, CSS, JavaScript, React, Python, Django, PostgreSQL, Docker, Git, CI/CD, AWS, and modern deployment workflows.",
  overviewBodyText: "Build modern Web applications from scratch and learn how to deploy, automate and manage them using industry standard DevOps tools. Python full stack development course with devops course is designed to help learners to gain practical knowledge in front end development, backend programming, database, APIs, Cloud deployment, version control, and CI/CD Practices \n\nBuild real-world projects using HTML, CSS, JavaScript, React, Python, Django, PostgreSQL, Docker, Git, CI/CD, AWS, and modern deployment workflows.",
  duration: "8 months",
  fee: "₹99,999",
  rating: "4.8",
  reviews: "4.2k",
  img: list4,
  syllabusLink: "/pdfs/Python-full-stack.pdf",

  whatYouWillLearn: [
    {
      id: 1,
      icon: "🌐",
      title: "Frontend Development",
      desc: "Build responsive and interactive websites using HTML5, CSS3, Bootstrap, Tailwind CSS, and JavaScript."
    },
    {
      id: 2,
      icon: "⚛️",
      title: "React.js",
      desc: "Develop modern single-page applications using React, Hooks, Routing, Context API, and API integration."
    },
    {
      id: 3,
      icon: "🐍",
      title: "Python Programming",
      desc: "Learn Python fundamentals, object-oriented programming, file handling, modules, and advanced concepts."
    },
    {
      id: 4,
      icon: "🚀",
      title: "Django & Django REST Framework",
      desc: "Build scalable backend applications, REST APIs, authentication systems, and business logic using Django."
    },
    {
      id: 5,
      icon: "🗄️",
      title: "Database Management",
      desc: "Design and manage relational databases using PostgreSQL and MySQL with Django ORM."
    },
    {
      id: 6,
      icon: "🔐",
      title: "Authentication & Security",
      desc: "Implement JWT Authentication, user authorization, permissions, validation, and security best practices."
    },
    {
      id: 7,
      icon: "🐳",
      title: "DevOps & Cloud Deployment",
      desc: "Deploy applications using Docker, GitHub, CI/CD pipelines, AWS, and Nginx."
    },
    {
      id: 8,
      icon: "💼",
      title: "Industry Projects & Interview Preparation",
      desc: "Work on real-world projects, GitHub portfolio, resume building, aptitude, and mock technical interviews."
    }
  ],

  tools: [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "Bootstrap", icon: "🅱️" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "JavaScript", icon: "🟨" },
    { name: "React", icon: "⚛️" },
    { name: "Python", icon: "🐍" },
    { name: "Django", icon: "🚀" },
    { name: "Django REST Framework", icon: "🔗" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MySQL", icon: "🗄️" },
    { name: "Git", icon: "🔀" },
    { name: "GitHub", icon: "🐙" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "Nginx", icon: "🌐" },
    { name: "GitHub Actions", icon: "⚡" },
    { name: "Postman", icon: "📮" },
    { name: "VS Code", icon: "💻" },
    { name: "Linux", icon: "🐧" }
  ],

  curriculum: [
    {
      module: "Programming Fundamentals with Python",
      topics: [
        "Python Basics",
        "Variables & Data Types",
        "Operators",
        "Conditional Statements",
        "Loops",
        "Functions",
        "Modules & Packages",
        "File Handling"
      ]
    },
    {
      module: "Object-Oriented Programming",
      topics: [
        "Classes & Objects",
        "Constructors",
        "Inheritance",
        "Polymorphism",
        "Encapsulation",
        "Abstraction",
        "Exception Handling",
        "Python Best Practices"
      ]
    },
    {
      module: "Frontend Development",
      topics: [
        "HTML5",
        "CSS3",
        "Flexbox & Grid",
        "Bootstrap",
        "Tailwind CSS",
        "JavaScript ES6+",
        "DOM Manipulation",
        "Responsive Design"
      ]
    },
    {
      module: "React.js Development",
      topics: [
        "React Fundamentals",
        "JSX",
        "Components",
        "Props & State",
        "React Hooks",
        "React Router",
        "Context API",
        "API Integration"
      ]
    },
    {
      module: "Database Management",
      topics: [
        "Database Fundamentals",
        "SQL Basics",
        "CRUD Operations",
        "Joins",
        "Indexes",
        "PostgreSQL",
        "MySQL",
        "Database Design"
      ]
    },
    {
      module: "Django Framework",
      topics: [
        "MVC/MVT Architecture",
        "Django Project Structure",
        "Models",
        "Views",
        "Templates",
        "Forms",
        "Admin Panel",
        "Authentication"
      ]
    },
    {
      module: "Django REST Framework",
      topics: [
        "REST API Concepts",
        "Serializers",
        "APIView",
        "ViewSets",
        "Routers",
        "JWT Authentication",
        "Permissions",
        "Pagination & Filtering"
      ]
    },
    {
      module: "Version Control & DevOps",
      topics: [
        "Git Basics",
        "GitHub",
        "Linux Commands",
        "Docker",
        "Docker Compose",
        "CI/CD Pipelines",
        "GitHub Actions",
        "Nginx"
      ]
    },
    {
      module: "AWS Cloud Deployment",
      topics: [
        "AWS EC2",
        "S3",
        "IAM",
        "Linux Server Setup",
        "Application Deployment",
        "Domain Configuration",
        "SSL Setup",
        "Production Deployment"
      ]
    },
    {
      module: "Capstone Project & Career Preparation",
      topics: [
        "Full Stack Project Development",
        "API Integration",
        "GitHub Portfolio",
        "Resume Building",
        "Interview Preparation",
        "Mock Interviews",
        "Aptitude & Coding Tests",
        "Project Presentation"
      ]
    }
  ]
},

{
  id: 2,
  slug: "data-analytics-with-generative-ai",
  title: "Data Analytics with Gen AI",
  location: "Calicut",
  desc: "Master Data Analytics and Generative AI by learning data collection, cleaning, visualization, statistical analysis, SQL, Python, Power BI, Excel, machine learning fundamentals, and AI-powered analytics. Gain hands-on experience with real-world datasets, dashboards, and Generative AI tools to become an industry-ready Data Analyst.",
  overviewBodyText: "Transform data into meaningful insights and leverage the power of artificial intelligence to solve real world business challenges. The data analytics with generative ai course is designed to help the learners build strong analytical skills by combining modern data analytics techniques, with the practical use of generative ai tools.\n\nGain hands-on experience with real-world datasets, dashboards, and Generative AI tools to become an industry-ready Data Analyst.",
  duration: "6 months",
  fee: "₹89,999",
  rating: "4.9",
  reviews: "5.1k",
  img: list2,
  syllabusLink: "/pdfs/Data-Analytics-brochure.pdf",

  whatYouWillLearn: [
    {
      id: 1,
      icon: "📊",
      title: "Data Analytics Fundamentals",
      desc: "Understand the complete data analytics lifecycle including data collection, cleaning, transformation, and interpretation."
    },
    {
      id: 2,
      icon: "📈",
      title: "Advanced Excel",
      desc: "Master formulas, pivot tables, dashboards, charts, Power Query, and data analysis techniques in Microsoft Excel."
    },
    {
      id: 3,
      icon: "🗄️",
      title: "SQL & Database Management",
      desc: "Learn SQL queries, joins, stored procedures, views, indexing, and relational database concepts."
    },
    {
      id: 4,
      icon: "🐍",
      title: "Python for Data Analytics",
      desc: "Analyze and manipulate data using Python along with NumPy, Pandas, and data visualization libraries."
    },
    {
      id: 5,
      icon: "📉",
      title: "Power BI & Data Visualization",
      desc: "Create interactive dashboards, reports, KPIs, and business intelligence solutions using Power BI."
    },
    {
      id: 6,
      icon: "🤖",
      title: "Generative AI for Analytics",
      desc: "Leverage ChatGPT, Microsoft Copilot, Gemini, and other AI tools to automate analysis, reporting, and insights."
    },
    {
      id: 7,
      icon: "🧠",
      title: "Machine Learning Basics",
      desc: "Understand core machine learning concepts, predictive analytics, and model evaluation techniques."
    },
    {
      id: 8,
      icon: "💼",
      title: "Industry Projects & Career Preparation",
      desc: "Build real-world analytics dashboards, AI-powered reporting solutions, portfolio projects, and prepare for interviews."
    }
  ],

  tools: [
    { name: "Microsoft Excel", icon: "📊" },
    { name: "SQL", icon: "🗄️" },
    { name: "MySQL", icon: "🐬" },
    { name: "Python", icon: "🐍" },
    { name: "NumPy", icon: "🔢" },
    { name: "Pandas", icon: "🐼" },
    { name: "Matplotlib", icon: "📈" },
    { name: "Seaborn", icon: "📉" },
    { name: "Power BI", icon: "📊" },
    { name: "Tableau", icon: "📋" },
    { name: "Jupyter Notebook", icon: "📒" },
    { name: "Google Colab", icon: "☁️" },
    { name: "ChatGPT", icon: "🤖" },
    { name: "Microsoft Copilot", icon: "🪄" },
    { name: "Google Gemini", icon: "✨" },
    { name: "Git & GitHub", icon: "🔀" }
  ],

  curriculum: [
    {
      module: "Introduction to Data Analytics",
      topics: [
        "What is Data Analytics?",
        "Data Analytics Lifecycle",
        "Types of Analytics",
        "Business Intelligence",
        "Data Sources",
        "Data Collection",
        "Data Cleaning",
        "Analytics Workflow"
      ]
    },
    {
      module: "Advanced Microsoft Excel",
      topics: [
        "Excel Functions",
        "Logical Functions",
        "Lookup Functions",
        "Pivot Tables",
        "Pivot Charts",
        "Power Query",
        "Dashboards",
        "Data Validation"
      ]
    },
    {
      module: "SQL & Relational Databases",
      topics: [
        "Database Concepts",
        "SQL Basics",
        "CRUD Operations",
        "Joins",
        "Grouping & Aggregation",
        "Subqueries",
        "Views",
        "Stored Procedures"
      ]
    },
    {
      module: "Python for Data Analytics",
      topics: [
        "Python Fundamentals",
        "NumPy",
        "Pandas",
        "Data Cleaning",
        "Data Transformation",
        "Data Visualization",
        "File Handling",
        "Exploratory Data Analysis"
      ]
    },
    {
      module: "Data Visualization with Power BI",
      topics: [
        "Power BI Desktop",
        "Data Import",
        "Data Modeling",
        "DAX Basics",
        "Interactive Dashboards",
        "Reports",
        "KPIs",
        "Publishing Reports"
      ]
    },
    {
      module: "Statistics for Data Analytics",
      topics: [
        "Descriptive Statistics",
        "Probability",
        "Sampling",
        "Correlation",
        "Regression",
        "Hypothesis Testing",
        "Outlier Detection",
        "Business Insights"
      ]
    },
    {
      module: "Generative AI for Data Analytics",
      topics: [
        "Introduction to Generative AI",
        "Prompt Engineering",
        "ChatGPT for Analytics",
        "Microsoft Copilot",
        "Google Gemini",
        "AI-Assisted Data Cleaning",
        "Automated Report Generation",
        "AI Productivity Workflows"
      ]
    },
    {
      module: "Machine Learning Fundamentals",
      topics: [
        "Introduction to Machine Learning",
        "Supervised Learning",
        "Unsupervised Learning",
        "Regression",
        "Classification",
        "Clustering",
        "Model Evaluation",
        "Business Use Cases"
      ]
    },
    {
      module: "Capstone Project & Career Preparation",
      topics: [
        "Business Case Study",
        "End-to-End Analytics Project",
        "Dashboard Development",
        "AI-Powered Reporting",
        "Portfolio Building",
        "Resume Preparation",
        "Interview Preparation",
        "Project Presentation"
      ]
    }
  ]
},
{
  id: 3,
  slug: "cyber-security",
  title: "Cyber Security",
  location: "Calicut",
  desc: "Build a successful career in Cyber Security by mastering networking, ethical hacking, penetration testing, vulnerability assessment, digital forensics, cloud security, SIEM, incident response, and security best practices. Gain hands-on experience with real-world cyber attack simulations and industry-standard security tools.",
  overviewBodyText: "Develop the knowledge and practical skills to produce modern digital systems from cyber sets. The cyber security course combines cyber security fundamentals with hands-on training in network security, ethical hacking, vulnerability assessments, cloud security and security operations.\n\nMaster networking, ethical hacking, penetration testing, vulnerability assessment, digital forensics, cloud security, SIEM, incident response, and security best practices.",
  duration: "6 months",
  fee: "₹89,999",
  rating: "4.7",
  reviews: "3.8k",
  img: list3,

  whatYouWillLearn: [
    {
      id: 1,
      icon: "🌐",
      title: "Networking Fundamentals",
      desc: "Understand computer networks, TCP/IP, OSI model, routing, switching, DNS, HTTP, and network security."
    },
    {
      id: 2,
      icon: "🛡️",
      title: "Ethical Hacking",
      desc: "Learn ethical hacking methodologies, reconnaissance, vulnerability scanning, exploitation, and reporting."
    },
    {
      id: 3,
      icon: "🔍",
      title: "Penetration Testing",
      desc: "Perform penetration testing on web applications, networks, and systems using industry-standard tools."
    },
    {
      id: 4,
      icon: "🐧",
      title: "Linux & Windows Security",
      desc: "Secure Linux and Windows operating systems through configuration, hardening, and monitoring."
    },
    {
      id: 5,
      icon: "☁️",
      title: "Cloud Security",
      desc: "Understand cloud security principles, AWS security services, IAM, encryption, and compliance."
    },
    {
      id: 6,
      icon: "📊",
      title: "Security Monitoring & SIEM",
      desc: "Monitor security events, analyze logs, detect threats, and respond using SIEM platforms."
    },
    {
      id: 7,
      icon: "🧾",
      title: "Digital Forensics & Incident Response",
      desc: "Investigate cyber incidents, preserve digital evidence, and perform incident response procedures."
    },
    {
      id: 8,
      icon: "💼",
      title: "Real-World Security Projects",
      desc: "Work on hands-on labs, Capture The Flag (CTF) challenges, vulnerability assessments, and security audits."
    }
  ],

  tools: [
    { name: "Kali Linux", icon: "🐉" },
    { name: "Wireshark", icon: "🦈" },
    { name: "Nmap", icon: "🌐" },
    { name: "Metasploit", icon: "💣" },
    { name: "Burp Suite", icon: "🕷️" },
    { name: "OWASP ZAP", icon: "🛡️" },
    { name: "Nessus", icon: "🔎" },
    { name: "John the Ripper", icon: "🔑" },
    { name: "Hydra", icon: "🐍" },
    { name: "Aircrack-ng", icon: "📶" },
    { name: "Splunk", icon: "📊" },
    { name: "Microsoft Defender", icon: "🛡️" },
    { name: "AWS Security", icon: "☁️" },
    { name: "Linux", icon: "🐧" },
    { name: "Git & GitHub", icon: "🔀" },
    { name: "VirtualBox", icon: "💻" }
  ],

  curriculum: [
    {
      module: "Cyber Security Fundamentals",
      topics: [
        "Introduction to Cyber Security",
        "CIA Triad",
        "Threat Landscape",
        "Cyber Attacks",
        "Security Principles",
        "Risk Management",
        "Compliance",
        "Cyber Security Careers"
      ]
    },
    {
      module: "Networking Fundamentals",
      topics: [
        "OSI Model",
        "TCP/IP",
        "IP Addressing",
        "DNS",
        "HTTP/HTTPS",
        "Routing & Switching",
        "Firewalls",
        "Network Troubleshooting"
      ]
    },
    {
      module: "Linux & Windows Security",
      topics: [
        "Linux Basics",
        "Windows Administration",
        "User Management",
        "File Permissions",
        "System Hardening",
        "Log Analysis",
        "Process Management",
        "Security Configuration"
      ]
    },
    {
      module: "Ethical Hacking",
      topics: [
        "Reconnaissance",
        "Footprinting",
        "Scanning",
        "Enumeration",
        "Vulnerability Assessment",
        "Exploitation",
        "Privilege Escalation",
        "Reporting"
      ]
    },
    {
      module: "Web Application Security",
      topics: [
        "OWASP Top 10",
        "SQL Injection",
        "Cross Site Scripting (XSS)",
        "CSRF",
        "Authentication Attacks",
        "Session Management",
        "API Security",
        "Secure Coding"
      ]
    },
    {
      module: "Penetration Testing",
      topics: [
        "Penetration Testing Process",
        "Information Gathering",
        "Network Pentesting",
        "Web Pentesting",
        "Wireless Security",
        "Password Cracking",
        "Post Exploitation",
        "Documentation"
      ]
    },
    {
      module: "Cloud Security & SIEM",
      topics: [
        "Cloud Security Basics",
        "AWS IAM",
        "Identity Management",
        "Encryption",
        "SIEM Fundamentals",
        "Log Monitoring",
        "Threat Detection",
        "Incident Response"
      ]
    },
    {
      module: "Digital Forensics",
      topics: [
        "Forensics Fundamentals",
        "Evidence Collection",
        "Disk Analysis",
        "Memory Analysis",
        "Malware Basics",
        "Incident Investigation",
        "Reporting",
        "Legal Considerations"
      ]
    },
    {
      module: "Capstone Project & Career Preparation",
      topics: [
        "Security Assessment Project",
        "Vulnerability Scanning",
        "Penetration Testing Report",
        "CTF Challenge",
        "Portfolio Building",
        "Resume Preparation",
        "Interview Preparation",
        "Final Project Presentation"
      ]
    }
  ]
},
{
  id: 4,
  slug: "mern-stack-development",
  title: "MERN Stack Development",
  location: "Calicut",
  desc: "Become a professional Full Stack JavaScript Developer by mastering MongoDB, Express.js, React.js, and Node.js. Learn frontend development, REST APIs, authentication, state management, cloud deployment, and DevOps fundamentals while building real-world full stack applications from scratch.",
  overviewBodyText: "Build dynamic, responsive, and scalable web applications using one of the most in-demand javascript technology stack. The MERN Stack development provides comprehensive training in MongoDB, Express.js, React.js Node.js, equipping learners with the skills to develop modern full stack web applications from conception to development.\n\nDesigned with practical project based approach, the course enables learners to build industry relevant applications, work with RESTful APIs, Manage databases and deploy applications using modern development tools and workflows.",
  duration: "8 months",
  fee: "₹94,999",
  rating: "4.9",
  reviews: "4.5k",
  img: list1,
  syllabusLink: "/pdfs/New-Mern-stack.pdf",

  whatYouWillLearn: [
    {
      id: 1,
      icon: "🌐",
      title: "Frontend Development",
      desc: "Build responsive and interactive websites using HTML5, CSS3, Bootstrap, Tailwind CSS, and modern JavaScript."
    },
    {
      id: 2,
      icon: "⚛️",
      title: "React.js Development",
      desc: "Develop modern Single Page Applications using React, Hooks, Routing, Context API, Redux Toolkit, and API integration."
    },
    {
      id: 3,
      icon: "🟢",
      title: "Node.js & Express.js",
      desc: "Create scalable backend applications, RESTful APIs, authentication systems, and server-side logic."
    },
    {
      id: 4,
      icon: "🍃",
      title: "MongoDB Database",
      desc: "Design NoSQL databases, perform CRUD operations, aggregation, indexing, and database optimization."
    },
    {
      id: 5,
      icon: "🔐",
      title: "Authentication & Security",
      desc: "Implement JWT authentication, authorization, password encryption, validation, and security best practices."
    },
    {
      id: 6,
      icon: "☁️",
      title: "Deployment & Cloud",
      desc: "Deploy full stack applications using Vercel, Render, MongoDB Atlas, AWS, Docker, and Nginx."
    },
    {
      id: 7,
      icon: "🐳",
      title: "DevOps Fundamentals",
      desc: "Learn Git, GitHub, Docker, CI/CD pipelines, Linux basics, and modern deployment workflows."
    },
    {
      id: 8,
      icon: "💼",
      title: "Industry Projects & Career Preparation",
      desc: "Build portfolio-ready projects, prepare for coding interviews, and become job-ready as a MERN Stack Developer."
    }
  ],

  tools: [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "Bootstrap", icon: "🅱️" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "JavaScript", icon: "🟨" },
    { name: "React", icon: "⚛️" },
    { name: "Redux Toolkit", icon: "🧰" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Mongoose", icon: "📄" },
    { name: "JWT", icon: "🔐" },
    { name: "Git", icon: "🔀" },
    { name: "GitHub", icon: "🐙" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "Postman", icon: "📮" },
    { name: "VS Code", icon: "💻" },
    { name: "Linux", icon: "🐧" },
    { name: "Nginx", icon: "🌐" }
  ],

  curriculum: [
    {
      module: "Web Development Fundamentals",
      topics: [
        "HTML5",
        "CSS3",
        "Flexbox & Grid",
        "Bootstrap",
        "Tailwind CSS",
        "Responsive Design",
        "JavaScript ES6+",
        "DOM Manipulation"
      ]
    },
    {
      module: "Modern JavaScript",
      topics: [
        "Variables & Functions",
        "Objects & Arrays",
        "Promises",
        "Async/Await",
        "Fetch API",
        "Modules",
        "Error Handling",
        "ES6 Features"
      ]
    },
    {
      module: "React.js Development",
      topics: [
        "React Fundamentals",
        "JSX",
        "Components",
        "Props & State",
        "React Hooks",
        "React Router",
        "Context API",
        "Redux Toolkit"
      ]
    },
    {
      module: "Backend Development with Node.js & Express",
      topics: [
        "Node.js Basics",
        "Express.js",
        "REST APIs",
        "Middleware",
        "Authentication",
        "JWT",
        "File Uploads",
        "Error Handling"
      ]
    },
    {
      module: "MongoDB & Mongoose",
      topics: [
        "MongoDB Basics",
        "Collections & Documents",
        "CRUD Operations",
        "Mongoose ODM",
        "Schema Design",
        "Aggregation",
        "Indexing",
        "Database Optimization"
      ]
    },
    {
      module: "Authentication & API Security",
      topics: [
        "User Authentication",
        "JWT Tokens",
        "Password Hashing",
        "Authorization",
        "Input Validation",
        "Role-Based Access",
        "API Security",
        "Environment Variables"
      ]
    },
    {
      module: "DevOps & Deployment",
      topics: [
        "Git & GitHub",
        "Linux Basics",
        "Docker",
        "Docker Compose",
        "CI/CD Fundamentals",
        "Vercel Deployment",
        "Render Deployment",
        "Nginx Configuration"
      ]
    },
    {
      module: "Cloud & Production Deployment",
      topics: [
        "MongoDB Atlas",
        "AWS Basics",
        "Domain Configuration",
        "SSL Setup",
        "Environment Management",
        "Performance Optimization",
        "Application Monitoring",
        "Production Best Practices"
      ]
    },
    {
      module: "Capstone Project & Career Preparation",
      topics: [
        "E-Commerce Project",
        "Full Stack CRUD Application",
        "REST API Integration",
        "Portfolio Building",
        "GitHub Portfolio",
        "Resume Preparation",
        "Interview Preparation",
        "Project Presentation"
      ]
    }
  ]
},
];
