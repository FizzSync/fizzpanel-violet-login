
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AdminDashboard = () => {
  const handleLogout = () => {
    // TODO: Implement Supabase logout once connected
    console.log('Logging out...');
  };

  return (
    <div className="min-h-screen bg-[#250645] p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-white/80">Administrative control center for FizzPanel</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            Logout
          </Button>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Total Users</CardTitle>
              <CardDescription>Active FizzPanel users</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-[#5A1AFF]">127</p>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>System Health</CardTitle>
              <CardDescription>Overall system status</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-green-600 font-semibold">Excellent</p>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Active Sessions</CardTitle>
              <CardDescription>Current user sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-[#5A1AFF]">42</p>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Server Load</CardTitle>
              <CardDescription>Current server utilization</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-yellow-600 font-semibold">65%</p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Admin Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage client accounts and permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="bg-[#5A1AFF] hover:bg-[#4A0EDD] text-white">
                Manage Users
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>System Logs</CardTitle>
              <CardDescription>View system activity and error logs</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="bg-[#5A1AFF] hover:bg-[#4A0EDD] text-white">
                View Logs
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
