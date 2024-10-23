import b1 from '@/public/images/terminal.gif';
import p1 from '../public/images/p1.svg';
import p2 from '../public/images/p2.svg';
import p3 from '../public/images/p3.svg';
import p4 from '../public/images/p4.svg';
import re from '../public/images/re.svg';
import tail from '../public/images/tail.svg';
import ts from '../public/images/ts.svg';
import three from '../public/images/three.svg';
import fm from '../public/images/fm.svg';
import next from '../public/images/next.svg';
import stream from '../public/images/stream.svg';
import c from '../public/images/c.svg';
import gsap from '../public/images/gsap.svg';
import cloud from '../public/images/cloud.svg';
import cloudName from '../public/images/cloudName.svg';
import app from '../public/images/app.svg';
import appName from '../public/images/appName.svg';
import host from '../public/images/host.svg';
import hostName from '../public/images/hostName.svg';
import s from '../public/images/s.svg';
import streamName from '../public/images/streamName.svg';
import dock from '../public/images/dock.svg';
import dockerName from '../public/images/dockerName.svg';
import exp1 from '../public/images/exp1.svg';
import exp2 from '../public/images/exp2.svg';
import exp3 from '../public/images/exp3.svg';
import exp4 from '../public/images/exp4.svg';
import git from '../public/images/git.svg';
import twit from '../public/images/twit.svg';
import link from '../public/images/link.svg';

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
    isGif:true
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: p1,
    iconLists: [re, tail, ts, three, fm],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: p2,
    iconLists: [next, tail, ts, stream, c],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: p3,
    iconLists: [re, tail, ts, three, c],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: p4,
    iconLists: [next, tail, ts, three, gsap],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: cloud,
    nameImg: cloudName,
  },
  {
    id: 2,
    name: "appwrite",
    img: app,
    nameImg: appName,
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: host,
    nameImg: hostName,
  },
  {
    id: 4,
    name: "stream",
    img: s,
    nameImg: streamName,
  },
  {
    id: 5,
    name: "docker.",
    img: dock,
    nameImg: dockerName,
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: exp1,
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2",
    thumbnail: exp2,
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2",
    thumbnail: exp3,
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: exp4,
  },
];

export const socialMedia = [
  {
    id: 1,
    img: git,
  },
  {
    id: 2,
    img: twit,
  },
  {
    id: 3,
    img: link,
  },
];
