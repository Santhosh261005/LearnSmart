
import { Play, CheckCircle, Plus, Clock, Users } from 'lucide-react';
import { useState } from 'react';

const CourseCard = ({ course, type }) => {
  const [isEnrolling, setIsEnrolling] = useState(false);

  const handleEnroll = () => {
    setIsEnrolling(true);
    // Simulate enrollment
    setTimeout(() => {
      setIsEnrolling(false);
      alert('Successfully enrolled in the course!');
    }, 1000);
  };

  const handleContinue = () => {
    alert('Opening course content...');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      {/* Course Image */}
      <div className="relative h-48 bg-gray-200">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        {course.status === 'completed' && (
          <div className="absolute top-3 right-3 bg-green-500 text-white p-2 rounded-full">
            <CheckCircle className="h-4 w-4" />
          </div>
        )}
      </div>

      {/* Course Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-3">{course.description}</p>
        
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
          <Users className="h-4 w-4" />
          <span>{course.instructor}</span>
        </div>

        {/* Progress Bar (for enrolled courses) */}
        {type === 'enrolled' && course.progress !== undefined && (
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>{course.completedLessons} completed</span>
              <span>{course.totalLessons} total lessons</span>
            </div>
          </div>
        )}

        {/* Course Stats (for available courses) */}
        {type === 'available' && (
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{course.totalLessons} lessons</span>
            </div>
          </div>
        )}

        {/* Action Button */}
        {type === 'enrolled' ? (
          <button
            onClick={handleContinue}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2"
          >
            <Play className="h-4 w-4" />
            <span>
              {course.status === 'completed' ? 'Review Course' : 'Continue Learning'}
            </span>
          </button>
        ) : (
          <button
            onClick={handleEnroll}
            disabled={isEnrolling}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Plus className="h-4 w-4" />
            <span>{isEnrolling ? 'Enrolling...' : 'Enroll Now'}</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;