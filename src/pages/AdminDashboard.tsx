import { useState } from "react";
import { Users, ClipboardList, TrendingUp, Settings, Menu, Search, Bell, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const stats = [
    { title: "Total Interns", value: "24", change: "+2 this month", icon: Users },
    { title: "Active Tasks", value: "156", change: "+12 pending", icon: ClipboardList },
    { title: "Attendance Rate", value: "94%", change: "+5% from last month", icon: TrendingUp },
    { title: "Departments", value: "8", change: "2 new departments", icon: Settings }
  ];

  const recentInterns = [
    { name: "Sarah Johnson", department: "IT", status: "Present", avatar: "SJ" },
    { name: "Mike Chen", department: "Marketing", status: "Late", avatar: "MC" },
    { name: "Emma Davis", department: "HR", status: "Present", avatar: "ED" },
    { name: "Alex Rodriguez", department: "Finance", status: "Absent", avatar: "AR" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-white shadow-lg transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-16'} z-10`}>
        <div className="p-4 border-b">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">IM</span>
            </div>
            {sidebarOpen && <span className="ml-3 font-semibold text-gray-900">Intern Management</span>}
          </div>
        </div>

        <nav className="p-4 space-y-2">
          {[
            { icon: Users, label: "Dashboard", active: true },
            { icon: ClipboardList, label: "Interns" },
            { icon: TrendingUp, label: "Reports" },
            { icon: Settings, label: "Settings" }
          ].map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                item.active ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {sidebarOpen && <span className="ml-3">{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search..."
                  className="pl-10 w-80"
                />
              </div>
              <Button variant="ghost" size="sm">
                <Bell className="w-5 h-5" />
              </Button>
              <Avatar>
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, Admin!</h2>
            <p className="text-gray-600">Here's what's happening with your intern management today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                  <stat.icon className="w-5 h-5 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Intern Activity</CardTitle>
                <CardDescription>Latest check-ins and updates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentInterns.map((intern, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="text-xs">{intern.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{intern.name}</p>
                        <p className="text-xs text-gray-500">{intern.department}</p>
                      </div>
                    </div>
                    <Badge 
                      variant={intern.status === 'Present' ? 'default' : intern.status === 'Late' ? 'secondary' : 'destructive'}
                      className="text-xs"
                    >
                      {intern.status}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and operations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Add New Intern
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <ClipboardList className="w-4 h-4 mr-2" />
                  Create Task Assignment
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Manage Departments
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;