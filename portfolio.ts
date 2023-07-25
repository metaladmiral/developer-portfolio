import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Prakhar Sinha',
  title: "Hi all, I'm Prakhar",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with PHP Core, Laravel, MySQL Python, Django, React.js and Blockchain development on Ethereum, Solidity, Web3.js.",
};

export const openSource = {
  githubUserName: 'metaladmiral',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: 'https://www.linkedin.com/in/prakhar-metaladmiral/',
  github: 'https://github.com/metaladmiral',
  instagram: 'https://www.instagram.com/prkhr.sinha96/',
  twitter: 'https://twitter.com/metaladmiral96',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive Websites with Bootstrap'),
        emoji(
          '⚡ Building Apps with Complex Backend and APIs with Laravel, Core PHP and MySQL'
        ),
        emoji('⚡ Building RESTful APIs in Django, Flask and Laravel'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },
        {
          skillName: 'PHP',
          fontAwesomeClassName: 'logos:php',
        },
        {
          skillName: 'MySQL',
          fontAwesomeClassName: 'logos:mysql',
        },
        {
          skillName: 'Laravel',
          fontAwesomeClassName: 'skill-icons:laravel-dark',
        },
        {
          skillName: 'Flask',
          fontAwesomeClassName: 'devicon:flask',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
        ),
        emoji(
          '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
        ),
        emoji(
          '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        ),
        emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
        emoji(
          '⚡ Building Dapps with React.js & Solidity using Web3.js & IPFS'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          fontAwesomeClassName: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          fontAwesomeClassName: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          fontAwesomeClassName: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          fontAwesomeClassName: 'logos:metamask-icon',
        },
      ],
    },
    {
      title: 'Other Technologies',
      lottieAnimationFile: '/lottie/skills/hacker.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Interested in Embedded Systems (arduino, stm32, ESP32)'),
        emoji('⚡ Experience with Embedded C and x86 Asssembly'),
        emoji(
          '⚡ Experience with creating reverse-shells using Python, Socket Programming and Multi-Threading'
        ),
        emoji(
          '⚡ Experience with creating simple GUI based apps using Tkinter Python'
        ),
        emoji(
          '⚡ Interested in Cyber-Security in fields like Reverse Engineering, Network Scanning and Alteration  (ARP), Web Pen Testing, etc. '
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Arduino',
          fontAwesomeClassName: 'logos:arduino',
        },
        {
          skillName: 'Embedded C',
          fontAwesomeClassName: 'devicon-plain:embeddedc-wordmark',
        },
        {
          skillName: 'NMap',
          fontAwesomeClassName: 'file-icons:nmap',
        },
        {
          skillName: 'Kali Linux',
          fontAwesomeClassName: 'simple-icons:kalilinux',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Backend',
    progressPercentage: '90',
  },
  {
    Stack: 'Programming',
    progressPercentage: '80',
  },
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '75', //Insert relative proficiency in percentage
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Chandigarh Group of Colleges',
    subHeader: 'Bachelor of Engineering in Computer Science',
    duration: 'August 2022 - 2026',
    desc: 'Served as a CTO in a digital marketing and web development agency.',
    grade: 'Grade A',
    descBullets: [
      'Won 3 inter-college Programming Contests in my First Year among all students from all batches.',
      'Improved Communication Skills',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Chief Technology Officer',
    company: 'Makes360',
    companyLogo: '/img/icons/common/download.jpeg',
    date: 'Apr 2022 – July 2023',
    desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Apartment Rental Website (LeBailMobilite)',
    desc: 'LeBailMobilite is the first platform dedicated to mobility lease. It includes features like chat-system, multiple types of user - landlord and tenant, Proposal System, Multi-Language Support, Search Filters, Image Optimization, etc.',
    link: 'https://lebailmobilite.com/',
  },
  {
    name: 'MemeLok',
    desc: 'Memelok is a social media website where you get full copyright to your meme as a memer. Users can watch memes based on their interest. Included features like Real-time Chat System using Websockets and NodeJS, Friends System, Image Optimization using flask, ',
    github: 'https://github.com/metaladmiral/memelok-mono',
    link: 'https://memelok.prakharsinha.xyz/',
  },
  {
    name: 'CGCcms - Attendify and Everwall',
    desc: 'Attendify was a student/faculty management system with features like multiple level of users - Superadmin, Faculty and Students. Here, Superadmin can assign Class Counselorship and Subjects to a Faculty and Faculties can mark everyday attendance of students. Also, they can add students to their class and edit their details like marks and personal details. Students can checkout their Marks, Everyday attendance and other details.',
    link: 'https://cgccms.in/',
  },
  {
    name: 'Foodee',
    desc: 'Foodee 🍉 is a food recommendation system which suggests users his next meal (recipe name) based on user characteristics. Currently, Foodee is and API and has future scopes.',
    github: 'https://github.com/metaladmiral/Foodee',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Luca Malandrino',
    feedback:
      '"Prakhar is a young but already experienced full stack developer who is full of good will to learn and complete projects. Communication with him is great, he always responds to messages and you can communicate easily. Prakhar made a real estate listing site for me, initially there was some misunderstanding also because of the poor details he was provided, but thanks to the excellent communication we managed to get the result we expected. Highly recommended."',
  },
  {
    name: 'Anish Kumar',
    feedback:
      '"Prakhar made multiple complex full-stack projects with us at Makes360. We made student management systems for multiple colleges, Event Management systems, Doc Classification webapp and an Android App as well. On-time, clear and transparent communication. Have enjoyed working with him."',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Prakhar Sinha Portfolio',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Prakhar Sinha',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Prakhar',
    'Prakhar Sinha',
    '@metaladmiral96',
    'prkhr.sinha96',
    'Portfolio',
    'Prakhar Portfolio ',
    'Prakhar Sinha Portfolio',
  ],
};
