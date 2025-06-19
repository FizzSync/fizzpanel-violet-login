
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

export const SettingsPanel = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Settings</h3>
        <p className="text-gray-600 text-sm mb-6">
          Manage your admin profile and system preferences.
        </p>
      </div>

      {/* Admin Profile */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Admin Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <label className="text-xs font-medium text-gray-500">Email</label>
            <p className="text-sm">{user?.email}</p>
          </div>
          <div>
            <label className="text-xs font-medium text-gray-500">Role</label>
            <p className="text-sm">Administrator</p>
          </div>
          {user?.user_metadata?.admin_id && (
            <div>
              <label className="text-xs font-medium text-gray-500">Admin ID</label>
              <p className="text-sm">{user.user_metadata.admin_id}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* System Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">System Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Theme</p>
              <p className="text-xs text-gray-500">Currently using dark theme</p>
            </div>
            <Button variant="outline" size="sm">
              Change
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Notifications</p>
              <p className="text-xs text-gray-500">Email alerts enabled</p>
            </div>
            <Button variant="outline" size="sm">
              Configure
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Support */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Support</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full" size="sm">
            Change Password
          </Button>
          <Button variant="outline" className="w-full" size="sm">
            Contact Support
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
