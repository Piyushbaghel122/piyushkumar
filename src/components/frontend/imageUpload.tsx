import React, { useState } from 'react';

export default function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setSelectedImage(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = () => {
    if (file) {
      // TODO: Implement actual upload logic to your backend here
      console.log("Ready to upload file:", file.name);
      alert(`Uploading ${file.name}... (Backend integration needed)`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-xl max-w-sm mx-auto bg-white shadow-sm mt-8">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Upload Photo</h2>
      
      {selectedImage ? (
        <div className="mb-6">
          <img 
            src={selectedImage} 
            alt="Preview" 
            className="w-40 h-40 object-cover rounded-full shadow-md border-4 border-blue-50" 
          />
        </div>
      ) : (
        <div className="w-40 h-40 mb-6 flex flex-col items-center justify-center bg-gray-50 text-gray-400 rounded-full shadow-inner border-2 border-gray-100">
          <svg className="w-12 h-12 mb-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <span className="text-xs font-medium">No photo</span>
        </div>
      )}

      <div className="flex w-full items-center justify-center gap-3">
        <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors border border-gray-200 text-sm">
          <span>Choose...</span>
          <input 
            type="file" 
            accept="image/*" 
            className="hidden" 
            onChange={handleImageChange} 
          />
        </label>
        
        <button 
          onClick={handleUpload}
          disabled={!selectedImage}
          className={`font-medium py-2 px-5 rounded-lg transition-colors text-sm ${
            selectedImage 
              ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-100'
          }`}
        >
          Upload
        </button>
      </div>
    </div>
  );
}
