import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';
import { Search, Filter, Eye, Download, Mail, Clock, CheckCircle, XCircle } from 'lucide-react';

const EmployerApplications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock data - replace with real API calls
  const applications = [
    {
      id: 1,
      applicantName: 'John Smith',
      email: 'john.smith@email.com',
      jobTitle: 'Senior Frontend Developer',
      jobId: 1,
      appliedDate: '2024-01-18',
      status: 'pending',
      experience: '5 years',
      resumeUrl: '/resume-john-smith.pdf'
    },
    {
      id: 2,
      applicantName: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      jobTitle: 'Senior Frontend Developer',
      jobId: 1,
      appliedDate: '2024-01-17',
      status: 'reviewed',
      experience: '7 years',
      resumeUrl: '/resume-sarah-johnson.pdf'
    },
    {
      id: 3,
      applicantName: 'Mike Chen',
      email: 'mike.chen@email.com',
      jobTitle: 'Product Manager',
      jobId: 2,
      appliedDate: '2024-01-16',
      status: 'approved',
      experience: '6 years',
      resumeUrl: '/resume-mike-chen.pdf'
    },
    {
      id: 4,
      applicantName: 'Emily Davis',
      email: 'emily.davis@email.com',
      jobTitle: 'UX Designer',
      jobId: 3,
      appliedDate: '2024-01-15',
      status: 'rejected',
      experience: '4 years',
      resumeUrl: '/resume-emily-davis.pdf'
    },
    {
      id: 5,
      applicantName: 'Alex Rodriguez',
      email: 'alex.r@email.com',
      jobTitle: 'Senior Frontend Developer',
      jobId: 1,
      appliedDate: '2024-01-14',
      status: 'pending',
      experience: '8 years',
      resumeUrl: '/resume-alex-rodriguez.pdf'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800"><Clock className="h-3 w-3 mr-1" />Pending</Badge>;
      case 'reviewed':
        return <Badge variant="secondary" className="bg-blue-100 text-blue-800"><Eye className="h-3 w-3 mr-1" />Reviewed</Badge>;
      case 'approved':
        return <Badge variant="secondary" className="bg-green-100 text-green-800"><CheckCircle className="h-3 w-3 mr-1" />Approved</Badge>;
      case 'rejected':
        return <Badge variant="secondary" className="bg-red-100 text-red-800"><XCircle className="h-3 w-3 mr-1" />Rejected</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: applications.length,
    pending: applications.filter(app => app.status === 'pending').length,
    reviewed: applications.filter(app => app.status === 'reviewed').length,
    approved: applications.filter(app => app.status === 'approved').length,
    rejected: applications.filter(app => app.status === 'rejected').length
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Job Applications</h1>
          <p className="text-gray-600 mt-2">Review and manage all applications to your job postings</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              <p className="text-gray-600 text-sm">Total</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-900">{stats.pending}</p>
              <p className="text-yellow-600 text-sm">Pending</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-900">{stats.reviewed}</p>
              <p className="text-blue-600 text-sm">Reviewed</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-900">{stats.approved}</p>
              <p className="text-green-600 text-sm">Approved</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-red-900">{stats.rejected}</p>
              <p className="text-red-600 text-sm">Rejected</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Applications</CardTitle>
          <CardDescription>Filter and search through all job applications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search by name, job title, or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="w-48">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="reviewed">Reviewed</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Applications Table */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Applicant</TableHead>
                  <TableHead>Job Position</TableHead>
                  <TableHead>Applied Date</TableHead>
                  <TableHead>Experience</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredApplications.map((application) => (
                  <TableRow key={application.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium text-gray-900">{application.applicantName}</p>
                        <p className="text-sm text-gray-500">{application.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Link to={`/employer/jobs/${application.jobId}`} className="text-blue-600 hover:text-blue-800 hover:underline">
                        {application.jobTitle}
                      </Link>
                    </TableCell>
                    <TableCell>
                      {new Date(application.appliedDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>{application.experience}</TableCell>
                    <TableCell>{getStatusBadge(application.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" title="View Application">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" title="Download Resume">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" title="Contact Applicant">
                          <Mail className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredApplications.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No applications found matching your criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployerApplications;