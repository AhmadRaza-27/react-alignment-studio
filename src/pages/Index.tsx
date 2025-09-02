import LoginForm from "@/components/LoginForm";
import PortalHero from "@/components/PortalHero";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-portal-gradient-start to-portal-gradient-end relative overflow-hidden">
      {/* Blue wave pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute bottom-0 left-0 w-full h-64" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="hsl(var(--primary))"/>
        </svg>
        <svg className="absolute bottom-16 left-0 w-full h-48" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,144C672,128,768,128,864,144C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="hsl(var(--primary))" fillOpacity="0.5"/>
        </svg>
      </div>
      <div className="min-h-screen grid lg:grid-cols-2 relative z-10">
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
