import { useState } from 'react';

export default function NavBar() {
   const [isDarkMode, setIsDarkMode] = useState(true);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   const lists = [
    { item: "Home", active: true },
    { item: "About" },
    { item: "Skills" },
    { item: "Projects" },
    { item: "Experience" },
    { item: "Education" },
    { item: "Achievements" },
    { item: "Resume" },
    { item: "Contact" },
   ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#020617]/80 border-b border-blue-900/40">
      <nav className="w-full px-4 lg:px-8 relative">
        <div className="flex justify-between h-[72px] items-center">
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-1 items-center">
            {lists.map((nav, index) => (
              <a
                key={index}
                href={`#${nav.item.toLowerCase()}`}
                className={`px-4 py-2 rounded-full text-[13px] font-medium cursor-pointer transition-all ${
                  nav.active 
                    ? 'text-white bg-white/10' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {nav.item}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-[#0B1121] border border-blue-900/40 rounded-full px-1 py-1">
               <button 
                 onClick={() => setIsDarkMode(true)}
                 className={`p-1.5 rounded-full transition-colors ${isDarkMode ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}
               >
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
               </button>
               <button 
                 onClick={() => setIsDarkMode(false)}
                 className={`p-1.5 rounded-full transition-colors ${!isDarkMode ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}
               >
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
               </button>
            </div>
            
            <a href="#contact" className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600/20 border border-blue-500/50 text-blue-400 hover:bg-blue-600 hover:text-white transition-all font-medium text-[13px]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              Hire Me
            </a>
          </div>
        </div> 

        {/* Mobile Menu Dropdown */}
        <div 
          className={`absolute top-full left-0 w-full bg-[#020617]/95 backdrop-blur-xl border-b border-blue-900/40 md:hidden transition-all duration-300 ease-in-out origin-top ${
            isMobileMenuOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="px-4 py-4 space-y-2 flex flex-col">
            {lists.map((nav, index) => (
              <a
                key={index}
                href={`#${nav.item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  nav.active 
                    ? 'text-white bg-white/10' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {nav.item}
              </a>
            ))}
            
            {/* Mobile Hire Me Button */}
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 sm:hidden flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-blue-600/20 border border-blue-500/50 text-blue-400 hover:bg-blue-600 hover:text-white transition-all font-medium text-[14px]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              Hire Me
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}