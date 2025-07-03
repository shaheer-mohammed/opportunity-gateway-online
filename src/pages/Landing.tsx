
import React from 'react';
import { Button } from '@/components/ui/button';
import { Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-md w-full">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto">
          <Briefcase className="h-8 w-8 text-white" />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">Welcome</h1>
          <p className="text-gray-600">Choose an option to continue</p>
        </div>

        <div className="space-y-4">
          <Link to="/signin" className="block">
            <Button size="lg" className="w-full h-12 text-base">
              Sign In
            </Button>
          </Link>
          
          <Link to="/signup" className="block">
            <Button variant="outline" size="lg" className="w-full h-12 text-base">
              Create Account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
