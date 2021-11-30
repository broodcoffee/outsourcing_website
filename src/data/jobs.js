const jobs = [
    {
        jobName: "Hiring a Full-stack Developer",
        category: ["full-stack"],
        description: "We are in need of a Supports and develops software developers by providing advice, coaching, and guiding the team on Software Development Methodologies, coding standards, security standards and best practices.",
        compensation: 24, //dollars per hour
        duration: 8, //months
        requiredLang: ["JavaScript", "CSS", "HTML", "React", "PHP", "MySql"],
        id: "YtBf3g5V3Z8myXtM",
        employer: "Anonymous",
        date: '2021-11-23', //YYYY-MM-DD
    },
    {
        jobName: "Need Front-End and Back-End Developer",
        category: ["full-stack"],
        description: "Looking for a knowledgeable of Web standards (HTTP, CSS, React) fluent in english and written",
        compensation: 19, //dollars per hour
        duration: 3, //months
        requiredLang: ["JavaScript", "C#", "HTML5", "CSS"],
        id: "_UNqM23gDS54NXE0",
        employer: "Anonymous",
        date: '2021-11-22', //YYYY-MM-DD
    },
    {
        jobName: "Urgent hiring Full-stack Developer",
        category: ["full-stack"],
        description: "We are looking for a Full Stack Developer to produce scalable software solutions. You’ll be part of a cross-functional team that’s responsible for the full software development life cycle, from conception to deployment.",
        compensation: 27, //dollars per hour
        duration: 6, //months
        requiredLang: ["JavaScript", "CSS", "HTML", "React", "PHP", "Laravel"],
        id: "P41WZ_4FDIg5vFXH",
        employer: "Anonymous",
        date: '2021-11-27', //YYYY-MM-DD
    },
    {
        jobName: "Back-end Developer",
        category: ["back-end"],
        description: "We are looking for fresh back-end talented developer to build and to design modern applications through new architecture patterns, operational models, and software delivery processes.",
        compensation: 25, //dollars per hour
        duration: 2, //months
        requiredLang: ["JavaScript", "CSS", "HTML", "PHP", "NodeJS"],
        id: "IKMVse46MBl8WjQ",
        employer: "Anonymous",
        date: '2021-11-26', //YYYY-MM-DD
    },
    {
        jobName: "Full-stack Web Developer",
        category: ["full-stack"],
        description: "We are looking for a talented Full Stack Web Developer to work on fast-paced e-commerce websites. As a Full Stack Web Developer, you will work on multiple projects in your role, and coordinate with internal teams: Project Managers, Web Designers, and QA. ",
        compensation: 20, //dollars per hour
        duration: 6, //months
        requiredLang: ["JavaScript", "CSS", "HTML", "Phyton"],
        id: "0FYcpNVfnP9jlXcL",
        employer: "Anonymous",
        date: '2021-11-19', //YYYY-MM-DD
    },
    {
        jobName: "Raspberry Pi Web Server",
        category: ["full-stack"],
        description: "Can you help me run a web server on raspberry pi, which should simply a web page - simple html page. \nA user should be able to connect to raspberry pi, after connecting to raspberry pi’s Wi-Fi. Raspberry pi should emit the Wi-Fi signal continuously. \nOnce connected to raspberry pi, the user should be able to connect to web browser (hosted on raspberry pi ) on their smartphone.",
        compensation: 25, //dollars per hour
        duration: 1, //months
        requiredLang: ["JavaScript", "CSS", "HTML", "Raspberry Pi"],
        id: "C6bJHIFFd0162RN",
        employer: "Anonymous",
        date: '2021-11-23', //YYYY-MM-DD
    },
    {
        jobName: "Redesigning of a SaaS web application",
        category: ["full-stack"],
        description: "We are looking for somebody to redesign an existing SaaS web application with a modern and stylish UX & UI.\nThe freelancer should be able to understand the existing workflow and userflow of the web application. And has to come up with a lively, stylish and user friendly redesign of the same without altering the features of the app. Contact me with your existing work samples.",
        compensation: 40, //dollars per hour
        duration: 2, //months
        requiredLang: ["JavaScript", "CSS", "HTML", "UI/UX Design"],
        id: "uBbn64NbHMz9mm9",
        employer: "Anonymous",
        date: '2021-11-21', //YYYY-MM-DD
    },
    {
        jobName: "Looking for Shopify theme dev",
        category: ["ui/ux design", "front-end"],
        description: "Hi. I have a wordpress website with products. There are about 80products and I installed \"Debut\" theme. I need  make the shopify site like the wordpress site. if you are familiar to this work, let me know, please. Thank you.",
        compensation: 20, //dollars per hour
        duration: .5, //months
        requiredLang: ["JavaScript", "CSS", "HTML", "UI/UX Design", "Liquid", "Shopify", "Wordpress"],
        id: "4qhLWkvWymX0TZ0",
        employer: "Anonymous",
        date: '2021-11-24', //YYYY-MM-DD
    },
    {
        jobName: "PHP Developer",
        category: ["back-end"],
        description: "We are looking for a PHP Developer responsible for managing back-end services and the interchange of data between the server and the users. Your primary focus will be the development of all server-side logic, definition and maintenance of the central database, and ensuring high performance and responsiveness to requests from the front-end.  ",
        compensation: 27, //dollars per hour
        duration: "20",//months
        requiredLang: ["PHP", "MySql"],
        id:"y5t6_",
        employer:"Security Social",
        date:"2022-5-19"

    },
    {
        jobName: "Web Developer",
        category: ["ui/ux design", "front-end"],
        description: "We are looking for a skilled web developer who will be responsible for developing and/or designing websites for our company. You will be working alongside a team of other developers in creating, maintaining, and updating our websites.",
        compensation: 23, //dollars per hour
        duration: "8",//months
        requiredLang: ["JavaScript", "CSS", "HTML", "React"],
        id:"ONKZY",
        employer:"J and J Cargo",
        date:"2020-2-7"

    },
    {
        jobName: "Web Developer( PHP Dev)",
        category: ["back-end"],
        description: "We are looking for a PHP Developer responsible for managing back-end services and the interchange of data between the server and the users. Your primary focus will be the development of all server-side logic, definition and maintenance of the central database, and ensuring high performance and responsiveness to requests from the front-end. You will also be responsible for integrating the front-end elements built by your co-workers into the application.",
        compensation: 26, //dollars per hour
        duration: "24",//months
        requiredLang: ["JavaScript", "PHP", "MySql"],
        id:"_stXY",
        employer:"International Bank",
        date:"2019-5-31"

    },
    {
        jobName: "Shopify Web Developer",
        category: ["ui/ux/design", "full-stack"],
        description: "The role will build an e-commerce website and in-house CMS. Create and update technical documentation for all projects. Measuring recently released product features to establish benchmarks and to identify potential areas of improvement. Attend status/kick-off meetings, creative review meetings, and brainstorming sessions. Staying on top of the latest web design trends and looking for creative ideas and inspiration in parallel analogous worlds. Participate in both new client pitches and ongoing client maintenance of desktop, web, and mobile-web applications.",
        compensation: 24, //dollars per hour
        duration: "12",//months
        requiredLang: ["JavaScript", "CSS", "HTML", "Liquid", "Shopify"],
        id:"2w0kp",
        employer:"Cloud Staff",
        date:"2021-6-19"

    },
    {
        jobName: "Full-stack Web Developer",
        category: ["full-stack"],
        description: "We are seeking an experienced Software Engineer with a background in modern cloud, mobile, and IoT platform development. Software Engineers at DSDC embrace quality engineering in their day to day work, and so candidates familiar with test first development methodologies will feel right at home here. The successful applicant for this job will be a highly motivated individual contributor that values learning and can see their success as part of the team.",
        compensation: 25, //dollars per hour
        duration: "3",//months
        requiredLang: ["JavaScript", "CSS", "HTML", "PHP", "MySQL", "Phython", "Django", "Laravel"],
        id:"CSTpP",
        employer:"Juls Jewelry",
        date:"2020-10-13"

    }
].sort( (a,b) => new Date(b.date) - new Date(a.date) );


jobs.forEach( item => item.category.push('any'))

export { jobs }