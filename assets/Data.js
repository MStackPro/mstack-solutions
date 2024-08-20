import { IoIosEye } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { TbCurrencyNaira } from "react-icons/tb";


export const navlinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
];

export const webProjects = [
  { image: require("/assets/landing-page.png"), name: "mstack solutions", link: "#" },
  { image: require("/assets/NFT.png"), name: "nft", link: "#" },
  {
    image: require("/assets/CreativeAgency.png"),
    name: "creative agency",
    link: "#",
  },
  { image: require("/assets/sorix.png"), name: "sorix energy", link: "#" },
  { image: require("/assets/manage.jpg"), name: "manage", link: "#" },
  { image: require("/assets/Zenith.png"), name: "zenith agro", link: "#" },
];

export const designs = [
  { image: require("/assets/sharpy.png"), name: "sharpie's footwear" },
  { image: require("/assets/kve.png"), name: "kve africa" },
  { image: require("/assets/pap.png"), name: "pap flour" },
  { image: require("/assets/mstack-mockup.png"), name: "mstack solutions" },
  { image: require("/assets/sorixenergy.png"), name: "sorix energy" },
  {
    image: require("/assets/chop-good-pastery.png"),
    name: "chop good pastery",
  },
  { image: require("/assets/k8.PNG"), name: "kay's thrift" },
  { image: require("/assets/jj-interios.JPG"), name: "jj interiors" },
];

export const aboutDesigns = [
  {
    heading: "these brands are top notch",
    desc: "We Design Feelings, We prepare brands, and We do all that from scratch. We will practically make your customers adjust to your price with practical visual concepts.",
    experience: "since 2022",
    projects: "12+ brands",
    team: "4 members",
    logo: "8+ logos",
    cta1: "see all projects",
    cta2: "i need a design",
  },
];

export const aboutWebDev = [
  {
    heading: "these brands are top notch",
    desc: "We Design Feelings, We prepare brands, and We do all that from scratch. We will practically make your customers adjust to your price with practical visual concepts.",
    experience: "since 2023",
    projects: "4+ brands",
    team: "4 members",
    web: "8+ web projects",
    cta1: "see all projects",
    cta2: "i need a website",
  },
];

export const services = [
  {
    id: 1,
    name: "design",
    desc: "We take up all of your brand design needs from scratch to finish, starting from Your logo up to your Website Design.",
    link: "#",
  },
  {
    id: 2,
    name: "development",
    desc: "We also focus on understanding your brand and the customer base it is targeting, then develop uniform concepts that attract your customers the most.",
    link: "#",
  },
  {
    id: 3,
    name: "modification",
    desc: "For brands with already existing design concepts, but want to step it up, We provide core research for your brand to fix all issues that make it unstable.",
    link: "#",
  },
];

export const testimonies = [
  {
    id: 1,
    name: "Kasha",
    quote:
      "Amazingly talented Brand design. I really admire the work! I recomended them to my friends too. I Will 100 percent recommended them for website and brand identity design projects.",
    job: "ceo kve africa",
    avatar: require("/assets/tm1.jpg"),
  },
  {
    id: 2,
    name: "Osike",
    quote:
      "Amazingly talented Brand design. I really admire the work! I recomended them to my friends too. I Will 100 percent recommended them for website and brand identity design projects.",
    job: "chop good pastery",
    avatar: require("/assets/tm1.jpg"),
  },
  {
    id: 3,
    name: "Kasha",
    quote:
      "Amazingly talented Brand design. I really admire the work! I recomended them to my friends too. I Will 100 percent recommended them for website and brand identity design projects.",
    job: "ceo kve africa",
    avatar: require("/assets/tm1.jpg"),
  },
  {
    id: 1,
    name: "Kasha",
    quote:
      "Amazingly talented Brand design. I really admire the work! I recomended them to my friends too. I Will 100 percent recommended them for website and brand identity design projects.",
    job: "ceo kve africa",
    avatar: require("/assets/tm1.jpg"),
  },
];

export const faqs = [
  {
    id: 1,
    question: "What is the typical turnaround time for a website project?",
    answer:
      "The timeline for a website project can vary depending on the complexity of the project and the specific requirements of the client. However, we work closely with our clients to establish a timeline that works for everyone and strive to deliver projects in a timely and efficient manner.",
  },
  {
    id: 2,
    question:
      "Can you help with website maintenance and updates after the project is completed?",
    answer:
      "Yes, we offer ongoing website maintenance and support services for our clients. Whether you need to update content, fix issues, or add new features, we're here to help.",
  },
  {
    id: 3,
    question:
      "How do you ensure that my website will be optimized for search engines?",
    answer:
      "We conduct extensive research to identify the best keywords and strategies for improving search engine rankings. We also utilize best practices for on-page optimization, including title tags, meta descriptions, and content optimization.",
  },
  {
    id: 4,
    question: "What is your process for website design and development?",
    answer:
      "Our process typically involves a discovery call to discuss the client's needs and goals, followed by research and strategy development. From there, we move into the design and development phase, where we create wireframes, prototypes, and design concepts before finalizing the website. We then perform quality assurance and testing before launching the website.",
  },
];

export const aboutUs = [
  {
    icon: <IoDiamondOutline />,
    title: "our mission",
    desc: "Our mission is to solve branding issues for startups through providing tailored suited solutions such as web applications, websites, mobile apps and brand identity designs thereby increasing their profitability.",
  },
  {
    icon: <IoIosEye />,
    title: "our vision",
    desc: "To be a global leader in technology solutions with web apps, websites, brand identity designs in 2030, setting the benchmark for excellence, reliabilty, and transformative impact. We envision a world where Mstack Solutions innovations catalyze positive change, making businesses more agile, connected and more profitable.",
  },
  {
    icon: <IoIosEye />,
    title: "our vision",
    desc: [
      { icon: <GoDotFill />, name: "intergrity" },
      { icon: <GoDotFill />, name: "dedication" },
      { icon: <GoDotFill />, name: "quality" },
      { icon: <GoDotFill />, name: "team work" },
      { icon: <GoDotFill />, name: "uniqueness" },
    ],
  },
];

export const plans = [
  {
    title: "design",
    desc: "We design a user-friendly interface that is visually appealing and engages your target audience. Your website will be created to meet your brand's needs and goals while ensuring a seamless user experience.",
    price: "",
    features: [
      { feature: "web design", price: "10,000/page" },
      { feature: "brand identity", price: "50,000" },
      { feature: "logo", price: "10,000" },
      { feature: "business card", price: "5,000" },
      { feature: "product packaging", price: "30,000" },
      { feature: "flyer", price: "5,000" },
    ],
  },
  {
    title: "web development",
    desc: "We also focus on understanding your brand and the customer base it is targeting, then develop uniform concepts that attract your customers the most.",
    price: "",
    features: [
      { feature: "custom admin panel", price: "" },
      { feature: "build multiple screens", price: "" },
      { feature: "advanced seo", price: "" },
      { feature: "custom functionality", price: "" },
    ],
  },
  {
    title: "modification",
    desc: "For brands with already existing design concepts, but want to step it up, We provide core research for your brand to fix all issues that make it unstable.",
    price: "",
    features: [
      { feature: "web redesign", price: "10,000/page" },
      { feature: "brand redesign", price: "50,000" },
      { feature: "logo redesign", price: "10,000" },
      { feature: "business card", price: "5,000" },
    ],
  },
];
