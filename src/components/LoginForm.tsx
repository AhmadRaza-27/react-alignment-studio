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
          description: "Welcome Student! (Dashboard coming soon)",
        });
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