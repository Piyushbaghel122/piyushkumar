import NavBar from "./navbar";
import LeftSide from "./leftSide";
import CardItem from "./cardItems";
import { projectsData } from "./projectsData";
import { Link } from "@tanstack/react-router";


function Dashboard() {
  return (
    <div className="flex relative h-screen bg-[#020617] text-white overflow-hidden">
      <LeftSide />
      
      <div className="flex-1 flex flex-col h-screen overflow-y-auto overflow-x-hidden">
        <NavBar />
        
        <main className="flex-1 px-8 py-10 max-w-7xl mx-auto w-full">
          {/* Hero Section */}
          <section className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-10">
            <div className="flex-1">
              <h2 className="text-gray-300 text-xl mb-2 font-medium tracking-wide">Hello, I'm</h2>
              <h1 className="text-6xl font-bold mb-6 text-white tracking-tight">
                Piyush <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Kumar</span>
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-xl leading-relaxed">
                I build backend systems, APIs and automation solutions that make real-world problems easier to solve.
              </p>
              
              <div className="flex items-center gap-4 mb-10">
                <Link to="/project" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  View Projects
                </Link>
                <Link to="/resume" className="px-6 py-3 bg-transparent border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white rounded-full font-medium transition-all flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  Download Resume
                </Link>
              </div>

              {/* Tech Icons Row */}
              <div className="flex items-center gap-4 bg-[#0a0f1c] border border-blue-900/30 p-3 rounded-2xl w-fit">
                {/* Icons placeholders for Python, FastAPI, C++, React, Node, Docker, Postgres, AWS, Linux */}
                {['Python', 'FastAPI', 'C++', 'React', 'Node.js', 'Docker', 'PostgreSQL', 'AWS', 'Linux'].map((tech) => (
                  <div key={tech} className="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center border border-gray-800 hover:border-blue-500/50 transition-colors tooltip relative group cursor-help">
                    <span className="text-[10px] font-semibold text-blue-400">{tech.substring(0,2)}</span>
                    <div className="absolute -bottom-8 bg-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-700 pointer-events-none z-10">{tech}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="flex-1 flex justify-end">
               <div className="relative w-[500px] h-[400px] rounded-3xl overflow-hidden border border-blue-900/30 shadow-[0_0_50px_rgba(37,99,235,0.1)]">
                 <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Coding Background" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
               </div>
            </div>
          </section>

          {/* Grid Layout for the rest */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* About Me */}
            <section className="col-span-1 lg:col-span-5 bg-[#0a0f1c] border border-blue-900/30 rounded-3xl p-6 hover:border-blue-700/50 transition-colors group flex flex-col">
               <div className="flex flex-col sm:flex-row gap-6 mb-6 flex-1">
                 {/* Profile Image */}
                 <div className="w-full sm:w-[160px] h-[180px] rounded-2xl overflow-hidden relative shadow-[0_0_40px_rgba(37,99,235,0.15)] shrink-0 border border-blue-800/40">
                   <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10"></div>
                   <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&q=80" alt="Profile" className="w-full h-full object-cover" />
                 </div>
                 
                 <div className="flex flex-col">
                   <h3 className="text-xl font-bold text-white mb-3">About Me</h3>
                   <p className="text-gray-400 text-sm leading-relaxed">
                     I'm a passionate and self-driven developer with a strong interest in Python, backend development, and AI automation. I enjoy building useful web applications, solving real-world problems, and constantly learning new technologies.
                   </p>
                 </div>
               </div>
               
               <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-800/50 text-center mt-auto">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1">1+</h4>
                    <span className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold">Years Learning</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1">5+</h4>
                    <span className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold">Projects Built</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1">100%</h4>
                    <span className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold">Growth Mindset</span>
                  </div>
               </div>
            </section>

            {/* Skills */}
            <section className="col-span-1 lg:col-span-7 bg-[#0a0f1c] border border-blue-900/30 rounded-3xl p-6 hover:border-blue-700/50 transition-colors group relative">
               <div className="flex justify-between items-center mb-6">
                 <h3 className="text-xl font-bold text-white flex items-center gap-2">
                   <span className="text-blue-500">✦</span> Skills
                 </h3>
                 <a href="#" className="text-xs font-medium text-blue-400 hover:text-blue-300">View All →</a>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                 {[
                   {name: 'Python', percent: '90%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'},
                   {name: 'FastAPI', percent: '85%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg'},
                   {name: 'Docker', percent: '70%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg'},
                   {name: 'Linux', percent: '70%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg'},
                   {name: 'Node.js', percent: '85%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'},
                   {name: 'Next.js', percent: '75%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg'},
                   {name: 'PostgreSQL', percent: '80%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'},
                   {name: 'Git & GitHub', percent: '90%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'},
                   {name: 'DSA', percent: '70%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/thealgorithms/thealgorithms-original.svg'},
                   {name: 'React', percent: '75%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'},
                   {name: 'Kubernetes', percent: '65%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg'},
                   {name: 'AI & Automation', percent: '65%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg'}
                 ].map(skill => (
                   <div key={skill.name} className="flex flex-col gap-1.5">
                     <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-lg bg-[#111827] flex items-center justify-center border border-gray-800 p-1.5 shrink-0 shadow-sm">
                         <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain filter drop-shadow-sm" style={skill.name === 'Next.js' ? {filter: 'invert(1)'} : {}} />
                       </div>
                       <div className="flex flex-col w-full">
                         <div className="flex justify-between items-center mb-1">
                           <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                           <span className="text-gray-500 text-[11px] font-semibold">{skill.percent}</span>
                         </div>
                         <div className="w-full bg-gray-800/80 rounded-full h-1.5 overflow-hidden">
                           <div className="bg-gradient-to-r from-blue-600 to-cyan-400 h-1.5 rounded-full" style={{width: skill.percent}}></div>
                         </div>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
            </section>

            {/* Featured Projects */}
            <section className="col-span-1 lg:col-span-12 bg-[#0a0f1c] border border-blue-900/30 rounded-3xl p-6">
               <div className="flex justify-between items-center mb-6">
                 <h3 className="text-xl font-bold text-white flex items-center gap-2">
                   <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                   Featured Projects
                 </h3>
                 <a href="#" className="text-xs font-medium text-blue-400 hover:text-blue-300">View All Projects →</a>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                 {projectsData.map(project => (
                   <CardItem key={project.id} {...project} />
                 ))}
               </div>
            </section>

            {/* Experience, Education, Achievements, Contact */}
            <section className="col-span-1 lg:col-span-3 bg-[#0a0f1c] border border-blue-900/30 rounded-3xl p-5 hover:border-blue-700/50 transition-colors">
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                Experience
              </h3>
              <div className="border-l border-blue-900/50 ml-2 pl-4 pb-4">
                <div className="relative">
                  <div className="absolute w-2.5 h-2.5 bg-blue-500 rounded-full -left-[21px] top-1.5 ring-4 ring-[#0a0f1c]"></div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-white text-sm font-semibold">Python Developer Intern</h4>
                    <span className="text-[10px] text-gray-500">June 2026 -  October 2026</span>
                  </div>
                  <p className="text-gray-400 text-[11px] mb-2">Tech Solutions Pvt. Ltd. (Remote)</p>
                  <ul className="text-gray-400 text-[11px] list-disc ml-3 space-y-1">
                    <li>Developed REST APIs using FastAPI and integrated with PostgreSQL.</li>
                    <li>Built automation scripts to reduce manual work by 70%.</li>
                    <li>Worked on Git, Docker and deployment workflows.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="col-span-1 lg:col-span-3 bg-[#0a0f1c] border border-blue-900/30 rounded-3xl p-5 hover:border-blue-700/50 transition-colors">
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
                Education
              </h3>
              <div className="border-l border-blue-900/50 ml-2 pl-4 space-y-4">
                <div className="relative">
                  <div className="absolute w-2 h-2 bg-gray-500 rounded-full -left-[20px] top-1.5 ring-4 ring-[#0a0f1c]"></div>
                  <div className="flex justify-between items-start mb-0.5">
                    <h4 className="text-white text-sm font-semibold">B.Tech in Robotics and Ai</h4>
                    <span className="text-[10px] text-gray-500">2025 - 2029</span>
                  </div>
                  <p className="text-blue-400 text-[11px]">gautam budh university</p>
                </div>
                <div className="relative">
                  <div className="absolute w-2 h-2 bg-gray-600 rounded-full -left-[20px] top-1.5 ring-4 ring-[#0a0f1c]"></div>
                  <div className="flex justify-between items-start mb-0.5">
                    <h4 className="text-white text-sm font-semibold">Class 12 (Science)</h4>
                    <span className="text-[10px] text-gray-500">2024</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="col-span-1 lg:col-span-3 bg-[#0a0f1c] border border-blue-900/30 rounded-3xl p-5 hover:border-blue-700/50 transition-colors">
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                Achievements
              </h3>
              <ul className="text-gray-400 text-xs space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">✦</span>
                  <span>Solved 500+ DSA problems (LeetCode + GFG)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">✦</span>
                  <span>Completed AI Automation Specialization (Coursera)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">✦</span>
                  <span>Built 5+ real-world projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">✦</span>
                  <span>Participated in 2 hackathons</span>
                </li>
              </ul>
            </section>

            <section className="col-span-1 lg:col-span-3 bg-[#0a0f1c] border border-blue-900/30 rounded-3xl p-5 hover:border-blue-700/50 transition-colors">
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                Contact
              </h3>
              <form className="space-y-3">
                <input type="text" placeholder="Your Name" className="w-full bg-[#111827] border border-gray-800 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" />
                <input type="email" placeholder="Your Email" className="w-full bg-[#111827] border border-gray-800 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" />
                <textarea placeholder="Your Message" rows={2} className="w-full bg-[#111827] border border-gray-800 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
                <button type="button" className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-lg py-2 text-xs font-medium transition-colors">Send Message</button>
              </form>
            </section>

          </div>
          
          <footer className="mt-12 border-t border-gray-800/50 pt-6 pb-2 text-center">
            <p className="text-gray-500 text-xs">© 2026 Piyush Kumar. Built with React & Tailwind CSS.</p>
          </footer>
        </main>
      </div>
    </div>
  )
}
export default Dashboard;