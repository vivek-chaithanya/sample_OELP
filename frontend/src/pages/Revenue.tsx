import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, TrendingUp, PieChart, BarChart3 } from 'lucide-react';

const REVENUE_DATA = {
  monthly: {
    current: 45678,
    previous: 38234,
    growth: 19.5
  },
  quarterly: {
    current: 134567,
    previous: 123456,
    growth: 9.0
  },
  yearly: {
    current: 523456,
    previous: 487234,
    growth: 7.4
  }
};

const REVENUE_SOURCES = [
  { name: 'Professional Plans', amount: 25890, percentage: 56.7, color: 'bg-primary' },
  { name: 'Enterprise Plans', amount: 15234, percentage: 33.4, color: 'bg-success' },
  { name: 'Basic Plans', amount: 3456, percentage: 7.6, color: 'bg-warning' },
  { name: 'Add-ons', amount: 1098, percentage: 2.4, color: 'bg-muted' }
];

const MONTHLY_TRENDS = [
  { month: 'Jan', revenue: 38234 },
  { month: 'Feb', revenue: 41567 },
  { month: 'Mar', revenue: 39876 },
  { month: 'Apr', revenue: 43210 },
  { month: 'May', revenue: 45678 },
  { month: 'Jun', revenue: 47890 }
];

export default function Revenue() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Revenue Analytics</h2>
        <p className="text-muted-foreground">
          Track revenue performance, growth trends, and financial metrics.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${REVENUE_DATA.monthly.current.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+{REVENUE_DATA.monthly.growth}%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Quarterly Revenue</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${REVENUE_DATA.quarterly.current.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+{REVENUE_DATA.quarterly.growth}%</span> from last quarter
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Annual Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${REVENUE_DATA.yearly.current.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+{REVENUE_DATA.yearly.growth}%</span> from last year
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Deal Size</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$287</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+12%</span> increase
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenue by Source</CardTitle>
            <CardDescription>Breakdown of revenue streams</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {REVENUE_SOURCES.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${source.color}`}></div>
                    <span className="text-sm font-medium">{source.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold">${source.amount.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">{source.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Trends</CardTitle>
            <CardDescription>Revenue performance over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {MONTHLY_TRENDS.map((trend, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{trend.month}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${(trend.revenue / 50000) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-bold w-16 text-right">
                      ${trend.revenue.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Revenue Insights</CardTitle>
          <CardDescription>Key financial metrics and recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg bg-success/10 border border-success/20">
              <div className="font-medium text-sm text-success-foreground">Strong Growth</div>
              <div className="text-xs text-muted-foreground mt-1">
                Revenue is trending upward with consistent month-over-month growth
              </div>
            </div>
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <div className="font-medium text-sm">Top Performer</div>
              <div className="text-xs text-muted-foreground mt-1">
                Professional plans account for 56.7% of total revenue
              </div>
            </div>
            <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
              <div className="font-medium text-sm">Opportunity</div>
              <div className="text-xs text-muted-foreground mt-1">
                Basic plan conversion rate could be improved
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}