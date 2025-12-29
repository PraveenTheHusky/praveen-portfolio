import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Database, 
  Cloud, 
  Code2, 
  Cpu, 
  Award, 
  Briefcase, 
  GraduationCap, 
  ChevronRight,
  Menu,
  X,
  MapPin,
  Terminal,
  Layers,
  BookOpen,
  Zap,
  Bot
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle smooth scroll and set active section
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'focus', label: 'Focus' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
  ];

  const skills = [
    {
      category: "Programming & Big Data",
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
      items: ["Python", "PySpark", "SQL", "Scala", "Apache Spark", "Kafka", "Flink", "Hadoop"]
    },
    {
      category: "Cloud & Data Engineering",
      icon: <Cloud className="w-6 h-6 text-indigo-500" />,
      items: ["Azure (Databricks, ADF, Synapse)", "AWS", "GCP", "Delta Lake", "Snowflake", "ADLS"]
    },
    {
      category: "Databases & Warehousing",
      icon: <Database className="w-6 h-6 text-purple-500" />,
      items: ["Neo4j", "Cosmos DB", "SQL Server", "Oracle", "Teradata", "PostgreSQL"]
    },
    {
      category: "DevOps & Orchestration",
      icon: <Layers className="w-6 h-6 text-teal-500" />,
      items: ["Docker", "Kubernetes", "Jenkins", "Azure DevOps", "Airflow", "dbt", "Git"]
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
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={() => scrollTo('home')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="bg-blue-600 text-white p-1.5 rounded-lg shadow-sm shadow-blue-200">
              <Terminal size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">Praveen Pandey</span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button 
                key={item.id} 
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-semibold transition-colors hover:text-blue-600 ${activeSection === item.id ? 'text-blue-600' : 'text-slate-600'}`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href="mailto:praveenpdy88@gmail.com"
              className="bg-slate-800 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-slate-900 transition-all shadow-md active:scale-95"
            >
              Contact Me
            </a>
          </div>

          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 p-4 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
            {navItems.map(item => (
              <button 
                key={item.id} 
                className={`block w-full text-left font-semibold py-3 px-4 rounded-xl ${activeSection === item.id ? 'bg-blue-50 text-blue-600' : 'text-slate-600'}`}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 border-t border-slate-100 mt-2">
              <a 
                href="mailto:praveenpdy88@gmail.com"
                className="flex items-center justify-center w-full bg-slate-800 text-white py-3 rounded-xl font-bold shadow-sm"
              >
                <Mail size={18} className="mr-2" />
                Contact Me
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold border border-blue-100 uppercase tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span>Senior Data Engineer</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
              Architecting <span className="text-blue-600">Cloud-Scale</span> Data Solutions.
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
              Designing governed, observable, and SLA-driven data platforms across Azure, AWS, and GCP. Specialist in Databricks Lakehouse architecture and GenAI enablement.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://www.linkedin.com/in/praveenpdy/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-95">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <button 
                onClick={() => scrollTo('experience')}
                className="flex items-center space-x-2 bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-95"
              >
                <span>View Portfolio</span>
                <ChevronRight size={18} />
              </button>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-400 pt-4">
              <div className="flex items-center space-x-2">
                <MapPin size={18} />
                <span className="text-sm font-medium">South Plainfield, NJ</span>
              </div>
              <a href="mailto:praveenpdy88@gmail.com" className="flex items-center space-x-2 hover:text-blue-600 transition-colors group">
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">praveenpdy88@gmail.com</span>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-[3rem] -rotate-3 opacity-60"></div>
            
            {/* Profile Image & Tech Card */}
            <div className="relative bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-2xl overflow-hidden">
               <div className="aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden mb-8 relative group border border-slate-100">
                  {/* Note: User should rename Me.HEIC to me.jpg after conversion */}
                  <img 
                    src="me.jpg" 
                    alt="Praveen Pandey" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => { 
                      e.target.onerror = null; 
                      e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80'; 
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               </div>
               
              <div className="flex items-center justify-between px-2 mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest">lakehouse_core.py</div>
              </div>
              <div className="font-mono text-[11px] text-slate-700 space-y-2 bg-slate-50 p-5 rounded-2xl border border-slate-100 leading-relaxed">
                <p><span className="text-purple-500">spark</span>.conf.set(<span className="text-blue-600">"delta.optimizeWrite"</span>, <span className="text-blue-500">True</span>)</p>
                <p><span className="text-purple-500">spark</span>.sql(<span className="text-green-600">"OPTIMIZE gold_table ZORDER BY (user_id)"</span>)</p>
                <p className="text-slate-400 mt-2 italic"># Architecting for GenAI</p>
                <p><span className="text-purple-500">embeddings</span> = vector_model.encode(data)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            Senior Data Engineer with 4+ years of experience designing and operating cloud-scale distributed data platforms. 
            Proven expertise in Databricks, Spark, Kafka, and Delta Lake. Recognized for technical leadership 
            in delivering reliable production systems and driving architectural decisions for high-stakes enterprise projects.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left pt-12">
            <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 transition-all group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 bg-blue-100 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm"><Cpu size={24} /></div>
                <h3 className="font-extrabold text-2xl">Distributed Systems</h3>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">Expertise in Spark Structured Streaming and Kafka for high-volume batch and streaming workloads with 99.9% production reliability.</p>
            </div>
            <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-indigo-200 transition-all group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 bg-indigo-100 text-indigo-600 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm"><Layers size={24} /></div>
                <h3 className="font-extrabold text-2xl">Data Governance</h3>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">Implementing enterprise-grade metadata management, quality controls, and lineage using Databricks Unity Catalog for governed data lakes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects & Learning Section */}
      <section id="focus" className="py-28 px-4 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-[0.03] -mr-32 -mt-32 pointer-events-none">
            <Zap size={600} />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
                <div className="inline-flex items-center space-x-2 bg-blue-500/10 px-4 py-2 rounded-full text-[10px] font-black border border-blue-500/20 tracking-[0.2em] uppercase text-blue-400">
                    <Zap size={14} />
                    <span>Current Focus</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] text-white tracking-tight">Engineering for <span className="text-blue-500">Intelligence.</span></h2>
                <div className="space-y-8">
                    <div className="bg-slate-800/40 backdrop-blur-xl p-10 rounded-[2.5rem] border border-slate-700/50 hover:bg-slate-800/60 transition-all group">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="bg-blue-600 p-3 rounded-2xl group-hover:scale-110 transition-transform"><Bot size={24} /></div>
                            <h3 className="text-2xl font-bold">GenAI & RAG Pipelines</h3>
                        </div>
                        <p className="text-slate-400 leading-relaxed font-medium text-lg">
                            Building embedding-ready datasets for RAG (Retrieval-Augmented Generation). I specialize in preparing high-quality, semantically consistent data to power intelligent LLM applications at scale.
                        </p>
                    </div>
                    <div className="bg-slate-800/40 backdrop-blur-xl p-10 rounded-[2.5rem] border border-slate-700/50 hover:bg-slate-800/60 transition-all group">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="bg-indigo-600 p-3 rounded-2xl group-hover:scale-110 transition-transform"><Database size={24} /></div>
                            <h3 className="text-2xl font-bold">Graph-Based Modeling</h3>
                        </div>
                        <p className="text-slate-400 leading-relaxed font-medium text-lg">
                            Pioneering graph solutions using Neo4j to solve complex relationship problems in supply chain visibility, moving beyond the limits of relational models.
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-12 lg:pt-24">
                <div className="inline-flex items-center space-x-2 bg-purple-500/10 px-4 py-2 rounded-full text-[10px] font-black border border-purple-500/20 tracking-[0.2em] uppercase text-purple-400">
                    <BookOpen size={14} />
                    <span>Learning Log</span>
                </div>
                <h2 className="text-4xl font-bold text-white tracking-tight">Current Learning Path</h2>
                <div className="grid gap-6">
                    {[
                      { title: "Microsoft Fabric", code: "FABRIC", subtitle: "DP-600 Analytics Engineer", color: "from-blue-500 to-cyan-400" },
                      { title: "Vector Databases", code: "VECTOR", subtitle: "Pinecone & Vector Search", color: "from-purple-500 to-indigo-400" },
                      { title: "LLMOps", code: "OPS", subtitle: "AI Pipeline Automation", color: "from-emerald-500 to-teal-400" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-6 p-7 bg-slate-800/30 rounded-3xl border border-slate-700/30 hover:border-slate-500 transition-all group">
                        <div className={`h-16 w-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} font-black text-[10px] shrink-0 text-white shadow-lg`}>
                          {item.code}
                        </div>
                        <div>
                            <p className="font-bold text-xl group-hover:text-blue-400 transition-colors">{item.title}</p>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">{item.subtitle}</p>
                        </div>
                      </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-28 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Technical Arsenal</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">Specialized tools for high-throughput, cloud-native data architecture.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="mb-8 bg-slate-50 w-14 h-14 flex items-center justify-center rounded-2xl shadow-inner text-blue-600">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-6 tracking-tight">{skill.category}</h3>
                <div className="flex flex-wrap gap-2.5">
                  {skill.items.map((item, i) => (
                    <span key={i} className="text-[10px] font-black px-3.5 py-2 bg-slate-50 text-slate-500 rounded-xl border border-slate-100/50 uppercase tracking-widest">
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
      <section id="experience" className="py-28 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Professional Experience</h2>
            <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 border-l-2 border-slate-100 pb-4">
                <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-white border-4 border-blue-600 ring-8 ring-blue-50 shadow-sm"></div>
                <div className="flex flex-wrap justify-between items-start mb-8 gap-4">
                  <div>
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-2">{exp.role}</h3>
                    <div className="flex items-center text-blue-600 font-bold space-x-2 text-xl">
                      <Briefcase size={20} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-black text-slate-700 bg-slate-100 px-5 py-2 rounded-full uppercase tracking-[0.1em]">{exp.period}</div>
                    <div className="text-[11px] text-slate-400 font-bold mt-3 flex items-center justify-end uppercase tracking-widest">
                        <MapPin size={12} className="mr-1.5 text-slate-300" />
                        {exp.location}
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 mb-10 text-lg leading-relaxed font-medium italic opacity-80">{exp.description}</p>
                <div className="grid gap-5">
                  {exp.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start text-slate-700 text-sm bg-slate-50/70 p-6 rounded-[2rem] border border-slate-100/50 shadow-sm transition-all hover:bg-white hover:shadow-md">
                      <ChevronRight className="w-5 h-5 text-blue-600 mr-4 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-medium">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-20 px-4 border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="text-center md:text-left space-y-4">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <div className="bg-slate-900 text-white p-2 rounded-xl">
                <Terminal size={20} />
              </div>
              <span className="font-bold text-2xl tracking-tight text-slate-800">Praveen Pandey</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed font-medium">Designing reliable production data systems at scale for the intelligence-driven era.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-8">
            <div className="flex space-x-5">
                <a href="https://www.linkedin.com/in/praveenpdy/" target="_blank" rel="noopener noreferrer" className="p-5 bg-slate-50 rounded-3xl text-slate-600 hover:text-blue-600 hover:bg-blue-50 hover:-translate-y-1 transition-all shadow-sm">
                    <Linkedin size={28} />
                </a>
                <a href="mailto:praveenpdy88@gmail.com" className="p-5 bg-slate-50 rounded-3xl text-slate-600 hover:text-blue-600 hover:bg-blue-50 hover:-translate-y-1 transition-all shadow-sm">
                    <Mail size={28} />
                </a>
            </div>
            <div className="text-slate-400 text-[10px] font-black tracking-[0.3em] uppercase">
                South Plainfield, New Jersey
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-20 pt-10 border-t border-slate-50 text-center text-slate-300 text-[10px] font-black tracking-[0.4em] uppercase">
          © {new Date().getFullYear()} Praveen Pandey
        </div>
      </footer>
    </div>
  );
};

export default App;