
interface ConfirmMessageProps {
  isVisible: boolean;
  message?: string;
  onClose?: () => void;
}

export default function ConfirmContentMessage({ 
  isVisible, 
  message = "Message sent successfully!", 
  onClose 
}: ConfirmMessageProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#0a0f1c] border border-blue-500/30 rounded-2xl p-6 shadow-[0_0_40px_rgba(37,99,235,0.2)] max-w-sm w-full flex flex-col items-center text-center transform scale-100 animate-in zoom-in-95 duration-200">
        <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">Success</h3>
        <p className="text-gray-400 text-sm mb-6">{message}</p>
        
        <button 
          onClick={onClose}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-lg py-2.5 text-sm font-medium transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
