
interface CardItemProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export default function CardItem({ title, description, image, tags, githubUrl, demoUrl }: CardItemProps) {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-2xl bg-[#0B1121] border border-blue-900/40 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] hover:rotate-1 hover:border-blue-400/60 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] group h-full cursor-pointer">
      {/* Project Image */}
      <div className="w-full h-[160px] overflow-hidden rounded-xl bg-blue-900/20 flex-shrink-0 relative">
        <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <h3 className="text-white font-semibold text-[15px] mb-1.5 line-clamp-1">{title}</h3>
        <p className="text-gray-400 text-[12px] leading-relaxed mb-3 flex-1 line-clamp-3">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-0.5 text-[10px] font-medium bg-[#1a233a] text-blue-300 border border-blue-800/30 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-medium bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-colors border border-white/5"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.043-1.61-4.043-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.125-.305-.535-1.525.115-3.175 0 0 1.005-.32 3.3 1.23.96-.265 1.98-.395 3-.4 1.02.005 2.04.135 3 .4 2.295-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.175.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.295c0 .32.215.695.825.575C20.565 21.79 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
          )}
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-medium bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-[0_0_10px_rgba(37,99,235,0.2)]"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}