
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 border-t border-gray-100 py-2 px-4 animate-slide-up">
      <div className="max-w-lg mx-auto">
        <div className="flex justify-around items-center">
          <NavItem 
            to="/" 
            label="Home" 
            isActive={location.pathname === '/'} 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            } 
          />
          
          <NavItem 
            to="/upload" 
            label="Upload" 
            isActive={location.pathname === '/upload'} 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            } 
          />
          
          <NavItem 
            to="/gallery" 
            label="Gallery" 
            isActive={location.pathname === '/gallery'} 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            } 
          />
          
          <NavItem 
            to="/profile" 
            label="Profile" 
            isActive={location.pathname === '/profile'} 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            } 
          />
        </div>
      </div>
    </nav>
  );
};

interface NavItemProps {
  to: string;
  label: string;
  isActive: boolean;
  icon: React.ReactNode;
}

const NavItem = ({ to, label, isActive, icon }: NavItemProps) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "flex flex-col items-center transition-all duration-200 ease-in-out py-1 px-3 rounded-lg",
        isActive 
          ? "text-accent scale-110 font-medium" 
          : "text-gray-500 hover:text-gray-800"
      )}
    >
      <div className={cn(
        "transition-transform duration-200",
        isActive ? "transform scale-110" : ""
      )}>
        {icon}
      </div>
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
};

export default Navbar;
