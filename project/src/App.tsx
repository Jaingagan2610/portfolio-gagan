import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Palette, Smartphone, Zap, Terminal, Database, Globe, Cpu } from 'lucide-react';
import Lenis from 'lenis';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}



function App() {
   const form = useRef<HTMLFormElement>(null);
   
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis();
 

    // Animation frame for Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      lenis.destroy();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "Neural Network Dashboard",
      description: "Advanced AI analytics platform with real-time data processing and machine learning insights",
      tech: ["React", "TensorFlow", "Python", "WebGL"],
      github: "#",
      live: "#",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Quantum Computing Simulator",
      description: "Interactive quantum circuit builder with state visualization and algorithm testing",
      tech: ["TypeScript", "Three.js", "WebAssembly", "Rust"],
      github: "#",
      live: "#",
      color: "from-violet-500 to-purple-600"
    },
    {
      title: "Blockchain Explorer",
      description: "Decentralized network analyzer with transaction tracking and smart contract interaction",
      tech: ["Solidity", "Web3", "Node.js", "GraphQL"],
      github: "#",
      live: "#",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "AR Development Kit",
      description: "Augmented reality framework for web applications with gesture recognition",
      tech: ["WebXR", "Three.js", "Computer Vision", "ML"],
      github: "#",
      live: "#",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Distributed System Monitor",
      description: "Real-time microservices monitoring with performance analytics and alerting",
      tech: ["Go", "Docker", "Kubernetes", "Prometheus"],
      github: "#",
      live: "#",
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "Cryptographic Toolkit",
      description: "Advanced encryption library with zero-knowledge proof implementations",
      tech: ["Rust", "WebAssembly", "Cryptography", "Math"],
      github: "#",
      live: "#",
      color: "from-indigo-500 to-blue-600"
    }
  ];

  const skills = [
    { name: "React.js & Next.js", level: 95, icon: <Code />, color: "from-emerald-400 to-teal-500" },
    { name: "JavaScript & TypeScript", level: 98, icon: <Zap />, color: "from-orange-400 to-red-500" },
    { name: "HTML & CSS", level: 96, icon: <Palette />, color: "from-violet-400 to-purple-500" },
    { name: "ERP Software Solutions", level: 88, icon: <Database />, color: "from-cyan-400 to-blue-500" },
    { name: "Git", level: 94, icon: <Terminal />, color: "from-green-400 to-emerald-500" },
    { name: "Microservices Architecture", level: 87, icon: <Globe />, color: "from-pink-400 to-rose-500" },
    { name: "GraphQL APIs", level: 91, icon: <Smartphone />, color: "from-yellow-400 to-orange-500" },
    { name: "TypeORM & CMS", level: 89, icon: <Cpu />, color: "from-indigo-400 to-blue-500" }
  ];
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.name || !formData.email || !formData.message || !formData.subject) {
      console.log("form subbmiting error");
      toast.error("Please fill in all fields.");
      // toast("Please fill all required fields.");
      setIsSubmitting(false);
      return;
    }

    if (form.current) {
      try {
        const result = await emailjs.sendForm(
          'service_jngm9k9', // replace with actual service ID
          'template_pfaso5c', // replace with actual template ID
          form.current,
          'Q1ye_AUlarQ6qwBdS' // your public key
        );

        console.log('Email sent:', result.text);

        toast("Message Send => We’ll get back to you soon!");

        // toast({
        //   title: "Message Sent",
        //   description: "We’ll get back to you soon!",
        // });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

      } catch (error) {
        console.error('Email sending failed:', error);
        toast.error("Failed to send message. Please try again.")
        // setFormStatus({
        //   type: 'error',
        //   message: 'Failed to send message. Please try again.'
        // });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
       <ToastContainer position="top-right" autoClose={3000} />
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div 
          className="absolute inset-0 bg-grid-pattern opacity-30"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        ></div>
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Enhanced Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-20 left-20 w-32 h-32 border border-emerald-500/30 rotate-45 animate-float morphing"
          style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotate(45deg)` }}
        ></div>
        <div 
          className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full animate-pulse glow-pulse"
          style={{ transform: `translate(${-mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)` }}
        ></div>
        <div 
          className="absolute bottom-32 left-40 w-40 h-40 border-2 border-cyan-500/20 rounded-full animate-spin-slow shimmer"
          style={{ transform: `translate(${mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-orange-500/20 to-red-500/20 transform rotate-12 animate-bounce-slow morphing"
          style={{ transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px) rotate(12deg)` }}
        ></div>
        {/* Additional floating elements */}
        <div 
          className="absolute top-1/3 left-1/3 w-16 h-16 border border-emerald-400/40 rounded-full animate-pulse"
          style={{ transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)` }}
        ></div>
        <div 
          className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 transform rotate-45 animate-float"
          style={{ transform: `translate(${-mousePosition.x * 0.008}px, ${-mousePosition.y * 0.008}px) rotate(45deg)` }}
        ></div>
      </div>

      {/* Enhanced Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900/80 backdrop-blur-xl rounded-2xl px-8 py-4 border border-gray-700/50 shadow-2xl glow-pulse">
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 transform relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 transform relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 transform relative group">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 transform relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          <button 
            className="md:hidden text-white hover:text-emerald-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-sm md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-emerald-400 transition-colors">Home</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-violet-400 transition-colors">Projects</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-orange-400 transition-colors">Contact</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="transform hover:scale-105 transition-all duration-700 ease-out">
            {/* Geometric Avatar */}
            <div className="mb-12 relative">
              <div className="w-48 h-48 mx-auto relative group">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 border-2 border-emerald-500/50 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-2 border border-violet-500/50 rounded-full animate-spin-reverse"></div>
                
                {/* Inner geometric shape */}
                <div className="absolute inset-8 bg-gradient-to-br from-emerald-500/20 via-violet-500/20 to-cyan-500/20 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                  <Terminal className="w-16 h-16 text-emerald-400 group-hover:text-white transition-colors duration-300" />
                </div>
                
                {/* Floating dots */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-violet-500 rounded-full animate-pulse delay-500"></div>
                <div className="absolute top-1/2 -left-4 w-2 h-2 bg-cyan-500 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in glow-pulse">
              GAGAN JAIN
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              Software Architect & Innovation Engineer
            </p>
            
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Crafting next-generation digital experiences with cutting-edge technology
            </p>
            
            <div className="flex justify-center space-x-6 mb-16">
              <a href="https://github.com/Jaingagan2610" target="_blank" rel="noopener noreferrer" className="group p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-emerald-500/20 transition-all duration-300 hover:scale-110 hover:rotate-3 transform border border-gray-700/50 hover:border-emerald-500/50">
                <Github className="w-6 h-6 group-hover:scale-125 transition-transform text-gray-300 group-hover:text-emerald-400" />
              </a>
              <a href="https://www.linkedin.com/in/gagan-jain-24a1aa213" target="_blank" rel="noopener noreferrer" className="group p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-violet-500/20 transition-all duration-300 hover:scale-110 hover:rotate-3 transform border border-gray-700/50 hover:border-violet-500/50">
                <Linkedin className="w-6 h-6 group-hover:scale-125 transition-transform text-gray-300 group-hover:text-violet-400" />
              </a>
              <a href="mailto:gaganjain988@gmail.com"  target="_blank" rel="noopener noreferrer" className="group p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110 hover:rotate-3 transform border border-gray-700/50 hover:border-cyan-500/50">
                <Mail className="w-6 h-6 group-hover:scale-125 transition-transform text-gray-300 group-hover:text-cyan-400" />
              </a>
            </div>
          </div>
          
          <div className="animate-bounce-slow">
            <ChevronDown className="w-8 h-8 mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Innovative solutions pushing the boundaries of technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group perspective-1000 h-96"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full transform-style-preserve-3d transition-all duration-700 hover:rotate-y-6 hover:scale-105">
                  <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl card-smooth-hover card-glow card-optimized">
                    {/* Geometric Header */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <div className={`w-24 h-24 bg-gradient-to-br ${project.color} rounded-2xl rotate-12 group-hover:rotate-45 transition-all duration-500 opacity-80`}></div>
                          <div className="absolute inset-2 bg-black/20 rounded-xl backdrop-blur-sm"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Code className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating geometric elements */}
                      <div className="absolute top-4 right-4 w-8 h-8 border border-white/20 rotate-45 animate-pulse"></div>
                      <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-full animate-bounce-slow"></div>
                    </div>
                    
                    <div className="p-6 relative z-10">
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1 text-xs bg-gray-800/50 rounded-full text-gray-300 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-4">
                        <a href={project.github} className="flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-colors group/link">
                          <Github className="w-4 h-4 group-hover/link:scale-125 transition-transform" />
                          <span className="text-sm">Code</span>
                        </a>
                        <a href={project.live} className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors group/link">
                          <ExternalLink className="w-4 h-4 group-hover/link:scale-125 transition-transform" />
                          <span className="text-sm">Live</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Mastering the technologies that shape tomorrow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="group relative bg-gray-900/80 backdrop-blur-sm rounded-3xl border-2 border-gray-800/50 overflow-hidden card-smooth-hover card-glow card-optimized"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emerald-500/20 to-transparent rounded-bl-3xl group-hover:w-full group-hover:h-full transition-all duration-700"></div>
                
                {/* Hexagonal pattern overlay */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute top-4 left-4 w-8 h-8 border-2 border-emerald-400 transform rotate-45"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border border-violet-400 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-cyan-400/30 rotate-12"></div>
                </div>
                
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Top section with icon */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 bg-gradient-to-r ${skill.color} rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      {skill.icon}
                    </div>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  </div>
                  
                  {/* Skill name */}
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300 leading-tight">
                      {skill.name}
                    </h3>
                  </div>
                  
                  {/* Bottom section with skill level indicator */}
                  <div className="mt-auto">
                    {/* Progress bar */}
                    <div className="w-full bg-gray-800 rounded-full h-2 mb-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:w-full`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    
                    {/* Skill level badge */}
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500 uppercase tracking-wider">
                        {skill.level >= 95 ? 'Expert' : skill.level >= 85 ? 'Advanced' : skill.level >= 70 ? 'Proficient' : 'Intermediate'}
                      </span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              i < Math.floor(skill.level / 20) 
                                ? 'bg-emerald-400 group-hover:bg-emerald-300' 
                                : 'bg-gray-700 group-hover:bg-gray-600'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Let's Build Something
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to transform your ideas into reality? Let's collaborate on your next breakthrough project.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* <form className="space-y-6"  ref={form} onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group relative">
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:border-emerald-500/50 focus:outline-none transition-all duration-300 group-hover:border-gray-600/50 focus:transform focus:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <div className="group relative">
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:border-violet-500/50 focus:outline-none transition-all duration-300 group-hover:border-gray-600/50 focus:transform focus:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
              
              <div className="group relative">
                <input 
                  type="text" 
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-all duration-300 group-hover:border-gray-600/50 focus:transform focus:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              
              <div className="group relative">
                <textarea 
                  rows={6}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:border-orange-500/50 focus:outline-none transition-all duration-300 group-hover:border-gray-600/50 focus:transform focus:scale-105 resize-none"
                ></textarea>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="px-12 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl font-bold text-white hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-110 hover:rotate-1 transform relative overflow-hidden group glow-pulse shimmer"
                >
                  <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </form> */}
             <form
      className="space-y-6"
      ref={form}
      onSubmit={handleSubmit}
    >
      {/* Name & Email */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="group relative">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:border-emerald-500/50 focus:outline-none transition-all duration-300 group-hover:border-gray-600/50"
          />
        </div>

        <div className="group relative">
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:border-violet-500/50 focus:outline-none transition-all duration-300 group-hover:border-gray-600/50"
          />
        </div>
      </div>

      {/* Subject */}
      <div className="group relative">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-all duration-300 group-hover:border-gray-600/50"
        />
      </div>

      {/* Message */}
      <div className="group relative">
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:border-orange-500/50 focus:outline-none transition-all duration-300 group-hover:border-gray-600/50 resize-none"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-12 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl font-bold text-white hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-110 hover:rotate-1 transform relative overflow-hidden group ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center relative">
        <p className="text-gray-600 text-sm">
          © 2025 Gagan Jain. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;