
import { useState } from 'react';
import { BookOpen, User, ChevronRight, FileText, Award, Clock } from 'lucide-react';
import StudentSidebar from '../components/Sidebar';
import CourseCard from '../components/CourseCard';
import ProgressCard from '../components/ProgressCard';
import UserProfile from '../components/UserProfile';


  const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState('courses');
  const [showProfile, setShowProfile] = useState(false);

  // Mock data
  const enrolledCourses = [
    {
      id: 1,
      title: 'React Fundamentals',
      instructor: 'John Smith',
      progress: 75,
      totalLessons: 12,
      completedLessons: 9,
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop',
      description: 'Learn the basics of React development',
      status: 'in-progress'
    },
    {
      id: 2,
      title: 'JavaScript Advanced',
      instructor: 'Sarah Wilson',
      progress: 100,
      totalLessons: 15,
      completedLessons: 15,
      thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop',
      description: 'Master advanced JavaScript concepts',
      status: 'completed'
    },
    {
      id: 3,
      title: 'CSS Grid & Flexbox',
      instructor: 'Mike Johnson',
      progress: 30,
      totalLessons: 8,
      completedLessons: 3,
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop',
      description: 'Modern CSS layout techniques',
      status: 'in-progress'
    }
  ];

  const availableCourses = [
    {
      id: 4,
      title: 'Node.js Backend',
      instructor: 'Emily Davis',
      totalLessons: 20,
      thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop',
      description: 'Build scalable backend applications',
      status: 'available'
    },
    {
      id: 5,
      title: 'Database Design',
      instructor: 'Alex Brown',
      totalLessons: 10,
      thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=300&h=200&fit=crop',
      description: 'Learn database fundamentals',
      status: 'available'
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'courses':
        return (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{enrolledCourses.length}</p>
                    <p className="text-sm text-gray-600">Enrolled Courses</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {enrolledCourses.filter(c => c.status === 'completed').length}
                    </p>
                    <p className="text-sm text-gray-600">Completed</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {enrolledCourses.filter(c => c.status === 'in-progress').length}
                    </p>
                    <p className="text-sm text-gray-600">In Progress</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enrolled Courses */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">My Courses</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {enrolledCourses.map((course) => (
                  <CourseCard key={course.id} course={course} type="enrolled" />
                ))}
              </div>
            </div>

            {/* Available Courses */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Courses</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {availableCourses.map((course) => (
                  <CourseCard key={course.id} course={course} type="available" />
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'progress':
        return (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Learning Progress</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {enrolledCourses.map((course) => (
                <ProgressCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <StudentSidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        onProfileClick={() => setShowProfile(true)}
      />
      
      <main className="flex-1 p-8 ml-64">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, Student!
            </h1>
            <p className="text-gray-600">
              Continue your learning journey and track your progress.
            </p>
          </div>

          {/* Content */}
          {renderContent()}
        </div>
      </main>

      {/* User Profile Modal */}
      {showProfile && (
        <UserProfile onClose={() => setShowProfile(false)} />
      )}
    </div>
  );
};

export default StudentDashboard;