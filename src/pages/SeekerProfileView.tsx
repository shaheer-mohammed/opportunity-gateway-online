import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  GraduationCap, 
  Briefcase, 
  Globe, 
  DollarSign,
  Edit,
  Calendar,
  Clock,
  Users,
  Building
} from 'lucide-react';

const SeekerProfileView = () => {
  const navigate = useNavigate();

  // Mock data - replace with actual user data
  const profile = {
    personalInfo: {
      profilePicture: null,
      fullName: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      website: 'https://johndoe.dev',
      bio: 'Passionate full-stack developer with 5+ years of experience building scalable web applications.'
    },
    education: [
      {
        degree: 'Bachelor of Computer Science',
        institution: 'Stanford University',
        startDate: '2018-09',
        endDate: '2022-05',
        description: 'Focused on software engineering and algorithms'
      }
    ],
    workExperience: [
      {
        jobTitle: 'Senior Software Engineer',
        company: 'Tech Corp',
        startDate: '2022-06',
        endDate: '',
        description: 'Led development of microservices architecture'
      }
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'AWS'],
    jobPreferences: {
      desiredJobTitle: 'Senior Full Stack Developer',
      expectedSalary: '$120,000',
      jobType: 'Full-time',
      remoteWork: 'Hybrid',
      availability: 'Immediately'
    }
  };

  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <Button onClick={() => navigate('/profile/edit')} className="flex items-center gap-2">
          <Edit className="h-4 w-4" />
          Edit Profile
        </Button>
      </div>

      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={profile.personalInfo.profilePicture || ''} />
              <AvatarFallback className="text-2xl">
                {profile.personalInfo.fullName?.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-3">
              <h2 className="text-2xl font-semibold">{profile.personalInfo.fullName}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {profile.personalInfo.email}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {profile.personalInfo.phone}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {profile.personalInfo.location}
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  {profile.personalInfo.website}
                </div>
              </div>
              <p className="text-muted-foreground">{profile.personalInfo.bio}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Education */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Education
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {profile.education.map((edu, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  {edu.startDate} - {edu.endDate || 'Present'}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{edu.description}</p>
              {index < profile.education.length - 1 && <Separator />}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Work Experience */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            Work Experience
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {profile.workExperience.map((work, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{work.jobTitle}</h3>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    {work.company}
                  </p>
                </div>
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {work.startDate} - {work.endDate || 'Present'}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{work.description}</p>
              {index < profile.workExperience.length - 1 && <Separator />}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill, index) => (
              <Badge key={index} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Job Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Job Preferences
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-sm text-muted-foreground">Desired Job Title</h4>
              <p>{profile.jobPreferences.desiredJobTitle}</p>
            </div>
            <div>
              <h4 className="font-medium text-sm text-muted-foreground">Expected Salary</h4>
              <p>{profile.jobPreferences.expectedSalary}</p>
            </div>
            <div>
              <h4 className="font-medium text-sm text-muted-foreground">Job Type</h4>
              <p>{profile.jobPreferences.jobType}</p>
            </div>
            <div>
              <h4 className="font-medium text-sm text-muted-foreground">Remote Work</h4>
              <p>{profile.jobPreferences.remoteWork}</p>
            </div>
            <div>
              <h4 className="font-medium text-sm text-muted-foreground">Availability</h4>
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {profile.jobPreferences.availability}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SeekerProfileView;