import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Building, MapPin, Eye, Trash2, Clock, CheckCircle, XCircle, FileText, Search } from 'lucide-react';

const MyApplications = () => {
  const navigate = useNavigate();
  const [applications] = useState([
    {
      id: 1,
      jobTitle: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      salary: '$120k - $160k',
      status: 'interview',
      appliedDate: '2024-01-15',
      lastUpdate: '2024-01-18',
      notes: 'Technical interview scheduled for next week',
      jobType: 'Full-time',
      jobId: 1
    },
    {
      id: 2,
      jobTitle: 'React Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      salary: '$80k - $120k',
      status: 'pending',
      appliedDate: '2024-01-12',
      lastUpdate: '2024-01-12',
      notes: 'Waiting for initial response',
      jobType: 'Full-time',
      jobId: 2
    },
    {
      id: 3,
      jobTitle: 'Full Stack Developer',
      company: 'BigTech Co.',
      location: 'New York, NY',
      salary: '$100k - $140k',
      status: 'rejected',
      appliedDate: '2024-01-10',
      lastUpdate: '2024-01-16',
      notes: 'Position filled by internal candidate',
      jobType: 'Full-time',
      jobId: 3
    },
    {
      id: 4,
      jobTitle: 'Frontend Engineer',
      company: 'InnovateTech',
      location: 'Seattle, WA',
      salary: '$90k - $130k',
      status: 'reviewing',
      appliedDate: '2024-01-08',
      lastUpdate: '2024-01-14',
      notes: 'Application under review by hiring manager',
      jobType: 'Full-time',
      jobId: 4
    },
    {
      id: 5,
      jobTitle: 'UI Developer',
      company: 'DesignFirst',
      location: 'Los Angeles, CA',
      salary: '$70k - $100k',
      status: 'pending',
      appliedDate: '2024-01-05',
      lastUpdate: '2024-01-05',
      notes: 'Initial application submitted',
      jobType: 'Contract',
      jobId: 5
    }
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'interview':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'reviewing':
        return <Clock className="h-4 w-4 text-blue-600" />;
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
        return 'bg-green-100 text-green-800 border-green-200';
      case 'reviewing':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'rejected':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const filterApplicationsByStatus = (status: string) => {
    if (status === 'all') return applications;
    return applications.filter(app => app.status === status);
  };

  const handleViewJob = (jobId: number) => {
    navigate(`/jobs/${jobId}`);
  };

  const ApplicationCard = ({ application }: { application: any }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{application.jobTitle}</h3>
              <div className="flex items-center space-x-1">
                {getStatusIcon(application.status)}
                <Badge className={getStatusColor(application.status)}>
                  {application.status}
                </Badge>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-gray-600 mb-3">
              <div className="flex items-center space-x-1">
                <Building className="h-4 w-4" />
                <span>{application.company}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{application.location}</span>
              </div>
              <Badge variant="outline">{application.jobType}</Badge>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>Applied: {new Date(application.appliedDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>Updated: {new Date(application.lastUpdate).toLocaleDateString()}</span>
              </div>
            </div>

            <p className="text-blue-600 font-semibold mb-3">{application.salary}</p>
            
            {application.notes && (
              <div className="bg-gray-50 p-3 rounded-lg mb-4">
                <div className="flex items-start space-x-2">
                  <FileText className="h-4 w-4 text-gray-500 mt-0.5" />
                  <p className="text-sm text-gray-700">{application.notes}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={() => handleViewJob(application.jobId)}>
              <Eye className="h-4 w-4 mr-2" />
              View Job
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
            <Trash2 className="h-4 w-4 mr-2" />
            Withdraw
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const stats = {
    total: applications.length,
    pending: applications.filter(app => app.status === 'pending').length,
    reviewing: applications.filter(app => app.status === 'reviewing').length,
    interview: applications.filter(app => app.status === 'interview').length,
    rejected: applications.filter(app => app.status === 'rejected').length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Applications</h1>
        <p className="text-gray-600 mt-2">Track and manage your job applications</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
            <p className="text-sm text-gray-600">Total</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
            <p className="text-sm text-gray-600">Pending</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Search className="h-5 w-5 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-blue-600">{stats.reviewing}</p>
            <p className="text-sm text-gray-600">Reviewing</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-green-600">{stats.interview}</p>
            <p className="text-sm text-gray-600">Interview</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-red-600">{stats.rejected}</p>
            <p className="text-sm text-gray-600">Rejected</p>
          </CardContent>
        </Card>
      </div>

      {/* Applications Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="all">All ({stats.total})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({stats.pending})</TabsTrigger>
          <TabsTrigger value="reviewing">Reviewing ({stats.reviewing})</TabsTrigger>
          <TabsTrigger value="interview">Interview ({stats.interview})</TabsTrigger>
          <TabsTrigger value="rejected">Rejected ({stats.rejected})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {filterApplicationsByStatus('all').map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          {filterApplicationsByStatus('pending').map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </TabsContent>

        <TabsContent value="reviewing" className="space-y-4">
          {filterApplicationsByStatus('reviewing').map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </TabsContent>

        <TabsContent value="interview" className="space-y-4">
          {filterApplicationsByStatus('interview').map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </TabsContent>

        <TabsContent value="rejected" className="space-y-4">
          {filterApplicationsByStatus('rejected').map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyApplications;
