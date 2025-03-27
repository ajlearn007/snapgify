
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import AppButton from '@/components/AppButton';
import { toast } from 'sonner';

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const imageUrl = location.state?.imageUrl;
  
  const [prompt, setPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  
  // Predefined filter options
  const filters = [
    { id: 'vintage', name: 'Vintage', prompt: 'Make this image look vintage with warm colors and film grain' },
    { id: 'cyberpunk', name: 'Cyberpunk', prompt: 'Transform this into a cyberpunk style with neon colors' },
    { id: 'watercolor', name: 'Watercolor', prompt: 'Convert this image into a delicate watercolor painting' },
    { id: 'noir', name: 'Film Noir', prompt: 'Make this a black and white film noir style image with high contrast' },
  ];
  
  // If no image is provided, redirect back to upload
  if (!imageUrl) {
    React.useEffect(() => {
      navigate('/upload');
    }, [navigate]);
    return null;
  }
  
  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };
  
  const handleFilterSelect = (filterPrompt: string) => {
    setPrompt(filterPrompt);
  };
  
  const handleProcessImage = () => {
    if (!prompt.trim()) {
      toast.error('Empty prompt', {
        description: 'Please enter a description or select a filter'
      });
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate AI processing delay
    setTimeout(() => {
      // For demo purposes, we're just returning the original image
      // In a real app, this would call an AI API
      setProcessedImageUrl(imageUrl);
      setIsProcessing(false);
      
      toast.success('Processing complete', {
        description: 'Your image has been successfully transformed!'
      });
    }, 3000);
  };
  
  const handleSave = () => {
    if (!processedImageUrl) return;
    
    // Simulate saving to device
    toast.success('Image saved', {
      description: 'The image has been saved to your gallery'
    });
    
    // Navigate to result page
    navigate('/result', { 
      state: { 
        originalUrl: imageUrl,
        processedUrl: processedImageUrl,
        prompt: prompt
      } 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pb-20">
      <div className="container max-w-md mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <h1 className="text-2xl font-bold">Edit Image</h1>
          <p className="text-gray-600">Apply AI transformations to your image</p>
        </motion.div>
        
        <div className="space-y-6">
          {/* Image Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm"
          >
            <img 
              src={processedImageUrl || imageUrl} 
              alt="Image to edit" 
              className="w-full aspect-square object-cover"
            />
            
            {isProcessing && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <div className="text-center text-white">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-white border-r-transparent mb-2"></div>
                  <p>Processing your image...</p>
                </div>
              </div>
            )}
          </motion.div>
          
          {processedImageUrl ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <h3 className="font-medium">Your edited image is ready!</h3>
              
              <div className="flex gap-3">
                <AppButton
                  variant="outline"
                  fullWidth
                  onClick={() => {
                    setProcessedImageUrl(null);
                    setPrompt('');
                  }}
                  leftIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>
                  }
                >
                  Edit Again
                </AppButton>
                
                <AppButton
                  fullWidth
                  onClick={handleSave}
                  leftIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                    </svg>
                  }
                >
                  Save & Share
                </AppButton>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="space-y-5"
            >
              {/* AI Prompt Input */}
              <div className="glass-morphism rounded-xl p-4">
                <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
                  Describe how you want to transform your image
                </label>
                <textarea
                  id="prompt"
                  rows={3}
                  placeholder="e.g., Make this image look like a watercolor painting"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  value={prompt}
                  onChange={handlePromptChange}
                ></textarea>
              </div>
              
              {/* Quick Filters */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Or select a quick filter:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      className="px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white hover:bg-accent hover:text-white hover:border-accent transition-colors duration-200"
                      onClick={() => handleFilterSelect(filter.prompt)}
                    >
                      {filter.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <AppButton
                fullWidth
                onClick={handleProcessImage}
                disabled={isProcessing}
                isLoading={isProcessing}
              >
                Apply Transformation
              </AppButton>
            </motion.div>
          )}
        </div>
      </div>
      
      <Navbar />
    </div>
  );
};

export default Edit;
