const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
      
    },

    {
      name: "Contact",
      link: "#contact",
      
    },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 4, suffix: "+", label: "Years of Experience" },
    { value: 10, suffix: "+", label: "Completed Projects" },
    { value: 85, suffix: "+", label: "Commits Pushed" },
    { value: 20, suffix: "+", label: "Certificates Earned" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "/images/L1.png",
    },
    {
      imgPath: "/images/L2.png",
    },
    {
      imgPath: "/images/L3.png",
    },

  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Project Manager",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Developer",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Manager",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
      review: " Yokesh’s contributions to General Electric Aerospace's web applications have been outstanding. He approaches challenges with a problem-solving mindset. ",
      imgPath: "/images/satisfaction.png",
      logoPath: "/images/Timeline-logo.png",
      title: "Node js Developer",
      date: "January 2025 - Present",
      responsibilities: [
        "Developed and maintained scalable web applications using Node.js and Express.js.",
        "Integrated Generative AI models to automate content summarization using strategic prompts, improving efficiency & readability.",
        "Refactored  codebase into a single application, improving maintainability , scalability & Migrated from plain JavaScript to a modern framework to enhance performance &  efficiency.",
      ],
    },
    {
      review: "Yokesh brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences in British Telecom.",
      imgPath: "/images/satisfaction.png",
      logoPath: "/images/Timeline-logo.png",
      title: "Front End Developer",
      date: "January 2022 - December 2024",
      responsibilities: [
        "Developed responsive and visually appealing web pages using HTML, CSS, and JavaScript.",
        "Ensured websites load quickly and efficiently across different devices and browsers",
        "Utilized libraries like React.js, Angular, or Vue.js to enhance interactivity and efficiency",
      ],
    },
    {
      review: "Yokesh’s work on Designing  brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
      imgPath: "/images/satisfaction.png",
      logoPath: "/images/Timeline-logo.png",
      title: "UX/UI Designer",
      date: "July 2021 - January 2022",
      responsibilities: [
        "Developed wireframes, mockups, and interactive prototypes using tools like Figma, Adobe XD, or Sketch to visualize design concepts.",
        "Created aesthetically pleasing designs that align with brand identity.",
        "Worked closely with developers, stakeholders, and product teams to refine designs, conduct usability testing, and improve user experience.",
      ],
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Esther Howard",
      mentions: "@estherhoward",
      review:
        "I can’t say enough good things about Yokesh. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
      imgPath: "/images/client1.png",
    },
    {
      name: "Wade Warren",
      mentions: "@wadewarren",
      review:
        "Working with Yokesh was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      imgPath: "/images/client3.png",
    },
    {
      name: "Guy Hawkins",
      mentions: "@guyhawkins",
      review:
        "Collaborating with Yokesh was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Yokesh's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Yokesh is the ideal partner.",
      imgPath: "/images/client2.png",
    },
    {
      name: "Marvin McKinney",
      mentions: "@marvinmckinney",
      review:
        "Yokesh was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "/images/client5.png",
    },
    {
      name: "Floyd Miles",
      mentions: "@floydmiles",
      review:
        "Yokesh’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
      imgPath: "/images/client4.png",
    },
    {
      name: "Albert Flores",
      mentions: "@albertflores",
      review:
        "Yokesh was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      imgPath: "/images/client6.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "insta",
      imgPath: "/images/insta.png",
    },
    {
      name: "fb",
      imgPath: "/images/fb.png",
    },
    {
      name: "x",
      imgPath: "/images/x.png",
    },
    {
      name: "linkedin",
      imgPath: "/images/linkedin.png",
    },
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };