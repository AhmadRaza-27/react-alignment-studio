import LoginForm from "@/components/LoginForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Background curved wave */}
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 1440 800"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E5F3FF" />
              <stop offset="50%" stopColor="#CCE7FF" />
              <stop offset="100%" stopColor="#B3DBFF" />
            </linearGradient>
          </defs>
          <path
            d="M0,400 C200,300 400,500 720,400 C1000,300 1200,600 1440,400 L1440,800 L0,800 Z"
            fill="url(#bg-gradient)"
          />
        </svg>
      </div>

      <div className="min-h-screen grid lg:grid-cols-2 relative z-10">
        {/* Left Side - Hero Section */}
        <div className="hidden lg:flex flex-col justify-center items-start px-16 py-12">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-blue-600 mb-4 leading-tight">
              Intern<br />
              Management<br />
              Portal
            </h1>
            <p className="text-lg text-gray-800 max-w-md font-normal italic">
              Streamline attendance, tasks, and reporting in one place.
            </p>
          </div>
          
          {/* Decorative elements and illustration */}
          <div className="relative w-full max-w-md">
            {/* Bar chart */}
            <div className="absolute top-0 left-8 bg-white rounded-lg p-3 shadow-lg border">
              <div className="flex items-end space-x-1 h-8">
                <div className="w-3 bg-blue-500 rounded-t h-4"></div>
                <div className="w-3 bg-blue-600 rounded-t h-6"></div>
                <div className="w-3 bg-blue-500 rounded-t h-3"></div>
                <div className="w-3 bg-blue-700 rounded-t h-8"></div>
                <div className="w-3 bg-blue-600 rounded-t h-5"></div>
              </div>
            </div>

            {/* Checklist */}
            <div className="absolute top-16 left-0 bg-white rounded-lg p-3 shadow-lg border">
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

            {/* Network diagram */}
            <div className="absolute top-4 right-8 bg-white rounded-lg p-3 shadow-lg border rotate-12">
              <div className="relative w-16 h-12">
                <div className="absolute top-0 left-2 w-2 h-2 bg-purple-500 rounded-full"></div>
                <div className="absolute top-4 left-6 w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="absolute top-8 left-0 w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full"></div>
                <svg className="absolute inset-0 w-full h-full">
                  <line x1="8" y1="4" x2="24" y2="16" stroke="#9CA3AF" strokeWidth="1"/>
                  <line x1="24" y1="16" x2="56" y2="8" stroke="#9CA3AF" strokeWidth="1"/>
                  <line x1="8" y1="32" x2="24" y2="16" stroke="#9CA3AF" strokeWidth="1"/>
                </svg>
              </div>
            </div>

            {/* Person illustration - positioned to match screenshot */}
            <div className="mt-16 ml-12">
              <div className="w-40 h-64 relative">
                {/* Head */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-pink-200 rounded-full"></div>
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gray-800 rounded-full"></div>
                
                {/* Body */}
                <div className="absolute top-11 left-1/2 transform -translate-x-1/2 w-20 h-32 bg-gray-100 rounded-t-full"></div>
                
                {/* Arms */}
                <div className="absolute top-18 left-1/2 transform -translate-x-1/2 translate-x-8 w-5 h-16 bg-pink-200 rounded-full -rotate-12"></div>
                <div className="absolute top-18 left-1/2 transform -translate-x-1/2 -translate-x-8 w-5 h-16 bg-pink-200 rounded-full rotate-12"></div>
                
                {/* Cup in hand */}
                <div className="absolute top-32 left-1/2 transform -translate-x-1/2 translate-x-12 w-5 h-6 bg-blue-500 rounded-b-lg"></div>
                <div className="absolute top-30 left-1/2 transform -translate-x-1/2 translate-x-12 w-6 h-1.5 bg-blue-400 rounded"></div>
                
                {/* Legs */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 translate-x-3 w-6 h-20 bg-gray-100 rounded-b-lg"></div>
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 -translate-x-3 w-6 h-20 bg-gray-100 rounded-b-lg"></div>
                
                {/* Shoes */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-x-3 w-10 h-5 bg-gray-800 rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-x-7 w-10 h-5 bg-gray-800 rounded-full"></div>
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
