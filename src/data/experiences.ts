export type ExperienceItem = {
  company: string;
  title: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experiences: ExperienceItem[] = [
  {
    company: "Nellie Health",
    title: "Software Engineer",
    location: "Canada (Remote)",
    start: "Aug 2025",
    end: "Present",
    bullets: [
      "Developing and shipping production features for a health-tech platform with a focus on reliability and maintainability.",
      "Implementing backend and service-layer logic while collaborating closely with product and design stakeholders.",
      "Improving system robustness by handling edge cases, validation, and real-world user constraints.",
    ],
  },
  {
    company: "Nellie Health",
    title: "Design Director",
    location: "Canada (Remote)",
    start: "Sep 2021",
    end: "May 2022",
    bullets: [
      "Led product design and UX strategy for a digital health platform in a fast-moving startup environment.",
      "Established project workflows and introduced agile processes across a cross-functional team.",
      "Designed and prototyped 20+ interfaces with a strong emphasis on usability and accessibility.",
    ],
  },
  {
    company: "York University",
    title: "Project Manager — Digital Health Research",
    location: "Toronto, ON (Remote)",
    start: "Nov 2020",
    end: "Dec 2021",
    bullets: [
      "Managed the development and evaluation of a guided online PTSD intervention to improve access to care.",
      "Coordinated technical, research, and design workstreams across a multidisciplinary team.",
      "Supported usability testing and iterative improvements informed by research findings.",
    ],
  },
  {
    company: "Independent / Client Work",
    title: "Web Developer & Designer",
    location: "Canada (Remote)",
    start: "Feb 2020",
    end: "May 2021",
    bullets: [
      "Built and deployed client websites using JavaScript, HTML, CSS, and templating technologies.",
      "Created reusable design systems and high-fidelity prototypes to speed development and ensure consistency.",
      "Delivered accessible, responsive experiences tailored to clinical and small-business needs.",
    ],
  },
];
