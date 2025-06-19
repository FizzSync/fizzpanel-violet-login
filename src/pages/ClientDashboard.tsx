
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const ClientDashboard = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <ProtectedRoute requiredRole="client" redirectTo="/">
      <div className="min-h-screen bg-[#250645] p-4">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Client Dashboard</h1>
              <p className="text-white/80">Welcome to your FizzPanel control center</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>System Status</CardTitle>
                <CardDescription>Monitor your connected systems</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-green-600 font-semibold">All Systems Operational</p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Workflow Manager</CardTitle>
                <CardDescription>Manage your automation workflows</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">3 Active Workflows</p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Integrations</CardTitle>
                <CardDescription>Connected services and APIs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">5 Connected Services</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default ClientDashboard;
