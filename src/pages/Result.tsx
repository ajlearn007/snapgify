
import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import AppButton from '@/components/AppButton';
import { toast } from 'sonner';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { originalUrl, processedUrl, prompt } = location.state || {};
  
  // If no processed image, redirect back to upload
  if (!processedUrl) {
    React.useEffect(() => {
      navigate('/upload');
    }, [navigate]);
    return null;
  }
  
  const handleDownload = () => {
    // In a real app, this would trigger a download
    toast.success('Download started', {
      description: 'Your image is being downloaded'
    });
  };
  
  const handleShare = () => {
    // Check if Web Share API is available
    if (navigator.share) {
      navigator.share({
        title: 'My AI-edited image',
        text: 'Check out this image I created with AI!',
        // In a real app, this would be a publicly accessible URL
        url: 'https://example.com/shared-image'
      })
      .then(() => console.log('Shared successfully'))
      .catch((error) => {
        console.error('Error sharing:', error);
        toast.error('Sharing failed', {
          description: 'Could not share the image. Try downloading it instead.'
        });
      });
    } else {
      toast.info('Sharing not available', {
        description: 'Your browser does not support the share functionality'
      });
    }
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
          <h1 className="text-2xl font-bold">Final Result</h1>
          <p className="text-gray-600">Your transformation is complete</p>
        </motion.div>
        
        <div className="space-y-6">
          {/* Result Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm"
          >
            <img 
              src={processedUrl} 
              alt="Processed image" 
              className="w-full aspect-square object-cover"
            />
          </motion.div>
          
          {/* Prompt Used */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="glass-morphism rounded-xl p-4"
          >
            <h3 className="text-sm font-medium text-gray-700 mb-1">Transformation applied:</h3>
            <p className="text-gray-600 text-sm italic">"{prompt}"</p>
          </motion.div>
          
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="space-y-3"
          >
            <div className="flex gap-3">
              <AppButton
                variant="outline"
                fullWidth
                onClick={handleDownload}
                leftIcon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                }
              >
                Download
              </AppButton>
              
              <AppButton
                fullWidth
                onClick={handleShare}
                leftIcon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                }
              >
                Share
              </AppButton>
            </div>
            
            <AppButton
              variant="ghost"
              fullWidth
              onClick={() => navigate('/upload')}
              leftIcon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              }
            >
              Edit a New Image
            </AppButton>
          </motion.div>
          
          {/* Before & After Comparison */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="pt-4"
          >
            <h3 className="text-sm font-medium text-gray-700 mb-3">Before & After:</h3>
            <div className="flex gap-3">
              <div className="w-1/2">
                <div className="aspect-square rounded-lg overflow-hidden border border-gray-200">
                  <img src={originalUrl} alt="Original" className="w-full h-full object-cover" />
                </div>
                <p className="text-xs text-center text-gray-500 mt-1">Original</p>
              </div>
              <div className="w-1/2">
                <div className="aspect-square rounded-lg overflow-hidden border border-gray-200">
                  <img src={processedUrl} alt="Transformed" className="w-full h-full object-cover" />
                </div>
                <p className="text-xs text-center text-gray-500 mt-1">Transformed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Navbar />
    </div>
  );
};

export default Result;
