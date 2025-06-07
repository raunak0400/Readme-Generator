import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import Navbar from './components/Navbar';
import TitleSection from './components/TitleSection';
import WorkSection from './components/WorkSection';
import SkillsSection from './components/SkillsSection';

const App = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    tagline: '',
    description: '',
    work: [
      { projectName: '', projectLink: '' },
      { projectName: '', projectLink: '' },
      { projectName: '', projectLink: '' },
    ],
    skills: {},
  });

  const generateMarkdown = () => {
    const { projectName, tagline, description, work, skills } = formData;
    let markdown = `# ${projectName}\n\n${tagline}\n\n${description}\n\n## Work\n`;
    
    if (work[0].projectName)
      markdown += `- I'm currently working on [${work[0].projectName}](${work[0].projectLink})\n`;
    if (work[1].projectName)
      markdown += `- I'm looking to collaborate on [${work[1].projectName}](${work[1].projectLink})\n`;
    if (work[2].projectName)
      markdown += `- I'm looking for help with [${work[2].projectName}](${work[2].projectLink})\n`;
    
    markdown += '\n## Skills\n';
    Object.entries(skills).forEach(([category, skillList]) => {
      if (skillList.length > 0) {
        markdown += `### ${category}\n${skillList.map((skill) => `- ${skill}`).join('\n')}\n`;
      }
    });

    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
    saveAs(blob, 'README.md');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <Navbar />
      <div className="container mx-auto p-4 max-w-4xl">
        <TitleSection formData={formData} setFormData={setFormData} />
        <WorkSection formData={formData} setFormData={setFormData} />
        <SkillsSection formData={formData} setFormData={setFormData} />
        <button
          onClick={generateMarkdown}
          className="mt-4 w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md "
        >
          Generate README
        </button>
      </div>
    </div>
  );
};

export default App;