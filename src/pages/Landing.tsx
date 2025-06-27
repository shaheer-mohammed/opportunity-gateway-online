
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { Briefcase, Users, Search, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const Landing = () => {
  const { login, register } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [userRole, setUserRole] = useState<'employer' | 'seeker'>('seeker');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;

    try {
      if (authMode === 'login') {
        await login(email, password, 'seeker'); // Default to seeker for login
        toast.success('Welcome back!');
      } else {
        const username = `${firstName} ${lastName}`;
        await register(username, email, password, userRole);
        toast.success('Account created successfully!');
      }
    } catch (error) {
      toast.error('Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Find Your{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Dream Job
                  </span>
                  <br />
                  Today
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Connect talented professionals with amazing opportunities. Whether you're hiring or looking for work, we've got you covered.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">10,000+ Active Jobs</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Trusted by 500+ Companies</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="text-center space-y-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:pl-8">
              <Card className="w-full max-w-md mx-auto shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="space-y-2 text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Welcome to JobBoard Pro</CardTitle>
                  <CardDescription className="text-base">
                    {authMode === 'login' ? 'Sign in to your account' : 'Create your account'}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Tabs value={authMode} onValueChange={(value) => setAuthMode(value as 'login' | 'register')}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="login">Sign In</TabsTrigger>
                      <TabsTrigger value="register">Sign Up</TabsTrigger>
                    </TabsList>

                    <TabsContent value="login" className="space-y-4 mt-6">
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            required
                            className="h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password">Password</Label>
                          <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            required
                            className="h-12"
                          />
                        </div>
                        <Button type="submit" className="w-full h-12 text-base" disabled={isLoading}>
                          {isLoading ? 'Signing In...' : 'Sign In'}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </form>
                    </TabsContent>

                    <TabsContent value="register" className="space-y-4 mt-6">
                      {/* Role Selection for Sign Up */}
                      <div className="grid grid-cols-2 gap-3">
                        <Button
                          type="button"
                          variant={userRole === 'seeker' ? 'default' : 'outline'}
                          onClick={() => setUserRole('seeker')}
                          className="py-6"
                        >
                          <Users className="h-4 w-4 mr-2" />
                          Job Seeker
                        </Button>
                        <Button
                          type="button"
                          variant={userRole === 'employer' ? 'default' : 'outline'}
                          onClick={() => setUserRole('employer')}
                          className="py-6"
                        >
                          <Briefcase className="h-4 w-4 mr-2" />
                          Employer
                        </Button>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              placeholder="First name"
                              required
                              className="h-12"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              placeholder="Last name"
                              required
                              className="h-12"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            required
                            className="h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password">Password</Label>
                          <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Create a password"
                            required
                            className="h-12"
                          />
                        </div>
                        <Button type="submit" className="w-full h-12 text-base" disabled={isLoading}>
                          {isLoading ? 'Creating Account...' : 'Create Account'}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
