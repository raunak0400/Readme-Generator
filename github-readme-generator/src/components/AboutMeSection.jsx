import React from 'react';
// import DemoVideo from './DemoVideo';
import demoVideo from '../assets/DemoVideo.mp4';

const AboutMeSection = () => {
  return (
    <div className="card" id="about-me-section">
      <h2 className="text-2xl font-bold mb-4" style={{textAlign: 'center', fontSize: '3rem', marginBottom: '20px'}}>About Me</h2>
      {/* 1. How do I create a profile README? */}
      <div className="mb-6" >
        <h3 className="text-xl font-semibold mb-2">How do I create a profile README?</h3>
        <ol className="list-decimal list-inside space-y-1 text-gray-700" id="about-me-section-1">
           <p className="font-mono bg-gray-100 px-1 rounded">The profile README is created by creating a new repository that's the same name as your username. For example, my GitHub username is <strong>abhijeetBhale</strong> so I created a new repository with the name <strong>abhijeetBhale</strong>. Note: at the time of this writing, in order to access the profile README feature, the letter-casing must match your GitHub username.</p> 
          <li>
          Create a new repository with the same name (including casing) as your GitHub <span className="font-mono bg-gray-100 px-1 rounded"> <a href="https://github.com/new" target="_blank" rel="noopener noreferrer">https://github.com/new</a></span>.
          </li>
          <li>
            Add a <span className="font-mono bg-gray-100 px-1 rounded">README.md</span> file to the new repo with your desired content (text, GIFs, images, emojis, etc.).
          </li>
          <li>
            Commit your new README. If using GitHub's web interface, you can commit directly to the main branch to make it visible on your profile.
          </li>
          <li>
            Push changes to GitHub if you made them locally.
          </li>
        </ol>
      </div>
      {/* 2. How to use? */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">How to use?</h3>
        <p className="mb-2 text-gray-700" id="about-me-section-1">Tired of editing your profile README to add new features like visitors-count badge, github-stats, etc? Just fill the form and let the tool do the work for you!</p>
        
        <div className="w-full max-w-xl mx-auto rounded overflow-hidden border border-gray-200 bg-black" id="frame-box">
          <video
            src={demoVideo}
            autoPlay
            loop
            muted
            controls={true}
            className="w-full h-64 object-cover rounded"
            title="Demo Video"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* 3. Why visitors count keeps on increasing? */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Why visitors count keeps on increasing?</h3>
        <p className="text-gray-700 mb-1" id="about-me-section-1">
          Many users have noticed that the counter increases every time the page reloads. This is because it shows the total number of visits, not unique visitors. The goal is to provide a good stat of how well your GitHub profile is doing.
        </p>
      </div>
    </div>
  );
};

export default AboutMeSection; 