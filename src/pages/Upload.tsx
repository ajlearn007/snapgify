
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import AppButton from '@/components/AppButton';
import UploadIndicator from '@/components/UploadIndicator';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      toast.error('Invalid file type', {
        description: 'Please select an image file (JPEG, PNG, etc.)'
      });
      return;
    }
    
    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error('File too large', {
        description: 'Please select an image smaller than 10MB'
      });
      return;
    }
    
    // Create a URL for the selected image
    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
  };
  
  const handleUpload = () => {
    if (!selectedImage) return;
    
    setIsUploading(true);
    
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 10;
      if (progress > 100) {
        progress = 100;
        clearInterval(interval);
        
        // Navigate to edit page after "upload" completes
        setTimeout(() => {
          setIsUploading(false);
          navigate('/edit', { state: { imageUrl: selectedImage } });
        }, 500);
      }
      setUploadProgress(progress);
    }, 300);
  };
  
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };
  
  const handleCameraCapture = () => {
    toast.info('Camera access', {
      description: 'Camera functionality will be implemented in a future update.'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container max-w-md mx-auto px-4 py-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <h1 className="text-2xl font-bold">Upload Image</h1>
          <p className="text-gray-600">Select an image to start editing</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="glass-morphism rounded-2xl p-6 shadow-sm mb-6"
        >
          {selectedImage ? (
            <div className="space-y-4">
              <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-200">
                <img 
                  src={selectedImage} 
                  alt="Selected" 
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-700 hover:bg-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {isUploading ? (
                <UploadIndicator progress={uploadProgress} />
              ) : (
                <AppButton 
                  fullWidth 
                  onClick={handleUpload}
                  leftIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  }
                >
                  Continue to Edit
                </AppButton>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              <div 
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-accent hover:bg-accent/5 transition-colors duration-200"
                onClick={triggerFileInput}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm text-gray-600 mb-1">Drag & drop your image here</p>
                <p className="text-xs text-gray-500">or click to browse</p>
                <input 
                  type="file" 
                  ref={fileInputRef}
                  className="hidden" 
                  accept="image/*" 
                  onChange={handleFileChange}
                />
              </div>
              
              <div className="flex gap-3">
                <AppButton
                  variant="outline"
                  fullWidth
                  onClick={triggerFileInput}
                  leftIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  }
                >
                  Gallery
                </AppButton>
                
                <AppButton
                  variant="outline"
                  fullWidth
                  onClick={handleCameraCapture}
                  leftIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  }
                >
                  Camera
                </AppButton>
              </div>
            </div>
          )}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-center text-sm text-gray-500"
        >
          <p>Supported formats: JPEG, PNG, WebP</p>
          <p>Max file size: 10MB</p>
        </motion.div>
      </div>
      
      <Navbar />
    </div>
  );
};

export default Upload;
