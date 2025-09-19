import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Calendar, Users, TrendingUp } from 'lucide-react';

const SUBSCRIPTION_DATA = [
  {
    id: 1,
    customerName: 'Green Valley Farm',
    plan: 'Professional',
    status: 'Active',
    amount: '$299/month',
    startDate: '2024-01-15',
    renewalDate: '2024-07-15',
    features: ['Advanced Analytics', 'Weather Integration', 'Pest Monitoring']
  },
  {
    id: 2,
    customerName: 'Harvest Hills Agriculture',
    plan: 'Enterprise',
    status: 'Active',
    amount: '$599/month',
    startDate: '2023-11-20',
    renewalDate: '2024-11-20',
    features: ['All Professional Features', 'Custom Reports', 'Priority Support', 'API Access']
  },
  {
    id: 3,
    customerName: 'Sunrise Crops Inc.',
    plan: 'Basic',
    status: 'Pending',
    amount: '$99/month',
    startDate: '2024-03-01',
    renewalDate: '2024-09-01',
    features: ['Basic Monitoring', 'Simple Reports', 'Email Support']
  },
  {
    id: 4,
    customerName: 'Golden Fields Cooperative',
    plan: 'Professional',
    status: 'Expired',
    amount: '$299/month',
    startDate: '2023-06-10',
    renewalDate: '2024-02-10',
    features: ['Advanced Analytics', 'Weather Integration', 'Pest Monitoring']
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Active': return 'bg-success text-success-foreground';
    case 'Pending': return 'bg-warning text-warning-foreground';
    case 'Expired': return 'bg-destructive text-destructive-foreground';
    default: return 'bg-muted text-muted-foreground';
  }
};

const getPlanColor = (plan: string) => {
  switch (plan) {
    case 'Enterprise': return 'bg-primary text-primary-foreground';
    case 'Professional': return 'bg-accent text-accent-foreground';
    case 'Basic': return 'bg-muted text-muted-foreground';
    default: return 'bg-muted text-muted-foreground';
  }
};

export default function Subscriptions() {
  const activeSubscriptions = SUBSCRIPTION_DATA.filter(s => s.status === 'Active').length;
  const pendingSubscriptions = SUBSCRIPTION_DATA.filter(s => s.status === 'Pending').length;
  const totalRevenue = SUBSCRIPTION_DATA
    .filter(s => s.status === 'Active')
    .reduce((sum, s) => sum + parseInt(s.amount.replace(/[^0-9]/g, '')), 0);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Subscription Management</h2>
        <p className="text-muted-foreground">
          Monitor and manage customer subscriptions and billing.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeSubscriptions}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+2</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingSubscriptions}</div>
            <p className="text-xs text-muted-foreground">
              Awaiting activation
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+15%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.5%</div>
            <p className="text-xs text-muted-foreground">
              Monthly growth
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Subscription Details</h3>
        <div className="grid gap-4">
          {SUBSCRIPTION_DATA.map((subscription) => (
            <Card key={subscription.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-lg">{subscription.customerName}</h3>
                      <Badge className={getPlanColor(subscription.plan)}>
                        {subscription.plan}
                      </Badge>
                      <Badge className={getStatusColor(subscription.status)}>
                        {subscription.status}
                      </Badge>
                    </div>
                    
                    <div className="grid gap-2 md:grid-cols-3">
                      <div>
                        <p className="text-sm text-muted-foreground">Amount</p>
                        <p className="font-medium">{subscription.amount}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Start Date</p>
                        <p className="font-medium">{new Date(subscription.startDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Renewal Date</p>
                        <p className="font-medium">{new Date(subscription.renewalDate).toLocaleDateString()}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Features</p>
                      <div className="flex flex-wrap gap-2">
                        {subscription.features.map((feature, index) => (
                          <Badge key={index} variant="outline">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 ml-4">
                    <button className="px-3 py-1 text-sm rounded-md border hover:bg-accent transition-colors">
                      Edit
                    </button>
                    <button className="px-3 py-1 text-sm rounded-md border hover:bg-accent transition-colors">
                      View Details
                    </button>
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