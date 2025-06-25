import React, { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';
import Navbar from './components/Navbar';
import TitleSection from './components/TitleSection';
import WorkSection from './components/WorkSection';
import SkillsSection from './components/SkillsSection';
import SocialsSection from './components/SocialSection';
import NotificationModel from './components/NotificationModel';
import GitHubProfileSection from './components/GitHubProfileSection';
import AboutMeSection from './components/AboutMeSection';
import TypingSVGSection from './components/TypingSVGSection';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    projectName: '',
    tagline: '',
    description: '',
    githubUsername: '',
    work: [
      { projectName: '', projectLink: '' },
      { projectName: '', projectLink: '' },
      { projectName: '', projectLink: '' },
    ],
    skills: {},
    analytics: {
      showStatsCard: false,
      showLanguages: false,
      showContributions: false,
      showProfileViews: false,
      showStreakStats: false,
      showTrophies: false
    },
    githubTheme: 'radical',
    typingSvg: {
      lines: [''],
      font: 'Fira Code',
      color: '#000000',
      size: 24,
      repeat: true
    }
  });

  const [copySuccess, setCopySuccess] = useState(false);
  const [showMarkdownCard, setShowMarkdownCard] = useState(false);
  const [editableMarkdown, setEditableMarkdown] = useState('');
  const [copyEditSuccess, setCopyEditSuccess] = useState(false);

  const socialBadges = {
    github: {
      urlPrefix: "https://github.com/",
      badge: "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
    },
    twitter: {
      urlPrefix: "https://twitter.com/",
      badge: "https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"
    },
    devto: {
      urlPrefix: "https://dev.to/",
      badge: "https://img.shields.io/badge/Dev.to-0A0A0A?style=for-the-badge&logo=devdotto&logoColor=white"
    },
    codepen: {
      urlPrefix: "https://codepen.io/",
      badge: "https://img.shields.io/badge/CodePen-000000?style=for-the-badge&logo=codepen&logoColor=white"
    },
    stackoverflow: {
      urlPrefix: "https://stackoverflow.com/users/",
      badge: "https://img.shields.io/badge/StackOverflow-F58025?style=for-the-badge&logo=stackoverflow&logoColor=white"
    },
    linkedin: {
      urlPrefix: "https://linkedin.com/in/",
      badge: "https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"
    },
    facebook: {
      urlPrefix: "https://facebook.com/",
      badge: "https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white"
    },
    instagram: {
      urlPrefix: "https://instagram.com/",
      badge: "https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"
    },
    medium: {
      urlPrefix: "https://medium.com/",
      badge: "https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white"
    },
    youtube: {
      urlPrefix: "https://youtube.com/",
      badge: "https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"
    },
    reddit: {
      urlPrefix: "https://reddit.com/user/",
      badge: "https://img.shields.io/badge/Reddit-FF4500?style=for-the-badge&logo=reddit&logoColor=white"
    },
    twitch: {
      urlPrefix: "https://twitch.tv/",
      badge: "https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white"
    },
    discord: {
      urlPrefix: "https://discord.com/users/", // adjust if you're using invite or tag
      badge: "https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white"
    },
    dribbble: {
      urlPrefix: "https://dribbble.com/",
      badge: "https://img.shields.io/badge/Dribbble-EA4C89?style=for-the-badge&logo=dribbble&logoColor=white"
    },
    behance: {
      urlPrefix: "https://behance.net/",
      badge: "https://img.shields.io/badge/Behance-1769FF?style=for-the-badge&logo=behance&logoColor=white"
    },
    pinterest: {
      urlPrefix: "https://pinterest.com/",
      badge: "https://img.shields.io/badge/Pinterest-E60023?style=for-the-badge&logo=pinterest&logoColor=white"
    },
    telegram: {
      urlPrefix: "https://t.me/",
      badge: "https://img.shields.io/badge/Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white"
    },
    whatsapp: {
      urlPrefix: "https://wa.me/", // Or use 'https://api.whatsapp.com/send?phone=' for international format
      badge: "https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"
    }
  };

  // Place this above the generateMarkdown function, so you can use skillIcons inside it
  const skillIcons = {
    // Programming Languages
    'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'Go': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
    'Ruby': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg',
    'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    'Kotlin': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
    'Scala': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg',
    'Perl': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/perl/perl-original.svg',
    'Dart': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
    'Haskell': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg',
    'Objective-C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg',
    'R': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
    'Lua': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg',
    'Bash': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
    'Shell': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
    'Elixir': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg',
    'Clojure': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clojure/clojure-original.svg',
    'F#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fsharp/fsharp-original.svg',
    'Erlang': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/erlang/erlang-original.svg',
    'Fortran': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fortran/fortran-original.svg',
    'Groovy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/groovy/groovy-original.svg',
    'Crystal': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/crystal/crystal-original.svg',
    'Julia': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg',
    'Prolog': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prolog/prolog-original.svg',
    'OCaml': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ocaml/ocaml-original.svg',
    'PowerShell': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg',
    'Rust': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg',
    'Assembly': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/assembly/assembly-original.svg',
    'COBOL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cobol/cobol-original.svg',
    'Ada': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ada/ada-original.svg',
    'Lisp': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lisp/lisp-original.svg',
    'Scheme': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scheme/scheme-original.svg',
    'Smalltalk': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/smalltalk/smalltalk-original.svg',
    'Pascal': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pascal/pascal-original.svg',
    'Delphi': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/delphi/delphi-original.svg',
    'Visual Basic': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vb/vb-original.svg',
    'VBA': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vba/vba-original.svg',
    'ABAP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/abap/abap-original.svg',
    'PL/SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plsql/plsql-original.svg',
    'T-SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tsql/tsql-original.svg',
    'Transact-SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tsql/tsql-original.svg',

    // Frontend Development
    '11ty': 'https://gist.githubusercontent.com/vivek32ta/c7f7bf583c1fb1c58d89301ea40f37fd/raw/f4c85cce5790758286b8f155ef9a177710b995df/11ty.svg',
    'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    'AngularJS': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original-wordmark.svg',
    'Backbone.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/backbonejs/backbonejs-original.svg',
    'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    'Bulma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg',
    'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'Ember.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ember/ember-original.svg',
    'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'Gatsby': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-original.svg',
    'Gridsome': 'https://www.vectorlogo.zone/logos/gridsome/gridsome-icon.svg',
    'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'Hugo': 'https://gohugo.io/favicon.ico',
    'Jekyll': 'https://jekyllrb.com/favicon.ico',
    'Materialize CSS': 'https://materializecss.com/res/materialize.svg',
    'Middleman': 'https://raw.githubusercontent.com/leungwensen/svg-icon/b84b3f3a3da329b7c1d02346865f8e98beb05413/dist/svg/logos/middleman.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'Pug': 'https://www.vectorlogo.zone/logos/pugjs/pugjs-icon.svg',
    'React': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
    'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Redux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    'Sapper': 'https://sapper.svelte.dev/favicon.png',
    'Sass': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    'Scully': 'https://raw.githubusercontent.com/scullyio/scully/main/assets/logos/SVG/scullyio-icon.svg',
    'Svelte': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'Vuetify': 'https://cdn.vuetifyjs.com/images/logos/vuetify-logo-light.svg',
    'Webpack': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',

    // Backend Development
    'CodeIgniter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg',
    'CoffeeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/coffeescript/coffeescript-original.svg',
    '.NET': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
    'Flask': 'https://img.icons8.com/nolan/64/flask.png',
    'NestJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Ruby on Rails': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg',
    'Symfony': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg',

    // Mobile App Development
    'Android': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
    'Apache Cordova': 'https://www.vectorlogo.zone/logos/apache_cordova/apache_cordova-icon.svg',
    'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    'Ionic': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
    'NativeScript': 'https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/nativescript.svg',
    'Swift': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
    'Xamarin': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg',

    // AI/ML
    'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    'Keras': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg',
    'Scikit-learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
    'OpenCV': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
    'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
    'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
    'Matplotlib': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg',
    'Jupyter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',

    // Database
    'CockroachDB': 'https://www.vectorlogo.zone/logos/cockroachlabs/cockroachlabs-icon.svg',
    'CouchDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/couchdb/couchdb-original.svg',
    'MariaDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    '(MSSQL)': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'Oracle': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'Realm': 'https://avatars.githubusercontent.com/u/7575099?s=200&v=4',
    'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    'SQLite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',

    // Data Visualization
    'D3.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg',
    'Plotly': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plotly/plotly-original.svg',
    'Google Charts': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
    'ZingChart': 'https://www.zingchart.com/favicon.ico',
    'Matlab': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg',
    'Hadoop': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg',
    'Hive': 'https://www.vectorlogo.zone/logos/apache_hive/apache_hive-icon.svg',
    'Seaborn': 'https://seaborn.pydata.org/_images/logo-mark-lightbg.svg',

    // Devops
    'AWS': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    'Azure': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    'Babel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg',
    'CircleCI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    '(GCP)': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    'Grafana': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg',
    'Jenkins': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
    'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    'Nginx': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
    'OpenResty': 'https://openresty.org/images/logo.png',
    'Travis CI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/travis/travis-plain.svg',
    'Vagrant': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vagrant/vagrant-original.svg',

    // Backend as a Service(BaaS)
    'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    'Heroku': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg',
    'Netlify': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg',
    'Supabase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
    'DigitalOcean': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg',

    // Framework
    'Spring': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    'Django': 'https://img.icons8.com/color/240/django.png',
    'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    'Nuxt.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
    'Meteor': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/meteor/meteor-original.svg',
    'AdonisJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg',
    'Phoenix': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phoenix/phoenix-original.svg',
    'CakePHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cakephp/cakephp-original.svg',
    

    // Software
    'Adobe Illustrator': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg',
    'Adobe XD': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg',
    'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    'Framer': 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg',
    'InVision': 'https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg',
    'Photoshop': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
    'Sketch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg',

    // Testing
    'Jest': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    'Mocha': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg',
    'Selenium': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg',
    'JUnit': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg',
    'PyTest': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg',
    'RSpec': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rspec/rspec-original.svg',
    'Karma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/karma/karma-original.svg',
  };

  const generateMarkdown = () => {
    const { name, projectName, tagline, description, work, skills, socials, analytics, githubUsername, githubTheme, typingSvg } = formData;
    let markdown = '';

    // Get current theme (default to 'radical' if not set)
    const currentTheme = githubTheme || 'radical';

    // Add the "Hi I'm ..." line if name is present
    if (name && name.trim() !== '') {
      markdown += `<div align="center">\n\n# Hi 👋, I'm ${name}!\n\n</div>\n\n`;
    }

    // Project name as main heading if not already included in the name
    if (projectName && (!name || projectName !== name)) {
      markdown += `## **${projectName}**\n\n`;
    }

    if (tagline) markdown += `<div align="center">\n\n${tagline}\n\n</div>\n\n`;
    if (description) markdown += `<div align="center">\n\n${description}\n\n</div>\n\n`;

    // Add animated typing SVG after subtitle section
    if (typingSvg && typingSvg.lines && typingSvg.lines.length > 0) {
      const nonEmptyLines = typingSvg.lines.filter(line => line.trim() !== '');
      if (nonEmptyLines.length > 0) {
        const displayLines = nonEmptyLines.length > 0 ? nonEmptyLines : ["My Name is Abhijeet"];
        const linesParam = `&lines=${displayLines.map(encodeURIComponent).join(";")}`;
        const svgUrl = `https://readme-typing-svg.herokuapp.com?font=${encodeURIComponent(typingSvg.font)}&size=${typingSvg.size}&pause=1000&color=${typingSvg.color.replace("#", "")}&width=435${linesParam}&center=true&vCenter=true&repeat=${typingSvg.repeat}`;
        
        markdown += `<div align="center">\n\n![Typing SVG](${svgUrl})\n\n</div>\n\n`;
      }
    }

    // Add "Work" section only if at least one project is present
    const hasWorkContent = work.some(item => item.projectName);
    if (hasWorkContent) {
      markdown += '## **💻 Work**\n';
      work.forEach(({ projectName, projectLink }) => {
        if (projectName) {
          markdown += `- ${projectLink ? `I'm currently working on [${projectName}](${projectLink})` : `I'm currently working on ${projectName}`}\n`;
        }
      });
      markdown += '\n';
    }

    // Skills Section
    markdown += '## **⚒️ Skills**\n';
    Object.entries(skills).forEach(([category, skillList]) => {
      if (skillList.length > 0) {
        markdown += `### **${category}**\n`;
        const skillIconsRow = skillList.map((skill) => {
          return skillIcons[skill]
            ? `<img src="${skillIcons[skill]}" alt="${skill}" width="48" height="48" style="vertical-align:middle; margin-right:100px;"/>`
            : '';
        }).join(' ');
        markdown += `${skillIconsRow}\n\n`;
      }
    });

    // Analytics Section
    if (analytics && Object.values(analytics).some(value => value)) {
      markdown += '## **📊 Analytics & Statistics**\n\n';
      
      // Create a container for side-by-side stats
      let hasSideBySideStats = false;
      if (analytics.showStatsCard || analytics.showLanguages) {
        markdown += '<div align="center">\n\n';
        markdown += '<table>\n<tr>\n';
        
        if (analytics.showStatsCard) {
          markdown += '<td>\n\n';
          markdown += `<img src="https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=${currentTheme}&hide_border=true&card_width=400" alt="GitHub Stats" />\n\n`;
          markdown += '</td>\n';
          hasSideBySideStats = true;
        }
        
        if (analytics.showLanguages) {
          markdown += '<td>\n\n';
          markdown += `<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=${currentTheme}&hide_border=true&card_width=400" alt="Most Used Languages" />\n\n`;
          markdown += '</td>\n';
          hasSideBySideStats = true;
        }
        
        if (hasSideBySideStats) {
          markdown += '</tr>\n</table>\n\n';
          markdown += '</div>\n\n';
        }
      }

      // Streak stats centered
      if (analytics.showStreakStats) {
        markdown += '<div align="center">\n\n';
        markdown += `<img src="https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=${currentTheme}" alt="GitHub Streak Stats" />\n\n`;
        markdown += '</div>\n\n';
      }

      // Contribution graph at 100% width
      if (analytics.showContributions) {
        markdown += `<img src="https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&theme=${currentTheme}" alt="Contribution Graph" />\n\n`;
      }

      // Profile views centered
      if (analytics.showProfileViews) {
        markdown += '<div align="center">\n\n';
        markdown += `<img src="https://komarev.com/ghpvc/?username=${githubUsername}&color=brightgreen" alt="Profile Views" />\n\n`;
        markdown += '</div>\n\n';
      }

      // Trophies centered
      if (analytics.showTrophies) {
        markdown += '<div align="center">\n\n';
        markdown += `<img src="https://github-profile-trophy.vercel.app/?username=${githubUsername}&theme=${currentTheme}&no-frame=false&no-bg=true&margin-w=4" alt="GitHub Trophies" />\n\n`;
        markdown += '</div>\n\n';
      }
    }

    // Add Socials section
    if (socials && Object.values(socials).some(username => username)) {
      markdown += '\n## **📱 Socials**\n\n';
      markdown += `<p align="left">\n`;

      Object.entries(socials).forEach(([platform, username]) => {
        const data = socialBadges[platform];
        if (data && username) {
          const fullLink = `${data.urlPrefix}${username}`;
          markdown += `  <a href="${fullLink}" target="_blank"><img src="${data.badge}" /></a>\n`;
        }
      });

      markdown += `</p>\n`;
    }

    // Add trademark/footer
    markdown += `\n---\n`;
    markdown += `<p align="center">This README was generated with ❤️ by <a href="https://github.com/abhijeetBhale/Readme-Generator" target="_blank"><img src="https://img.shields.io/badge/GitHub%20Readme%20Generator-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Readme Generator" /></a></p>\n`;
    markdown += `<p align="center">Developed by <b>Abhijeet Bhale</b></p>\n`;

    return markdown;
  };

  const handleCopyToClipboard = async () => {
    const markdown = generateMarkdown();
    try {
      await navigator.clipboard.writeText(markdown);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleCopyEditableMarkdown = async () => {
    try {
      await navigator.clipboard.writeText(editableMarkdown);
      setCopyEditSuccess(true);
      setTimeout(() => setCopyEditSuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Helper to check if at least one input or skill is filled
  const isAnyInputFilled = () => {
    const { name, projectName, tagline, description, githubUsername, work, skills, socials, analytics, typingSvg } = formData;
    // Check text fields
    const textFields = [name, projectName, tagline, description, githubUsername];
    const hasText = textFields.some(val => val && val.trim());
    // Check work
    const hasWork = work && work.some(item => item.projectName || item.projectLink);
    // Check skills
    const hasSkills = skills && Object.values(skills).some(arr => Array.isArray(arr) && arr.length > 0);
    // Check socials
    const hasSocials = socials && Object.values(socials || {}).some(val => val && val.trim());
    // Check analytics
    const hasAnalytics = analytics && Object.values(analytics).some(val => val);
    // Check typing SVG
    const hasTypingSvg = typingSvg && typingSvg.lines && typingSvg.lines.some(line => line && line.trim() !== '');
    return hasText || hasWork || hasSkills || hasSocials || hasAnalytics || hasTypingSvg;
  };

  const [showInputWarning, setShowInputWarning] = useState(false);

  const handleGenerate = () => {
    if (!isAnyInputFilled()) {
      setShowInputWarning(true);
      setTimeout(() => setShowInputWarning(false), 2000);
      return;
    }
    const markdown = generateMarkdown();
    setEditableMarkdown(markdown);
    setShowMarkdownCard(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <Navbar />
      <div className="container mx-auto p-4 max-w-4xl">
        <NotificationModel />
        <TitleSection formData={formData} setFormData={setFormData} />
        <WorkSection formData={formData} setFormData={setFormData} />
        <TypingSVGSection formData={formData} setFormData={setFormData} />
        <SkillsSection formData={formData} setFormData={setFormData} skillIcons={skillIcons} />
        <SocialsSection formData={formData} setFormData={setFormData} socialBadges={socialBadges} />
        <GitHubProfileSection formData={formData} setFormData={setFormData} />
        
        
        <div className="flex justify-center gap-4" id='generate-btn'>
          <button 
            className="cssbuttons-io-button"
            onClick={handleGenerate}
            type="button"
          >
            Generate README
            <div className="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
          <button 
            className={`cssbuttons-io-button ${copySuccess ? 'success' : ''}`}
            onClick={handleCopyToClipboard}
            type="button"
          >
            {copySuccess ? 'Copied!' : 'Copy to Clipboard'}
            <div className="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16 1H4C2.9 1 2 1.9 2 3v14h2V3h12V1zm3 4H8C6.9 5 6 5.9 6 7v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
      {showInputWarning && (
        <div className="card container my-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4" id="input-warning">
          <div className="flex items-center" id='input-warning-icon'>
            <span className="font-bold mr-5">⚠️</span>
            At least one skill or input is required to generate your README.
          </div>
        </div>
      )}
      {showMarkdownCard && isAnyInputFilled() && (
        <>
        <div className="card container my-6" id="markdown-card">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-bold">README Preview (Editable)</h3>
            <button
            id='copy-btn'
              className={`cssbuttons-io-button ${copyEditSuccess ? 'success' : ''}`}
              style={{ fontSize: '1rem', padding: '0.3em 1em', height: '2.2em' }}
              onClick={handleCopyEditableMarkdown}
              type="button"
            >
              {copyEditSuccess ? 'Copied!' : 'Copy'}
              <div className="icon" id='copy-btn-icon'>
                <svg height="20" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M16 1H4C2.9 1 2 1.9 2 3v14h2V3h12V1zm3 4H8C6.9 5 6 5.9 6 7v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" fill="currentColor"></path>
                </svg>
              </div>
            </button>
          </div>
          <textarea
            className="w-full p-2 border rounded font-mono text-sm bg-gray-50"
            rows={Math.max(12, editableMarkdown.split('\n').length)}
            value={editableMarkdown}
            onChange={e => setEditableMarkdown(e.target.value)}
            spellCheck={false}
            style={{ resize: 'vertical', minHeight: 200, fontFamily: 'monospace', background: '#f9fafb', color: '#222' }}
          />
          <div className="text-xs text-gray-500 mt-2" id='markdown-card-footer'>You can edit and copy this markdown as needed.</div>
        </div>
        <AboutMeSection />
        </>
      )}
      <footer className="text-center py-4" id='footer'>
        <p className="text-gray-600">
          Made with ❤️ by <a href="https://github.com/abhijeetBhale" target="_blank" className="text-blue-500 hover:underline">Abhijeet Bhale</a>
        </p>
      </footer>
    </div>
  );
};

export default App;