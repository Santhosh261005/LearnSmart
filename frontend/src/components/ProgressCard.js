
import { BookOpen, Clock, Award } from 'lucide-react';

const ProgressCard = ({ course }) => {
  const getProgressColor = (progress) => {
    if (progress === 100) return 'text-green-600';
    if (progress >= 50) return 'text-blue-600';
    return 'text-orange-600';
  };

  const getProgressBgColor = (progress) => {
    if (progress === 100) return 'bg-green-600';
    if (progress >= 50) return 'bg-blue-600';
    return 'bg-orange-600';
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
        {course.status === 'completed' && (
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            <Award className="h-4 w-4 inline mr-1" />
            Completed
          </div>
        )}
      </div>

      <p className="text-sm text-gray-600 mb-4">Instructor: {course.instructor}</p>

      {/* Progress Circle */}
      <div className="flex items-center space-x-6 mb-6">
        <div className="relative w-20 h-20">
          <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
            <circle
              cx="40"
              cy="40"
              r="30"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-gray-200"
            />
            <circle
              cx="40"
              cy="40"
              r="30"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={`${2 * Math.PI * 30}`}
              strokeDashoffset={`${2 * Math.PI * 30 * (1 - course.progress / 100)}`}
              className={getProgressColor(course.progress)}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-lg font-bold ${getProgressColor(course.progress)}`}>
              {course.progress}%
            </span>
          </div>
        </div>

        <div className="flex-1">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {course.completedLessons} / {course.totalLessons} Lessons
                </p>
                <p className="text-xs text-gray-600">Lessons Completed</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {course.totalLessons - course.completedLessons} Remaining
                </p>
                <p className="text-xs text-gray-600">Lessons Left</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Overall Progress</span>
          <span className={`font-medium ${getProgressColor(course.progress)}`}>
            {course.progress}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className={`h-3 rounded-full transition-all duration-500 ${getProgressBgColor(course.progress)}`}
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>

      {/* Action Button */}
      {course.status !== 'completed' && (
        <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
          Continue Learning
        </button>
      )}
    </div>
  );
};

export default ProgressCard;