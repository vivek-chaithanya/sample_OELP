import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Users as UsersIcon, UserPlus, Shield, Mail } from 'lucide-react';
import { useRole } from '@/contexts/RoleContext';

const USER_DATA = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@greenvalley.com',
    role: 'Farm Manager',
    company: 'Green Valley Farm',
    status: 'Active',
    lastLogin: '2024-03-15T10:30:00Z',
    permissions: ['Read', 'Write', 'Analytics']
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.j@harvesthill.com',
    role: 'Agronomist',
    company: 'Harvest Hills Agriculture',
    status: 'Active',
    lastLogin: '2024-03-14T15:45:00Z',
    permissions: ['Read', 'Crop Management']
  },
  {
    id: 3,
    name: 'Mike Chen',
    email: 'mike.chen@sunrisecorp.com',
    role: 'Data Analyst',
    company: 'Sunrise Crops Inc.',
    status: 'Pending',
    lastLogin: null,
    permissions: ['Read', 'Analytics']
  },
  {
    id: 4,
    name: 'Emma Davis',
    email: 'emma.davis@goldenfields.coop',
    role: 'Support Representative',
    company: 'Golden Fields Cooperative',
    status: 'Inactive',
    lastLogin: '2024-02-28T09:15:00Z',
    permissions: ['Read', 'Support']
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Active': return 'bg-success text-success-foreground';
    case 'Pending': return 'bg-warning text-warning-foreground';
    case 'Inactive': return 'bg-muted text-muted-foreground';
    default: return 'bg-muted text-muted-foreground';
  }
};

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
};

export default function Users() {
  const { currentRole } = useRole();
  const isSupport = currentRole === 'Support';
  const activeUsers = USER_DATA.filter(u => u.status === 'Active').length;
  const pendingUsers = USER_DATA.filter(u => u.status === 'Pending').length;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          {isSupport ? 'Support Tickets & Users' : 'User Management'}
        </h2>
        <p className="text-muted-foreground">
          {isSupport 
            ? 'Manage customer support requests and user assistance.'
            : 'Manage user accounts, permissions, and access control.'
          }
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {isSupport ? 'Active Tickets' : 'Total Users'}
            </CardTitle>
            <UsersIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{isSupport ? '12' : USER_DATA.length}</div>
            <p className="text-xs text-muted-foreground">
              <span className={isSupport ? "text-warning" : "text-success"}>
                {isSupport ? '-3' : '+2'}
              </span> from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {isSupport ? 'Response Time' : 'Active Users'}
            </CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{isSupport ? '2.4h' : activeUsers}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">
                {isSupport ? '-15%' : '+1'}
              </span> {isSupport ? 'improvement' : 'this month'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {isSupport ? 'Resolution Rate' : 'Pending'}
            </CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{isSupport ? '94%' : pendingUsers}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">
                {isSupport ? '+2%' : '0'}
              </span> {isSupport ? 'this month' : 'awaiting approval'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {isSupport ? 'Satisfaction' : 'Roles'}
            </CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{isSupport ? '4.8/5' : '6'}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">
                {isSupport ? '+0.1' : '+1'}
              </span> {isSupport ? 'rating' : 'role types'}
            </p>
          </CardContent>
        </Card>
      </div>

      {isSupport && (
        <Card>
          <CardHeader>
            <CardTitle>Recent Support Tickets</CardTitle>
            <CardDescription>Latest customer support requests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg border">
                <div className="w-2 h-2 bg-destructive rounded-full"></div>
                <div className="flex-1">
                  <div className="font-medium">Unable to access crop data</div>
                  <div className="text-sm text-muted-foreground">Green Valley Farm • 2 hours ago</div>
                </div>
                <Badge variant="outline">High Priority</Badge>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg border">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <div className="flex-1">
                  <div className="font-medium">Billing question about subscription</div>
                  <div className="text-sm text-muted-foreground">Harvest Hills • 4 hours ago</div>
                </div>
                <Badge variant="outline">Medium</Badge>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg border">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <div className="flex-1">
                  <div className="font-medium">Feature request: Export functionality</div>
                  <div className="text-sm text-muted-foreground">Sunrise Crops • 1 day ago</div>
                </div>
                <Badge variant="outline">Low</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            {isSupport ? 'Customer Accounts' : 'User Directory'}
          </h3>
          {currentRole === 'SuperAdmin' && (
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Add New User
            </button>
          )}
        </div>
        
        <div className="grid gap-4">
          {USER_DATA.map((user) => (
            <Card key={user.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{user.name}</h3>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                      <p className="text-sm text-muted-foreground">{user.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <Badge className={getStatusColor(user.status)}>
                        {user.status}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">
                        {user.lastLogin 
                          ? `Last login: ${new Date(user.lastLogin).toLocaleDateString()}`
                          : 'Never logged in'
                        }
                      </p>
                    </div>
                    
                    {currentRole === 'SuperAdmin' && (
                      <div className="flex gap-2">
                        <button className="px-3 py-1 text-sm rounded-md border hover:bg-accent transition-colors">
                          Edit
                        </button>
                        <button className="px-3 py-1 text-sm rounded-md border hover:bg-accent transition-colors">
                          {user.status === 'Active' ? 'Deactivate' : 'Activate'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Role</p>
                      <p className="text-sm text-muted-foreground">{user.role}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Permissions</p>
                      <div className="flex gap-1 mt-1">
                        {user.permissions.map((permission, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {permission}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}