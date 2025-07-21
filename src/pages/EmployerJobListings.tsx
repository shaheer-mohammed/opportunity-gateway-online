import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Eye, Edit, Trash2, Plus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

const EmployerJobListings = () => {
  const [jobToDelete, setJobToDelete] = useState<number | null>(null);

  // Mock data - replace with real API calls
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      location: 'San Francisco, CA',
      applications: 12,
      status: 'active',
      postedDate: '2024-01-15',
      salary: '$120,000 - $150,000',
      type: 'Full-time'
    },
    {
      id: 2,
      title: 'Product Manager',
      location: 'New York, NY',
      applications: 8,
      status: 'active',
      postedDate: '2024-01-12',
      salary: '$100,000 - $130,000',
      type: 'Full-time'
    },
    {
      id: 3,
      title: 'UX Designer',
      location: 'Remote',
      applications: 15,
      status: 'paused',
      postedDate: '2024-01-10',
      salary: '$80,000 - $100,000',
      type: 'Full-time'
    },
    {
      id: 4,
      title: 'Backend Engineer',
      location: 'Austin, TX',
      applications: 6,
      status: 'active',
      postedDate: '2024-01-08',
      salary: '$110,000 - $140,000',
      type: 'Full-time'
    },
    {
      id: 5,
      title: 'Marketing Specialist',
      location: 'Los Angeles, CA',
      applications: 3,
      status: 'draft',
      postedDate: '2024-01-05',
      salary: '$60,000 - $80,000',
      type: 'Full-time'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'default';
      case 'paused': return 'secondary';
      case 'draft': return 'outline';
      default: return 'secondary';
    }
  };

  const handleDeleteJob = (jobId: number) => {
    // TODO: Replace with actual API call to delete job
    console.log('Deleting job:', jobId);
    setJobToDelete(null);
    // Here you would typically update the jobs state or refetch data
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Job Listings</h1>
          <p className="text-muted-foreground mt-1">Manage all your job postings</p>
        </div>
        <Link to="/employer/post-job">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Post New Job
          </Button>
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search jobs..."
            className="pl-9"
          />
        </div>
        <Button variant="outline">All Status</Button>
      </div>

      {/* Job List */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <Card key={job.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <Badge variant={getStatusColor(job.status)}>
                      {job.status}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span>📍 {job.location}</span>
                    <span>💰 {job.salary}</span>
                    <span>⏰ {job.type}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Posted: {new Date(job.postedDate).toLocaleDateString()}</span>
                    <span>Applications: {job.applications}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Link to={`/employer/jobs/${job.id}`}>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  </Link>
                  
                  <Link to={`/employer/jobs/${job.id}/edit`}>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                  </Link>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-destructive hover:text-destructive"
                    onClick={() => setJobToDelete(job.id)}
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      <AlertDialog open={jobToDelete !== null} onOpenChange={() => setJobToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to delete this job?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the job posting
              and all associated applications.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => jobToDelete && handleDeleteJob(jobToDelete)}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete Job
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default EmployerJobListings;