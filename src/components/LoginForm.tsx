import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock authentication logic
    setTimeout(() => {
      if (email === "admin@cloud.neduet.edu.pk" && password === "admin123") {
        toast({
          title: "Login Successful",
          description: "Welcome to the Admin Dashboard!",
        });
        navigate("/admin-dashboard");
      } else if (email === "student@cloud.neduet.edu.pk" && password === "student123") {
        toast({
          title: "Login Successful", 
          description: "Welcome to the Student Dashboard!",
        });
        navigate("/student-dashboard");
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid email or password. Please try again.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome!</h2>
          <p className="text-gray-600 text-sm">
            Sign into CS IT Intern Management Portal
          </p>
          <p className="text-gray-500 text-xs mt-1">
            (Use your @cloud.neduet.edu.pk Google account credentials to sign in.)
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 px-4 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-0 bg-white"
              placeholder=""
              required
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-900">
                Password
              </label>
              <button
                type="button"
                className="text-blue-600 text-sm font-medium hover:text-blue-700"
              >
                Forgot your password?
              </button>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 px-4 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-0 bg-white"
              placeholder=""
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-lg"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            Don't have an account? <button className="text-blue-600 font-medium hover:text-blue-700">Sign up</button>
          </p>
        </div>

        {/* Google Sign In Button */}
        <Button
          type="button"
          variant="outline"
          className="w-full h-12 mt-4 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center space-x-3 bg-white"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span className="font-medium text-gray-700">Continue with Google</span>
        </Button>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-700 mb-3 font-semibold">Demo Accounts</p>
          <div className="space-y-2">
            <div className="text-sm">
              <span className="font-semibold text-blue-600">Admin:</span>{" "}
              <span className="text-gray-700">admin@cloud.neduet.edu.pk/admin123</span>
            </div>
            <div className="text-sm">
              <span className="font-semibold text-blue-600">Student:</span>{" "}
              <span className="text-gray-700">student@cloud.neduet.edu.pk/student123</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;