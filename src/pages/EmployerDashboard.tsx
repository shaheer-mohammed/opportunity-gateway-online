import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Briefcase, Users, FileText, Plus, Eye, Edit, Trash2 } from 'lucide-react';
import ApplicationNotifications from '@/components/ApplicationNotifications';

const EmployerDashboard = () => {
  // Mock data - replace with real API calls
  const stats = {
    totalJobs: 12,
    totalApplications: 45,
    activeJobs: 8,
  };

  const recentJobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      location: 'San Francisco, CA',
      applications: 12,
      status: 'active',
      postedDate: '2024-01-15'
    },
    {
      id: 2,
      title: 'Product Manager',
      location: 'New York, NY',
      applications: 8,
      status: 'active',
      postedDate: '2024-01-12'
    },
    {
      id: 3,
      title: 'UX Designer',
      location: 'Remote',
      applications: 15,
      status: 'paused',
      postedDate: '2024-01-10'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Employer Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your job postings and applications</p>
        </div>
        <Link to="/employer/post-job">
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            <Plus className="h-4 w-4 mr-2" />
            Post New Job
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 text-sm font-medium">Total Jobs</p>
                <p className="text-3xl font-bold text-blue-900">{stats.totalJobs}</p>
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Link to="/employer/applications">
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:from-green-100 hover:to-green-200 transition-colors cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-600 text-sm font-medium">Total Applications</p>
                  <p className="text-3xl font-bold text-green-900">{stats.totalApplications}</p>
                </div>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-600 text-sm font-medium">Active Jobs</p>
                <p className="text-3xl font-bold text-purple-900">{stats.activeJobs}</p>
              </div>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Application Notifications - New Section */}
      <ApplicationNotifications />

      {/* Recent Job Postings */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Job Postings</CardTitle>
              <CardDescription>Manage your latest job listings</CardDescription>
            </div>
            <Link to="/employer/jobs">
              <Button variant="outline" size="sm">
                View All Jobs
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentJobs.map((job) => (
              <div key={job.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="font-semibold text-gray-900">{job.title}</h3>
                    <Badge variant={job.status === 'active' ? 'default' : 'secondary'}>
                      {job.status}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{job.location}</p>
                  <p className="text-gray-500 text-xs mt-1">Posted on {new Date(job.postedDate).toLocaleDateString()}</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-900">{job.applications}</p>
                    <p className="text-xs text-gray-500">Applications</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Link to={`/employer/jobs/${job.id}`}>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link to={`/employer/jobs/${job.id}/edit`}>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployerDashboard;
