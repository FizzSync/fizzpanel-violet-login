
import { useState } from 'react';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { SlideInPanel } from '@/components/admin/SlideInPanel';
import { AnalyticsPanel } from '@/components/admin/panels/AnalyticsPanel';
import { UsersPanel } from '@/components/admin/panels/UsersPanel';
import { AutomationsPanel } from '@/components/admin/panels/AutomationsPanel';
import { SettingsPanel } from '@/components/admin/panels/SettingsPanel';
import { ProtectedRoute } from '@/components/ProtectedRoute';

const AdminDashboard = () => {
  const [activePanel, setActivePanel] = useState<string | null>(null);

  const renderPanelContent = () => {
    switch (activePanel) {
      case 'analytics':
        return <AnalyticsPanel />;
      case 'users':
        return <UsersPanel />;
      case 'automations':
        return <AutomationsPanel />;
      case 'settings':
        return <SettingsPanel />;
      default:
        return null;
    }
  };

  const getPanelTitle = () => {
    switch (activePanel) {
      case 'analytics':
        return 'Analytics';
      case 'users':
        return 'Users';
      case 'automations':
        return 'Automations';
      case 'settings':
        return 'Settings';
      default:
        return '';
    }
  };

  return (
    <ProtectedRoute requiredRole="admin" redirectTo="/admin-login">
      <div className="min-h-screen bg-[#250645] flex">
        {/* Sidebar */}
        <AdminSidebar activePanel={activePanel} setActivePanel={setActivePanel} />

        {/* Main Content */}
        <div className="flex-1 ml-64 p-8">
          <div className="max-w-4xl">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome back, Admin!
              </h1>
              <p className="text-white/80">
                Use the sidebar to manage your control panel.
              </p>
            </div>

            {/* Welcome Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-white font-semibold mb-2">System Status</h3>
                <p className="text-green-400 font-medium">All Systems Operational</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-white font-semibold mb-2">Active Users</h3>
                <p className="text-white/80">42 users online</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-white font-semibold mb-2">Automations</h3>
                <p className="text-white/80">3 running workflows</p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide-in Panel */}
        <SlideInPanel
          isOpen={activePanel !== null}
          onClose={() => setActivePanel(null)}
          title={getPanelTitle()}
        >
          {renderPanelContent()}
        </SlideInPanel>
      </div>
    </ProtectedRoute>
  );
};

export default AdminDashboard;
