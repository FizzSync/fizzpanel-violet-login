import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: Implement Supabase authentication once connected
    // For now, simulate loading
    setTimeout(() => {
      setIsLoading(false);
      // Will redirect based on user role after Supabase integration
    }, 2000);
  };
  const handleAdminLogin = () => {
    navigate('/admin-login');
  };
  return <div className="min-h-screen bg-[#250645] flex items-center justify-center p-4 relative">
      {/* Admin Login Button - Top Right */}
      <div className="absolute top-6 right-6">
        <Button onClick={handleAdminLogin} variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm">
          ADMIN LOGIN
        </Button>
      </div>

      <div className="w-full max-w-md space-y-8">
        {/* Title and Subtitle */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Welcome to FizzPanel
          </h1>
          <h3 className="text-lg text-white/80 leading-relaxed text-center">Your personalized automation control center. Access your smart systems, monitor workflow and manage integrations all in one place.</h3>
        </div>

        {/* Login Card */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl text-center text-gray-900">
              Access FizzPanel
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              Enter your credentials to continue
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  Email Address
                </Label>
                <Input id="email" type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} className="h-12 bg-gray-50 border-gray-200 focus:border-[#5A1AFF] focus:ring-[#5A1AFF]" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">
                  Password
                </Label>
                <Input id="password" type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} className="h-12 bg-gray-50 border-gray-200 focus:border-[#5A1AFF] focus:ring-[#5A1AFF]" required />
              </div>

              <div className="flex items-center space-x-2">
                <input id="remember" type="checkbox" checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} className="rounded border-gray-300 text-[#5A1AFF] focus:ring-[#5A1AFF]" />
                <Label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </Label>
              </div>

              <Button type="submit" className="w-full h-12 bg-[#5A1AFF] hover:bg-[#4A0EDD] text-white font-semibold text-lg transition-all duration-200 transform hover:scale-[1.02]" disabled={isLoading}>
                {isLoading ? <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Signing In...
                  </> : 'Sign In'}
              </Button>
            </form>

            <Separator className="my-4" />
            
            <p className="text-sm text-gray-600 text-center">
              Only accessible to FizzSync clients.
              <br />
              Can't login to FizzPanel?{' '}
              <a href="mailto:support@fizzpanel.com" className="text-[#5A1AFF] hover:underline">
                Contact support@fizzpanel.com
              </a>
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center">
          <p className="text-white/80">
            Powered by{' '}
            <a href="https://fizzsync.com" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-white/90 transition-colors duration-200">
              FizzSync
            </a>
          </p>
        </div>
      </div>
    </div>;
};
export default Index;