'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Briefcase,
  Cloud,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  PanelsTopLeft,
  Phone,
  Server,
  Sun,
  Moon,
  Wrench,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import Footer from '@/components/layout/Footer';
import Logo from '@/components/layout/Logo';
import Reveal from '@/components/ui/Reveal';

const experience = [
  {
    role: 'WEBSITE DEVELOPER INTERN',
    organization: '',
    location: 'London, United Kingdom',
    dates: 'May 2026 – Present',
    responsibilities: [
      'Developed responsive and interactive web applications using HTML5, CSS3, JavaScript, React.js, and Three.js.',
      'Designed immersive 3D websites with real-time animations and interactive visualisations using Three.js.',
      'Developed reusable React components and integrated frontend applications with Node.js backend services and RESTful APIs.',
      'Contributed to backend development by implementing API endpoints, business logic, and supporting database-driven functionality.',
      'Built responsive, mobile-first user interfaces ensuring cross-browser compatibility and enhanced user experience.',
      'Performed end-to-end testing, debugging, bug fixing, and performance optimisation.',
      'Collaborated with designers, backend developers, and QA engineers within Agile Scrum teams using Git for version control, sprint planning, and code reviews.',
    ],
    technologies: ['React.js', 'JavaScript', 'Three.js', 'Node.js', 'REST APIs', 'Git', 'Agile'],
  },
  {
    role: 'SOFTWARE DEVELOPER',
    organization: 'Tata Consultancy Services (TCS)',
    location: 'Hyderabad, India',
    dates: 'January 2024 – March 2025',
    responsibilities: [
      'Developed and maintained enterprise software applications for global clients.',
      'Designed backend services and implemented scalable business logic.',
      'Built and integrated RESTful APIs for secure communication between enterprise systems.',
      'Collaborated with QA, DevOps, and business stakeholders within Agile teams.',
      'Performed debugging, testing, production support, and performance optimisation.',
      'Used Git and CI/CD pipelines for deployment and version control.',
    ],
    technologies: ['Backend Development', 'REST APIs', 'Git', 'CI/CD', 'Agile', 'Software Engineering'],
  },
];

const skillGroups: { title: string; icon: LucideIcon; skills: string[] }[] = [
  { title: 'Programming', icon: Code2, skills: ['Python', 'Java', 'JavaScript ES6+', 'SQL'] },
  {
    title: 'Frontend',
    icon: PanelsTopLeft,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Three.js', 'Responsive Web Design', 'Mobile-First Development', 'Cross-Browser Compatibility'],
  },
  { title: 'Backend', icon: Server, skills: ['Node.js', 'RESTful APIs', 'API Integration', 'JSON'] },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    skills: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'Keras', 'Model Evaluation', 'Data Preprocessing', 'Feature Engineering', 'Hyperparameter Tuning'],
  },
  {
    title: 'Specialised Areas',
    icon: Workflow,
    skills: ['Natural Language Processing', 'Computer Vision', 'CNN', 'RNN', 'Transformer Models', 'Prompt Engineering'],
  },
  { title: 'Databases', icon: Database, skills: ['MySQL', 'PostgreSQL'] },
  { title: 'Tools', icon: Wrench, skills: ['Git', 'GitHub', 'Jupyter Notebook', 'VS Code', 'Postman', 'Jira', 'MS Office'] },
  {
    title: 'Software Engineering',
    icon: GitBranch,
    skills: ['Agile / Scrum', 'REST API Development', 'Testing & Debugging', 'Performance Optimisation', 'Technical Documentation', 'SDLC'],
  },
  { title: 'DevOps', icon: Cloud, skills: ['CI/CD Pipelines', 'DevOps Fundamentals'] },
];

const education = [
  {
    degree: 'MSc COMPUTER SCIENCE',
    institution: 'University of East London',
    location: 'London, United Kingdom',
    dates: 'Expected Completion: January 2027',
    details: [
      'Cloud Computing',
      'Artificial Intelligence',
      'Big Data Analytics',
      'Advanced Software Engineering',
      'MSc Dissertation – Stock Price Prediction using Deep Learning',
    ],
  },
  {
    degree: 'BACHELOR OF TECHNOLOGY (B.Tech)',
    institution: 'Vignan Institute of Technology and Science',
    location: 'Hyderabad, India',
    dates: '2023 | 67%',
  },
  {
    degree: 'INTERMEDIATE',
    institution: 'Narayana Junior College',
    location: 'Hyderabad, India',
    dates: '2019 | 89%',
  },
  {
    degree: 'SECONDARY SCHOOL CERTIFICATE (SSC)',
    institution: 'Chanakya High School',
    location: 'Nirmal, India',
    dates: '2017 | 92%',
  },
];

const publicationAreas = [
  'Artificial Intelligence',
  'Machine Learning',
  'Deep Learning',
  'LSTM',
  'Financial Time Series',
  'TensorFlow',
  'Keras',
  'Model Evaluation',
];

const careerFocus = [
  'Graduate Software Engineer',
  'AI Engineer',
  'Machine Learning Engineer',
  'Full-Stack Developer',
  'Data Science / ML',
  'Cloud / DevOps Engineering',
];

const additionalInformation = [
  'Eligible to work full-time in the United Kingdom',
  'Open to relocation across the UK',
  'Strong analytical and problem-solving skills',
  'Strong communication skills',
  'Agile team experience',
  'Interested in Artificial Intelligence',
  'Interested in Machine Learning',
  'Interested in Full-Stack Development',
  'Interested in Cloud and DevOps',
];

export default function AbhinandanProfile() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {}
  };

  return (
    <div className="min-h-screen bg-bg text-ink">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-bg/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-container items-center justify-between gap-4 px-6 lg:px-10">
          <Link href="/" aria-label="RadarSeq home" className="shrink-0 rounded-md focus-ring">
            <Logo compact priority />
          </Link>
          <nav aria-label="Profile sections" className="hidden items-center gap-5 text-sm font-semibold text-ink/65 lg:flex">
            <a className="transition-colors hover:text-pink" href="#experience">Experience</a>
            <a className="transition-colors hover:text-pink" href="#expertise">Expertise</a>
            <a className="transition-colors hover:text-pink" href="#research">Research</a>
            <a className="transition-colors hover:text-pink" href="#education">Education</a>
            <a className="transition-colors hover:text-pink" href="#contact">Contact</a>
          </nav>
          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <button
              type="button"
              aria-label="Toggle warm background theme"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink/70 transition-colors hover:bg-pink/5 hover:text-pink focus-ring"
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <Link href="/" className="inline-flex items-center gap-2 rounded-full px-2 py-2 text-sm font-bold text-ink transition-colors hover:text-pink focus-ring sm:px-3">
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Back to RadarSeq</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="px-6 py-14 sm:py-20 lg:px-10">
          <div className="mx-auto grid max-w-container items-center gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <Reveal>
              <div className="card overflow-hidden rounded-card border border-border/70 p-4 shadow-card">
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[18px] bg-surface">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(179,138,92,0.18),transparent_38%),radial-gradient(circle_at_85%_80%,rgba(141,104,70,0.12),transparent_42%)]" />
                  <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-[#B38A5C] to-[#8D6846] font-display text-5xl font-extrabold text-white shadow-glow sm:h-48 sm:w-48">
                    AD
                  </div>
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-border/70 bg-bg/90 px-3 py-2 text-xs font-semibold text-ink/75 shadow-soft">
                    <MapPin size={14} className="text-pink" />
                    London, United Kingdom
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mb-5 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-bold text-pink sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#B38A5C] to-[#8D6846]" />
                Software Engineering • AI Research • Machine Learning
              </div>
              <h1 className="font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
                Abhinandan <span className="italic-pink">Dyavathi</span>
              </h1>
              <p className="mt-5 font-display text-xl font-bold text-ink sm:text-2xl">
                Software Developer
                <span className="mx-2 text-pink">·</span>
                <span className="block sm:inline">AI / Machine Learning Researcher</span>
              </p>
              <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-gray">
                <MapPin size={16} className="text-pink" />
                London, United Kingdom
              </p>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray sm:text-lg">
                Software Developer and MSc Computer Science researcher focused on software engineering, artificial intelligence, machine learning, full-stack development, cloud, DevOps, and data-driven systems.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="#contact" className="btn-pill btn-primary focus-ring w-full sm:w-auto">Contact Me</a>
                <UnavailableProfileLink label="LinkedIn" />
                <UnavailableProfileLink label="GitHub" />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="summary" className="scroll-mt-24 bg-secondary/70 px-6 py-16 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-container">
            <SectionHeading eyebrow="Background" title="Professional Summary" />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              <Reveal>
                <article className="card h-full rounded-card p-6 sm:p-8">
                  <p className="leading-relaxed text-gray">
                    Motivated Software Developer with professional experience at Tata Consultancy Services (TCS) and currently pursuing an MSc in Computer Science at the University of East London. Experienced in developing responsive web applications, integrating frontend and backend systems, RESTful API development, backend development, testing, debugging, and Agile software delivery.
                  </p>
                </article>
              </Reveal>
              <Reveal delay={0.06}>
                <article className="card h-full rounded-card p-6 sm:p-8">
                  <p className="leading-relaxed text-gray">
                    Strong academic foundation in Artificial Intelligence, Machine Learning, Cloud Computing, Big Data Analytics, and Advanced Software Engineering. Currently undertaking an MSc dissertation on Stock Price Prediction using Deep Learning, with hands-on experience in Python, TensorFlow, Keras, NLP, Computer Vision, and Prompt Engineering.
                  </p>
                </article>
              </Reveal>
              <Reveal delay={0.12}>
                <article className="card h-full rounded-card border-l-2 border-l-pink p-6 sm:p-8">
                  <p className="leading-relaxed text-gray">
                    Successfully published research based on the dissertation, demonstrating the practical application of AI and Deep Learning in financial forecasting.
                  </p>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 px-6 py-16 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-container">
            <SectionHeading eyebrow="Work History" title="Professional Experience" />
            <div className="relative mx-auto mt-12 max-w-5xl border-l border-border pl-7 sm:pl-10">
              {experience.map((position, index) => (
                <Reveal key={position.role} delay={index * 0.08}>
                  <article className="card relative mb-8 rounded-card p-6 last:mb-0 sm:p-9">
                    <span className="absolute -left-[36px] top-8 h-4 w-4 rounded-full border-[3px] border-bg bg-gradient-to-br from-[#B38A5C] to-[#8D6846] shadow-glow sm:-left-[49px]" />
                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                      <div>
                        <p className="section-label !text-xs">{position.role}</p>
                        {position.organization && <h3 className="mt-2 font-display text-lg font-bold">{position.organization}</h3>}
                        <p className="mt-1 flex items-center gap-1.5 text-sm text-gray">
                          <MapPin size={14} className="shrink-0 text-pink" />
                          {position.location}
                        </p>
                      </div>
                      <span className="inline-flex w-fit shrink-0 items-center rounded-full bg-pink/10 px-3 py-1.5 text-xs font-bold text-pink">
                        {position.dates}
                      </span>
                    </div>
                    <ul className="mt-6 space-y-3">
                      {position.responsibilities.map((responsibility) => (
                        <li key={responsibility} className="flex gap-3 text-sm leading-relaxed text-gray sm:text-[15px]">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink" />
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                    <TagList tags={position.technologies} className="mt-6" />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="expertise" className="scroll-mt-24 bg-secondary/70 px-6 py-16 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-container">
            <SectionHeading eyebrow="Capabilities" title="Technical Expertise" />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {skillGroups.map(({ title, icon: Icon, skills }, index) => (
                <Reveal key={title} delay={(index % 3) * 0.05}>
                  <article className="card group h-full rounded-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                    <div className="mb-5 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink/10 text-pink transition-colors group-hover:bg-pink group-hover:text-white">
                        <Icon size={19} />
                      </span>
                      <h3 className="font-display font-bold">{title}</h3>
                    </div>
                    <TagList tags={skills} />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="research" className="scroll-mt-24 px-6 py-16 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-container">
            <SectionHeading eyebrow="Selected Work" title="Featured Research" />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <Reveal>
                <article className="card flex h-full flex-col rounded-card border-t-2 border-t-purple p-7 sm:p-9">
                  <p className="section-label !text-xs">RadarSeq / RadarSeq++</p>
                  <h3 className="mt-3 font-display text-2xl font-bold">Temporal risk intelligence</h3>
                  <p className="mt-4 flex-1 leading-relaxed text-gray">
                    RadarSeq reads the path a signal takes over time, not a single point-in-time score — so a slow drift toward risk is visible long before it becomes a loss.
                  </p>
                  <Link href="/?section=projects" className="focus-ring mt-7 inline-flex w-fit items-center gap-2 font-bold text-pink transition-colors hover:text-purple">
                    Explore RadarSeq Research <ArrowRight size={17} />
                  </Link>
                </article>
              </Reveal>
              <Reveal delay={0.08}>
                <article className="card h-full rounded-card p-7 sm:p-9">
                  <p className="section-label !text-xs">University of East London</p>
                  <h3 className="mt-3 font-display text-xl font-bold">Stock Price Prediction Using Deep Learning</h3>
                  <p className="mt-4 leading-relaxed text-gray">
                    An MSc research project exploring deep learning approaches for financial time-series forecasting using historical financial data.
                  </p>
                  <TagList tags={['Python', 'TensorFlow', 'Keras', 'LSTM', 'RNN', 'Deep Learning', 'Time-Series Forecasting', 'Data Preprocessing', 'Feature Engineering', 'Model Evaluation']} className="mt-6" />
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="education" className="scroll-mt-24 bg-secondary/70 px-6 py-16 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-container">
            <SectionHeading eyebrow="Academic Background" title="Education" />
            <div className="relative mx-auto mt-10 max-w-4xl border-l border-border pl-7 sm:pl-10">
              {education.map((item, index) => (
                <Reveal key={item.degree} delay={index * 0.05}>
                  <article className="card relative mb-5 rounded-card p-6 last:mb-0 sm:p-8">
                    <span className="absolute -left-[36px] top-8 h-4 w-4 rounded-full border-[3px] border-bg bg-purple sm:-left-[49px]" />
                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                      <div>
                        <p className="section-label !text-xs">{item.degree}</p>
                        <h3 className="mt-2 font-display text-lg font-bold">{item.institution}</h3>
                        <p className="mt-1 text-sm text-gray">{item.location}</p>
                      </div>
                      <span className="w-fit rounded-full bg-purple/10 px-3 py-1.5 text-xs font-bold text-purple">{item.dates}</span>
                    </div>
                    {item.details && (
                      <div className="mt-5">
                        <p className="mb-3 text-sm font-bold">Relevant modules</p>
                        <TagList tags={item.details} />
                      </div>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="publications" className="scroll-mt-24 px-6 py-16 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-container">
            <SectionHeading eyebrow="Research Output" title="Research & Publications" />
            <Reveal className="mx-auto mt-10 max-w-4xl">
              <article className="card rounded-card p-7 sm:p-10">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pink/10 text-pink">
                    <GraduationCap size={23} />
                  </span>
                  <div className="min-w-0">
                    <p className="section-label !text-xs">University of East London</p>
                    <h3 className="mt-2 font-display text-xl font-bold">Stock Price Prediction Using Deep Learning</h3>
                    <p className="mt-3 leading-relaxed text-gray">
                      Published research based on the MSc Computer Science dissertation completed at the University of East London.
                    </p>
                    <div className="mt-5 grid gap-2 text-sm text-gray sm:grid-cols-2">
                      <p><span className="font-bold text-ink">Journal/Conference:</span> Add publication name</p>
                      <p><span className="font-bold text-ink">Publication Year:</span> Add year</p>
                      <p className="sm:col-span-2"><span className="font-bold text-ink">DOI/URL:</span> Add DOI or publication link</p>
                    </div>
                    <TagList tags={publicationAreas} className="mt-6" />
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        <section id="career-focus" className="scroll-mt-24 bg-secondary/70 px-6 py-16 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-container">
            <SectionHeading eyebrow="Next Chapter" title="Career Focus" />
            <p className="mx-auto mt-5 max-w-2xl text-center leading-relaxed text-gray">
              Interested in building scalable software systems and applying artificial intelligence and machine learning to real-world problems.
            </p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {careerFocus.map((focus, index) => (
                <Reveal key={focus} delay={(index % 3) * 0.05}>
                  <article className="card flex h-full items-center gap-4 rounded-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink/10 to-purple/10 text-pink">
                      <Briefcase size={18} />
                    </span>
                    <h3 className="font-display font-bold">{focus}</h3>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="languages" className="px-6 py-16 sm:py-20 lg:px-10">
          <div className="mx-auto grid max-w-container gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Communication" title="Languages" align="left" />
              <div className="mt-7 grid grid-cols-2 gap-4">
                {['English', 'Hindi', 'Telugu', 'Marathi'].map((language) => (
                  <div key={language} className="card flex items-center gap-3 rounded-2xl p-4">
                    <Languages size={17} className="text-pink" />
                    <span className="font-semibold">{language}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading eyebrow="Additional Information" title="More About Me" align="left" />
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {additionalInformation.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-gray">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#B38A5C] to-[#8D6846]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 px-6 pb-16 pt-8 lg:px-10">
          <Reveal className="mx-auto max-w-container">
            <div className="relative overflow-hidden rounded-card border border-border bg-alternative px-7 py-10 text-ink sm:px-12 sm:py-14">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(179,138,92,0.16),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(141,104,70,0.12),transparent_32%)]" />
              <div className="relative grid gap-9 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="section-label !text-xs">Get in touch</p>
                  <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">Let&apos;s build something intelligent.</h2>
                  <p className="mt-4 max-w-2xl leading-relaxed text-gray">
                    Interested in software engineering, AI research, or collaboration? Get in touch.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 text-sm text-gray sm:flex-row sm:flex-wrap sm:gap-x-6">
                    <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-pink" />London, United Kingdom</span>
                    <a className="inline-flex items-center gap-2 transition-colors hover:text-ink" href="tel:+447887187489"><Phone size={16} className="text-pink" />+44 7887 187489</a>
                    <a className="inline-flex items-center gap-2 transition-colors hover:text-ink" href="mailto:dyavathiabhinandan45@gmail.com"><Mail size={16} className="text-pink" />dyavathiabhinandan45@gmail.com</a>
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <a href="mailto:dyavathiabhinandan45@gmail.com" className="btn-pill btn-primary focus-ring w-full sm:w-auto">Email Me</a>
                  <UnavailableProfileLink label="LinkedIn" />
                  <UnavailableProfileLink label="GitHub" />
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <div className="px-6 pb-12 text-center lg:px-10">
          <Link href="/" className="inline-flex items-center gap-2 rounded-md font-semibold text-pink transition-colors hover:text-purple focus-ring">
            <ArrowLeft size={16} /> Back to RadarSeq
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function SectionHeading({ eyebrow, title, align = 'center' }: { eyebrow: string; title: string; align?: 'center' | 'left' }) {
  return (
    <Reveal className={align === 'center' ? 'text-center' : 'text-left'}>
      <p className="section-label mb-3 !text-xs">{eyebrow}</p>
      <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
    </Reveal>
  );
}

function TagList({ tags, className = '' }: { tags: string[]; className?: string }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <span key={tag} className="rounded-full border border-border bg-bg px-3 py-1.5 text-xs font-semibold text-ink/70">
          {tag}
        </span>
      ))}
    </div>
  );
}

function UnavailableProfileLink({ label }: { label: string }) {
  return (
    <button
      type="button"
      disabled
      aria-label={`${label} profile link not provided`}
      title="Profile link not provided"
      className="btn-pill focus-ring w-full cursor-not-allowed border border-border bg-surface text-ink opacity-55 sm:w-auto"
    >
      {label}
    </button>
  );
}