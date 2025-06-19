
import { Button } from '@/components/ui/button';
import { BarChart3, Users, Settings, Zap, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

interface AdminSidebarProps {
  activePanel: string | null;
  setActivePanel: (panel: string | null) => void;
}

export const AdminSidebar = ({ activePanel, setActivePanel }: AdminSidebarProps) => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/admin-login');
  };

  const menuItems = [
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'automations', label: 'Automations', icon: Zap },
  ];

  return (
    <div className="w-64 bg-[#1a0b2e] h-screen fixed left-0 top-0 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <h1 className="text-xl font-bold text-white">FizzPanel Admin</h1>
      </div>

      {/* Menu Items */}
      <div className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activePanel === item.id ? "secondary" : "ghost"}
              className={`w-full justify-start text-left ${
                activePanel === item.id 
                  ? 'bg-[#5A1AFF] text-white hover:bg-[#4A0EDD]' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setActivePanel(activePanel === item.id ? null : item.id)}
            >
              <Icon className="mr-3 h-4 w-4" />
              {item.label}
            </Button>
          );
        })}
      </div>

      {/* Bottom Section */}
      <div className="p-4 border-t border-white/10 space-y-2">
        <Button
          variant="ghost"
          className={`w-full justify-start text-left ${
            activePanel === 'settings' 
              ? 'bg-[#5A1AFF] text-white hover:bg-[#4A0EDD]' 
              : 'text-white/80 hover:text-white hover:bg-white/10'
          }`}
          onClick={() => setActivePanel(activePanel === 'settings' ? null : 'settings')}
        >
          <Settings className="mr-3 h-4 w-4" />
          Settings
        </Button>
        
        <Button
          variant="ghost"
          className="w-full justify-start text-left text-red-300 hover:text-red-200 hover:bg-red-500/10"
          onClick={handleLogout}
        >
          <LogOut className="mr-3 h-4 w-4" />
          Log Out
        </Button>
      </div>
    </div>
  );
};
