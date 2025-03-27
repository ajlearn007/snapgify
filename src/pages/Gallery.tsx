
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import ImageCard from '@/components/ImageCard';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// Sample gallery images (in a real app, these would come from an API or local storage)
const sampleImages = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1516651029879-bcd191e7d33b?q=80&w=700',
    title: 'Sunset Vintage Filter',
    date: '2 hours ago'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1529686342540-1b43aec0df75?q=80&w=700',
    title: 'Cyberpunk Portrait',
    date: 'Yesterday'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=700',
    title: 'Watercolor Landscape',
    date: '3 days ago'
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1520634222887-a2baa539fab3?q=80&w=700',
    title: 'Noir City Lights',
    date: 'Last week'
  }
];

const Gallery = () => {
  const navigate = useNavigate();
  
  const handleImageClick = (image: typeof sampleImages[0]) => {
    // In a real app, this would navigate to a detail view
    toast.info('Image details', {
      description: `Viewing details for ${image.title}`
    });
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pb-20">
      <div className="container max-w-md mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6 flex justify-between items-center"
        >
          <div>
            <h1 className="text-2xl font-bold">Your Gallery</h1>
            <p className="text-gray-600">Your recently edited images</p>
          </div>
          
          <div className="relative">
            <button 
              className="p-2 rounded-full hover:bg-gray-100"
              onClick={() => {
                toast.info('Sort options', {
                  description: 'Sorting options will be available in a future update'
                });
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </button>
          </div>
        </motion.div>
        
        {sampleImages.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {sampleImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <ImageCard
                  src={image.src}
                  alt={image.title}
                  title={image.title}
                  onClick={() => handleImageClick(image)}
                  aspectRatio="square"
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-700 mb-2">No images yet</h3>
            <p className="text-gray-500 mb-6">Your edited images will appear here</p>
            <button
              className="text-accent font-medium hover:underline"
              onClick={() => navigate('/upload')}
            >
              Upload Your First Image
            </button>
          </div>
        )}
      </div>
      
      <Navbar />
    </div>
  );
};

export default Gallery;
