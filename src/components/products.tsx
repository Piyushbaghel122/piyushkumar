import { createFileRoute , Link } from "@tanstack/react-router";

const productRoute = createFileRoute("/saas")({
    component: ProductAdmin
});


export default function ProductAdmin(){
   const list = [
     {
        name: "iron-man", 
        product_Url: "https://iron-man-pearl.vercel.app/",
        github_url: "https://github.com/Piyushbaghel122/iron-man"
     },
     {
        name: "spirder-man",
        product_Url: "https://spirder-man.vercel.app/",
        github_url: "https://github.com/Piyushbaghel122/spirder-man"
     },
     {
        name: "Antation Management System",
        product_Url: "https://antation-management-system.vercel.app/",
        github_url: "https://github.com/Piyushbaghel122/antation-management-system"
     },
     {
        name: "FOOD-View"
     },
     {
        name: "Uber-Saas"
     }
   ]

    return (
        <div className="min-h-screen bg-[#0b1120] text-white p-8 font-sans">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">SAAS <span className="text-blue-500">Products</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {list.map((item, index) => (
                    <div 
                        key={index} 
                        className="group flex flex-col justify-between bg-[#111827] border border-gray-800 p-6 rounded-2xl hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300"
                    >
                        <div>
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{item.name}</h3>
                            <p className="text-gray-400 text-sm line-clamp-2 mb-6">Manage and explore settings for {item.name}.</p>
                        </div>
                        <div className="flex gap-3 mt-auto">
                            {item.product_Url && (
                                <a href={item.product_Url} target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-600 hover:bg-blue-700 text-center py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                    View Live
                                </a>
                            )}
                            {item.github_url && (
                                <a href={item.github_url} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#1e293b] hover:bg-[#334155] border border-gray-700 text-center py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" /></svg>
                                    GitHub
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
    )
}