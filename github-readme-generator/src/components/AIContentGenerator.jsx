import React, { useState } from 'react';
import Loader from './Loader';

/**
 * A modal component for users to input keywords for AI content generation.
 * @param {object} props - The component props.
 * @param {function} props.onGenerate - Function to call when the generate button is clicked.
 * @param {function} props.onClose - Function to call to close the modal.
 * @param {boolean} props.loading - Indicates if the content is being generated.
 */
const AIContentGenerator = ({ onGenerate, onClose, loading }) => {
  const [keywords, setKeywords] = useState('');

  const handleGenerateClick = () => {
    // Check for loading state to prevent multiple clicks
    if (keywords.trim() && !loading) {
      onGenerate(keywords);
    }
  };

  return (
    <div className="ai-generator-modal-overlay">
      <div className="ai-generator-modal">
        <button onClick={onClose} className="close-button" disabled={loading}>&times;</button>
        <h3 className="text-lg font-bold mb-4">AI Content Generator</h3>
        <p className="text-sm text-gray-600 mb-4">
          Enter a few keywords (e.g., "React developer, loves coffee, open-source contributor"), and the AI will generate a bio for you.
        </p>
        <textarea
          className="w-full p-2 border rounded font-mono text-sm bg-gray-100 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="Enter keywords here..."
          disabled={loading}
        />
        <button
          className="cssbuttons-io-button"
          onClick={handleGenerateClick}
          disabled={loading || !keywords.trim()}
        >
          {loading ? 'Generating...' : 'Generate Suggestions'}
           <div className="icon">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.16 12H18a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2.84"/><path d="M12 18V6"/><path d="m9 9 3-3 3 3"/></svg>
            </div>
        </button>
      </div>
    </div>
  );
};

/**
 * A modal to display AI-generated suggestions.
 * @param {object} props - The component props.
 * @param {string[]} props.suggestions - The list of suggestions to display.
 * @param {function} props.onApply - Function to call when a suggestion is applied.
 * @param {function} props.onClose - Function to call to close the modal.
 * @param {boolean} props.loading - Indicates if the suggestions are being loaded.
 */
const SuggestionsModal = ({ suggestions, onApply, onClose, loading }) => {
  return (
    <div className="ai-generator-modal-overlay">
      <div className="ai-generator-modal">
        <button onClick={onClose} className="close-button">&times;</button>
        <h3 className="text-lg font-bold mb-4">AI Suggestions</h3>
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <Loader />
          </div>
        ) : (
          <div className="suggestions-list">
            {suggestions.length > 0 ? (
              suggestions.map((suggestion, index) => (
                <div key={index} className="suggestion-item">
                  <p className="flex-grow p-2 bg-gray-50 rounded">{suggestion}</p>
                  <button
                    className="apply-button"
                    onClick={() => onApply(suggestion)}
                  >
                    Apply
                  </button>
                </div>
              ))
            ) : (
               <p className="text-gray-500 text-center">
                 No suggestions were generated. <br/>
                 This could be due to a network issue or restrictive keywords. Please try again.
               </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export { AIContentGenerator, SuggestionsModal };
