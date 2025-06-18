import React from 'react';

const AnalyticsSection = ({ formData, setFormData }) => {
  const { analytics = {} } = formData;

  const handleAnalyticsChange = (key, value) => {
    setFormData(prevData => ({
      ...prevData,
      analytics: {
        ...prevData.analytics,
        [key]: value
      }
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
        <span className="mr-2 sm:mr-3 text-2xl sm:text-3xl">📊</span>
        Analytics & Statistics
      </h2>
      
      <div className="space-y-4 sm:space-y-6">
        {/* GitHub Stats Card */}
        <div className="space-y-2 sm:space-y-3">
          <label className="block text-sm sm:text-base font-medium text-gray-700">
            GitHub Stats Card
          </label>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <input
              type="checkbox"
              checked={analytics.showStatsCard || false}
              onChange={(e) => handleAnalyticsChange('showStatsCard', e.target.checked)}
              className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <span className="text-sm sm:text-base text-gray-600">Show GitHub Stats Card</span>
          </div>
          {analytics.showStatsCard && (
            <div className="mt-3 sm:mt-4">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${formData.githubUsername || 'your-username'}&show_icons=true&theme=radical&hide_border=true&card_width=400`}
                alt="GitHub Stats"
                className="rounded-lg w-full max-w-full"
              />
            </div>
          )}
        </div>

        {/* GitHub Streak Stats */}
        <div className="space-y-2 sm:space-y-3">
          <label className="block text-sm sm:text-base font-medium text-gray-700">
            GitHub Streak Stats
          </label>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <input
              type="checkbox"
              checked={analytics.showStreakStats || false}
              onChange={(e) => handleAnalyticsChange('showStreakStats', e.target.checked)}
              className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <span className="text-sm sm:text-base text-gray-600">Show GitHub Streak Stats</span>
          </div>
          {analytics.showStreakStats && formData.githubUsername && (
            <div className="mt-3 sm:mt-4">
              <img
                src={`https://streak-stats.demolab.com/?user=${formData.githubUsername}&theme=radical&hide_border=true&card_width=400`}
                alt="GitHub Streak Stats"
                className="rounded-lg w-full max-w-full"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="hidden text-center text-gray-500 text-sm p-4 bg-gray-100 rounded-lg">
                Unable to load streak stats. Please check your GitHub username.
              </div>
            </div>
          )}
          {analytics.showStreakStats && !formData.githubUsername && (
            <div className="mt-3 sm:mt-4 text-center text-gray-500 text-sm p-4 bg-gray-100 rounded-lg">
              Please enter your GitHub username to view streak stats.
            </div>
          )}
        </div>

        {/* Most Used Languages */}
        <div className="space-y-2 sm:space-y-3">
          <label className="block text-sm sm:text-base font-medium text-gray-700">
            Most Used Languages
          </label>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <input
              type="checkbox"
              checked={analytics.showLanguages || false}
              onChange={(e) => handleAnalyticsChange('showLanguages', e.target.checked)}
              className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <span className="text-sm sm:text-base text-gray-600">Show Most Used Languages</span>
          </div>
          {analytics.showLanguages && (
            <div className="mt-3 sm:mt-4">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${formData.githubUsername || 'your-username'}&layout=compact&theme=radical&hide_border=true&card_width=400`}
                alt="Most Used Languages"
                className="rounded-lg w-full max-w-full"
              />
            </div>
          )}
        </div>

        {/* Contribution Graph */}
        <div className="space-y-2 sm:space-y-3">
          <label className="block text-sm sm:text-base font-medium text-gray-700">
            Contribution Graph
          </label>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <input
              type="checkbox"
              checked={analytics.showContributions || false}
              onChange={(e) => handleAnalyticsChange('showContributions', e.target.checked)}
              className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <span className="text-sm sm:text-base text-gray-600">Show Contribution Graph</span>
          </div>
          {analytics.showContributions && (
            <div className="mt-3 sm:mt-4">
              <img
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${formData.githubUsername || 'your-username'}&theme=radical`}
                alt="Contribution Graph"
                className="rounded-lg w-full max-w-full"
              />
            </div>
          )}
        </div>

        {/* Profile Views Counter */}
        <div className="space-y-2 sm:space-y-3">
          <label className="block text-sm sm:text-base font-medium text-gray-700">
            Profile Views Counter
          </label>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <input
              type="checkbox"
              checked={analytics.showProfileViews || false}
              onChange={(e) => handleAnalyticsChange('showProfileViews', e.target.checked)}
              className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <span className="text-sm sm:text-base text-gray-600">Show Profile Views Counter</span>
          </div>
          {analytics.showProfileViews && (
            <div className="mt-3 sm:mt-4 flex justify-center">
              <img
                src={`https://komarev.com/ghpvc/?username=${formData.githubUsername || 'your-username'}&color=brightgreen`}
                alt="Profile Views"
                className="rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Repository Traffic Stats */}
        <div className="space-y-2 sm:space-y-3">
          <label className="block text-sm sm:text-base font-medium text-gray-700">
            Repository Traffic Stats
          </label>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <input
              type="checkbox"
              checked={analytics.showTrafficStats || false}
              onChange={(e) => handleAnalyticsChange('showTrafficStats', e.target.checked)}
              className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <span className="text-sm sm:text-base text-gray-600">Show Repository Traffic Stats</span>
          </div>
          {analytics.showTrafficStats && (
            <div className="mt-3 sm:mt-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm sm:text-base text-blue-700">
                  Note: Repository traffic stats are only visible to repository owners and require GitHub authentication.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection; 