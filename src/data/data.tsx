import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/try1.jpeg';
import porfolioImage1 from '../images/portfolio/trace.png';
import porfolioImage2 from '../images/portfolio/22FinalProject.png';
import porfolioImage3 from '../images/portfolio/163Project1.png';
import porfolioImage4 from '../images/portfolio/163Project2.png';
import porfolioImage5 from '../images/portfolio/163Project3.png';
import porfolioImage6 from '../images/portfolio/cis163proj1.png';
import porfolioImage7 from '../images/portfolio/egr326ProjectPCB.png';
import porfolioImage8 from '../images/portfolio/nexysA7.jpeg';
import porfolioImage9 from '../images/portfolio/robosockeyRobot.jpg';
import porfolioImage10 from '../images/portfolio/smartmirrorFront.png';
import porfolioImage11 from '../images/portfolio/trace.png';
import profilepic from '../images/profilepic.jpg';
// import dornerworksImage from  '../images/dornerworkslogo.png';
import testimonialImage from '../images/gvsulogo2.png';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  //SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';
// import { profile } from 'console';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Seth Konynenbelt`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an Austin based <strong className="text-stone-100">Embedded Software Engineer </strong> who just finished his degree at
        Grand Valley State University. I love working with custom hardware, FPGA, and software designs as I develop my skills in embedded engineering.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can find me competing as a collegiate athlete in wrestling,
        playing pickleball, backpacking in the mountains, or playing Euchre.
      </p>
    </>
  ),
  actions: [
    {
      href: './files/Konynenbelt_Seth_Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: (
    <>
      <p className="prose-sm text-stone-100 sm:prose-base lg:prose-base white-space: pre-line">
        I am a student athlete competing in wrestling at GVSU while studying computer engineering. I chose computer
        engineering as my major because I most enjoy working in technologies where hardware and software interact. This means I
        get to touch a lot of aspects of embedded development in areas such as communication protocols, C development, FPGA, scripting
        languages, hardware bring up, and more. Recently, I have been expanding these skills to become a stronger developer with personal projects
        working with development boards, website building, and develoment with tools I am interested in.
      </p>
      <p className="prose-sm text-stone-100 sm:prose-base lg:prose-base">
        I am currently seeking employment for a full time role as a software engineer, or similar job title. I am open to re-locating
        for an exciting opportunity.
      </p>
    </>
  ),
  aboutItems: [
    { label: 'Location', text: 'Grand Rapids, MI', Icon: MapIcon },
    { label: 'Age', text: '23', Icon: CalendarIcon },
    { label: 'Employment Eligibility', text: 'U.S. Citizen', Icon: FlagIcon },
    { label: 'Interests', text: 'Wrestling, Pickleball, Books, Card Games', Icon: SparklesIcon },
    { label: 'Study', text: 'Grand Valley State University, (GPA : 3.93)', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'DornerWorks Ltd (Co-Op)', Icon: BuildingOffice2Icon },
  ],
};

/**
 * Skills section
 */
/*export const skills: SkillGroup[] = [
  {
    name: 'Embedded Software',
    skills: [
      {
        name: 'English',
        level: 5,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Embedded Development',
    description: 'Embedded Musical Instrument and LCD Display',
    url: 'https://github.com/sethkbelt',
    image: porfolioImage1,
  },
  {
    title: 'Verilog',
    description: 'Verilog Based Vending Machine',
    url: 'https://github.com/sethkbelt',
    image: porfolioImage2,
  },
  {
    title: 'Timers',
    description: 'Day Counter and Java Project',
    url: 'https://github.com/sethkbelt',
    image: porfolioImage3,
  },
  {
    title: 'AI Chess',
    description: 'Chess with low-level AI',
    url: 'https://github.com/sethkbelt',
    image: porfolioImage4,
  },
  {
    title: 'Gaming Database',
    description: 'Java based data base school project',
    url: 'https://github.com/sethkbelt',
    image: porfolioImage5,
  },
  {
    title: 'Dice Game',
    description: 'Simple dice game with UI components',
    url: 'https://github.com/sethkbelt',
    image: porfolioImage6,
  },
  {
    title: 'Embedded Development',
    description: 'Embedded Musical Instrument with custom PCB',
    url: 'https://github.com/sethkbelt',
    image: porfolioImage7,
  },
  {
    title: 'VHDL and RISC-V',
    description: 'MIPS Assembly, VHDL, and C RISC-V Peripheral Work',
    url: 'https://github.com/sethkbelt',
    image: porfolioImage8,
  },
  {
    title: 'Autonomous Robot',
    description: 'Arduino based obstacle weaving and goal scoring robot',
    url: 'https://github.com/sethkbelt',
    image: porfolioImage9,
  },
  {
    title: 'Rasberyy Pi Python Smart Mirror',
    description: 'Smart Mirror implementation on Rasberry Pi',
    url: 'https://github.com/sethkbelt',
    image: porfolioImage10,
  },
  {
    title: 'Circuit Design and Layout',
    description: 'PCB Circuit design of audio mixer and amplifier',
    url: 'https://github.com/sethkbelt',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Expected Graduation August 2024',
    location: 'Grand Valley State University',
    title: 'Computer Engineering, B.S.E',
    content:
      <p>
        Overall GPA : 3.93 <br/>
        2024 GVSU Computer Engineering Student of the Year<br/>
        NCAA D2 Collegiate Wrestling <br/>
        Minor in Computer Science and Math <br/>
        <br />At GVSU I have been able to design, build, and evaluate hardware and software sytems. The
        computer engineering program involves both electrical engineering with computer science disciplines
        to solve problems with applications in computing systems, embedded software, custom hardware,
        consumer applications, and more. <br /><br />Along with my studies, I am currently a student athlete
        competing in collegiate wrestling. My current accolades are 3x NCWA All-Academic Team and
        3x NCWA All-American. I was the GVSU Wrestling Club President and captain, and
        now compete on the D2 varsity team. I have also served as the GVSU Young Life Vice
        President.
      </p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'Oct 2023 – Dec 2023',
    location: 'DornerWorks Ltd.',
    title: 'Embedded Engineer Co-Op 3',
    content: (
      <p>
  - Developed the first IP-owned Time Sensitive Networking development board demonstration as the core software engineer through collaboration with the hardware, software, and FPGA teams<br />
  - Expanded functionality for Zynq UltraScale+ MPSoC and Zynq-7000 networking solutions in C and VHDL<br />
  - Contributed to writing and completing hardware test plans for multiple custom hardware designs<br />
  - Enhanced the front-end GUI in C++ and Python by integrating a data visualization component into the layout<br />
      </p>
    ),
  },
  {
    date: 'Jan 2023 – May 2023',
    location: 'DornerWorks Ltd.',
    title: 'Embedded Engineer Co-Op 2',
    content: (
      <p>
  - Improved a sensor system by developing a Bus Functional Model in VHDL to enhance the timing diagram<br />
  - Modeled sensor data in Python to understand and fix SPI protocol communication bus<br />
  - Debugged sensor system system architecture and design Xilinx Vivado simulation
      </p>
    ),
  },
  {
    date: 'May 2022 – Aug 2022',
    location: 'DornerWorks Ltd.',
    title: 'Embedded Engineer Co-Op 1',
    content: (
      <p>
  - Created a demonstration with a Time of Flight laser ranging sensor in C using the I2C protocol<br />
  - Updated a front-end GUI in Python by adding a relevant data visualization display to the design<br />
  - Ported an outdated chip design to the new chipset (Zynq Ultrascale+) in VHDL
      </p>
    ),
  },

  {
    date: 'May 2021 - August 2021',
    location: 'Young Life',
    title: 'Backpacking Guide',
    content: (
      <p>
  - Founded, owned, and operated a successful lawn-mowing small business<br />
  - Cultivated strong client relationships, ensuring exceptional service and client satisfaction<br />
  - Developed effective planning and organization crucial for business operations<br />
      </p>
    ),
  },

  {
    date: 'April 2017 - October 2020',
    location: 'Kbelts Site Services',
    title: 'Small Business Owner',
    content: (
      <p>
  - Founded, owned, and operated a successful lawn-mowing small business<br />
  - Cultivated strong client relationships, ensuring exceptional service and client satisfaction<br />
  - Developed effective planning and organization crucial for business operations<br />
      </p>
    ),
  },
];



/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Nicholas Pahl, DornerWorks PM',
      text: 'Seth came across many unexpected hurdles with the hardware and found great solutions quickly that kept development moving and prevented a second costly board spin... Seth’s work on bringing up and prototyping the TSN Development Board will enable DornerWorks to demonstrate, test, and sell our TSN IP for years to come. I could carry on about Seth’s technical skill across the TSN Development Board project and the rest of histime at DornerWorks. His ability to understand the task at hand, quickly come up to speed, effectively communicate, and efficiently complete the work makes him a model Co-op.',
      //image: profilepic,
    }
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'I would love to get in touch. The form below is not currently implemented, but coming soon!',
  description: 'You can reach me best by emailing me with my email link below',
  items: [
    {
      type: ContactType.Email,
      text: 'sethkbelts@gmail.com',
      href: 'mailto:sethkbelts@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Grand Rapids, Michigan',
      href: 'https://www.google.ca/maps/place/Grand+Rapids,+MI/@42.9563287,-85.7426611,12z/data=!3m1!4b1!4m6!3m5!1s0x88185460bb502815:0xa593aacb1bd3a8d0!8m2!3d42.9633599!4d-85.6680863!16zL20vMHY5cWc?entry=ttu',
    },
    {
      type: ContactType.Instagram,
      text: '@sethkbelt',
      href: 'https://www.instagram.com/sethkbelt/',
    },
    {
      type: ContactType.Github,
      text: 'sethkbelt',
      href: 'https://github.com/sethkbelt',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/sethkbelt' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/seth-konynenbelt-056287221/'},
  { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/sethkbelt/'},
];
