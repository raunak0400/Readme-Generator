import React from 'react';
import Button from './GitHubStar';
import DemoVideo from './DemoVideo';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white p-4 shadow-md flex justify-between items-center" id='nav-bar'>
      <h1 className="text-2xl font-bold" id='nav'>GitHub <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-markdown-fill" viewBox="0 0 16 16">
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 1a.5.5 0 0 0-.5.5v3.793L9.854 8.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L12 9.293V5.5a.5.5 0 0 0-.5-.5M3.56 7.01h.056l1.428 3.239h.774l1.42-3.24h.056V11h1.073V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H2.5V11h1.06z" />
      </svg></span> Generator</h1>
      <div className="flex gap-4 items-center" id='git-btns'>
        <DemoVideo />
        <a
          href="https://github.com/abhijeetBhale/Readme-Generator"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-gray-800 px-4 py-2 rounded-full shadow-md hover:bg-gray-100 hover:scale-105 transition-all duration-200"
          style={{ textDecoration: 'none' }}
        >
          <Button />
        </a> 
      </div>
    </nav>
  );
};

export default Navbar;