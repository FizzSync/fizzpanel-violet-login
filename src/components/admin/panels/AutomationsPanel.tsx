
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Pause } from 'lucide-react';

export const AutomationsPanel = () => {
  const [automations, setAutomations] = useState([
    {
      id: '1',
      name: 'Email Notification System',
      description: 'Sends automated email notifications for system events',
      enabled: true,
      lastRun: '2024-03-15 14:30',
      status: 'active'
    },
    {
      id: '2',
      name: 'Data Backup Process',
      description: 'Automated daily backup of critical system data',
      enabled: true,
      lastRun: '2024-03-15 02:00',
      status: 'completed'
    },
    {
      id: '3',
      name: 'User Activity Monitor',
      description: 'Tracks and logs user activity across the platform',
      enabled: false,
      lastRun: '2024-03-14 23:45',
      status: 'paused'
    },
    {
      id: '4',
      name: 'System Health Check',
      description: 'Regular system performance and health monitoring',
      enabled: true,
      lastRun: '2024-03-15 15:00',
      status: 'active'
    },
  ]);

  const toggleAutomation = (id: string) => {
    setAutomations(prev => 
      prev.map(automation => 
        automation.id === id 
          ? { 
              ...automation, 
              enabled: !automation.enabled,
              status: !automation.enabled ? 'active' : 'paused'
            }
          : automation
      )
    );
  };

  const runAutomation = (id: string) => {
    setAutomations(prev => 
      prev.map(automation => 
        automation.id === id 
          ? { 
              ...automation, 
              lastRun: new Date().toLocaleString(),
              status: 'active'
            }
          : automation
      )
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'paused': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Automation Management</h3>
        <p className="text-gray-600 text-sm mb-6">
          Manage and monitor your automated workflows and processes.
        </p>
      </div>

      <div className="space-y-4">
        {automations.map((automation) => (
          <Card key={automation.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-sm font-medium">
                    {automation.name}
                  </CardTitle>
                  <p className="text-xs text-gray-500 mt-1">
                    {automation.description}
                  </p>
                </div>
                <Badge className={getStatusColor(automation.status)}>
                  {automation.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-500">
                  Last run: {automation.lastRun}
                </div>
                <div className="flex items-center space-x-3">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => runAutomation(automation.id)}
                    disabled={!automation.enabled}
                  >
                    <Play className="h-3 w-3 mr-1" />
                    Run
                  </Button>
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={automation.enabled}
                      onCheckedChange={() => toggleAutomation(automation.id)}
                    />
                    <span className="text-xs text-gray-500">
                      {automation.enabled ? 'Enabled' : 'Disabled'}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
