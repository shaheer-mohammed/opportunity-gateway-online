
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Bell, User, Calendar, Trash2, Check, X, Clock } from 'lucide-react';

interface Application {
  id: number;
  jobTitle: string;
  applicantName: string;
  appliedDate: string;
  status: 'pending' | 'scheduled' | 'approved' | 'rejected';
  email: string;
  experience: string;
}

const ApplicationNotifications = () => {
  const { toast } = useToast();
  
  // Mock data for applications
  const [applications, setApplications] = useState<Application[]>([
    {
      id: 1,
      jobTitle: 'Senior Frontend Developer',
      applicantName: 'John Smith',
      appliedDate: '2024-01-18',
      status: 'pending',
      email: 'john.smith@email.com',
      experience: '5+ years'
    },
    {
      id: 2,
      jobTitle: 'Product Manager',
      applicantName: 'Sarah Johnson',
      appliedDate: '2024-01-17',
      status: 'pending',
      email: 'sarah.johnson@email.com',
      experience: '3+ years'
    },
    {
      id: 3,
      jobTitle: 'UX Designer',
      applicantName: 'Mike Davis',
      appliedDate: '2024-01-16',
      status: 'scheduled',
      email: 'mike.davis@email.com',
      experience: '4+ years'
    }
  ]);

  const handleApprove = (applicationId: number) => {
    setApplications(prev => 
      prev.map(app => 
        app.id === applicationId 
          ? { ...app, status: 'approved' as const }
          : app
      )
    );
    toast({
      title: "Application Approved",
      description: "The application has been approved successfully.",
    });
  };

  const handleReject = (applicationId: number) => {
    setApplications(prev => 
      prev.map(app => 
        app.id === applicationId 
          ? { ...app, status: 'rejected' as const }
          : app
      )
    );
    toast({
      title: "Application Rejected",
      description: "The application has been rejected.",
      variant: "destructive"
    });
  };

  const handleSchedule = (applicationId: number) => {
    setApplications(prev => 
      prev.map(app => 
        app.id === applicationId 
          ? { ...app, status: 'scheduled' as const }
          : app
      )
    );
    toast({
      title: "Interview Scheduled",
      description: "Interview has been scheduled for this applicant.",
    });
  };

  const handleRemove = (applicationId: number) => {
    setApplications(prev => prev.filter(app => app.id !== applicationId));
    toast({
      title: "Application Removed",
      description: "The application has been removed from the list.",
    });
  };

  const getStatusBadge = (status: Application['status']) => {
    const variants = {
      pending: { variant: 'secondary' as const, text: 'Pending', icon: Clock },
      scheduled: { variant: 'default' as const, text: 'Scheduled', icon: Calendar },
      approved: { variant: 'default' as const, text: 'Approved', icon: Check },
      rejected: { variant: 'destructive' as const, text: 'Rejected', icon: X }
    };
    
    const config = variants[status];
    const IconComponent = config.icon;
    
    return (
      <Badge variant={config.variant} className="flex items-center gap-1">
        <IconComponent className="h-3 w-3" />
        {config.text}
      </Badge>
    );
  };

  const pendingCount = applications.filter(app => app.status === 'pending').length;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Job Applications
          </CardTitle>
          {pendingCount > 0 && (
            <Badge variant="destructive" className="animate-pulse">
              {pendingCount} New
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {applications.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No applications yet</p>
          ) : (
            applications.map((application) => (
              <div
                key={application.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{application.applicantName}</h4>
                      <p className="text-sm text-gray-600">{application.email}</p>
                    </div>
                  </div>
                  <div className="ml-13">
                    <p className="text-sm font-medium text-gray-900">Applied for: {application.jobTitle}</p>
                    <p className="text-xs text-gray-500">Experience: {application.experience}</p>
                    <p className="text-xs text-gray-500">Applied on: {new Date(application.appliedDate).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  {getStatusBadge(application.status)}
                  
                  <div className="flex items-center space-x-2">
                    {application.status === 'pending' && (
                      <>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleApprove(application.id)}
                          className="text-green-600 hover:text-green-700 hover:bg-green-50"
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleSchedule(application.id)}
                          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                        >
                          <Calendar className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleReject(application.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemove(application.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicationNotifications;
