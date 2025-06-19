
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

export const UsersPanel = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock user data - in real app, fetch from Supabase
  const users = [
    { 
      id: '1', 
      email: 'admin@fizzpanel.com', 
      role: 'admin', 
      createdAt: '2024-01-15',
      adminId: 'A12345'
    },
    { 
      id: '2', 
      email: 'client1@company.com', 
      role: 'client', 
      createdAt: '2024-02-20' 
    },
    { 
      id: '3', 
      email: 'client2@business.com', 
      role: 'client', 
      createdAt: '2024-03-10' 
    },
  ];

  const filteredUsers = users.filter(user =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">User Management</h3>
        <p className="text-gray-600 text-sm mb-6">
          Manage all users in your FizzPanel system. Users must be manually created in Supabase.
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search users by email or role..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* User List */}
      <div className="space-y-3">
        {filteredUsers.map((user) => (
          <Card key={user.id}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">
                  {user.email}
                </CardTitle>
                <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                  {user.role}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Created: {user.createdAt}</span>
                {user.adminId && <span>ID: {user.adminId}</span>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          No users found matching your search.
        </div>
      )}
    </div>
  );
};
