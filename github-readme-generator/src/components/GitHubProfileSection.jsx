import React from 'react';

const GitHubProfileSection = ({ formData, setFormData }) => {
  const { analytics = {} } = formData;

  // Available themes for GitHub stats
  const themes = [
    { value: 'default', label: 'Default' },
    { value: 'dark', label: 'Dark' },
    { value: 'radical', label: 'Radical' },
    { value: 'merko', label: 'Merko' },
    { value: 'tokyonight', label: 'Tokyo Night' },
    { value: 'dracula', label: 'Dracula' },
    { value: 'cobalt', label: 'Cobalt' },
    { value: 'synthwave', label: 'Synthwave' },
    { value: 'highcontrast', label: 'High Contrast' },
    { value: 'github_dark', label: 'GitHub Dark' },
    { value: 'github', label: 'GitHub Light' },
    { value: 'vue', label: 'Vue' },
    { value: 'vue-dark', label: 'Vue Dark' },
    { value: 'shades-of-purple', label: 'Shades of Purple' },
    { value: 'nightowl', label: 'Night Owl' },
    { value: 'buefy', label: 'Buefy' },
    { value: 'blue-green', label: 'Blue Green' },
    { value: 'algolia', label: 'Algolia' },
    { value: 'great-gatsby', label: 'Great Gatsby' },
    { value: 'darcula', label: 'Darcula' },
    { value: 'bear', label: 'Bear' },
    { value: 'solarized-dark', label: 'Solarized Dark' },
    { value: 'solarized-light', label: 'Solarized Light' },
    { value: 'chartreuse-dark', label: 'Chartreuse Dark' },
    { value: 'nord', label: 'Nord' },
    { value: 'gotham', label: 'Gotham' },
    { value: 'material-palenight', label: 'Material Palenight' },
    { value: 'graywhite', label: 'Gray White' },
    { value: 'vision-friendly-dark', label: 'Vision Friendly Dark' },
    { value: 'ayu-mirage', label: 'Ayu Mirage' },
    { value: 'midnight-purple', label: 'Midnight Purple' },
    { value: 'calm', label: 'Calm' },
    { value: 'flag-india', label: 'Flag India' },
    { value: 'omni', label: 'Omni' },
    { value: 'react', label: 'React' },
    { value: 'jolly', label: 'Jolly' },
    { value: 'maroongold', label: 'Maroon Gold' },
    { value: 'yeblu', label: 'Yeblu' },
    { value: 'blueberry', label: 'Blueberry' },
    { value: 'slateorange', label: 'Slate Orange' },
    { value: 'kacho_ga', label: 'Kacho Ga' },
    { value: 'outrun', label: 'Outrun' },
    { value: 'ocean_dark', label: 'Ocean Dark' },
    { value: 'city_lights', label: 'City Lights' },
    { value: 'moonlight', label: 'Moonlight' },
    { value: 'github_dark_dimmed', label: 'GitHub Dark Dimmed' },
    { value: 'discord_old_blurple', label: 'Discord Old Blurple' },
    { value: 'aura_dark', label: 'Aura Dark' },
    { value: 'panda', label: 'Panda' },
    { value: 'noctis_minimus', label: 'Noctis Minimus' },
    { value: 'cobalt2', label: 'Cobalt2' },
    { value: 'swift', label: 'Swift' },
    { value: 'aura', label: 'Aura' },
    { value: 'apprentice', label: 'Apprentice' },
    { value: 'moltack', label: 'Moltack' },
    { value: 'codeSTACKr', label: 'CodeSTACKr' },
    { value: 'rose_pine', label: 'Rose Pine' },
    { value: 'catppuccin_latte', label: 'Catppuccin Latte' },
    { value: 'catppuccin_frappe', label: 'Catppuccin Frappe' },
    { value: 'catppuccin_macchiato', label: 'Catppuccin Macchiato' },
    { value: 'catppuccin_mocha', label: 'Catppuccin Mocha' },
    { value: 'date_night', label: 'Date Night' },
    { value: 'one_dark_pro', label: 'One Dark Pro' },
    { value: 'rose', label: 'Rose' },
    { value: 'holi', label: 'Holi' },
    { value: 'neon', label: 'Neon' },
    { value: 'blue_navy', label: 'Blue Navy' },
    { value: 'calm_pink', label: 'Calm Pink' },
    { value: 'ambient_gradient', label: 'Ambient Gradient' },
    { value: 'buefy_dark', label: 'Buefy Dark' },
    { value: 'procyon', label: 'Procyon' },
    { value: 'elegant', label: 'Elegant' },
    { value: 'blue_gradient', label: 'Blue Gradient' },
    { value: 'xcode', label: 'Xcode' },
    { value: 'orange_heart', label: 'Orange Heart' },
    { value: 'purple_gradient', label: 'Purple Gradient' },
    { value: 'sunset', label: 'Sunset' },
    { value: 'green_blue', label: 'Green Blue' },
    { value: 'watermelon', label: 'Watermelon' },
    { value: 'cherry', label: 'Cherry' },
    { value: 'berry', label: 'Berry' },
    { value: 'midnight', label: 'Midnight' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'mint', label: 'Mint' },
    { value: 'leafy', label: 'Leafy' },
    { value: 'solarized', label: 'Solarized' },
    { value: 'arch', label: 'Arch' },
    { value: 'pink', label: 'Pink' },
    { value: 'gradient1', label: 'Gradient 1' },
    { value: 'gradient2', label: 'Gradient 2' },
    { value: 'gradient3', label: 'Gradient 3' },
    { value: 'gradient4', label: 'Gradient 4' },
    { value: 'gradient5', label: 'Gradient 5' },
    { value: 'gradient6', label: 'Gradient 6' },
    { value: 'gradient7', label: 'Gradient 7' },
    { value: 'gradient8', label: 'Gradient 8' },
    { value: 'gradient9', label: 'Gradient 9' },
    { value: 'gradient10', label: 'Gradient 10' },
    { value: 'gradient11', label: 'Gradient 11' },
    { value: 'gradient12', label: 'Gradient 12' },
    { value: 'gradient13', label: 'Gradient 13' },
    { value: 'gradient14', label: 'Gradient 14' },
    { value: 'gradient15', label: 'Gradient 15' },
    { value: 'gradient16', label: 'Gradient 16' },
    { value: 'gradient17', label: 'Gradient 17' },
    { value: 'gradient18', label: 'Gradient 18' },
    { value: 'gradient19', label: 'Gradient 19' },
    { value: 'gradient20', label: 'Gradient 20' },
    { value: 'gradient21', label: 'Gradient 21' },
    { value: 'gradient22', label: 'Gradient 22' },
    { value: 'gradient23', label: 'Gradient 23' },
    { value: 'gradient24', label: 'Gradient 24' },
    { value: 'gradient25', label: 'Gradient 25' },
    { value: 'gradient26', label: 'Gradient 26' },
    { value: 'gradient27', label: 'Gradient 27' },
    { value: 'gradient28', label: 'Gradient 28' },
    { value: 'gradient29', label: 'Gradient 29' },
    { value: 'gradient30', label: 'Gradient 30' },
    { value: 'gradient31', label: 'Gradient 31' },
    { value: 'gradient32', label: 'Gradient 32' },
    { value: 'gradient33', label: 'Gradient 33' },
    { value: 'gradient34', label: 'Gradient 34' },
    { value: 'gradient35', label: 'Gradient 35' },
    { value: 'gradient36', label: 'Gradient 36' },
    { value: 'gradient37', label: 'Gradient 37' },
    { value: 'gradient38', label: 'Gradient 38' },
    { value: 'gradient39', label: 'Gradient 39' },
    { value: 'gradient40', label: 'Gradient 40' },
    { value: 'gradient41', label: 'Gradient 41' },
    { value: 'gradient42', label: 'Gradient 42' },
    { value: 'gradient43', label: 'Gradient 43' },
    { value: 'gradient44', label: 'Gradient 44' },
    { value: 'gradient45', label: 'Gradient 45' },
    { value: 'gradient46', label: 'Gradient 46' },
    { value: 'gradient47', label: 'Gradient 47' },
    { value: 'gradient48', label: 'Gradient 48' },
    { value: 'gradient49', label: 'Gradient 49' },
    { value: 'gradient50', label: 'Gradient 50' }
  ];

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

  // Get current theme (default to 'radical' if not set)
  const currentTheme = formData.githubTheme || 'radical';

  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontSize: '2rem' }}>GitHub Profile Add-ons
      <span style={{ marginLeft: '8px', cursor: 'pointer', position: 'relative' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
              </svg>
              <div style={{
                display: 'none',
                position: 'absolute',
                left: '140%',
                top: '55%',
                transform: 'translateY(-50%)',
                background: '#222',
                color: '#fff',
                padding: '10px 16px',
                borderRadius: '8px',
                fontSize: '14px',
                whiteSpace: 'pre-line',
                zIndex: 100,
                minWidth: '350px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }}
              className="font-tooltip"
              >
                <div className="font-tooltip-arrow" style={{
                  position: 'absolute',
                  left: '-6px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 0,
                  height: 0,
                  borderTop: '7px solid transparent',
                  borderBottom: '7px solid transparent',
                  borderRight: '8px solid #222'
                }} />
                <div>
                  <strong>Tip:</strong> Enter your <span style={{ color: '#60a5fa' }}>GitHub username</span> below to enable stats cards and add-ons!
                </div>
              </div>
            </span>
      </h2>
      
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

      {/* Theme Selector */}
      <div className="mb-4">
        <label htmlFor="githubTheme" className="block text-sm font-medium text-gray-700 mb-2">
          Choose Theme for Stats Cards
        </label>
        <select
          id="githubTheme"
          name="githubTheme"
          value={currentTheme}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white"
        >
          {themes.map((theme) => (
            <option key={theme.value} value={theme.value}>
              {theme.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4" id='github-profile-section'>
        {/* GitHub Stats Card */}
        <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <input
          style={{cursor:'pointer'}}
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
          style={{cursor:'pointer'}}
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

        {/* GitHub Streak Stats */}
        <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <input
          style={{cursor:'pointer'}}
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

        {/* Profile Views Counter */}
        <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <input
          style={{cursor:'pointer'}}
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

        {/* Contribution Graph */}
        <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <input
          style={{cursor:'pointer'}}
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
        {/* GitHub Trophies */}
        <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <input
          style={{cursor:'pointer'}}
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

        {/* GitHub Profile Summary Cards */}
        <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <input
          style={{cursor:'pointer'}}
            type="checkbox"
            id="showSummaryCards"
            checked={analytics.showSummaryCards || false}
            onChange={(e) => handleAnalyticsChange('showSummaryCards', e.target.checked)}
            className="h-4 w-4 text-blue-600 rounded border-gray-300"
          />
          <label htmlFor="showSummaryCards" className="text-gray-700 cursor-pointer flex-1">
            Show GitHub Profile Summary Cards
          </label>
        </div>

        {/* Random Tech Quote */}
        <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <input
          style={{cursor:'pointer'}}
            type="checkbox"
            id="showTechQuote"
            checked={analytics.showTechQuote || false}
            onChange={(e) => handleAnalyticsChange('showTechQuote', e.target.checked)}
            className="h-4 w-4 text-blue-600 rounded border-gray-300"
          />
          <label htmlFor="showTechQuote" className="text-gray-700 cursor-pointer flex-1">
            Show Random Tech Quote
          </label>
        </div>
      </div>

      {/* Preview Section */}
      {formData.githubUsername && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Preview</h3>
          <div className="space-y-4" id='github-profile-preview'>
            <div id='github-profile-preview-container'>
            {analytics.showStatsCard && (
              <div className="bg-white p-4 rounded-lg shadow-sm" style={{marginTop: '10px', marginBottom: '10px'}}>
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${formData.githubUsername}&show_icons=true&theme=${currentTheme}`}
                  alt="GitHub Stats"
                  className="w-full rounded-lg"
                />
              </div>
            )}
            {analytics.showLanguages && (
              <div className="bg-white p-4 rounded-lg shadow-sm" style={{marginTop: '10px', marginBottom: '10px'}}>
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${formData.githubUsername}&layout=compact&theme=${currentTheme}`}
                  alt="Most Used Languages"
                  className="w-full rounded-lg"
                />
              </div>
            )}
            </div>
            {analytics.showStreakStats && (
              <div className="bg-white p-4 rounded-lg shadow-sm" style={{marginTop: '10px', marginBottom: '10px'}}>
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${formData.githubUsername}&theme=${currentTheme}`}
                  alt="GitHub Streak Stats"
                  className="w-full rounded-lg"
                />
              </div>
            )}
            {analytics.showProfileViews && (
              <div className="bg-white p-4 rounded-lg shadow-sm" style={{marginTop: '10px', marginBottom: '10px'}}>
                <img
                  src={`https://komarev.com/ghpvc/?username=${formData.githubUsername}&color=brightgreen`}
                  alt="Profile Views"
                  className="rounded-lg"
                />
              </div>
            )}
            {analytics.showContributions && (
              <div className="bg-white p-4 rounded-lg shadow-sm" style={{marginTop: '10px', marginBottom: '10px'}}>
                <img
                  src={`https://github-readme-activity-graph.vercel.app/graph?username=${formData.githubUsername}&theme=${currentTheme}`}
                  alt="Contribution Graph"
                  className="w-full rounded-lg"
                />
              </div>
            )}
            {analytics.showTrophies && (
              <div className="bg-white p-4 rounded-lg shadow-sm" style={{marginTop: '10px', marginBottom: '10px'}}>
                <img
                  src={`https://github-profile-trophy.vercel.app/?username=${formData.githubUsername}&theme=${currentTheme}&no-frame=false&no-bg=true&margin-w=4`}
                  alt="GitHub Trophies"
                  className="w-full rounded-lg"
                />
              </div>
            )}
            {analytics.showSummaryCards && (
              <div className="bg-white p-4 rounded-lg shadow-sm" style={{marginTop: '10px', marginBottom: '10px'}}>
                <img
                  src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${formData.githubUsername}&theme=${currentTheme}`}
                  alt="GitHub Profile Summary"
                  className="w-full rounded-lg"
                />
              </div>
            )}
            {analytics.showTechQuote && (
              <div className="bg-white p-4 rounded-lg shadow-sm" style={{marginTop: '10px', marginBottom: '10px'}}>
                <div className="text-center">
                  <img 
                    src={`https://quotes-github-readme.vercel.app/api?type=horizontal&theme=${currentTheme}`}
                    alt="Random Dev Quote"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubProfileSection; 