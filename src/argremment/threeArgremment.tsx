
import { Link } from '@tanstack/react-router';

export default function ThreeAgreement() {
  const pricingData = [
    { service: 'Simple 1-Page Website', price: '₹8,000 – ₹15,000' },
    { service: 'Small Business Website', price: '₹15,000 – ₹30,000' },
    { service: 'Professional Website', price: '₹25,000 – ₹50,000' },
    { service: 'Custom Website', price: '₹50,000 – ₹1,00,000+' },
    { service: 'E-commerce Website', price: '₹60,000 – ₹1,50,000+' },
    { service: 'AI-Building Project / AI Website', price: '₹60,000 – ₹2,00,000+' },
    { service: 'AI Automation / Business Automation', price: '₹25,000 – ₹1,00,000+' },
    { service: 'Gym Management Website / System', price: '₹35,000 – ₹90,000+' },
    { service: 'Real-Time Communication Website', price: '₹40,000 – ₹1,20,000+' },
    { service: 'Food & Restaurant Website', price: '₹40,000 – ₹1,20,000+' },
    { service: 'Coaching / Education Website', price: '₹30,000 – ₹80,000+' },
    { service: 'Website Maintenance – Weekly', price: '₹1,000 – ₹3,000' },
    { service: 'Website Maintenance – Monthly', price: '₹3,000 – ₹10,000' },
    { service: 'Website Maintenance – Annual Technical Support', price: 'From ₹24,000/year' },
  ];

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
            <div className="flex flex-col items-center text-gray-400">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mb-1">1</div>
              <span className="text-blue-600">Agreement</span>
            </div>
            <div className="w-12 h-[2px] bg-blue-600 -mx-3 mt-[-20px]"></div>
            <div className="flex flex-col items-center text-blue-600">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mb-1">2</div>
              <span className="text-blue-600">Requirements</span>
            </div>
            <div className="w-12 h-[2px] bg-blue-600 -mx-3 mt-[-20px]"></div>
            <div className="flex flex-col items-center text-blue-600">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mb-1">3</div>
              <span className="text-blue-600">Pricing</span>
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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">Indicative Website Service Pricing</h2>
                <p className="text-sm text-gray-500 mt-1">Below are the estimated possible prices for various website development services.</p>
              </div>
            </div>

            {/* Pricing Table Section */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-700">
                  <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 font-bold">
                    <tr>
                      <th className="px-6 py-4">Website / Service</th>
                      <th className="px-6 py-4">Possible Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {pricingData.map((item, index) => (
                      <tr key={index} className="hover:bg-blue-50/30 transition">
                        <td className="px-6 py-4 font-medium text-gray-800">{item.service}</td>
                        <td className="px-6 py-4 text-blue-700 font-semibold">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pricing Terms Section */}
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Pricing Terms
              </h3>
              <p className="text-sm text-blue-800 leading-relaxed">
                The above prices are <span className="font-bold underline decoration-blue-300 underline-offset-2">indicative prices</span>. Final pricing will depend on website requirements, number of pages, features, design, integrations, etc. third-party services and other external expenses are not included unless specifically mentioned in the quotation.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between pt-4">
              <Link to="/agreement/step-2" className="px-8 py-2.5 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition shadow-sm flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                <span>Back</span>
              </Link>
              <Link 
                to="/agreement/step-4"
                className="px-8 py-2.5 bg-blue-600 text-white font-semibold rounded-lg shadow-sm transition hover:bg-blue-700 flex items-center space-x-2"
              >
                <span>Next</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
