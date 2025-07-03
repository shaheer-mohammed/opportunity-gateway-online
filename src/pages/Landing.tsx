
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Search, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => {
  const features = [
    {
      icon: Search,
      title: 'Smart Job Search',
      description: 'Find your perfect job with advanced filtering and search capabilities'
    },
    {
      icon: Users,
      title: 'Connect with Talent',
      description: 'Employers can easily find and connect with qualified candidates'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Track your applications and grow your career with our platform'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Find Your{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Dream Job
                </span>
                <br />
                Today
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Connect talented professionals with amazing opportunities. Whether you're hiring or looking for work, we've got you covered.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">10,000+ Active Jobs</span>
              </div>
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Trusted by 500+ Companies</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <Link to="/signin">
                <Button size="lg" className="h-12 px-8 text-base">
                  Sign In
                </Button>
              </Link>
              
              <Link to="/signup">
                <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                  Create Account
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center space-y-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
