import LoginForm from "@/components/LoginForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-blue-200/30 rounded-lg rotate-12"></div>
        <div className="absolute top-40 left-32 w-8 h-8 bg-blue-300/40 rounded"></div>
        <div className="absolute top-60 left-16 w-12 h-12 bg-blue-200/20 rounded-full"></div>
        <div className="absolute bottom-40 left-40 w-20 h-20 bg-blue-100/50 rounded-xl rotate-45"></div>
        
        <div className="absolute top-32 right-20 w-14 h-14 bg-blue-200/25 rounded-lg -rotate-12"></div>
        <div className="absolute top-52 right-32 w-10 h-10 bg-blue-300/30 rounded"></div>
        <div className="absolute bottom-60 right-16 w-16 h-16 bg-blue-200/20 rounded-full"></div>
        
        {/* Chart/Graph decorative elements */}
        <div className="absolute top-1/4 left-1/4 bg-white/60 rounded-lg p-4 shadow-sm">
          <div className="flex space-x-1 h-8">
            <div className="w-2 bg-blue-400 rounded-t"></div>
            <div className="w-2 bg-blue-500 rounded-t h-6"></div>
            <div className="w-2 bg-blue-400 rounded-t h-4"></div>
            <div className="w-2 bg-blue-600 rounded-t h-7"></div>
            <div className="w-2 bg-blue-500 rounded-t"></div>
          </div>
        </div>
        
        {/* Task list decorative element */}
        <div className="absolute bottom-1/4 right-1/4 bg-white/50 rounded-lg p-3 shadow-sm">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="w-12 h-1 bg-gray-300 rounded"></div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="w-16 h-1 bg-gray-300 rounded"></div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
              <div className="w-10 h-1 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen grid lg:grid-cols-2 relative z-10">
        {/* Left Side - Hero Section */}
        <div className="hidden lg:flex flex-col justify-center items-start px-12">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-blue-600 mb-4 leading-tight">
              Intern<br />
              Management<br />
              Portal
            </h1>
            <p className="text-lg text-gray-600 max-w-md italic">
              Streamline attendance, tasks, and reporting in one place.
            </p>
          </div>
          
          {/* Illustration of person with cup */}
          <div className="flex justify-center items-end">
            <div className="relative">
              {/* Person illustration */}
              <div className="w-48 h-64 relative">
                {/* Head */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-pink-200 rounded-full"></div>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-800 rounded-full"></div>
                
                {/* Body */}
                <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-20 h-32 bg-gray-100 rounded-t-full"></div>
                
                {/* Arms */}
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 translate-x-8 w-6 h-16 bg-pink-200 rounded-full -rotate-12"></div>
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-x-8 w-6 h-16 bg-pink-200 rounded-full rotate-12"></div>
                
                {/* Cup */}
                <div className="absolute top-32 left-1/2 transform -translate-x-1/2 translate-x-12 w-6 h-8 bg-blue-500 rounded-b-lg"></div>
                
                {/* Legs */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-x-4 w-6 h-20 bg-gray-100"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-x-4 w-6 h-20 bg-gray-100"></div>
                
                {/* Shoes */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-x-4 w-10 h-4 bg-gray-800 rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-x-6 w-10 h-4 bg-gray-800 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md">
            {/* Mobile Hero */}
            <div className="lg:hidden mb-8 text-center">
              <h1 className="text-3xl font-bold text-blue-600 mb-2">
                Intern Management Portal
              </h1>
              <p className="text-gray-600 italic">
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
