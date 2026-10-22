import React, { useState, useRef } from 'react';

export default function LeftSide() {
  const [avatarUrl, setAvatarUrl] = useState("https://ui-avatars.com/api/?name=Piyush+Kumar&background=0D8ABC&color=fff&size=200");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatarUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const navItems = [
    { name: 'Home', active: true, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path> },
    { name: 'About', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> },
    { name: 'Skills', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path> },
    { name: 'Projects', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path> },
    { name: 'Experience', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> },
    { name: 'Education', icon: <><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></> },
    { name: 'Achievements', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path> },
    { name: 'Contact', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> },
  ];

  return (
    <aside className="hidden md:flex w-65 bg-[#020617] text-gray-300 flex-col items-center py-8 px-6 border-r border-blue-900/40 h-screen overflow-y-auto font-sans">
      
      {/* Header Logo */}
      <div className="flex items-center gap-3 mb-8 w-full justify-center">
        <span className="text-4xl text-blue-500 font-medium"></span>
        <div className="flex flex-col">
          <span className="font-bold text-xl text-blue-500 leading-tight"></span>
          <span className="text-[11px] text-gray-400 font-medium tracking-[0.15em] mt-0.5">Code • Build • Grow</span>
        </div>
      </div>

      {/* Profile Avatar */}
      <div className="relative mb-5 group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
        <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-blue-600 shadow-[0_0_25px_rgba(37,99,235,0.4)] relative">
          <img src={avatarUrl} alt="Profile" className="w-full h-full object-cover group-hover:opacity-75 transition-opacity" />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
            <svg className="w-8 h-8 text-white mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span className="text-white text-xs font-medium">Upload</span>
          </div>
        </div>
        <input type="file" className="hidden" ref={fileInputRef} onChange={handleImageChange} accept="image/*" />
      </div>

      {/* Name and Title */}
      <div className="text-center mb-8">
        <h1 className="text-[26px] font-bold text-white mb-2">
          Piyush <span className="text-blue-500">Kumar</span>
        </h1>
        <p className="text-[13px] text-gray-300 leading-relaxed">
          Python Developer | Backend Developer<br/>
          <span className="text-blue-100/70">AI Automation Enthusiast</span>
        </p>
      </div>

      {/* Contact Info List */}
      <div className="w-full flex flex-col gap-3.5 text-[13px] mb-8 text-gray-400">
        <div className="flex items-center gap-3">
          <svg className="w-[18px] h-[18px] text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <span>India</span>
        </div>
        <div className="flex items-center gap-3">
          <svg className="w-[18px] h-[18px] text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <span>piyushkumar898923@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <svg className="w-[18px] h-[18px] text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
          </svg>
          <span>+91 9289186945 and 9599582511 </span>
        </div>
      </div>


      {/* Download Resume Action */}
      <button className="w-full py-2.5 px-4 mb-8 rounded-full border border-blue-500/80 text-white hover:bg-blue-600 hover:border-blue-600 transition-all flex items-center justify-center gap-2 text-[14px] font-medium shadow-[0_0_15px_rgba(37,99,235,0.15)]">
        <svg className="w-4 h-4 text-blue-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
        </svg>
        Download Resume
      </button>

      {/* Primary Navigation */}
      <nav className="w-full flex flex-col gap-0.5 mb-10">
        {navItems.map((item) => (
          <a 
            key={item.name} 
            href={`#${item.name.toLowerCase()}`} 
            className={`flex items-center gap-4 px-4 py-3 rounded-xl text-[14px] font-medium transition-all ${
              item.active 
                ? 'bg-gradient-to-r from-blue-700/80 to-transparent text-white border-l-2 border-blue-400' 
                : 'text-gray-400 hover:text-white hover:bg-white/5 border-l-2 border-transparent'
            }`}
          >
            <svg className={`w-5 h-5 ${item.active ? 'text-white' : 'text-blue-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {item.icon}
            </svg>
            {item.name}
          </a>
        ))}
      </nav>

      {/* Skills / Currently Learning Tags */}
      <div className="w-full mt-auto">
        <div className="flex items-center gap-2 mb-4 text-[13px] font-medium text-blue-200/80">
          <svg className="w-[18px] h-[18px] text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          Currently Learning
        </div>
        <div className="flex flex-wrap gap-2">
          {['Python', 'DSA', 'FastAPI', 'AI & Automation', 'Docker', 'K8s'].map(tag => (
            <span key={tag} className="px-3 py-1.5 bg-[#0f172a] border border-blue-900/40 rounded-lg text-[12px] text-gray-300 shadow-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Quote and Socials */}
      <div className="w-full flex flex-col items-center mt-10 mb-2 pt-6 border-t border-blue-900/30">
        <p className="text-gray-300 italic text-[13px] mb-4">"Better than yesterday" 🚀</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/piyushkumar" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/piyushkumar" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
}