
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';
import { Search, MapPin, Building, Clock, Bookmark, Filter } from 'lucide-react';

const JobListings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [salaryFilter, setSalaryFilter] = useState('');

  // Mock job data - replace with real API calls
  const allJobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $160k',
      description: 'Join our team as a Senior Frontend Developer and work on cutting-edge web applications using React, TypeScript, and modern tooling.',
      requirements: ['5+ years React experience', 'TypeScript', 'Team leadership'],
      postedDays: 2,
      isRemote: false,
      isBookmarked: false
    },
    {
      id: 2,
      title: 'React Developer (Remote)',
      company: 'StartupXYZ',
      location: 'Remote',
      type: 'Full-time',
      salary: '$80k - $120k',
      description: 'Work remotely with our distributed team to build amazing user experiences with React and Node.js.',
      requirements: ['3+ years React', 'Node.js', 'Remote work experience'],
      postedDays: 1,
      isRemote: true,
      isBookmarked: true
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      company: 'BigTech Co.',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$100k - $140k',
      description: 'Build scalable web applications using modern JavaScript frameworks and cloud technologies.',
      requirements: ['Full-stack experience', 'AWS', 'Database design'],
      postedDays: 3,
      isRemote: false,
      isBookmarked: false
    },
    {
      id: 4,
      title: 'Frontend Engineer - Intern',
      company: 'InnovateTech',
      location: 'Seattle, WA',
      type: 'Internship',
      salary: '$25/hour',
      description: 'Perfect opportunity for students to gain hands-on experience in frontend development.',
      requirements: ['JavaScript', 'HTML/CSS', 'Basic React knowledge'],
      postedDays: 1,
      isRemote: false,
      isBookmarked: false
    },
    {
      id: 5,
      title: 'Senior Backend Developer',
      company: 'DataFlow Systems',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$130k - $170k',
      description: 'Lead backend development for high-traffic applications using Python, PostgreSQL, and microservices.',
      requirements: ['Python', 'PostgreSQL', 'Microservices architecture'],
      postedDays: 4,
      isRemote: false,
      isBookmarked: false
    },
    {
      id: 6,
      title: 'UI/UX Developer',
      company: 'DesignFirst Agency',
      location: 'Los Angeles, CA',
      type: 'Contract',
      salary: '$60k - $90k',
      description: 'Create beautiful and functional user interfaces while collaborating closely with design teams.',
      requirements: ['UI/UX design', 'Figma', 'CSS frameworks'],
      postedDays: 2,
      isRemote: false,
      isBookmarked: false
    }
  ];

  const [jobs, setJobs] = useState(allJobs);

  const toggleBookmark = (jobId: number) => {
    setJobs(jobs.map(job => 
      job.id === jobId ? { ...job, isBookmarked: !job.isBookmarked } : job
    ));
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !locationFilter || job.location.includes(locationFilter);
    const matchesType = !typeFilter || job.type === typeFilter;
    const matchesSalary = !salaryFilter || job.salary.includes(salaryFilter);
    
    return matchesSearch && matchesLocation && matchesType && matchesSalary;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Browse Jobs</h1>
          <p className="text-gray-600 mt-2">Discover your next career opportunity</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>{filteredJobs.length} jobs found</span>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search jobs, companies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger>
                <MapPin className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Locations</SelectItem>
                <SelectItem value="Remote">Remote</SelectItem>
                <SelectItem value="San Francisco">San Francisco, CA</SelectItem>
                <SelectItem value="New York">New York, NY</SelectItem>
                <SelectItem value="Seattle">Seattle, WA</SelectItem>
                <SelectItem value="Austin">Austin, TX</SelectItem>
              </SelectContent>
            </Select>

            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger>
                <Building className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Types</SelectItem>
                <SelectItem value="Full-time">Full-time</SelectItem>
                <SelectItem value="Part-time">Part-time</SelectItem>
                <SelectItem value="Contract">Contract</SelectItem>
                <SelectItem value="Internship">Internship</SelectItem>
              </SelectContent>
            </Select>

            <Select value={salaryFilter} onValueChange={setSalaryFilter}>
              <SelectTrigger>
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Salary Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Salaries</SelectItem>
                <SelectItem value="$50k">$50k+</SelectItem>
                <SelectItem value="$80k">$80k+</SelectItem>
                <SelectItem value="$100k">$100k+</SelectItem>
                <SelectItem value="$120k">$120k+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Job Listings */}
      <div className="grid gap-6">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Link to={`/jobs/${job.id}`} className="hover:text-blue-600">
                      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    </Link>
                    {job.isRemote && (
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Remote
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4 text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <Building className="h-4 w-4" />
                      <span>{job.company}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{job.postedDays} days ago</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Badge variant="outline">{job.type}</Badge>
                      <span className="text-blue-600 font-semibold">{job.salary}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleBookmark(job.id)}
                        className={job.isBookmarked ? 'text-blue-600' : 'text-gray-400'}
                      >
                        <Bookmark className={`h-4 w-4 ${job.isBookmarked ? 'fill-current' : ''}`} />
                      </Button>
                      <Link to={`/jobs/${job.id}`}>
                        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.requirements.slice(0, 3).map((req, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {req}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default JobListings;
