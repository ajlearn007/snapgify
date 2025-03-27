
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import AppButton from '@/components/AppButton';
import { toast } from 'sonner';

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleGoogleSignIn = () => {
    // Simulate sign in process
    toast.info('Sign in with Google', {
      description: 'Google authentication will be implemented in a future update'
    });
    
    // For demo purposes, simulate a successful login
    setTimeout(() => {
      setIsLoggedIn(true);
      toast.success('Signed in successfully', {
        description: 'Welcome to Imagify!'
      });
    }, 1000);
  };
  
  const handleSignOut = () => {
    setIsLoggedIn(false);
    toast.success('Signed out successfully');
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
          <h1 className="text-2xl font-bold">Your Profile</h1>
          <p className="text-gray-600">
            {isLoggedIn 
              ? 'Manage your account settings' 
              : 'Sign in to save and access your edits'}
          </p>
        </motion.div>
        
        {isLoggedIn ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {/* User Info */}
            <div className="glass-morphism rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-accent/10 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-1">John Doe</h2>
              <p className="text-gray-600 mb-4">john.doe@example.com</p>
              <AppButton
                variant="outline"
                size="sm"
                onClick={() => {
                  toast.info('Edit profile', {
                    description: 'Profile editing will be available in a future update'
                  });
                }}
              >
                Edit Profile
              </AppButton>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Total Edits</h3>
                <p className="text-2xl font-bold">12</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Storage Used</h3>
                <p className="text-2xl font-bold">42 MB</p>
              </div>
            </div>
            
            {/* Settings */}
            <div className="space-y-2">
              <SettingsItem 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                } 
                title="Notifications" 
                description="Manage your notification preferences"
              />
              
              <SettingsItem 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                } 
                title="Privacy & Security" 
                description="Control your data and account security"
              />
              
              <SettingsItem 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                } 
                title="Help & Support" 
                description="Get help and contact support"
              />
            </div>
            
            {/* Sign Out Button */}
            <AppButton
              variant="outline"
              fullWidth
              onClick={handleSignOut}
              leftIcon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              }
            >
              Sign Out
            </AppButton>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-morphism rounded-xl p-6 shadow-sm text-center"
          >
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-accent/10 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            
            <h2 className="text-xl font-bold mb-2">Sign in to Imagify</h2>
            <p className="text-gray-600 mb-6">Unlock all features and save your edits</p>
            
            <div className="space-y-4">
              <AppButton
                fullWidth
                onClick={handleGoogleSignIn}
                leftIcon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                    <path fill="#4285F4" d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.614Z"/>
                    <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z"/>
                    <path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z"/>
                    <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z"/>
                  </svg>
                }
              >
                Continue with Google
              </AppButton>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-white text-gray-500">or</span>
                </div>
              </div>
              
              <AppButton
                variant="outline"
                fullWidth
                onClick={() => {
                  toast.info('Email sign in', {
                    description: 'Email authentication will be implemented in a future update'
                  });
                }}
              >
                Sign in with Email
              </AppButton>
            </div>
            
            <div className="mt-6 text-xs text-gray-500">
              <p>By signing in, you agree to our <a href="#" className="text-accent hover:underline">Terms of Service</a> and <a href="#" className="text-accent hover:underline">Privacy Policy</a></p>
            </div>
          </motion.div>
        )}
      </div>
      
      <Navbar />
    </div>
  );
};

interface SettingsItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SettingsItem = ({ icon, title, description }: SettingsItemProps) => {
  return (
    <button 
      className="w-full flex items-center bg-white border border-gray-100 p-4 rounded-xl hover:border-accent/30 hover:bg-accent/5 transition-colors duration-200 text-left"
      onClick={() => {
        toast.info(`${title} settings`, {
          description: `${title} settings will be available in a future update`
        });
      }}
    >
      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
        <div className="text-gray-600">{icon}</div>
      </div>
      <div>
        <h3 className="font-medium text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="ml-auto">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
};

export default Profile;
