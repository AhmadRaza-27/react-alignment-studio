import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  LayoutDashboard, 
  CheckSquare, 
  Calendar, 
  Users, 
  User, 
  LogOut,
  Edit
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const StudentProfile = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const navigate = useNavigate();

  const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/student-dashboard" },
    { icon: CheckSquare, label: "My Tasks", path: "/student-tasks" },
    { icon: Users, label: "Attendance", path: "/student-attendance" },
    { icon: Calendar, label: "Timetable & Scheduling", path: "/student-timetable" },
    { icon: User, label: "Profile", path: "/student-profile" },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  const handleNavigation = (path: string, label: string) => {
    setActiveTab(label);
    if (path === "/student-dashboard") {
      navigate("/student-dashboard");
    } else if (path === "/student-tasks") {
      navigate("/student-tasks");
    } else if (path === "/student-attendance") {
      navigate("/student-attendance");
    } else if (path === "/student-timetable") {
      navigate("/student-timetable");
    } else if (path === "/student-profile") {
      navigate("/student-profile");
    }
  };

  const skills = [
    { name: "JavaScript", color: "bg-green-100 text-green-800" },
    { name: "Node.js", color: "bg-blue-100 text-blue-800" },
    { name: "React", color: "bg-purple-100 text-purple-800" },
    { name: "MongoDB", color: "bg-yellow-100 text-yellow-800" },
    { name: "Tailwind CSS", color: "bg-indigo-100 text-indigo-800" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <User className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">Student Dashboard</h1>
            <p className="text-sm text-muted-foreground">C&IT Internship Program</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-foreground">Ahmed Ali</span>
            <Avatar className="h-8 w-8">
              <AvatarImage src="" alt="Ahmed Ali" />
              <AvatarFallback className="bg-primary text-primary-foreground text-xs">AA</AvatarFallback>
            </Avatar>
          </div>
          <Button 
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-border min-h-screen">
          <nav className="p-4 space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.path, item.label)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === item.label
                    ? "bg-primary/10 text-primary border-l-4 border-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium text-sm leading-tight">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">My Profile</h2>
            
            {/* Profile Header */}
            <div className="flex items-center space-x-4 mb-8">
              <Avatar className="h-16 w-16">
                <AvatarImage src="" alt="Ahmed Ali" />
                <AvatarFallback className="bg-primary text-primary-foreground text-xl">AA</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Ahmed Ali</h3>
                <p className="text-sm text-muted-foreground">Computer Science Student</p>
                <p className="text-sm text-muted-foreground">Roll No: CS-2021-123</p>
                <p className="text-sm text-muted-foreground">Joined: January 2024</p>
              </div>
            </div>

            {/* Profile Information Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Personal Information */}
              <Card className="bg-white border border-border">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Email:</p>
                    <p className="text-sm font-medium text-foreground">ahmedali@cloud.neduet.edu.pk</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone:</p>
                    <p className="text-sm font-medium text-foreground">+92 300 1234567</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Department:</p>
                    <p className="text-sm font-medium text-foreground">Computer Science & IT</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Semester:</p>
                    <p className="text-sm font-medium text-foreground">7th Semester</p>
                  </div>
                </CardContent>
              </Card>

              {/* Internship Progress */}
              <Card className="bg-white border border-border">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">Internship Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Tasks Completed:</p>
                    <p className="text-sm font-medium text-foreground">8 out of 12</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Attendance Rate:</p>
                    <p className="text-sm font-medium text-foreground">95%</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Performance Rating:</p>
                    <p className="text-sm font-medium text-foreground">4.6/5.0</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Supervisor:</p>
                    <p className="text-sm font-medium text-foreground">Dr. Muhammad Hasan</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Skills & Technologies */}
            <Card className="bg-white border border-border mb-6">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">Skills & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} className={`${skill.color} border-0 px-3 py-1`}>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Edit Profile Button */}
            <div className="flex justify-start">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
                <Edit className="w-4 h-4 mr-2" />
                EDIT PROFILE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;