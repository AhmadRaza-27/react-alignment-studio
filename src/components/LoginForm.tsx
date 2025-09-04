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
    <div className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/20">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-primary mb-2">Welcome!</h2>
        <p className="text-muted-foreground text-sm">Sign into C&T Intern Management Portal</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-foreground">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 bg-portal-light border-0 rounded-lg placeholder:text-muted-foreground"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium text-foreground">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 bg-portal-light border-0 rounded-lg placeholder:text-muted-foreground"
            placeholder="Enter your password"
            required
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors"
        >
          {isLoading ? "Signing In..." : "Sign In"}
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <a href="#" className="text-primary hover:underline font-medium">
            Sign up
          </a>
        </p>
      </form>

      <div className="mt-6">
        <Button 
          variant="outline" 
          className="w-full h-12 bg-slate-700 hover:bg-slate-600 text-white border-slate-600 rounded-lg flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Sign up with Google
        </Button>
      </div>

      <div className="mt-8 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground mb-3 font-medium">Demo Accounts</p>
        <div className="space-y-2">
          <div className="text-xs">
            <span className="font-medium text-primary">Admin:</span>{" "}
            <span className="text-muted-foreground">admin@cloud.neduet.edu.pk/admin123</span>
          </div>
          <div className="text-xs">
            <span className="font-medium text-primary">Student:</span>{" "}
            <span className="text-muted-foreground">student@cloud.neduet.edu.pk/student123</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;