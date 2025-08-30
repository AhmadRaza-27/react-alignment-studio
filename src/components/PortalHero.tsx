import portalIllustration from "@/assets/portal-illustration.png";

const PortalHero = () => {
  return (
    <div className="flex flex-col justify-center items-start h-full px-8 lg:px-12">
      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
          Intern<br />
          Management<br />
          Portal
        </h1>
        <p className="text-lg text-muted-foreground max-w-md">
          Streamline attendance, tasks, and reporting in one place.
        </p>
      </div>
      
      <div className="w-full max-w-md mx-auto lg:mx-0">
        <img 
          src={portalIllustration} 
          alt="Intern management illustration" 
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default PortalHero;