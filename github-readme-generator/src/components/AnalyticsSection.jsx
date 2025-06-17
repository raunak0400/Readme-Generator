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
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">📊 Analytics & Statistics</h2>
      
      <div className="space-y-4">
        {/* GitHub Stats Card */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            GitHub Stats Card
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={analytics.showStatsCard || false}
              onChange={(e) => handleAnalyticsChange('showStatsCard', e.target.checked)}
              className="h-4 w-4 text-blue-600 rounded border-gray-300"
            />
            <span className="text-sm text-gray-600">Show GitHub Stats Card</span>
          </div>
          {analytics.showStatsCard && (
            <div className="mt-2">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${formData.githubUsername || 'your-username'}&show_icons=true&theme=radical`}
                alt="GitHub Stats"
                className="rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Most Used Languages */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Most Used Languages
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={analytics.showLanguages || false}
              onChange={(e) => handleAnalyticsChange('showLanguages', e.target.checked)}
              className="h-4 w-4 text-blue-600 rounded border-gray-300"
            />
            <span className="text-sm text-gray-600">Show Most Used Languages</span>
          </div>
          {analytics.showLanguages && (
            <div className="mt-2">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${formData.githubUsername || 'your-username'}&layout=compact&theme=radical`}
                alt="Most Used Languages"
                className="rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Contribution Graph */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Contribution Graph
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={analytics.showContributions || false}
              onChange={(e) => handleAnalyticsChange('showContributions', e.target.checked)}
              className="h-4 w-4 text-blue-600 rounded border-gray-300"
            />
            <span className="text-sm text-gray-600">Show Contribution Graph</span>
          </div>
          {analytics.showContributions && (
            <div className="mt-2">
              <img
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${formData.githubUsername || 'your-username'}&theme=radical`}
                alt="Contribution Graph"
                className="rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Profile Views Counter */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Profile Views Counter
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={analytics.showProfileViews || false}
              onChange={(e) => handleAnalyticsChange('showProfileViews', e.target.checked)}
              className="h-4 w-4 text-blue-600 rounded border-gray-300"
            />
            <span className="text-sm text-gray-600">Show Profile Views Counter</span>
          </div>
          {analytics.showProfileViews && (
            <div className="mt-2">
              <img
                src={`https://komarev.com/ghpvc/?username=${formData.githubUsername || 'your-username'}&color=brightgreen`}
                alt="Profile Views"
              />
            </div>
          )}
        </div>

        {/* Repository Traffic Stats */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Repository Traffic Stats
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={analytics.showTrafficStats || false}
              onChange={(e) => handleAnalyticsChange('showTrafficStats', e.target.checked)}
              className="h-4 w-4 text-blue-600 rounded border-gray-300"
            />
            <span className="text-sm text-gray-600">Show Repository Traffic Stats</span>
          </div>
          {analytics.showTrafficStats && (
            <div className="mt-2">
              <p className="text-sm text-gray-600">
                Note: Repository traffic stats are only visible to repository owners and require GitHub authentication.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection; 