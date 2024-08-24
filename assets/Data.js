import { IoIosEye } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import { MdEdit, MdWeb } from "react-icons/md";
import { FaLaptopCode, FaSearch } from "react-icons/fa";
import { FiPenTool } from "react-icons/fi";
import { GiPaintBucket } from "react-icons/gi";
import { ImFire } from "react-icons/im";

export const navlinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
];

export const webProjects = [
  {
    image: require("/assets/landing-page.png"),
    name: "mstack solutions",
    link: "#",
  },
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
    icon: <MdWeb />,
    name: "web design",
    desc: "We take up all of your brand design needs from scratch to finish, starting from Your logo up to your Website Design.",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    name: "web development",
    desc: "We also focus on understanding your brand and the customer base it is targeting, then develop uniform concepts that attract your customers the most.",
  },
  {
    id: 3,
    icon: <FiPenTool />,
    name: "graphic design",
    desc: "For brands with already existing design concepts, but want to step it up, We provide core research for your brand to fix all issues that make it unstable.",
  },
  {
    id: 3,
    icon: <GiPaintBucket />,
    name: "branding",
    desc: "For brands with already existing design concepts, but want to step it up, We provide core research for your brand to fix all issues that make it unstable.",
  },
  {
    id: 3,
    icon: <FaSearch />,
    name: "seo & content",
    desc: "For brands with already existing design concepts, but want to step it up, We provide core research for your brand to fix all issues that make it unstable.",
  },
  {
    id: 3,
    icon: <MdEdit />,
    name: "modification",
    desc: "For brands with already existing design concepts, but want to step it up, We provide core research for your brand to fix all issues that make it unstable.",
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
      "Amazingly talented Brand design. I really admire the work! I recomended them to my friends too. I Will 100 percent recommend them for website and brand identity design projects.",
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
    icon: <ImFire />,
    title: "our values",
    desc: ["intergrity", "dedication", "quality", "team work", "uniqueness"],
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
export const ourProcess = [
  {
    id: 1,
    name: "Research & Discovery:",
    desc: "We start by understanding your brand, goals, and audience.",
  },
  {
    id: 2,
    name: "Wireframes:",
    desc: "Our creative team brings your vision to life with innovative sketches and prototypes.",
  },
  {
    id: 3,
    name: "Design & Prototyping:",
    desc: "Our creative team brings your vision to life with innovative and engaging designs.",
  },
  {
    id: 4,
    name: "Development:",
    desc: "Using the latest technologies and best practices, our developers build robust, scalable websites. We follow an agile methodology, allowing for flexibility and continuous improvement throughout the development process.",
  },
];

export const privacy = [
  {
    id: 1,
    title: "1. information we collect",
    desc: "We may collect the following types of information:",
    content: [
      "<strong>Personal Information:</strong> This includes your name, email address, phone number, and any other details you provide through contact forms, sign-ups, or inquiries on our website.",
      "<strong>Usage Data:</strong> We gather information on how you interact with our website, including your IP address, browser type, pages visited, and the time and date of your visit.",
      "<strong>Cookies:</strong> We use cookies to enhance your experience on our site by storing small data files on your device that help us track site usage and preferences.",
    ],
  },
  {
    id: 2,
    title: "2. How We Use Your Information",
    desc: "We use the information we collect for the following purposes:",
    content: [
      "<strong>To Provide and Improve Services:</strong> We use your information to improve our website, customer service, and the services we offer.",
      "<strong>Communication:</strong> Your information allows us to respond to your inquiries, provide updates, and send promotional content if you have opted in.",
      "<strong>Cookies:</strong> We analyze site usage data to improve user experience and the effectiveness of our services.",
      "<strong>Legal Obligations:</strong> We may use your information to comply with legal obligations and to protect our rights.",
    ],
  },
  {
    id: 3,
    title: "3. Sharing Your Information",
    desc: "We do not sell or trade your personal information to third parties. However, we may share your information in the following situations:",
    content: [
      "<strong>Service Providers:</strong> We may share your data with trusted third-party service providers who assist us in operating our website and delivering services to you. These providers are bound by confidentiality agreements.",
      "<strong>Legal Compliance:</strong> If required by law or in response to legal requests, we may disclose your information.",
    ],
  },
  {
    id: 4,
    title: "4. Security",
    desc: "",
    content: [
      "We take various measures to ensure the security of your personal information, including encryption and secure servers. However, no method of data transmission over the internet is completely secure."
    ],
  },
  {
    id: 5,
    title: "5. Your Rights",
    desc: "You have the following rights regarding your personal information:",
    content: [
      "<strong>Access:</strong> You can request a copy of the personal data we hold about you.",
      "<strong>Correction:</strong> You can request corrections to any inaccurate or incomplete data.",
      "<strong>Deletion:</strong> You can request that your personal data be deleted under certain conditions.",
      "<strong>Opt-Out:</strong> You can opt out of receiving promotional communications from us at any time.",
    ],
  },
  {
    id: 6,
    title: "6. Cookies and Tracking Technologies",
    desc: "",
    content: [
      "We use cookies and similar technologies to track user activity on our website. You can manage cookie preferences through your browser settings."
    ],
  },
  {
    id: 7,
    title: "7. Changes to This Privacy Policy",
    desc: "",
    content: [
      "We may update this Privacy Policy periodically. Any changes will be posted on this page, with an updated “Last updated” date."
    ],
  },
  {
    id: 8,
    title: "8. Contact Us",
    desc: "If you have any questions or concerns about this Privacy Policy, please contact us:",
    content: [
      "<strong>Email:</strong> info@mstacksolutions.com",
      "<strong>Phone:</strong> +234-810 601 7834",
      "<strong>Address:</strong> Remote",
    ],
  },
];

export const terms = [
  {
    id: 1,
    title: "1. Acceptance of Terms",
    desc: "",
    content: [
      "By accessing and using the services provided by Mstack Solutions, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use our website or services."
    ],
  },
  {
    id: 2,
    title: "2. Services Provided",
    desc: "",
    content: [
      "Mstack Solutions offers a range of services, including graphic design, web and mobile design and development, SEO, brand design modification, and branding. We reserve the right to modify or discontinue any service at any time without prior notice."
    ],
  },
  {
    id: 3,
    title: "3. User Responsibilities",
    desc: "As a user of our website and services, you agree to:",
    content: [
      "Provide accurate and current information when required.",
      "Use our services for lawful purposes only.",
      "Refrain from violating or attempting to violate the security of our website.",
      "Not use our services to distribute unsolicited or unauthorized advertising, spam, or any form of solicitation.",
    ],
  },
  {
    id: 4,
    title: "4. Intellectual Property",
    desc: "",
    content: [
      "All content on the Mstack Solutions website, including text, graphics, logos, and software, is the property of Mstack Solutions and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from any of our content without our express written permission.",
    ],
  },
  {
    id: 5,
    title: "5. Payment and Refunds",
    desc: "",
    content: [
      "Payment for services provided by Mstack Solutions is due as outlined in the agreement between you and Mstack Solutions. We reserve the right to suspend or terminate services if payment is not received by the due date. Refunds, if applicable, will be processed according to the terms outlined in the specific service agreement.",
    ],
  },
  {
    id: 6,
    title: "6. Limitation of Liability",
    desc: "",
    content: [
      "Mstack Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services. Our total liability for any claim arising out of or relating to these Terms of Service or the use of our services shall not exceed the amount paid by you to Mstack Solutions in the twelve (12) months preceding the claim.",
    ],
  },
  {
    id: 7,
    title: "7. Termination",
    desc: "",
    content: [
      "We reserve the right to terminate or suspend your access to our services at any time, with or without cause, and without prior notice. Upon termination, your right to use our services will immediately cease.",
    ],
  },
  {
    id: 8,
    title: "8. Modifications to the Terms of Service",
    desc: "",
    content: [
      "Mstack Solutions may update these Terms of Service at any time. Any changes will be posted on this page with an updated “Last updated” date. Your continued use of our services following any changes constitutes your acceptance of the new terms.",
    ],
  },
  {
    id: 9,
    title: "9. Governing Law",
    desc: "",
    content: [
      "These Terms of Service shall be governed by and construed in accordance with the laws of Nigeria, without regard to its conflict of law principles. Any disputes arising from these terms or your use of our services shall be resolved in the courts located in Plateau state.",
    ],
  },
  {
    id: 10,
    title: "10. Contact Us",
    desc: "If you have any questions or concerns regarding these Terms of Service, please contact us at:",
    content: [
      "<strong>Email:</strong> info@mstacksolutions.com",
      "<strong>Phone:</strong> +234-810 601 7834",
      "<strong>Address:</strong> Remote",
    ],
  },
];
