import LoginForm from "@/components/LoginForm";
import PortalHero from "@/components/PortalHero";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-portal-gradient-start to-portal-gradient-end">
      <div className="min-h-screen grid lg:grid-cols-2">
        {/* Left Side - Hero Section */}
        <div className="hidden lg:flex">
          <PortalHero />
        </div>

        {/* Right Side - Login Form */}
        <div className="flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md">
            {/* Mobile Hero */}
            <div className="lg:hidden mb-8 text-center">
              <h1 className="text-3xl font-bold text-primary mb-2">
                Intern Management Portal
              </h1>
              <p className="text-muted-foreground">
                Streamline attendance, tasks, and reporting in one place.
              </p>
            </div>
            
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
