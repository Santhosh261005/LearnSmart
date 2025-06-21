
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, GraduationCap, User } from 'lucide-react';

const HomePage = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    // Navigate to login with the selected role
    navigate(`/login?role=${role}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">EduPath</h1>
                <p className="text-sm text-gray-600">Student Teaching & Monitoring Platform</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">EduPath</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering education through technology. Track progress, manage courses, and enhance learning experiences.
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Student Card */}
          <div 
            onClick={() => handleRoleSelection('student')}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-100"
          >
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Student</h3>
              <p className="text-gray-600 text-center mb-6">
                Access your courses, track your progress, and complete your learning journey.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-blue-500" />
                  <span className="text-sm text-gray-700">Enroll in courses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-blue-500" />
                  <span className="text-sm text-gray-700">Read course materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-blue-500" />
                  <span className="text-sm text-gray-700">Track your progress</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Login as Student
              </button>
            </div>
          </div>

          {/* Instructor Card */}
          <div 
            onClick={() => handleRoleSelection('instructor')}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-100"
          >
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Instructor</h3>
              <p className="text-gray-600 text-center mb-6">
                Create courses, manage content, and monitor student progress effectively.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700">Create courses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700">Upload materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700">Monitor progress</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                Login as Instructor
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Platform Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Course Management</h4>
              <p className="text-gray-600">Comprehensive course creation and enrollment system</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Progress Tracking</h4>
              <p className="text-gray-600">Visual progress indicators and completion analytics</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">User Profiles</h4>
              <p className="text-gray-600">Personalized profiles with course history and achievements</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 EduPath. Empowering education through technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;