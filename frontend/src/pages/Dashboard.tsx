import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useRole } from '@/contexts/RoleContext';
import { TrendingUp, Users, Wheat, DollarSign } from 'lucide-react';

const ROLE_DASHBOARDS = {
  SuperAdmin: {
    title: 'System Overview',
    metrics: [
      { label: 'Total Users', value: '1,234', icon: Users, trend: '+12%' },
      { label: 'Active Farms', value: '456', icon: Wheat, trend: '+8%' },
      { label: 'Revenue', value: '$89,234', icon: DollarSign, trend: '+15%' },
      { label: 'Growth Rate', value: '23.5%', icon: TrendingUp, trend: '+5%' },
    ]
  },
  Agronomist: {
    title: 'Farm Insights',
    metrics: [
      { label: 'Monitored Fields', value: '34', icon: Wheat, trend: '+3' },
      { label: 'Crop Health Score', value: '87%', icon: TrendingUp, trend: '+2%' },
      { label: 'Alerts Pending', value: '7', icon: Users, trend: '-2' },
      { label: 'Yield Forecast', value: '125 tons', icon: DollarSign, trend: '+8%' },
    ]
  },
  Analytics: {
    title: 'Data Analytics',
    metrics: [
      { label: 'Data Points', value: '1.2M', icon: TrendingUp, trend: '+24%' },
      { label: 'Reports Generated', value: '89', icon: Users, trend: '+12' },
      { label: 'Predictions', value: '15', icon: Wheat, trend: '+3' },
      { label: 'Accuracy Rate', value: '94.5%', icon: DollarSign, trend: '+1.2%' },
    ]
  },
  Business: {
    title: 'Business Metrics',
    metrics: [
      { label: 'Monthly Revenue', value: '$45,678', icon: DollarSign, trend: '+18%' },
      { label: 'Active Subscriptions', value: '234', icon: Users, trend: '+7%' },
      { label: 'Conversion Rate', value: '12.4%', icon: TrendingUp, trend: '+2.1%' },
      { label: 'Customer LTV', value: '$1,234', icon: Wheat, trend: '+9%' },
    ]
  },
  Development: {
    title: 'System Status',
    metrics: [
      { label: 'API Calls', value: '2.1M', icon: TrendingUp, trend: '+5%' },
      { label: 'System Uptime', value: '99.9%', icon: Users, trend: '0%' },
      { label: 'Open Issues', value: '3', icon: Wheat, trend: '-2' },
      { label: 'Code Coverage', value: '87%', icon: DollarSign, trend: '+3%' },
    ]
  },
  Manager: {
    title: 'Operations Overview',
    metrics: [
      { label: 'Team Members', value: '24', icon: Users, trend: '+2' },
      { label: 'Active Projects', value: '8', icon: Wheat, trend: '+1' },
      { label: 'Completion Rate', value: '89%', icon: TrendingUp, trend: '+4%' },
      { label: 'Budget Utilized', value: '76%', icon: DollarSign, trend: '+12%' },
    ]
  },
  Support: {
    title: 'Support Dashboard',
    metrics: [
      { label: 'Open Tickets', value: '12', icon: Users, trend: '-3' },
      { label: 'Response Time', value: '2.4h', icon: TrendingUp, trend: '-15%' },
      { label: 'Resolution Rate', value: '94%', icon: Wheat, trend: '+2%' },
      { label: 'Customer Satisfaction', value: '4.8/5', icon: DollarSign, trend: '+0.1' },
    ]
  },
};

export default function Dashboard() {
  const { currentRole } = useRole();
  const dashboard = ROLE_DASHBOARDS[currentRole];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">{dashboard.title}</h2>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening in your {currentRole.toLowerCase()} dashboard.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {dashboard.metrics.map((metric, index) => (
          <Card key={index} className="dashboard-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.label}
              </CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-success">{metric.trend}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Role-specific content */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates for your role</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currentRole === 'SuperAdmin' && (
                <>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm">New user registration: 3 farms added</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-warning rounded-full"></div>
                    <span className="text-sm">System maintenance scheduled for tonight</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Analytics report generated successfully</span>
                  </div>
                </>
              )}
              {currentRole === 'Agronomist' && (
                <>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm">Crop health assessment completed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-warning rounded-full"></div>
                    <span className="text-sm">Weather alert: Rain expected tomorrow</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Soil analysis results available</span>
                  </div>
                </>
              )}
              {/* Add more role-specific activities as needed */}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks for your role</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {currentRole === 'SuperAdmin' && (
                <>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors">
                    Add new user account
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors">
                    Generate system report
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors">
                    Configure system settings
                  </button>
                </>
              )}
              {currentRole === 'Agronomist' && (
                <>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors">
                    Create crop assessment
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors">
                    Set weather alerts
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors">
                    Review soil data
                  </button>
                </>
              )}
              {/* Add more role-specific actions as needed */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}