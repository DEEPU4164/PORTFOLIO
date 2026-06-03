/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ChevronRight, 
  ExternalLink, 
  Code2, 
  Database, 
  Cloud, 
  Terminal, 
  Award, 
  BookOpen,
  MapPin,
  Calendar,
  User,
  GraduationCap
} from "lucide-react";
import { useState, useRef } from "react";

// --- Components ---

const Nav = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.a 
          href="#hero"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display italic font-black text-orange-600 tracking-tighter"
        >
          DAYINA &nbsp; SANDEEP
        </motion.a>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-zinc-500">
          {['About', 'Skills', 'Projects', 'Publications', 'Contact'].map((item) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ color: '#ea580c', scale: 1.05 }}
              className="hover:text-orange-600 transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-20 flex flex-col items-center justify-center relative overflow-hidden bg-white">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-100 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-blue-50 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-2s' }} />
      </div>

      <div className="z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl md:text-9xl font-display font-black leading-tight tracking-tighter mb-8 text-zinc-900">
            DAYINA <br />
            <span className="text-transparent hover:text-black transition-all duration-700" style={{ WebkitTextStroke: '2px #d4d4d8' }}>SANDEEP</span>
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a href="#contact" className="px-8 py-4 bg-zinc-900 text-white font-bold uppercase tracking-widest hover:bg-orange-600 transition-all duration-300 shadow-xl shadow-zinc-200">
            Get In Touch
          </a>
          <a href="#projects" className="px-8 py-4 border border-zinc-200 text-zinc-900 font-bold uppercase tracking-widest hover:border-zinc-900 transition-all duration-300">
            View Work
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10"
      >
        <ChevronRight className="rotate-90 text-zinc-300" />
      </motion.div>
    </section>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="mb-20">
    <span className="text-orange-600 font-mono text-xs tracking-widest uppercase mb-4 block">{subtitle}</span>
    <h2 className="text-5xl md:text-6xl font-display font-black tracking-tight text-zinc-900 uppercase">{title}</h2>
  </div>
);

const About = () => {
  const education = [
    {
      school: "Kalasalingam Academy Of Research and Education",
      degree: "CSE(AIML)",
      period: "2021 – 2025",
      location: "Krishnankovil, TN, India",
      result: "CGPA: 7.29/10.0"
    },
    {
      school: "TIRUMALA JUNIOR KALASALA",
      degree: "MPC (Mathematics, Physics, Chemistry)",
      period: "2019 – 2021",
      location: "Katheru, AP, India",
      result: "84%"
    },
    {
      school: "Tirumala Educational Institute",
      degree: "Secondary School Certificate (SSC)",
      period: "2018 – 2019",
      location: "Katheru, AP, India",
      result: "CGPA: 9.7 / 10.0"
    }
  ];

  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <SectionHeading title="Professional Summary" subtitle="About Me" />
          <p className="text-xl text-zinc-700 font-light leading-relaxed text-justify">
            I am a Computer Science and Engineering (AIML) graduate with a strong interest in Artificial Intelligence, web development, and software technologies. I have hands-on experience in frontend development, database management, and basic DevOps tools through academic projects and practical learning. Passionate about continuous learning, I enjoy building user-friendly applications and exploring innovative technologies. I am eager to start my professional journey, contribute to real-world projects, and grow as a software professional.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="space-y-8"
        >
          {education.map((edu, idx) => (
            <div key={idx} className="relative pl-8 border-l border-zinc-100 py-2">
              <div className="absolute left-0 top-3 w-3 h-3 -translate-x-1.5 bg-orange-600 rounded-full" />
              <div className="flex items-center gap-2 text-orange-600 font-mono text-xs mb-2 uppercase tracking-wider">
                <Calendar size={14} />
                {edu.period}
              </div>
              <h3 className="text-2xl font-bold mb-1 text-zinc-900 uppercase">{edu.school}</h3>
              <p className="text-zinc-600 mb-2 font-medium">{edu.degree}</p>
              <div className="flex gap-4 text-xs text-zinc-400">
                <span className="flex items-center gap-1"><MapPin size={12} /> {edu.location}</span>
                <span className="flex items-center gap-1 font-mono font-bold text-zinc-600">{edu.result}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
    const skillGroups = [
        {
            title: "Languages & Frameworks",
            icon: <Code2 className="text-orange-600" />,
            skills: ["C", "Python", "HTML", "CSS", "JavaScript", "TypeScript"]
        },
        {
            title: "Data & Systems",
            icon: <Database className="text-orange-600" />,
            skills: ["SQL (MySQL)", "Git", "GitHub", "Linux", "Data Structures"]
        },
        {
            title: "DevOps & Cloud",
            icon: <Cloud className="text-orange-600" />,
            skills: ["AWS (EC2)", "Jenkins", "Maven", "Tomcat", "Nexus", "CI/CD Pipelines"]
        },
        {
            title: "Professional Skills",
            icon: <Terminal className="text-orange-600" />,
            skills: ["Customer Handling", "Problem Solving", "Multi-Tasking", "Email Etiquette", "Technical Basics"]
        }
    ];

    return (
        <section id="skills" className="py-32 bg-zinc-50 border-y border-zinc-100">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading title="Technical Skills" subtitle="Expertise" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillGroups.map((group, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="bg-white border border-zinc-200 p-8 rounded-3xl hover:border-orange-600 shadow-sm hover:shadow-2xl transition-all duration-500 group"
                        >
                            <div className="mb-6">{group.icon}</div>
                            <h3 className="text-lg font-bold mb-6 text-zinc-900 uppercase">{group.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill, sIdx) => (
                                    <span key={sIdx} className="text-xs px-3 py-1.5 bg-zinc-50 rounded-full text-zinc-600 border border-zinc-100 uppercase tracking-tighter font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "Smart Agriculture",
            desc: "Developed a web app with Python to showcase soil analysis results. Created a front-end interface to display real-time soil pH and nutrient levels for users.",
            tech: ["Python", "SQL", "Frontend"],
            features: ["Real-time UI", "Soil Analysis", "Backend Integration"]
        },
        {
            title: "Enhancing Healthcare Record Privacy",
            desc: "Full-stack application for managing healthcare records utilizing a hybrid cryptographic system. Execution of UI and RESTful APIs ensuring data integrity.",
            tech: ["JavaScript", "SQL", "Cryptography", "RESTful APIs"],
            features: ["Hybrid Encryption", "Secure Data Storage", "Identity Management"]
        }
    ];

    return (
        <section id="projects" className="py-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <SectionHeading title="Academic Projects" subtitle="Portfolio" />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.02 }}
                            viewport={{ once: true }}
                            className="group relative perspective-1000"
                        >
                            <div className="absolute inset-0 bg-orange-100/0 group-hover:bg-orange-100/20 transition-all duration-700 blur-[80px]" />
                            <div className="bg-white border border-zinc-200 p-10 rounded-[40px] preserve-3d card-3d-hover relative z-10 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                                <span className="text-orange-600/10 font-mono text-[80px] absolute top-4 right-8 select-none leading-none opacity-20 pointer-events-none">0{idx + 1}</span>
                                <h3 className="text-3xl font-display font-black mb-6 pr-12 text-zinc-900 uppercase">{project.title}</h3>
                                <p className="text-zinc-600 font-light leading-relaxed mb-8 text-lg">
                                    {project.desc}
                                </p>
                                <div className="flex flex-wrap gap-4 mb-8">
                                    {project.tech.map((t, ti) => (
                                        <span key={ti} className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 border border-zinc-100 px-3 py-1">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="space-y-3">
                                    {project.features.map((f, fi) => (
                                        <div key={fi} className="flex items-center gap-2 text-sm text-zinc-700">
                                            <div className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
                                            {f}
                                        </div>
                                    ))}
                                </div>
                                <motion.button className="mt-12 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-900 hover:text-orange-600 transition-colors">
                                    Learn More <ChevronRight size={16} />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Publications = () => {
  return (
    <section id="publications" className="py-32 bg-zinc-50 px-6 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Certifications & Publications" subtitle="Achievements" />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                    <Award className="text-orange-600" size={32} />
                    <span className="text-sm font-mono text-zinc-400 tracking-widest uppercase">ICCES 2024</span>
                </div>
                <h3 className="text-4xl font-display font-black mb-6 tracking-tight text-zinc-900 uppercase">
                    Enhancing Healthcare <br />
                    <span className="text-orange-600">Record Privacy</span>
                </h3>
                <p className="text-zinc-600 font-light leading-relaxed mb-8 text-lg text-justify">
                    Presented at the 9th International Conference on Communication and Electronics Systems (ICCES 2024), 
                    Coimbatore, India. Explored integration of Visual Cryptography and Diverse Image Encryption Techniques.
                </p>
                <div className="space-y-4">
                    <div className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm">
                        <div className="text-xs text-orange-600 mb-2 font-mono uppercase tracking-widest font-bold">Organizer</div>
                        <p className="font-medium text-zinc-900">PPG Institute of Technology, Coimbatore</p>
                    </div>
                </div>
            </div>
            
            <div className="lg:col-span-3 perspective-1000">
                <motion.div 
                    whileHover={{ rotateY: -15, rotateX: 5 }}
                    className="relative group cursor-zoom-in"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative bg-white rounded-lg overflow-hidden border border-zinc-200 shadow-2xl aspect-[1.414/1]">
                        <div className="p-8 h-full flex flex-col justify-between border-4 border-zinc-50">
                            <div className="flex justify-between items-start">
                                <div className="space-y-1">
                                    <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 uppercase">IEEE Publication</h4>
                                    <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em]">Certificate of Presentation</p>
                                </div>
                                <div className="p-2 border border-zinc-100 bg-zinc-50 rounded-md">
                                    <BookOpen size={20} className="text-orange-600" />
                                </div>
                            </div>
                            
                            <div className="my-10 space-y-4">
                                <div className="text-sm text-zinc-300 font-mono tracking-widest uppercase">Presented To</div>
                                <div className="text-4xl font-display italic font-black text-zinc-900 px-2">DAYINA SANDEEP</div>
                                <div className="h-px bg-gradient-to-r from-orange-600/50 via-zinc-200 to-transparent w-full" />
                            </div>

                            <div className="flex justify-between items-end border-t border-zinc-100 pt-6">
                                <div className="text-[10px] text-zinc-400 space-y-1">
                                    <p className="font-mono">ICCES 2024</p>
                                    <p>December 16-18, 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <SectionHeading title="Contact Information" subtitle="Get In Touch" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 text-center">
          {[
            { icon: <Mail />, label: "Email", value: "sandeepdayina123@gmail.com", href: "mailto:sandeepdayina123@gmail.com" },
            { icon: <Linkedin />, label: "LinkedIn", value: "sandeep-dayina", href: "https://www.linkedin.com/in/sandeep-dayina" },
            { icon: <Github />, label: "GitHub", value: "DEEPU4164", href: "https://github.com/DEEPU4164" },
            { icon: <Phone />, label: "Phone", value: "+91 9673477999", href: "tel:+919673477999" }
          ].map((item, idx) => (
            <motion.a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5 }}
                className="bg-zinc-50 border border-zinc-200 p-10 rounded-[32px] flex flex-col items-center group hover:border-orange-600 transition-all hover:shadow-lg"
            >
              <div className="p-4 bg-white rounded-2xl mb-6 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-sm">
                {item.icon}
              </div>
              <span className="text-xs uppercase tracking-widest font-mono text-zinc-400 mb-2">{item.label}</span>
              <span className="text-xl font-medium text-zinc-900">{item.value}</span>
            </motion.a>
          ))}
        </div>

        <a href="mailto:sandeepdayina123@gmail.com" className="bg-orange-600 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-110 transition-transform inline-block shadow-xl">
          Send a Message
        </a>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="bg-zinc-50 min-h-screen text-zinc-900">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Publications />
        <Contact />
      </main>
    </div>
  );
}
