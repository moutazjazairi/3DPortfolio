import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  import words from "../assets/words.png";
  import bank from "../assets/bank.png";
  import dohagram from "../assets/dohagram.png";
  import mshop from "../assets/mshop.png";
  import md from "../assets/m&d.png";
  import carhup from "../assets/carhub.png";
  import liviano from "../assets/liviano.png";
  import ayla from "../assets/ayla.png";
  import tplc from "../assets/tplc.png";
  import bond from "../assets/bond.png";
  import Sya from "../assets/SYA.webp";
  import SL from "../assets/SL.jpeg";
  import mad from "../assets/mad.jpg";
  import br from "../assets/br.jpeg";
  import alsham from "../assets/alsham.jpg";
  import moutaz from "../assets/moutaz-trade.png";
  import care from "../assets/care.png"
  import arrow from "../assets/arrow.png"

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Front End Web Developer",
      icon: web,
    },
    {
      title: "WordPress Developer",
      icon: mobile,
    },
    {
      title: "IT Support",
      icon: backend,
    },
    {
      title: "Project Adminstartor",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
 
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineering Trainee",
      company_name: "Syrian Youth Assembly",
      icon: Sya,
      iconBg: "#ffffff",
      date: "July 2021 - April 2022",
      points: [
        "Participated in a structured training program focused on software engineering principles",
        "with a strong emphasis on the Software Development Life Cycle (SDLC), project workflows, documentation practices, and development tools.",
        "Gained foundational knowledge of how software projects are planned and managed.",
      ],
    },
    {
      title: "Project Administrator",
      company_name: "SightLine Co LLC",
      icon: SL,
      iconBg: "#ffffff",
      date: "June 2023 - June 2024",
      points: [
        "Oversaw project timelines, task coordination, and administrative operations to ensure smooth execution and delivery",
        "Managed schedules, tracked progress, supported team communication",
        "and handled documentation and reporting to keep projects on track.",
      ],
    },
    {
      title: "Junior Front End Web Developer",
      company_name: "Mad Solutions",
      icon: mad,
      iconBg: "#ffffff",
      date: "Jan 2024 - May 2024",
      points: [
        "Worked remotely as a part-time Junior Front-End Developer on a web project for an insurance company in Turkey.",
        "Contributed to building and styling user interfaces, ensuring responsive design,",
        "And collaborating with the team to implement project requirements using modern web technologies.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Front End Web Developer",
      company_name: "Brandiator",
      icon: br,
      iconBg: "#ffffff",
      date: "June 2024 - Present",
      points: [
        "Working as a Front-End Web Developer on a large-scale school management system using modern web technologies",
        "Also responsible for developing and maintaining custom WordPress websites for clients",
        "Collaborate with cross-functional teams to deliver tailored digital solutions for various business needs.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Bachelor of Engineering, major in Software Engineering (IT)",
      name: "AlSham Private University",
      designation: "2018 - 2023",
      company: ".",
      image: alsham,
    },

  ];
  
  const projects = [
    {
      name: "Words Academy",
      description:
        "Words academy has been found in hands of educators, content writers, painters and musical specialists who search to find the best practices and methods for kids to learn online Arabic and English languages by interactive and fun ways.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Typescript",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },
      ],
      image: words,
      source_code_link: "https://www.wordsacademy.online/",
    },
    {
      name: "Horizon",
      description:
        "Horizon Bank is a fully functional banking system built with Next.js, Appwrite, and Plaid. It includes user authentication, secure money transfers, account management, and real-time balance updates, with Plaid for seamless financial institution connections. This project highlights my ability to develop secure, data-driven financial applications..",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Typescript",
          color: "blue-text-gradient",
        },
        {
          name: "Nextjs",
          color: "green-text-gradient",
        },
      ],
      image: bank,
      source_code_link: "https://horizon-blush-seven.vercel.app/sign-in",
    },
    {
      name: "Moutaz-Trade",
      description:
        "Moutaz-Trade is a modern web platform built with Next.js and MongoDB that delivers the latest stock market news and insights in real time. It features a clean, responsive interface for tracking stock performance and financial updates efficiently. The project highlights my ability to build data-driven, scalable web applications using technologies like Next.js, MongoDB, TypeScript, and Tailwind CSS with a focus on performance and user experience.",
      tags: [
        {
          name: "MongooDB",
          color: "green-text-gradient",
        },
        {
          name: "Typescript",
          color: "blue-text-gradient",
        },
        {
          name: "Nextjs",
          color: "green-text-gradient",
        },
      ],
      image: moutaz,
      source_code_link: "https://moutaz-trade.vercel.app/sign-in",
    },
    {
      name: "CarePulse",
      description:
        "CarePulse is a healthcare appointment management platform built with Next.js and Appwrite. It enables patients to book, modify, or cancel appointments with doctors seamlessly, while providing an admin dashboard for hospitals to manage schedules, approve requests, and oversee patient interactions. The project demonstrates my ability to build secure, full-stack web applications with role-based access, real-time updates, and a smooth user experience.",
      tags: [
        {
          name: "Appwrite",
          color: "pink-text-gradient",
        },
        {
          name: "Typescript",
          color: "blue-text-gradient",
        },
        {
          name: "Nextjs",
          color: "green-text-gradient",
        },
      ],
      image: care,
      source_code_link: "https://healthcarepulse-plum.vercel.app/",
    },
    {
      name: "DohaGram",
      description:
        "Dohagram is a fully functional Instagram clone built with Next.js for the frontend and Appwrite for the backend. The project replicates key Instagram features, including user authentication, posting images, liking posts, and commenting. It showcases my ability to create full-stack applications using modern technologies, integrating front-end and back-end services seamlessly..",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Typescript",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "blue-text-gradient",
        },
      ],
      image: dohagram,
      source_code_link: "https://dohagram1.vercel.app/",
    },
    {
      name: "Moutaz Shop",
      description:
        "Moutaz Shop is an e-commerce site built with Next.js, featuring a sleek homepage design and a dark mode toggle for enhanced user experience. This project showcases my skills in creating responsive and interactive websites with modern web technologies.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: mshop,
      source_code_link: "https://moutazshop.netlify.app/",
    },
    {
      name: "M&D Tech and wear",
      description:
        "Moutaz Shop is an e-commerce site built with Next.js, featuring a sleek homepage design and a dark mode toggle for enhanced user experience. This project showcases my skills in creating responsive and interactive websites with modern web technologies.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Typescript",
          color: "pink-text-gradient",
        },
      ],
      image: md,
      source_code_link: "https://github.com/",
    },
    {
      name: "CarHub",
      description:
        "Car Hub is a car rental platform built with Next.js, allowing users to browse cars, view detailed specifications, and filter results based on preferences. The car data, including specifications, is fetched from an external API. The backend utilizes a different service, showcasing my ability to work with various technologies to build interactive, real-time applications.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
      ],
      image: carhup,
      source_code_link: "https://car-hup-zeta.vercel.app/",
    },
    {
      name: "ArrowAvia",
      description:
        "ArrowAvia is a corporate website built with WordPress and Elementor, showcasing the company’s expertise in aviation support services, including charter, cargo, emergency, and diplomatic missions. The site emphasizes precision, reliability, and care, featuring a clean design, responsive layout, and user-friendly content management system for seamless updates and scalability.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "Elemantor",
          color: "green-text-gradient",
        },
      ],
      image: arrow,
      source_code_link: "https://arrowavia.aero/",
    },
    {
      name: "Liviano Foods LLC",
      description:
        "Liviano Foods is a website built for a hummus factory that showcases a wide range of products. Developed using WordPress and Elementor, the website features an easy-to-navigate layout to highlight their product offerings and brand. This project demonstrates my skills in using WordPress to create visually appealing and functional websites for clients.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "Elemantor",
          color: "green-text-gradient",
        },
        {
          name: "Hummus",
          color: "green-text-gradient",
        },
      ],
      image: liviano,
      source_code_link: "https://livianofoods.com/",
    },
    {
      name: "Ayla Foods LLC",
      description:
        "Ayla Foods is a website built for a hummus factory in Turkey, developed using WordPress. The site showcases their product range and includes a translator feature for seamless browsing in both Turkish and English. This project highlights my ability to create multilingual websites that cater to diverse audiences.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "Elemantor",
          color: "green-text-gradient",
        },
      ],
      image: ayla,
      source_code_link: "https://ayla-foods.com/",
    },
    {
      name: "TPLC",
      description:
        "TPLC is a website created for a lawyer client, built using WordPress. The site highlights his legal services, offering a professional platform for clients seeking legal consultation. This project demonstrates my ability to create tailored, professional websites for law firms and individual legal professionals.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "Elemantor",
          color: "green-text-gradient",
        },
        {
          name: "Lawyer",
          color: "pink-text-gradient",
        },
      ],
      image: tplc,
      source_code_link: "https://tplc.ae/",
    },
    {
      name: "Bonds & Beyond",
      description:
        "Bonds & Beyond is an Emirati brand that specializes in providing unique and personalized gifts that add joy and love to your occasions. Through our products, we seek to provide our humble experience in inspiring and motivating, by connecting with our loved ones through the bonds of love and reminding them of their importance.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "Elemantor",
          color: "green-text-gradient",
        },
        {
          name: "Bonds",
          color: "pink-text-gradient",
        },
      ],
      image: bond,
      source_code_link: "https://bondsandbeyond.ae/",
    },
  ];

  
  export { services, technologies, experiences, testimonials, projects };