import React from 'react';

const GitHubProfileSection = ({ formData, setFormData }) => {
  const { analytics = {} } = formData;

  const handleChange = (e) => {
    setFormData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

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
    <div className="card">
      <h2 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontSize: '2rem' }}>GitHub Profile Add-ons</h2>

      <div className="mb-4">
        <input
          type="text"
          name="githubUsername"
          value={formData.githubUsername || ''}
          onChange={handleChange}
          placeholder="Enter your GitHub username"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4" id='github-profile-section'>
        {/* GitHub Stats Card */}
        <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <input
            type="checkbox"
            id="showStatsCard"
            checked={analytics.showStatsCard || false}
            onChange={(e) => handleAnalyticsChange('showStatsCard', e.target.checked)}
            className="h-4 w-4 text-blue-600 rounded border-gray-300"
          />
          <label htmlFor="showStatsCard" className="text-gray-700 cursor-pointer flex-1">
            Show GitHub Stats Card
          </label>
        </div>

        {/* Most Used Languages */}
        <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <input
            type="checkbox"
            id="showLanguages"
            checked={analytics.showLanguages || false}
            onChange={(e) => handleAnalyticsChange('showLanguages', e.target.checked)}
            className="h-4 w-4 text-blue-600 rounded border-gray-300"
          />
          <label htmlFor="showLanguages" className="text-gray-700 cursor-pointer flex-1">
            Show Most Used Languages
          </label>
        </div>

        {/* Contribution Graph */}
        <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <input
            type="checkbox"
            id="showContributions"
            checked={analytics.showContributions || false}
            onChange={(e) => handleAnalyticsChange('showContributions', e.target.checked)}
            className="h-4 w-4 text-blue-600 rounded border-gray-300"
          />
          <label htmlFor="showContributions" className="text-gray-700 cursor-pointer flex-1">
            Show Contribution Graph
          </label>
        </div>

        {/* Profile Views Counter */}
        <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <input
            type="checkbox"
            id="showProfileViews"
            checked={analytics.showProfileViews || false}
            onChange={(e) => handleAnalyticsChange('showProfileViews', e.target.checked)}
            className="h-4 w-4 text-blue-600 rounded border-gray-300"
          />
          <label htmlFor="showProfileViews" className="text-gray-700 cursor-pointer flex-1">
            Show Profile Views Counter
          </label>
        </div>

        {/* GitHub Streak Stats */}
        <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <input
            type="checkbox"
            id="showStreakStats"
            checked={analytics.showStreakStats || false}
            onChange={(e) => handleAnalyticsChange('showStreakStats', e.target.checked)}
            className="h-4 w-4 text-blue-600 rounded border-gray-300"
          />
          <label htmlFor="showStreakStats" className="text-gray-700 cursor-pointer flex-1">
            Show GitHub Streak Stats
          </label>
        </div>

        {/* GitHub Trophies */}
        <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <input
            type="checkbox"
            id="showTrophies"
            checked={analytics.showTrophies || false}
            onChange={(e) => handleAnalyticsChange('showTrophies', e.target.checked)}
            className="h-4 w-4 text-blue-600 rounded border-gray-300"
          />
          <label htmlFor="showTrophies" className="text-gray-700 cursor-pointer flex-1">
            Show GitHub Trophies
          </label>
        </div>
      </div>

      {/* Preview Section */}
      {formData.githubUsername && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Preview</h3>
          <div className="space-y-4" id='github-profile-preview'>
            {analytics.showStatsCard && (
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${formData.githubUsername}&show_icons=true&theme=radical`}
                  alt="GitHub Stats"
                  className="w-full rounded-lg"
                />
              </div>
            )}
            {analytics.showLanguages && (
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${formData.githubUsername}&layout=compact&theme=radical`}
                  alt="Most Used Languages"
                  className="w-full rounded-lg"
                />
              </div>
            )}
            {analytics.showStreakStats && (
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${formData.githubUsername}&theme=radical`}
                  alt="GitHub Streak Stats"
                  className="w-full rounded-lg"
                />
              </div>
            )}
            {analytics.showProfileViews && (
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <img
                  src={`https://komarev.com/ghpvc/?username=${formData.githubUsername}&color=brightgreen`}
                  alt="Profile Views"
                  className="rounded-lg"
                />
              </div>
            )}
            {analytics.showContributions && (
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <img
                  src={`https://github-readme-activity-graph.vercel.app/graph?username=${formData.githubUsername}&theme=radical`}
                  alt="Contribution Graph"
                  className="w-full rounded-lg"
                />
              </div>
            )}
            {analytics.showTrophies && (
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <img
                  src={`https://github-profile-trophy.vercel.app/?username=${formData.githubUsername}&theme=radical&no-frame=false&no-bg=true&margin-w=4`}
                  alt="GitHub Trophies"
                  className="w-full rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubProfileSection; 