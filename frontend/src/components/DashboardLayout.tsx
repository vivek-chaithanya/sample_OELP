import { ReactNode } from 'react';
import { useRole } from '@/contexts/RoleContext';
import Sidebar from './Sidebar';
import RoleSwitcher from './RoleSwitcher';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { currentRole } = useRole();

  return (
    <div className="min-h-screen bg-background">
      <Sidebar userRole={currentRole} />
      
      {/* Main content area */}
      <div className="ml-sidebar transition-all duration-300">
        {/* Header */}
        <header className="h-header bg-card border-b border-border px-6 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">Farm Dashboard</h1>
            <p className="text-sm text-muted-foreground">Manage your agricultural operations</p>
          </div>
          <RoleSwitcher />
        </header>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}