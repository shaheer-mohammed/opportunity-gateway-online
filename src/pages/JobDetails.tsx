
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MapPin, Calendar, DollarSign, Building, Users, Clock } from 'lucide-react';

const JobDetails = () => {
  const { id } = useParams();

  // Mock job data - replace with real API call
  const job = {
    id: parseInt(id || '1'),
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    salary: '$120,000 - $150,000',
    type: 'Full-time',
    experience: '5+ years',
    postedDate: '2024-01-15',
    description: `We are looking for a Senior Frontend Developer to join our dynamic team. The ideal candidate will have extensive experience with React, TypeScript, and modern frontend technologies.

Key Responsibilities:
• Develop and maintain high-quality frontend applications
• Collaborate with design and backend teams
• Implement responsive and accessible user interfaces
• Optimize applications for maximum speed and scalability
• Mentor junior developers and contribute to code reviews

What We Offer:
• Competitive salary and equity package
• Comprehensive health benefits
• Flexible working arrangements
• Professional development opportunities
• Modern tech stack and tools`,
    requirements: [
      '5+ years of experience with React and TypeScript',
      'Strong understanding of modern CSS and responsive design',
      'Experience with state management libraries (Redux, Zustand)',
      'Knowledge of testing frameworks (Jest, React Testing Library)',
      'Familiarity with build tools and CI/CD pipelines',
      'Excellent communication and collaboration skills'
    ],
    benefits: [
      'Health, dental, and vision insurance',
      'Flexible PTO policy',
      'Remote work options',
      '$3,000 annual learning budget',
      'Stock options',
      'Gym membership reimbursement'
    ]
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Job Header */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <CardTitle className="text-2xl">{job.title}</CardTitle>
              <div className="flex items-center space-x-2 text-gray-600">
                <Building className="h-4 w-4" />
                <span className="font-medium">{job.company}</span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Posted {new Date(job.postedDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              Apply Now
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{job.type}</span>
            </Badge>
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Users className="h-3 w-3" />
              <span>{job.experience}</span>
            </Badge>
            <Badge variant="secondary" className="flex items-center space-x-1">
              <DollarSign className="h-3 w-3" />
              <span>{job.salary}</span>
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Job Description */}
      <Card>
        <CardHeader>
          <CardTitle>Job Description</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {job.description}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Requirements */}
      <Card>
        <CardHeader>
          <CardTitle>Requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {job.requirements.map((requirement, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">{requirement}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Benefits */}
      <Card>
        <CardHeader>
          <CardTitle>Benefits & Perks</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {job.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Apply Section */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Ready to Apply?</h3>
            <p className="text-gray-600">Join our team and help us build amazing products!</p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              Apply for this Position
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobDetails;
