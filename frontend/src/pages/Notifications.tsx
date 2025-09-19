import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell, AlertTriangle, Info, CheckCircle } from 'lucide-react';

const NOTIFICATIONS = [
  {
    id: 1,
    type: 'alert',
    title: 'Weather Warning',
    message: 'Heavy rain expected in the next 24 hours. Consider postponing field operations.',
    time: '2 hours ago',
    priority: 'high',
    read: false
  },
  {
    id: 2,
    type: 'info',
    title: 'Irrigation Complete',
    message: 'Automated irrigation system completed watering cycle for Corn Field A.',
    time: '4 hours ago',
    priority: 'medium',
    read: true
  },
  {
    id: 3,
    type: 'success',
    title: 'Harvest Scheduled',
    message: 'Wheat Field B harvest has been scheduled for next week.',
    time: '1 day ago',
    priority: 'low',
    read: true
  },
  {
    id: 4,
    type: 'alert',
    title: 'Pest Detection',
    message: 'Potential pest activity detected in Soybean Field C. Immediate attention required.',
    time: '2 days ago',
    priority: 'high',
    read: false
  },
  {
    id: 5,
    type: 'info',
    title: 'System Update',
    message: 'Farm management system has been updated to version 2.1.0.',
    time: '3 days ago',
    priority: 'low',
    read: true
  }
];

const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'alert': return AlertTriangle;
    case 'success': return CheckCircle;
    case 'info': 
    default: return Info;
  }
};

const getNotificationColor = (type: string, priority: string) => {
  if (type === 'alert' && priority === 'high') return 'text-destructive';
  if (type === 'success') return 'text-success';
  return 'text-muted-foreground';
};

const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case 'high': return 'bg-destructive text-destructive-foreground';
    case 'medium': return 'bg-warning text-warning-foreground';
    case 'low': return 'bg-muted text-muted-foreground';
    default: return 'bg-muted text-muted-foreground';
  }
};

export default function Notifications() {
  const unreadCount = NOTIFICATIONS.filter(n => !n.read).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Notifications</h2>
          <p className="text-muted-foreground">
            Stay updated with alerts, system messages, and important updates.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          <Badge variant="secondary">{unreadCount} unread</Badge>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
            <CardDescription>Manage your notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <button className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors">
              Mark all as read
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors">
              Configure alerts
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors">
              Create new notification
            </button>
          </CardContent>
        </Card>

        <div className="md:col-span-2 space-y-4">
          {NOTIFICATIONS.map((notification) => {
            const Icon = getNotificationIcon(notification.type);
            const iconColor = getNotificationColor(notification.type, notification.priority);
            
            return (
              <Card key={notification.id} className={`${!notification.read ? 'border-primary/50 bg-primary/5' : ''}`}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Icon className={`h-5 w-5 mt-0.5 ${iconColor}`} />
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <h3 className={`font-medium ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {notification.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <Badge className={getPriorityBadge(notification.priority)}>
                            {notification.priority}
                          </Badge>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {notification.message}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}