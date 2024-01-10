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
import testimonialImage from '../images/testimonial.webp';
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
        I'm a Grand Rapids based <strong className="text-stone-100">Embedded Software Engineer Co-Op</strong>. I am currently working
        at <strong className="text-stone-100">DornerWorks</strong> in the FPGA group, mainly working with software. I get to interact
        with custom hardware, FPGA, and software designs nearly every day as I develop my skills in the vast embedded engineering world.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can find me wrestling on the Grand Valley State University wrestling team,
        playing pickleball, backpacking in the mountains, or playing Euchre.
      </p>
    </>
  ),
  actions: [
    {
      href: './files/SethKonynenbeltResume.pdf',
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
    { label: 'Age', text: '22', Icon: CalendarIcon },
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
    title: 'Project title 9',
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
        Overall GPA : 3.93
        <p>
          Minors : Computer Science and Math
          <p></p>
        </p>
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
    date: 'May 2022 – Current',
    location: 'DornerWorks Ltd.',
    title: 'Embedded Engineer Co-Op',
    content: (
      <p>
        - Worked with FPGA, embedded C in bare metal and freeRTOS, hardware, and scripting to spearhead DornerWorks first IP owned development board and demonstration <br />
        -	Wide range of projects working with Vivado simulation, VHDL modules, embedded C, hardware test plans, networking, communication protocols, IP development, and scripting
      </p>
    ),
  },
  {
    date: 'May 2021 - August 2021',
    location: 'Wilderness Ranch in Creede, Colorado',
    title: 'Backpacking Guide',
    content: (
      <p>
        -	Led groups of 8-16 high schoolers safely through the backcountry<br />
        -	Received medical and leadership training to ensure safely and lead effectively

      </p>
    ),
  },
  {
    date: 'April 2017 - October 2020',
    location: 'Kbelts Site Services',
    title: 'Small Business Owner',
    content: (
      <p>
        -	Owned, operated, and managed a lawn mowing business<br />
        -	Developed time management and organizational skills needed to operate a business<br />
        -	Worked one on one with clients to guarantee satisfaction with the services provided
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
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch. The form below is not currently implemented, coming soon!',
  description: 'I would love to hear from you! You can reach me best by emailing me or contacting me through LinkedIn',
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
