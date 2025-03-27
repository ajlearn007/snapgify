
import React from 'react';
import { motion } from 'framer-motion';
import AppButton from '@/components/AppButton';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { toast } from 'sonner';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container max-w-md mx-auto px-4 pt-12 pb-24">
        {/* Logo and App Title */}
        <motion.div 
          className="text-center mb-12 pt-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-1">Imagify</h1>
          <p className="text-gray-600 max-w-xs mx-auto">Transform your photos with AI-powered magic</p>
        </motion.div>

        {/* Main Actions */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="glass-morphism rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">What would you like to do?</h2>
            
            <div className="space-y-3">
              <AppButton 
                fullWidth 
                size="lg"
                leftIcon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                } 
                onClick={() => navigate('/upload')}
              >
                Upload Photo
              </AppButton>
              
              <AppButton 
                variant="outline" 
                fullWidth
                size="lg"
                leftIcon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                } 
                onClick={() => {
                  toast.info("Coming soon", {
                    description: "Search functionality will be available in a future update."
                  });
                }}
              >
                Search Filters
              </AppButton>
            </div>
          </div>
          
          {/* Login/Sign Up CTA */}
          <motion.div 
            className="text-center p-4 bg-accent/5 rounded-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <p className="text-sm text-gray-600 mb-3">Sign in to save your edits and access them from any device</p>
            <AppButton 
              variant="ghost" 
              onClick={() => navigate('/profile')}
              rightIcon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              }
            >
              Sign in or create account
            </AppButton>
          </motion.div>
        </motion.div>
      </div>
      
      <Navbar />
    </div>
  );
};

export default Index;
