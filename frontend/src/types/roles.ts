export type UserRole = 
  | 'SuperAdmin' 
  | 'Agronomist' 
  | 'Analytics' 
  | 'Business' 
  | 'Development' 
  | 'Manager' 
  | 'Support';

export interface NavItem {
  name: string;
  path: string;
  icon: string;
  roles: UserRole[];
}

export const ROLE_NAVIGATION: Record<UserRole, string[]> = {
  SuperAdmin: ['home', 'crops', 'subscriptions', 'notifications', 'analytics', 'users', 'settings', 'profile'],
  Agronomist: ['home', 'crops', 'notifications', 'profile'],
  Analytics: ['home', 'analytics', 'notifications', 'settings', 'profile'],
  Business: ['home', 'subscriptions', 'revenue', 'analytics', 'settings', 'profile'],
  Development: ['home', 'settings', 'notifications', 'profile'],
  Manager: ['home', 'crops', 'users', 'notifications', 'settings', 'profile'],
  Support: ['home', 'notifications', 'users', 'settings', 'profile'],
};

export const NAV_ITEMS: NavItem[] = [
  { name: 'Dashboard', path: '/', icon: 'Home', roles: ['SuperAdmin', 'Agronomist', 'Analytics', 'Business', 'Development', 'Manager', 'Support'] },
  { name: 'Crops', path: '/crops', icon: 'Wheat', roles: ['SuperAdmin', 'Agronomist', 'Manager'] },
  { name: 'Subscriptions', path: '/subscriptions', icon: 'CreditCard', roles: ['SuperAdmin', 'Business'] },
  { name: 'Revenue', path: '/revenue', icon: 'DollarSign', roles: ['Business'] },
  { name: 'Notifications', path: '/notifications', icon: 'Bell', roles: ['SuperAdmin', 'Agronomist', 'Analytics', 'Development', 'Manager', 'Support'] },
  { name: 'Analytics', path: '/analytics', icon: 'BarChart3', roles: ['SuperAdmin', 'Analytics', 'Business'] },
  { name: 'Users', path: '/users', icon: 'Users', roles: ['SuperAdmin', 'Manager', 'Support'] },
  { name: 'Settings', path: '/settings', icon: 'Settings', roles: ['SuperAdmin', 'Analytics', 'Business', 'Development', 'Manager', 'Support'] },
  { name: 'Profile', path: '/profile', icon: 'User', roles: ['SuperAdmin', 'Agronomist', 'Analytics', 'Business', 'Development', 'Manager', 'Support'] },
];