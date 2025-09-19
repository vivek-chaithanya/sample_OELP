import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useRole } from '@/contexts/RoleContext';
import { User, Mail, Phone, MapPin, Calendar, Award } from 'lucide-react';

const PROFILE_DATA = {
  SuperAdmin: {
    name: 'Alex Rodriguez',
    email: 'alex.rodriguez@farmdash.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    joinDate: '2023-01-15',
    department: 'Administration',
    bio: 'Experienced system administrator with a passion for agricultural technology.',
    skills: ['System Administration', 'User Management', 'Analytics', 'Security'],
    achievements: ['Platform Launch', 'Security Certification', '1000+ Users Managed']
  },
  Agronomist: {
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@farmdash.com',
    phone: '+1 (555) 234-5678',
    location: 'Iowa City, IA',
    joinDate: '2023-03-20',
    department: 'Agronomy',
    bio: 'Plant scientist specializing in crop health monitoring and sustainable farming practices.',
    skills: ['Crop Science', 'Plant Pathology', 'Soil Analysis', 'Data Interpretation'],
    achievements: ['PhD in Agronomy', 'Published Researcher', 'Sustainable Farming Award']
  },
  Analytics: {
    name: 'Mike Chen',
    email: 'mike.chen@farmdash.com',
    phone: '+1 (555) 345-6789',
    location: 'Austin, TX',
    joinDate: '2023-02-10',
    department: 'Data Analytics',
    bio: 'Data scientist focused on agricultural analytics and predictive modeling.',
    skills: ['Data Science', 'Machine Learning', 'Statistical Analysis', 'Visualization'],
    achievements: ['ML Certification', 'Data Innovation Award', '95% Model Accuracy']
  },
  Business: {
    name: 'Jennifer Park',
    email: 'jennifer.park@farmdash.com',
    phone: '+1 (555) 456-7890',
    location: 'Chicago, IL',
    joinDate: '2023-01-30',
    department: 'Business Development',
    bio: 'Business strategist driving growth and customer success in agricultural technology.',
    skills: ['Business Strategy', 'Customer Success', 'Revenue Growth', 'Market Analysis'],
    achievements: ['MBA', '150% Revenue Growth', 'Customer Success Award']
  },
  Development: {
    name: 'Tom Wilson',
    email: 'tom.wilson@farmdash.com',
    phone: '+1 (555) 567-8901',
    location: 'Seattle, WA',
    joinDate: '2023-02-01',
    department: 'Engineering',
    bio: 'Full-stack developer building scalable solutions for modern agriculture.',
    skills: ['React', 'Node.js', 'Database Design', 'API Development', 'DevOps'],
    achievements: ['System Architecture', 'Zero Downtime Deployments', 'Open Source Contributor']
  },
  Manager: {
    name: 'Lisa Garcia',
    email: 'lisa.garcia@farmdash.com',
    phone: '+1 (555) 678-9012',
    location: 'Denver, CO',
    joinDate: '2023-01-20',
    department: 'Operations',
    bio: 'Operations manager ensuring smooth delivery of agricultural solutions.',
    skills: ['Project Management', 'Team Leadership', 'Process Optimization', 'Quality Assurance'],
    achievements: ['PMP Certification', 'Team Excellence Award', '99% Project Success Rate']
  },
  Support: {
    name: 'David Kim',
    email: 'david.kim@farmdash.com',
    phone: '+1 (555) 789-0123',
    location: 'Portland, OR',
    joinDate: '2023-03-01',
    department: 'Customer Support',
    bio: 'Customer support specialist dedicated to helping farmers succeed with our platform.',
    skills: ['Customer Service', 'Technical Support', 'Problem Solving', 'Documentation'],
    achievements: ['Customer Excellence Award', '4.9/5 Support Rating', '500+ Tickets Resolved']
  }
};

export default function Profile() {
  const { currentRole } = useRole();
  const profile = PROFILE_DATA[currentRole];
  
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Profile</h2>
        <p className="text-muted-foreground">
          Manage your personal information and account details.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <Avatar className="w-24 h-24 mx-auto">
                <AvatarFallback className="text-2xl">
                  {getInitials(profile.name)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold">{profile.name}</h3>
                <p className="text-muted-foreground">{currentRole}</p>
                <Badge variant="outline" className="mt-2">
                  {profile.department}
                </Badge>
              </div>
              <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Edit Profile
              </button>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">{profile.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">{profile.phone}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">{profile.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Joined</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(profile.joinDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm font-medium mb-2">Bio</p>
                <p className="text-sm text-muted-foreground">{profile.bio}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills & Expertise</CardTitle>
              <CardDescription>Your professional skills and areas of expertise</CardDescription>
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

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Achievements
              </CardTitle>
              <CardDescription>Notable accomplishments and certifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {profile.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Activity Summary</CardTitle>
          <CardDescription>Your recent activity and contributions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 rounded-lg bg-primary/10">
              <div className="text-2xl font-bold text-primary">89</div>
              <div className="text-sm text-muted-foreground">Tasks Completed</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-success/10">
              <div className="text-2xl font-bold text-success">245</div>
              <div className="text-sm text-muted-foreground">Hours Logged</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-warning/10">
              <div className="text-2xl font-bold text-warning">12</div>
              <div className="text-sm text-muted-foreground">Projects Active</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}