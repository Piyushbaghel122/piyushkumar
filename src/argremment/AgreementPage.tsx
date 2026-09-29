import
 React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { websiteTypesData } from './websiteTypesData';

export default function AgreementPage() {
  const [agree, setAgree] = useState(false);
  const [signatureName, setSignatureName] = useState("");
  const [photoName, setPhotoName] = useState("");
  const [websiteType, setWebsiteType] = useState("");
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col py-6 px-4">
        <ul className="space-y-2">
          <li>
            <Link to="/agreement" className="flex items-center space-x-3 text-blue-600 bg-blue-50 px-4 py-3 rounded-lg font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              <span>New Agreement</span>
            </Link>
          </li>
          <li>
            <Link to="/agreement" className="flex items-center space-x-3 text-gray-600 hover:bg-gray-50 px-4 py-3 rounded-lg font-medium transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              <span>My Agreements</span>
            </Link>
          </li>
          <li>
            <Link to="/clients" className="flex items-center space-x-3 text-gray-600 hover:bg-gray-50 px-4 py-3 rounded-lg font-medium transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              <span>Clients</span>
            </Link>
          </li>
          <li>
            <Link to="/project" className="flex items-center space-x-3 text-gray-600 hover:bg-gray-50 px-4 py-3 rounded-lg font-medium transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link to="/templates" className="flex items-center space-x-3 text-gray-600 hover:bg-gray-50 px-4 py-3 rounded-lg font-medium transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg>
              <span>Templates</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex items-center space-x-3 text-gray-600 hover:bg-gray-50 px-4 py-3 rounded-lg font-medium transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Navigation Bar */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between z-10 shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-lg">
              &lt;/&gt;
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 leading-tight">Website Development Agreement</h1>
              <p className="text-xs text-gray-500">Website Development • Design • Deployment • Maintenance • Technical Support</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 text-sm font-medium">
            <div className="flex flex-col items-center text-blue-600">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mb-1">1</div>
              <span>Agreement</span>
            </div>
            <div className="w-12 h-[2px] bg-gray-200 -mx-3 mt-[-20px]"></div>
            <div className="flex flex-col items-center text-gray-400">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mb-1 text-gray-500">2</div>
              <span>Client Details</span>
            </div>
            <div className="w-12 h-[2px] bg-gray-200 -mx-3 mt-[-20px]"></div>
            <div className="flex flex-col items-center text-gray-400">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mb-1 text-gray-500">3</div>
              <span>Project Details</span>
            </div>
            <div className="w-12 h-[2px] bg-gray-200 -mx-3 mt-[-20px]"></div>
            <div className="flex flex-col items-center text-gray-400">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mb-1 text-gray-500">4</div>
              <span>Review</span>
            </div>
          </div>
        </header>

        {/* Scrollable Form Area */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto space-y-8 pb-12">
            
            {/* Title Block */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">Service Provider Agreement</h2>
                <p className="text-sm text-gray-500 mt-1">Please fill in the details below to create a website development agreement.</p>
              </div>
            </div>

            {/* Section 1 */}
            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
              <div className="flex items-center space-x-4 mb-8 border-b border-gray-100 pb-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Service Provider Details</h3>
                  <p className="text-xs text-gray-500">Enter the details of the service provider (your business).</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="space-y-6">
                  <div className="group relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 transition-colors group-focus-within:text-blue-600">Service Provider Name <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter service provider name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md focus:-translate-y-1 focus:shadow-md" />
                  </div>
                  <div className="group relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 transition-colors group-focus-within:text-blue-600">Business Name <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter business name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md focus:-translate-y-1 focus:shadow-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Official Email ID <span className="text-red-500">*</span></label>
                    <input type="email" placeholder="Enter official email id" className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Business Contact Number <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter business contact number" className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Personal Contact Number <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter personal contact number" className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Designation <span className="text-red-500">*</span></label>
                    <select className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white transition text-gray-600">
                      <option>Select designation</option>
                      <option>Developer</option>
                      <option>CEO</option>
                      <option>Manager</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="block text-sm font-semibold text-gray-700 mb-1.5">Signature <span className="text-red-500">*</span></span>
                    <label className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-blue-600 bg-blue-50/30 hover:bg-blue-50 transition cursor-pointer h-[130px] block w-full">
                      <input type="file" className="hidden" accept=".jpg,.jpeg,.png" onChange={(e) => setSignatureName(e.target.files?.[0]?.name || '')} />
                      <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                      <span className="text-sm font-semibold text-gray-700 text-center px-2 truncate w-full">{signatureName || "Click to upload signature"}</span>
                      {!signatureName && <span className="text-xs text-gray-400 mt-1">(JPG, PNG)</span>}
                    </label>
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-gray-700 mb-1.5">Photo <span className="text-red-500">*</span></span>
                    <label className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-blue-600 bg-blue-50/30 hover:bg-blue-50 transition cursor-pointer h-[130px] block w-full">
                      <input type="file" className="hidden" accept=".jpg,.jpeg,.png" onChange={(e) => setPhotoName(e.target.files?.[0]?.name || '')} />
                      <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      <span className="text-sm font-semibold text-gray-700 text-center px-2 truncate w-full">{photoName || "Click to upload photo"}</span>
                      {!photoName && <span className="text-xs text-gray-400 mt-1">(JPG, PNG)</span>}
                    </label>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Date <span className="text-red-500">*</span></label>
                    <input type="date" className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-500 transition" />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
              <div className="flex items-center space-x-4 mb-8 border-b border-gray-100 pb-4">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Client / Business Details</h3>
                  <p className="text-xs text-gray-500">Fill in the details of the client or business.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Business / Company Name <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter business or company name" className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Authorized Person <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter authorized person name" className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Designation <span className="text-red-500">*</span></label>
                    <select className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white transition text-gray-600">
                      <option>Enter designation</option>
                      <option>CEO</option>
                      <option>Manager</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Official Email ID <span className="text-red-500">*</span></label>
                    <input type="email" placeholder="Enter official email id" className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Business Contact Number <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter business contact number" className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Personal Contact Number <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter personal contact number" className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Business Address <span className="text-red-500">*</span></label>
                    <textarea rows={4} placeholder="Enter business address" className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none transition h-[130px]"></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Existing Website URL</label>
                    <input type="url" placeholder="http://" className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Business / Social Media Links</label>
                    <textarea rows={4} placeholder="Enter links (comma separated)" className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none transition h-[130px]"></textarea>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
              <div className="flex items-center space-x-4 mb-8 border-b border-gray-100 pb-4">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Project Details</h3>
                  <p className="text-xs text-gray-500">Fill in the project and website information.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="space-y-6">
                  <div className="group relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 transition-colors group-focus-within:text-blue-600">Project / Website Name <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter project or website name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md focus:-translate-y-1 focus:shadow-md" />
                  </div>
                  <div className="md:col-span-2 group relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 transition-colors group-focus-within:text-blue-600">Website Type <span className="text-red-500">*</span></label>
                    <select 
                      value={websiteType}
                      onChange={(e) => setWebsiteType(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md focus:-translate-y-1 focus:shadow-md text-gray-700"
                    >
                      <option value="">Select website type</option>
                      <option value="Simple 1-Page Website">Simple 1-Page Website</option>
                      <option value="Small Business Website">Small Business Website</option>
                      <option value="Professional Website">Professional Website</option>
                      <option value="5-pages website">5-Pages Website</option>
                      <option value="10-pages website">10-Pages Website</option>
                      <option value="More than 10-pages website">More than 10-Pages Website</option>
                      <option value="Custom Website">Custom Website</option>
                      <option value="E-commerce Website">E-commerce Website</option>
                      <option value="Web App">Web App</option>
                      <option value="AI-Building Project / AI Website">AI-Building Project / AI Website</option>
                      <option value="AI Automation / Business Automation">AI Automation / Business Automation</option>
                      <option value="Gym Management Website / System">Gym Management Website / System</option>
                      <option value="Real-Time Communication Website">Real-Time Communication Website</option>
                      <option value="Food & Restaurant Website">Food & Restaurant Website</option>
                      <option value="Coaching / Education Website">Coaching / Education Website</option>
                      <option value="Website Maintenance - Weekly">Website Maintenance - Weekly</option>
                      <option value="Website Maintenance - Monthly">Website Maintenance - Monthly</option>
                      <option value="Website Maintenance - Annual Technical Support">Website Maintenance - Annual Technical Support</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  {websiteType && websiteTypesData[websiteType] && (
                    <div className="md:col-span-2 pt-2 pb-6 flex justify-center animate-fade-in-up">
                      <button 
                        type="button"
                        onClick={() => setShowDetailsModal(true)}
                        className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full overflow-hidden shadow-[0_0_15px_rgba(79,70,229,0.4)] hover:shadow-[0_0_25px_rgba(79,70,229,0.6)] transition-all duration-300 transform hover:-translate-y-1 w-full md:w-auto"
                      >
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                        <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 transition-opacity duration-500"></span>
                        
                        {/* Animated ping effect */}
                        <span className="absolute flex h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                        </span>

                        <svg className="relative w-5 h-5 mr-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
                        <span className="relative uppercase tracking-wider">Click Here to View {websiteType} Details</span>
                      </button>
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Project Description <span className="text-red-500">*</span></label>
                    <textarea rows={4} placeholder="Describe your project in brief" className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none transition"></textarea>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Starting Date <span className="text-red-500">*</span></label>
                    <input type="date" className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-400 transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Expected Completion Date <span className="text-red-500">*</span></label>
                    <input type="date" className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-400 transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Final Delivery Date <span className="text-red-500">*</span></label>
                    <input type="date" className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-400 transition" />
                  </div>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-xl flex items-start space-x-4">
              <div className="pt-1">
                <input 
                  type="checkbox" 
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-gray-800 text-sm">I Agree to the Terms and Conditions</h4>
                  <a href="#" className="text-xs font-semibold text-blue-600 flex items-center hover:underline">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    View Full Terms & Conditions
                  </a>
                </div>
                <p className="text-xs text-blue-600/80 leading-relaxed">
                  I confirm that the information provided is accurate and I agree to the terms and conditions of this website development agreement.<br/>
                  I understand that this agreement is legally binding between both parties.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between pt-4">
              <button type="button" className="px-6 py-2.5 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition shadow-sm text-sm">
                Cancel
              </button>
              {agree ? (
                <Link 
                  to="/agreement/step-2"
                  className="px-8 py-2.5 font-semibold rounded-lg shadow-sm transition flex items-center space-x-2 text-sm bg-blue-600 text-white hover:bg-blue-700"
                >
                  <span>Next</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
              ) : (
                <button 
                  type="button" 
                  disabled
                  className="px-8 py-2.5 font-semibold rounded-lg shadow-sm transition flex items-center space-x-2 text-sm bg-gray-300 text-gray-500 cursor-not-allowed"
                >
                  <span>Next</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              )}
            </div>

          </div>
        </main>
      </div>
      
      {/* Website Type Details Modal */}
      {showDetailsModal && websiteType && websiteTypesData[websiteType] && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden relative animate-fade-in-up">
            <button onClick={() => setShowDetailsModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full p-1 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>{websiteType} Details</span>
              </h3>
            </div>
            <div className="p-6 overflow-y-auto flex-1 space-y-6 bg-gray-50/50">
              {websiteTypesData[websiteType].description && (
                <div className="bg-blue-50 text-blue-800 p-4 rounded-lg text-sm leading-relaxed border border-blue-100">
                  {websiteTypesData[websiteType].description}
                </div>
              )}
              {websiteTypesData[websiteType].suitableFor && (
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Suitable For:</h4>
                  <p className="text-gray-600 text-sm">{websiteTypesData[websiteType].suitableFor}</p>
                </div>
              )}
              {websiteTypesData[websiteType].typicalPages && (
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Typical Pages:</h4>
                  <div className="flex flex-wrap gap-2">
                    {websiteTypesData[websiteType].typicalPages?.map((page, i) => (
                      <span key={i} className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm shadow-sm">{page}</span>
                    ))}
                  </div>
                </div>
              )}
              {websiteTypesData[websiteType].features && (
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                    {websiteTypesData[websiteType].features?.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {websiteTypesData[websiteType].integrations && (
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Integrations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {websiteTypesData[websiteType].integrations?.map((integration, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg text-sm font-medium">{integration}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="p-4 border-t border-gray-200 bg-white flex justify-end">
              <button onClick={() => setShowDetailsModal(false)} className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-sm">
                Understood & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
