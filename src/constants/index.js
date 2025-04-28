import { nanomine, peacock } from "../assets/images"
import { aiqs, aora, cineversse, homehive, leaselink, postify } from "../assets/projectIcons"
import { angular, css, express, git, github, html, javascript, mongodb, motion, mui, nextjs, nodejs, react, reactnative, redux, sass, tailwindcss, typescript, zustand } from "../assets/skillIcons"
import { email, linkedin, twitter, x } from "../assets/socialIcons"

export const skills = [

    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: reactnative,
        name: "React Native",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: zustand,
        name: "Zustand",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
];

export const experience = [
    {
        title: "React.js Developer",
        company_name: "Nanomine Technolabs LLP.",
        icon: nanomine,
        iconBg: "#f1f1f1",
        date: "Feb 2024 - Jul 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Nanomine Technolabs LLP.",
        icon: nanomine,
        iconBg: "#f1f1f1",
        date: "Aug 2024 - Jan 2025",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Peacock Technologies",
        icon: peacock,
        iconBg: "#00053c",
        date: "Feb 2025 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Email',
        iconUrl: email,
        link: '/contact',
        target: '_self'
    },
    {
        name: 'GitHubs',
        iconUrl: github,
        link: 'https://github.com/uttam172',
        target: '_blank'
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/uttam172',
        target: '_blank'
    },
    {
        name: 'X',
        iconUrl: x,
        link: 'https://twitter.com/uttam172_',
        target: '_blank'
    },
];

export const project = [
    {
        iconUrl: aiqs,
        theme: 'btn-back-red',
        name: 'AIQS',
        description: 'Developed a web application that allows users to share their developed AI prompts online and also see and use prompts shared by other users.',
        link: 'https://github.com/uttam172/AIQS',
    },
    {
        iconUrl: aora,
        theme: 'btn-back-green',
        name: 'Aora',
        description: 'Created a full-stack application with React Native and Appwrite which allows user to register or login with their email and share AI generated videos.',
        link: 'https://github.com/uttam172/Aora',
    },
    {
        iconUrl: postify,
        theme: 'btn-back-blue',
        name: 'Postify',
        description: 'Developed a fullstack web application which allows user to share quotes and also see quotes shared by other users. also given CRUD functionality.',
        link: 'https://github.com/uttam172/Postify',
    },
    {
        iconUrl: homehive,
        theme: 'btn-back-pink',
        name: 'HomeHive',
        description: 'Built a complete solution for Society Management with MERN stack. which have multiple types of user with diffrent permissions.',
        link: 'https://github.com/uttam172/HomeHive',
    },
    {
        iconUrl: leaselink,
        theme: 'btn-back-black',
        name: 'LeaseLink',
        description: 'Developed an application for real estate listings and rentings, facilitating property searches and connecting renters with owners.',
        link: 'https://github.com/uttam172/LeaseLink',
    },
    {
        iconUrl: cineversse,
        theme: 'btn-back-yellow',
        name: 'Cineversse',
        description: 'A website that allows users to search for movies and TV shows and get information about them, such as their plot, cast, release date etc.',
        link: 'https://github.com/uttam172/Cineversse',
    }
];