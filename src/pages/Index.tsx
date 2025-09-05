import LoginForm from "@/components/LoginForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes and charts */}
        <div className="absolute top-32 left-20 bg-white/80 rounded-lg p-3 shadow-sm">
          <div className="flex space-x-1 h-6">
            <div className="w-2 bg-blue-400 rounded-t h-3"></div>
            <div className="w-2 bg-blue-500 rounded-t h-5"></div>
            <div className="w-2 bg-blue-400 rounded-t h-2"></div>
            <div className="w-2 bg-blue-600 rounded-t h-6"></div>
            <div className="w-2 bg-blue-500 rounded-t h-4"></div>
          </div>
        </div>
        
        {/* Task/checklist decorative element */}
        <div className="absolute top-64 left-32 bg-white/70 rounded-lg p-2 shadow-sm">
          <div className="space-y-1">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-8 h-0.5 bg-gray-300 rounded"></div>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-10 h-0.5 bg-gray-300 rounded"></div>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
              <div className="w-6 h-0.5 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>

        {/* Graph/chart decorative element */}
        <div className="absolute top-80 left-16 bg-white/60 rounded-lg p-2 shadow-sm rotate-12">
          <div className="flex items-end space-x-1 h-4">
            <div className="w-1 bg-purple-400 rounded-t"></div>
            <div className="w-1 bg-purple-500 rounded-t h-3"></div>
            <div className="w-1 bg-purple-400 rounded-t h-2"></div>
          </div>
          <div className="mt-1 w-6 h-0.5 bg-gray-300 rounded"></div>
        </div>
      </div>

      <div className="min-h-screen grid lg:grid-cols-2 relative z-10">
        {/* Left Side - Hero Section */}
        <div className="hidden lg:flex flex-col justify-center items-start px-16">
          <div className="mb-16">
            <h1 className="text-6xl font-bold text-blue-600 mb-6 leading-tight">
              Intern<br />
              Management<br />
              Portal
            </h1>
            <p className="text-xl text-gray-700 max-w-md font-medium italic">
              Streamline attendance, tasks, and reporting in one place.
            </p>
          </div>
          
          {/* Illustration of person */}
          <div className="flex justify-start items-end">
            <div className="relative">
              {/* Person illustration */}
              <div className="w-48 h-72 relative">
                {/* Head */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-pink-200 rounded-full"></div>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-800 rounded-full"></div>
                
                {/* Body */}
                <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-24 h-36 bg-gray-100 rounded-t-full"></div>
                
                {/* Arms */}
                <div className="absolute top-22 left-1/2 transform -translate-x-1/2 translate-x-10 w-6 h-20 bg-pink-200 rounded-full -rotate-12"></div>
                <div className="absolute top-22 left-1/2 transform -translate-x-1/2 -translate-x-10 w-6 h-20 bg-pink-200 rounded-full rotate-12"></div>
                
                {/* Cup */}
                <div className="absolute top-36 left-1/2 transform -translate-x-1/2 translate-x-16 w-6 h-8 bg-blue-500 rounded-b-lg"></div>
                <div className="absolute top-34 left-1/2 transform -translate-x-1/2 translate-x-16 w-8 h-2 bg-blue-400 rounded"></div>
                
                {/* Legs */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 translate-x-4 w-7 h-24 bg-gray-100 rounded-b-lg"></div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-x-4 w-7 h-24 bg-gray-100 rounded-b-lg"></div>
                
                {/* Shoes */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-x-4 w-12 h-6 bg-gray-800 rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-x-8 w-12 h-6 bg-gray-800 rounded-full"></div>
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
              <p className="text-gray-700 font-medium italic">
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
