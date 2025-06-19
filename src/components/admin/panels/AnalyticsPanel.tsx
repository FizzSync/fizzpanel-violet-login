
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const AnalyticsPanel = () => {
  const stats = [
    { title: 'Total Users', value: '127', description: 'Active FizzPanel users' },
    { title: 'System Health', value: 'Excellent', description: 'Overall system status', color: 'text-green-600' },
    { title: 'Active Sessions', value: '42', description: 'Current user sessions' },
    { title: 'Server Load', value: '65%', description: 'Current server utilization', color: 'text-yellow-600' },
    { title: 'Automations Run', value: '1,234', description: 'Total automations executed today' },
    { title: 'Uptime', value: '99.9%', description: 'System uptime this month', color: 'text-green-600' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">System Analytics</h3>
        <p className="text-gray-600 text-sm mb-6">
          Real-time overview of your FizzPanel system performance and usage statistics.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-gray-50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">
                {stat.title}
              </CardTitle>
              <CardDescription className="text-xs">
                {stat.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className={`text-2xl font-bold ${stat.color || 'text-[#5A1AFF]'}`}>
                {stat.value}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
