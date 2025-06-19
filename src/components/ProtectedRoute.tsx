
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'client';
  redirectTo?: string;
}

export const ProtectedRoute = ({ 
  children, 
  requiredRole, 
  redirectTo = '/' 
}: ProtectedRouteProps) => {
  const { user, loading, getUserRole } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;

    if (!user) {
      toast({
        title: "Access Denied",
        description: "Please log in to access this page.",
        variant: "destructive",
      });
      navigate(redirectTo);
      return;
    }

    if (requiredRole) {
      const userRole = getUserRole();
      if (!userRole || userRole !== requiredRole) {
        toast({
          title: "Unauthorized Access",
          description: `${requiredRole} credentials required.`,
          variant: "destructive",
        });
        navigate(requiredRole === 'admin' ? '/admin-login' : '/');
        return;
      }
    }
  }, [user, loading, requiredRole, navigate, redirectTo, getUserRole]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#250645] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!user) return null;

  if (requiredRole && getUserRole() !== requiredRole) return null;

  return <>{children}</>;
};
