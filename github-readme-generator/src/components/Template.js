// This file defines the pre-designed README templates.
// Each object contains the data that will pre-fill the form.

export const templates = [
    {
      name: 'Minimalist',
    //   description: 'A clean and straightforward layout. Perfect for developers who prefer a no-frills, content-first approach to showcase their work effectively.',
      data: {
        name: 'Your Name',
        // projectName: 'Project Title',
        tagline: 'A brief and catchy tagline for your project.',
        description: '',
        githubUsername: '',
        work: [
          { projectName: 'My current project', projectLink: '' },
          { projectName: '', projectLink: '' },
          { projectName: '', projectLink: '' },
          { info: 'I am learning...' },
          { info: '' },
          { info: '' },
          { info: '' },
        ],
        skills: {
          'Languages': ['JavaScript', 'Python'],
          'Frontend': ['React', 'HTML5', 'CSS3'],
          'Backend': ['Node.js'],
        },
        socials: {
          github: '',
          linkedin: '',
        },
        analytics: {
          showStatsCard: true,
          showLanguages: false,
          showContributions: false,
          showProfileViews: true,
          showStreakStats: false,
          showTrophies: false,
          showSummaryCards: false,
          showTechQuote: false,
        },
        githubTheme: 'default',
        typingSvg: {
          lines: ['Software Developer', 'Tech Enthusiast'],
          font: 'Fira Code',
          color: '36BCF7',
          size: 20,
          repeat: true
        }
      }
    },
    {
      name: 'Professional',
    //   description: 'A comprehensive and structured template. Ideal for showcasing extensive experience, detailed projects, and a full range of technical skills for recruiters.',
      data: {
        name: 'Your Name',
        // projectName: 'Professional Project Name',
        tagline: 'An enterprise-ready solution for modern challenges.',
        description: 'A detailed paragraph describing the project\'s purpose, features, and the problems it solves.',
        githubUsername: '',
        work: [
          { projectName: 'The project I am currently building.', projectLink: '' },
          { projectName: 'I am looking to collaborate on...', projectLink: '' },
          { projectName: '', projectLink: '' },
          { info: 'I am currently learning advanced system design.' },
          { info: 'Ask me about architectural patterns and best practices.' },
          { info: 'You can reach me at my professional email.' },
          { info: '' },
        ],
        skills: {
          'Languages': ['Java', 'TypeScript', 'Go'],
          'Frontend': ['Angular', 'Redux', 'Webpack'],
          'Backend': ['Spring Boot', 'Node.js', 'Express'],
          'Database': ['PostgreSQL', 'MongoDB', 'Redis'],
          'DevOps': ['Docker', 'Kubernetes', 'AWS', 'Jenkins'],
        },
        socials: {
          github: '',
          linkedin: '',
          twitter: '',
        },
        analytics: {
          showStatsCard: true,
          showLanguages: true,
          showContributions: true,
          showProfileViews: true,
          showStreakStats: true,
          showTrophies: true,
          showSummaryCards: true,
          showTechQuote: false,
        },
        githubTheme: 'dracula',
        typingSvg: {
          lines: ['Senior Software Engineer', 'Cloud-Native Advocate', 'Open Source Contributor'],
          font: 'monospace',
          color: '87CEEB',
          size: 22,
          repeat: true
        }
      }
    },
    {
      name: 'Creative',
    //   description: 'A vibrant and expressive layout that uses fun elements and unique themes to stand out. Perfect for designers and frontend developers with a creative flair.',
      data: {
        name: 'Your Creative Name',
        // projectName: 'My Awesome Creation',
        tagline: '🚀 Turning ideas into reality with a splash of color! 🚀',
        description: 'Welcome to my creative space! This project is a fusion of technology and art.',
        githubUsername: '',
        work: [
          { projectName: 'A super secret, fun project!', projectLink: '' },
          { projectName: 'Open to collaborating on anything cool and visual!', projectLink: '' },
          { projectName: '', projectLink: '' },
          { info: 'I\'m learning creative coding with p5.js.' },
          { info: 'Ask me about UI/UX design or generative art.' },
          { info: '' },
          { info: 'Fun Fact: I can solve a Rubik\'s Cube in under a minute!' },
        ],
        skills: {
          'Languages': ['JavaScript', 'Python'],
          'Frontend': ['Svelte', 'Tailwind CSS', 'Framer'],
          'Creative Tools': ['Figma', 'Adobe Illustrator', 'Photoshop'],
          'AI/ML': ['TensorFlow'],
        },
        socials: {
          github: '',
          dribbble: '',
          instagram: '',
          twitter: '',
        },
        analytics: {
          showStatsCard: true,
          showLanguages: true,
          showContributions: false,
          showProfileViews: true,
          showStreakStats: true,
          showTrophies: true,
          showSummaryCards: false,
          showTechQuote: true,
        },
        githubTheme: 'tokyonight',
        typingSvg: {
          lines: ['Digital Dreamer', 'Pixel Perfect', 'Code & Coffee'],
          font: 'Sacramento',
          color: 'FF69B4',
          size: 30,
          repeat: true
        }
      }
    }
  ];