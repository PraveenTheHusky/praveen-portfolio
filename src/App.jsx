import React, { useState, useEffect } from 'react';
import { 
  Linkedin, Mail, Database, Cloud, Code2, Cpu, 
  Briefcase, ChevronRight, Menu, X, MapPin, 
  Terminal, Layers, BookOpen, Zap, Bot, 
  Activity, Copy, Check 
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("praveenpdy88@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navItems = [
    { id: 'home', label: 'Overview' },
    { id: 'focus', label: 'Current' },
    { id: 'skills', label: 'Stack' },
    { id: 'experience', label: 'History' },
  ];

  const skills = [
    {
      category: "Engine",
      icon: <Code2 className="w-5 h-5" />,
      items: ["Python", "PySpark", "SQL", "Scala", "Spark", "Kafka"]
    },
    {
      category: "Infrastructure",
      icon: <Cloud className="w-5 h-5" />,
      items: ["Azure", "Databricks", "ADF", "AWS", "Delta Lake", "Snowflake"]
    },
    {
      category: "Storage",
      icon: <Database className="w-5 h-5" />,
      items: ["Neo4j", "Cosmos DB", "PostgreSQL", "Synapse", "ADLS Gen2"]
    },
    {
      category: "Operations",
      icon: <Layers className="w-5 h-5" />,
      items: ["Docker", "K8s", "Jenkins", "Airflow", "dbt", "Unity Catalog"]
    }
  ];

  const experiences = [
    {
      company: "Tata Consultancy Services | Kenvue",
      role: "Senior Data Engineer",
      period: "Mar 2022 — Present",
      location: "Skillman, NJ",
      description: "Leading the design and operation of cloud-scale distributed data platforms supporting analytics and AI/ML.",
      bullets: [
        "Architected Databricks Lakehouse platforms using medallion (bronze, silver, gold) frameworks.",
        "Optimized data ingestion and transformation pipelines, reducing batch data latency by 40%.",
        "Built and maintained governed Single Source of Truth (SSOT) and feature-ready datasets.",
        "Designed and executed a scalable migration framework to convert 5,000+ Parquet tables to Delta Lake.",
        "Implemented enterprise-grade data governance and quality controls using Databricks Unity Catalog."
      ]
    },
    {
      company: "Northeastern University",
      role: "Research Assistant",
      period: "Dec 2019 — Dec 2021",
      location: "Boston, MA",
      description: "Developed ETL workflows and data processing pipelines for healthcare research datasets.",
      bullets: [
        "Developed ETL workflows for healthcare datasets, accelerating reporting speed by 25%.",
        "Built Python-based workflows for multi-source time-series data processing.",
        "Designed SQL queries and BI dashboards (Power BI, Tableau), cutting analysis time by 30%."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 selection:bg-blue-100 selection:text-blue-900 font-sans antialiased">
      
      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsContactOpen(false)} />
          <div className="relative bg-white border border-slate-200 rounded-[2.5rem] p-10 max-w-md w-full shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button onClick={() => setIsContactOpen(false)} className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors">
              <X size={20} className="text-slate-400" />
            </button>
            <div className="text-center mb-10">
              <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-6 text-blue-600 border border-blue-100 shadow-sm">
                <Mail size={36} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Let's Connect</h3>
              <p className="text-slate-500 mt-3 font-medium">I'm currently open to new high-impact data engineering opportunities.</p>
            </div>
            <div className="space-y-4">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between group hover:border-blue-300 transition-all">
                <div className="flex items-center space-x-4 overflow-hidden">
                  <Mail size={20} className="text-slate-400 shrink-0" />
                  <span className="font-bold text-slate-700 truncate text-sm">praveenpdy88@gmail.com</span>
                </div>
                <button onClick={handleCopyEmail} className="p-2.5 hover:bg-white rounded-xl transition-all text-slate-400 hover:text-blue-600">
                  {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <a href="mailto:praveenpdy88@gmail.com" className="flex items-center justify-center space-x-3 bg-blue-600 text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95">
                  <Mail size={18} />
                  <span>Email</span>
                </a>
                <a href="https://www.linkedin.com/in/praveenpdy/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 bg-white border border-slate-200 text-slate-700 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95">
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button onClick={() => scrollTo('home')} className="flex items-center space-x-3 group">
            <div className="bg-blue-600 text-white p-2.5 rounded-xl shadow-md group-hover:scale-110 transition-all">
              <Terminal size={22} />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">PRAVEEN PANDEY</span>
          </button>
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map(item => (
              <button 
                key={item.id} 
                onClick={() => scrollTo(item.id)}
                className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:text-blue-600 ${activeSection === item.id ? 'text-blue-600' : 'text-slate-500'}`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => setIsContactOpen(true)}
              className="bg-slate-900 text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-md active:scale-95"
            >
              Contact Me
            </button>
          </div>
          <button className="md:hidden p-2 text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 p-6 space-y-6">
            {navItems.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="block w-full text-left text-xs uppercase tracking-widest font-bold text-slate-500 py-2">
                {item.label}
              </button>
            ))}
            <button onClick={() => setIsContactOpen(true)} className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs">
              Contact Me
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7 space-y-12">
            <div className="inline-flex items-center space-x-3 bg-blue-50 text-blue-700 px-5 py-2.5 rounded-full border border-blue-100">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Senior Data Engineer</span>
            </div>
            
            <h1 className="text-6xl md:text-[92px] font-extrabold text-slate-900 leading-[0.85] tracking-tighter">
              Engineering <span className="text-blue-600">Scale</span> Through Data.
            </h1>
            
            <p className="text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
              Architecting governed, SLA-driven platforms across Azure & AWS. Specialist in Databricks Lakehouse architecture and high-throughput GenAI pipelines.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <a href="https://www.linkedin.com/in/praveenpdy/" target="_blank" rel="noopener noreferrer" className="group relative px-12 py-6 bg-slate-900 rounded-3xl overflow-hidden active:scale-95 transition-all">
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 font-bold text-white uppercase tracking-[0.2em] text-[11px] flex items-center group-hover:text-white">
                  <Linkedin size={20} className="mr-3" />
                  View LinkedIn
                </span>
              </a>
              <button onClick={() => scrollTo('experience')} className="px-12 py-6 bg-white border border-slate-200 rounded-3xl font-bold text-slate-700 uppercase tracking-[0.2em] text-[11px] hover:bg-slate-50 transition-all active:scale-95">
                Technical History
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 bg-white p-5 rounded-[3.5rem] border border-slate-200 shadow-xl">
              <div className="aspect-[4/5] bg-slate-100 rounded-[2.5rem] overflow-hidden relative group border border-slate-100">
                <img 
                  src="me.jpg" 
                  alt="Praveen Pandey" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80'; }}
                />
                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-slate-900/60 to-transparent">
                  <div className="flex justify-between items-end">
                    <div className="space-y-3">
                      <p className="text-white font-bold text-3xl uppercase tracking-tighter leading-none">P. PANDEY</p>
                      <div className="flex items-center space-x-2 text-blue-100">
                        <MapPin size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">New Jersey, USA</span>
                      </div>
                    </div>
                    <div className="h-14 w-14 bg-white/20 rounded-2xl backdrop-blur-md flex items-center justify-center border border-white/20">
                      <Zap size={28} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Metric Card */}
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden xl:block animate-in slide-in-from-right-10 duration-1000">
                <div className="bg-blue-600 p-8 rounded-[2.5rem] shadow-2xl shadow-blue-200 rotate-6 border-4 border-white">
                  <Activity size={32} className="text-white mb-3" />
                  <p className="text-4xl font-bold text-white leading-none">40%</p>
                  <p className="text-[10px] font-bold uppercase text-blue-100 tracking-widest mt-2">Latency Reduction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Section */}
      <section id="focus" className="py-40 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="space-y-6 text-left">
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-none">Current<br/>Initiatives.</h2>
              <p className="text-slate-500 text-lg font-medium max-w-md leading-relaxed">Bridging the critical architectural gap between Big Data engineering and Enterprise Generative AI.</p>
            </div>
            <div className="text-right space-y-3">
                <p className="text-[11px] font-bold text-blue-600 uppercase tracking-[0.5em] mb-4">Learning Log / 2024-25</p>
                <div className="flex flex-wrap justify-end gap-3">
                    {["Microsoft Fabric", "LLMOps", "Vector Search", "Neo4j"].map(tag => (
                        <span key={tag} className="px-4 py-2 bg-slate-100 border border-slate-200 rounded-xl text-[10px] font-bold uppercase tracking-widest text-slate-600">{tag}</span>
                    ))}
                </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="group bg-slate-50 border border-slate-200 p-14 rounded-[4rem] hover:shadow-xl transition-all duration-500">
              <div className="h-16 w-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-10 group-hover:scale-110 transition-transform">
                <Bot size={32} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6 uppercase tracking-tight">GenAI & RAG Pipelines</h3>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                Designing embedding-ready datasets for Retrieval-Augmented Generation. Specializing in semantic consistency and vector database optimization (Pinecone/Milvus) for enterprise scale knowledge retrieval.
              </p>
            </div>
            <div className="group bg-slate-50 border border-slate-200 p-14 rounded-[4rem] hover:shadow-xl transition-all duration-500">
              <div className="h-16 w-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-10 group-hover:scale-110 transition-transform">
                <Database size={32} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Graph knowledge Modeling</h3>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                Pioneering Graph-based solutions using Neo4j to solve complex multi-tier supply chain visibility problems that traditional relational models cannot manage at production scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-4">
             <p className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.6em]">System Architecture</p>
             <h2 className="text-5xl font-bold text-slate-900 tracking-tighter">Technical Stack.</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-10 rounded-[3rem] hover:shadow-lg hover:translate-y-[-8px] transition-all duration-500">
                <div className="text-blue-600 mb-8 p-4 bg-blue-50 w-fit rounded-2xl">{skill.icon}</div>
                <h3 className="text-slate-900 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">{skill.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item, i) => (
                    <span key={i} className="text-[10px] font-bold px-4 py-2 bg-slate-50 text-slate-500 rounded-xl border border-slate-100 uppercase tracking-wider group-hover:text-blue-600 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-40 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-32">
            {experiences.map((exp, idx) => (
              <div key={idx} className="group relative text-left">
                <div className="grid md:grid-cols-12 gap-16">
                  <div className="md:col-span-4 space-y-6">
                    <p className="text-[11px] font-bold text-blue-600 uppercase tracking-[0.5em]">{exp.period}</p>
                    <h3 className="text-4xl font-bold text-slate-900 leading-[1.1] uppercase tracking-tighter">{exp.company}</h3>
                    <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[11px] flex items-center">
                        <Briefcase size={14} className="mr-2" />
                        {exp.role}
                    </p>
                  </div>
                  <div className="md:col-span-8 space-y-8">
                    <p className="text-slate-500 text-xl font-medium leading-relaxed italic border-l-4 border-blue-100 pl-8 py-2">
                      "{exp.description}"
                    </p>
                    <div className="grid gap-6">
                      {exp.bullets.map((bullet, i) => (
                        <div key={i} className="flex items-start bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 hover:bg-white hover:shadow-md transition-all duration-300">
                          <ChevronRight className="w-6 h-6 text-blue-600 mr-5 shrink-0 mt-0.5" />
                          <p className="text-slate-600 text-sm font-medium leading-relaxed">{bullet}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-6 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-20 text-center md:text-left">
          <div className="space-y-6">
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <div className="bg-slate-900 text-white p-3 rounded-2xl shadow-lg"><Terminal size={24} /></div>
              <span className="font-bold text-3xl text-slate-900 tracking-tighter uppercase">Praveen Pandey</span>
            </div>
            <p className="text-slate-500 text-[11px] font-bold uppercase tracking-[0.6em] leading-loose max-w-xs mx-auto md:mx-0">
              Designing the future of distributed data systems.
            </p>
          </div>
          <div className="flex space-x-8">
              <a href="https://www.linkedin.com/in/praveenpdy/" target="_blank" rel="noopener noreferrer" className="h-16 w-16 bg-slate-50 border border-slate-200 rounded-3xl flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm active:scale-95">
                  <Linkedin size={28} />
              </a>
              <button onClick={() => setIsContactOpen(true)} className="h-16 w-16 bg-slate-50 border border-slate-200 rounded-3xl flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm active:scale-95">
                  <Mail size={28} />
              </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-slate-100 text-center text-slate-400 text-[9px] font-bold uppercase tracking-[1em]">
           © 2024 / Senior Data Engineer
        </div>
      </footer>
    </div>
  );
};

export default App;