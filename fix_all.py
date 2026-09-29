import sys

# 1. Fix navbar.tsx (Theme Toggle)
with open('src/components/frontend/navbar.tsx', 'r', encoding='utf-8') as f:
    nav_content = f.read()

nav_replacement = """import React, { useState, useEffect } from 'react';

export default function NavBar() {
   const [isDark, setIsDark] = useState(true);

   useEffect(() => {
     if (isDark) {
       document.documentElement.classList.add('dark');
     } else {
       document.documentElement.classList.remove('dark');
     }
   }, [isDark]);"""

nav_content = nav_content.replace("import React from 'react';\n\nexport default function NavBar() {", nav_replacement)

nav_toggle = """<div className="flex items-center bg-[#0B1121] border border-blue-900/40 rounded-full px-1 py-1">
               <button onClick={() => setIsDark(true)} className={`p-1.5 rounded-full transition-colors ${isDark ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}>
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
               </button>
               <button onClick={() => setIsDark(false)} className={`p-1.5 rounded-full transition-colors ${!isDark ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}>
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
               </button>
            </div>"""

nav_content = nav_content.replace("""<div className="flex items-center bg-[#0B1121] border border-blue-900/40 rounded-full px-1 py-1">
               <button className="p-1.5 rounded-full bg-white/10 text-white">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
               </button>
               <button className="p-1.5 rounded-full text-gray-500 hover:text-white transition-colors">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
               </button>
            </div>""", nav_toggle)

with open('src/components/frontend/navbar.tsx', 'w', encoding='utf-8') as f:
    f.write(nav_content)

# 2. Fix dashbaord.tsx (Contact Form API integration)
with open('src/components/frontend/dashbaord.tsx', 'r', encoding='utf-8') as f:
    dash_content = f.read()

dash_import = """import { Link } from "@tanstack/react-router";
import { useState } from "react";"""

dash_content = dash_content.replace('import { Link } from "@tanstack/react-router";', dash_import)

dash_state = """function Dashboard() {
  const [contactData, setContactData] = useState({ name: "", email: "", message: "" });
  const [submitStatus, setSubmitStatus] = useState("");

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("Sending...");
    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactData),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitStatus("Sent Successfully!");
        setContactData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("Failed to send.");
      }
    } catch (err) {
      setSubmitStatus("Error sending message.");
    }
  };"""

dash_content = dash_content.replace('function Dashboard() {', dash_state)

dash_form = """<form className="space-y-3" onSubmit={handleContactSubmit}>
                <input type="text" placeholder="Your Name" required value={contactData.name} onChange={e => setContactData({...contactData, name: e.target.value})} className="w-full bg-[#111827] border border-gray-800 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" />
                <input type="email" placeholder="Your Email" required value={contactData.email} onChange={e => setContactData({...contactData, email: e.target.value})} className="w-full bg-[#111827] border border-gray-800 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" />
                <textarea placeholder="Your Message" rows={2} required value={contactData.message} onChange={e => setContactData({...contactData, message: e.target.value})} className="w-full bg-[#111827] border border-gray-800 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-lg py-2 text-xs font-medium transition-colors">
                  {submitStatus || "Send Message"}
                </button>
              </form>"""

dash_content = dash_content.replace("""<form className="space-y-3">
                <input type="text" placeholder="Your Name" className="w-full bg-[#111827] border border-gray-800 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" />
                <input type="email" placeholder="Your Email" className="w-full bg-[#111827] border border-gray-800 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" />
                <textarea placeholder="Your Message" rows={2} className="w-full bg-[#111827] border border-gray-800 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
                <button type="button" className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-lg py-2 text-xs font-medium transition-colors">Send Message</button>
              </form>""", dash_form)

with open('src/components/frontend/dashbaord.tsx', 'w', encoding='utf-8') as f:
    f.write(dash_content)

print("Done fixing both!")
