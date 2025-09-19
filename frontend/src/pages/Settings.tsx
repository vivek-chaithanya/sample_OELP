import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { useRole } from '@/contexts/RoleContext';
import { Settings as SettingsIcon, Bell, Shield, Database, Code, Palette } from 'lucide-react';

export default function Settings() {
  const { currentRole } = useRole();
  
  const isDevelopment = currentRole === 'Development';
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          {isDevelopment 
            ? 'Configure system settings, API endpoints, and development tools.'
            : 'Manage your application preferences and account settings.'
          }
        </p>
      </div>

      {isDevelopment && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              API Configuration
            </CardTitle>
            <CardDescription>Development and API settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium">API Endpoint</label>
                <input 
                  type="text" 
                  className="w-full mt-1 px-3 py-2 border rounded-lg" 
                  defaultValue="https://api.farmdash.com/v1"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Environment</label>
                <select className="w-full mt-1 px-3 py-2 border rounded-lg">
                  <option>Development</option>
                  <option>Staging</option>
                  <option>Production</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Debug Mode</div>
                  <div className="text-sm text-muted-foreground">Enable detailed logging</div>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">API Rate Limiting</div>
                  <div className="text-sm text-muted-foreground">Enforce request limits</div>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Cache Enabled</div>
                  <div className="text-sm text-muted-foreground">Use response caching</div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notifications
          </CardTitle>
          <CardDescription>Configure alert preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Email Notifications</div>
              <div className="text-sm text-muted-foreground">Receive alerts via email</div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Weather Alerts</div>
              <div className="text-sm text-muted-foreground">Critical weather warnings</div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">System Updates</div>
              <div className="text-sm text-muted-foreground">Platform maintenance notices</div>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Marketing Communications</div>
              <div className="text-sm text-muted-foreground">Product updates and tips</div>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5" />
            Appearance
          </CardTitle>
          <CardDescription>Customize your dashboard appearance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium">Theme</label>
            <select className="w-full mt-1 px-3 py-2 border rounded-lg">
              <option>Light</option>
              <option>Dark</option>
              <option>System</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Dashboard Layout</label>
            <select className="w-full mt-1 px-3 py-2 border rounded-lg">
              <option>Compact</option>
              <option>Comfortable</option>
              <option>Spacious</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Show Sidebar Labels</div>
              <div className="text-sm text-muted-foreground">Display text next to icons</div>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {(currentRole === 'SuperAdmin' || currentRole === 'Manager') && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Security
            </CardTitle>
            <CardDescription>Account security and access control</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Two-Factor Authentication</div>
                <div className="text-sm text-muted-foreground">Add extra security to your account</div>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Session Timeout</div>
                <div className="text-sm text-muted-foreground">Auto-logout after inactivity</div>
              </div>
              <select className="px-3 py-1 border rounded-md">
                <option>30 minutes</option>
                <option>1 hour</option>
                <option>4 hours</option>
                <option>Never</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Login Alerts</div>
                <div className="text-sm text-muted-foreground">Notify on new device login</div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="pt-4 border-t">
              <button className="px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors">
                Change Password
              </button>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Data & Privacy
          </CardTitle>
          <CardDescription>Manage your data and privacy settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Data Collection</div>
              <div className="text-sm text-muted-foreground">Allow usage analytics</div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Share Anonymous Data</div>
              <div className="text-sm text-muted-foreground">Help improve our services</div>
            </div>
            <Switch />
          </div>
          <div className="pt-4 border-t">
            <div className="flex gap-2">
              <button className="px-4 py-2 border rounded-lg hover:bg-accent transition-colors">
                Export Data
              </button>
              <button className="px-4 py-2 border border-destructive text-destructive rounded-lg hover:bg-destructive/10 transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}