import { useState, useEffect } from 'react';
import { Link } from "@tanstack/react-router";

interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  techStack: string[];
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
}

const saasProduct: Product = {
  _id: "mock-saas-1",
  name: "SAAS",
  description: "Automates email, WhatsApp notifications and other repetitive tasks using n8n and APIs.",
  category: "SaaS",
  techStack: ["Python", "n8n", "Docker"],
  imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  projectUrl: "https://example.com/saas",
  githubUrl: "https://github.com/Piyushbaghel122/saas-project"
};

export default function Project() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/products');
        if (response.ok) {
          const data = await response.json();
          setProducts([...data, saasProduct]);
        } else {
          setProducts([saasProduct]);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([saasProduct]);
      }
    };
    fetchProducts();
  }, []);

  const categories = ['All', 'Web Apps', 'Mobile Apps', 'Desktop Apps', 'AI / Automation', 'Backend', 'SaaS', 'Other'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#0b1120] text-white p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 flex justify-between items-start">
          <div>
            <h3 className="text-blue-500 font-semibold tracking-wider text-sm uppercase mb-1">My Work</h3>
            <h1 className="text-4xl font-bold mb-4">My <span className="text-blue-500">Projects</span></h1>
            <p className="text-gray-400 max-w-2xl">
              Here are all of my <span className="text-blue-400">{products.length} projects</span>. I've built these projects to solve real problems, learn new technologies and improve my skills.
            </p>
          </div>
          <div className="bg-[#111827] border border-gray-800 p-4 rounded-xl flex items-center gap-4">
            <div className="bg-blue-600/20 p-3 rounded-lg text-blue-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
            </div>
            <div>
              <div className="text-2xl font-bold">{products.length}</div>
              <div className="text-gray-400 text-sm">Total Projects</div>
            </div>
          </div>
        </header>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <input 
              type="text" 
              placeholder="Search projects by name..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1e293b] border border-gray-700 text-white rounded-lg pl-10 py-3 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <select className="bg-[#1e293b] border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 min-w-[200px]">
            <option>All Categories</option>
          </select>
          <select className="bg-[#1e293b] border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 min-w-[200px]">
            <option>All Technologies</option>
          </select>
          <select className="bg-[#1e293b] border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 min-w-[150px]">
            <option>Newest</option>
          </select>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-[#1e293b] border border-gray-700 text-gray-300 hover:bg-[#334155]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product._id} className="bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-colors flex flex-col group">
              <div className="relative h-48 overflow-hidden bg-[#1e293b]">
                {product.imageUrl ? (
                  <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">No Image</div>
                )}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-xs px-2 py-1 rounded-md text-gray-300">
                  {product.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-3">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.techStack.map((tech, i) => (
                    <span key={i} className="text-xs bg-blue-900/30 text-blue-400 px-2 py-1 rounded-md border border-blue-800/30">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  {product.projectUrl && (
                    <Link to="/saas" className="flex-1 bg-blue-600 hover:bg-blue-700 text-center py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    
                    </Link>
                  )}
                  {product.githubUrl && (
                    <a href={product.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#1e293b] hover:bg-[#334155] border border-gray-700 text-center py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" /></svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
