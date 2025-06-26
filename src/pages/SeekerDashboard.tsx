import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Briefcase, FileSearch, Clock, CheckCircle, XCircle, ArrowRight, AlertTriangle, Timer, Star } from 'lucide-react';

const SeekerDashboard = () => {
  // Mock data - replace with real API calls
  const stats = {
    appliedJobs: 15,
    interviews: 3,
    pending: 8,
    rejected: 4,
    reviews: 12,
  };

  const recentApplications = [
    {
      id: 1,
      jobTitle: 'Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      status: 'interview',
      appliedDate: '2024-01-15',
      salary: '$80k - $120k'
    },
    {
      id: 2,
      jobTitle: 'React Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      status: 'pending',
      appliedDate: '2024-01-12',
      salary: '$70k - $100k'
    },
    {
      id: 3,
      jobTitle: 'Full Stack Developer',
      company: 'BigTech Co.',
      location: 'New York, NY',
      status: 'rejected',
      appliedDate: '2024-01-10',
      salary: '$90k - $130k'
    }
  ];

  const pendingApplications = recentApplications.filter(app => app.status === 'pending');
  const rejectedApplications = recentApplications.filter(app => app.status === 'rejected');

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'interview':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'rejected':
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'interview':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const recommendedJobs = [
    {
      id: 4,
      title: 'Senior React Developer',
      company: 'InnovateTech',
      location: 'Seattle, WA',
      salary: '$100k - $140k',
      type: 'Full-time',
      postedDays: 2
    },
    {
      id: 5,
      title: 'JavaScript Developer',
      company: 'WebSolutions',
      location: 'Remote',
      salary: '$75k - $110k',
      type: 'Full-time',
      postedDays: 1
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Job Seeker Dashboard</h1>
          <p className="text-gray-600 mt-2">Track your applications and discover new opportunities</p>
        </div>
        <Link to="/jobs">
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            <FileSearch className="h-4 w-4 mr-2" />
            Browse Jobs
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 text-sm font-medium">Applied Jobs</p>
                <p className="text-3xl font-bold text-blue-900">{stats.appliedJobs}</p>
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-600 text-sm font-medium">Interviews</p>
                <p className="text-3xl font-bold text-green-900">{stats.interviews}</p>
              </div>
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-600 text-sm font-medium">Pending</p>
                <p className="text-3xl font-bold text-yellow-900">{stats.pending}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
                <Timer className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-600 text-sm font-medium">Rejected</p>
                <p className="text-3xl font-bold text-red-900">{stats.rejected}</p>
              </div>
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <XCircle className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-600 text-sm font-medium">Reviews</p>
                <p className="text-3xl font-bold text-purple-900">{stats.reviews}</p>
              </div>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <Star className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Status Highlights Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Pending Applications */}
        <Card className="border-yellow-200">
          <CardHeader className="bg-yellow-50">
            <div className="flex items-center space-x-2">
              <Timer className="h-5 w-5 text-yellow-600" />
              <CardTitle className="text-yellow-800">Pending Applications</CardTitle>
            </div>
            <CardDescription>Applications awaiting response</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            {pendingApplications.length > 0 ? (
              <div className="space-y-4">
                {pendingApplications.map((app) => (
                  <div key={app.id} className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-gray-900">{app.jobTitle}</h3>
                          <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">
                            {app.status}
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-sm mt-1">{app.company} • {app.location}</p>
                        <p className="text-gray-500 text-xs mt-1">Applied on {new Date(app.appliedDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">No pending applications</p>
            )}
          </CardContent>
        </Card>

        {/* Rejected Applications */}
        <Card className="border-red-200">
          <CardHeader className="bg-red-50">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <CardTitle className="text-red-800">Recent Rejections</CardTitle>
            </div>
            <CardDescription>Applications that were not successful</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            {rejectedApplications.length > 0 ? (
              <div className="space-y-4">
                {rejectedApplications.map((app) => (
                  <div key={app.id} className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-gray-900">{app.jobTitle}</h3>
                          <Badge className="bg-red-100 text-red-800 border-red-300">
                            {app.status}
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-sm mt-1">{app.company} • {app.location}</p>
                        <p className="text-gray-500 text-xs mt-1">Applied on {new Date(app.appliedDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">No rejected applications</p>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Applications */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Applications</CardTitle>
              <CardDescription>Your latest job applications</CardDescription>
            </div>
            <Link to="/my-applications">
              <Button variant="ghost" size="sm">
                View All
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentApplications.map((app) => (
                <div key={app.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-gray-900">{app.jobTitle}</h3>
                        {getStatusIcon(app.status)}
                      </div>
                      <p className="text-gray-600 text-sm mt-1">{app.company} • {app.location}</p>
                      <p className="text-gray-500 text-xs mt-1">Applied on {new Date(app.appliedDate).toLocaleDateString()}</p>
                      <p className="text-blue-600 text-sm font-medium mt-1">{app.salary}</p>
                    </div>
                    <Badge className={getStatusColor(app.status)}>
                      {app.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommended Jobs */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recommended for You</CardTitle>
              <CardDescription>Jobs matching your profile</CardDescription>
            </div>
            <Link to="/jobs">
              <Button variant="ghost" size="sm">
                View All
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendedJobs.map((job) => (
                <div key={job.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{job.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{job.company} • {job.location}</p>
                      <div className="flex items-center space-x-3 mt-2">
                        <Badge variant="secondary">{job.type}</Badge>
                        <span className="text-blue-600 text-sm font-medium">{job.salary}</span>
                      </div>
                      <p className="text-gray-500 text-xs mt-2">{job.postedDays} days ago</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SeekerDashboard;
