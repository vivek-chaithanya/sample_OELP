import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, Home, Wheat, CreditCard, DollarSign, Bell, BarChart3, Users, Settings, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { UserRole, NAV_ITEMS } from '@/types/roles';

const ICON_MAP = {
  Home,
  Wheat,
  CreditCard,
  DollarSign,
  Bell,
  BarChart3,
  Users,
  Settings,
  User,
};

interface SidebarProps {
  userRole: UserRole;
}

export default function Sidebar({ userRole }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const filteredNavItems = NAV_ITEMS.filter(item => 
    item.roles.includes(userRole)
  );

  return (
    <div className={cn(
      "fixed left-0 top-0 h-full bg-sidebar border-r border-sidebar-border sidebar-transition z-50",
      isCollapsed ? "w-sidebar-collapsed" : "w-sidebar"
    )}>
      {/* Header with toggle */}
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!isCollapsed && (
          <div className="font-semibold text-sidebar-foreground">
            FarmDash
          </div>
        )}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground transition-colors"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {filteredNavItems.map((item) => {
          const Icon = ICON_MAP[item.icon as keyof typeof ICON_MAP];
          const isActive = location.pathname === item.path;
          
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                "nav-item",
                isActive && "active",
                isCollapsed && "justify-center"
              )}
            >
              <Icon size={20} />
              {!isCollapsed && (
                <span className="font-medium">{item.name}</span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Role indicator */}
      {!isCollapsed && (
        <div className="p-4 border-t border-sidebar-border">
          <div className="text-xs text-sidebar-foreground/60 uppercase tracking-wide">
            {userRole}
          </div>
        </div>
      )}
    </div>
  );
}