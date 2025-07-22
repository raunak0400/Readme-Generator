import React, { useState, useEffect, useRef } from 'react';
import { saveAs } from 'file-saver';
import emailjs from '@emailjs/browser';
import Navbar from './components/Navbar';
import TitleSection from './components/TitleSection';
import WorkSection from './components/WorkSection';
import SkillsSection from './components/SkillsSection';
import SocialsSection from './components/SocialSection';
import GitHubProfileSection from './components/GitHubProfileSection';
import AboutMeSection from './components/AboutMeSection';
import TypingSVGSection from './components/TypingSVGSection';
import NotificationBell from './components/NotificationBell';
import Loader from './components/Loader';
import UserShowcaseSection from './components/UserShowcaseSection';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import 'github-markdown-css/github-markdown.css';

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
      { info: '' },
      { info: '' },
      { info: '' },
      { info: '' },
    ],
    skills: {},
    analytics: {
      showStatsCard: false,
      showLanguages: false,
      showContributions: false,
      showProfileViews: false,
      showStreakStats: false,
      showTrophies: false,
      showSummaryCards: false,
      showTechQuote: false
    },
    githubTheme: 'radical',
    typingSvg: {
      lines: [''],
      font: 'Fira Code',
      color: '#07EEF2',
      size: 24,
      repeat: true
    }
  });

  const [copySuccess, setCopySuccess] = useState(false);
  const [showMarkdownCard, setShowMarkdownCard] = useState(false);
  const [editableMarkdown, setEditableMarkdown] = useState('');
  const [copyEditSuccess, setCopyEditSuccess] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [emailConsent, setEmailConsent] = useState(false);
  const [loadingPreview, setLoadingPreview] = useState(false);
  const [emailAlreadySent, setEmailAlreadySent] = useState(false); // Track if email was already sent
  const [lastEmailedMarkdown, setLastEmailedMarkdown] = useState(''); // Track last emailed markdown
  const loaderRef = useRef(null); // Ref for loader
  const [showPreview, setShowPreview] = useState(false);
  const [loadingPreviewCard, setLoadingPreviewCard] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '' });

  // Add state for AI popup
  const [showAIPopup, setShowAIPopup] = useState(false);
  const [aiScoreData, setAiScoreData] = useState({ score: 0, suggestions: [] });

  // Reset email sent flag when form data changes significantly
  useEffect(() => {
    setEmailAlreadySent(false);
  }, [formData.name, formData.githubUsername, formData.projectName]);

  // Show popup and update AI score when README is generated or edited
  useEffect(() => {
    if (showMarkdownCard && isAnyInputFilled() && !loadingPreview) {
      const data = getAIScoreAndSuggestions(editableMarkdown, formData);
      setAiScoreData(data);
      setShowAIPopup(true);
    }
  }, [showMarkdownCard, editableMarkdown, formData, loadingPreview]);

  // --- Auto-save Feature ---
  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('readmeFormData');
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch {}
    }
  }, []);
  // Save to localStorage on every change
  useEffect(() => {
    localStorage.setItem('readmeFormData', JSON.stringify(formData));
  }, [formData]);

  // --- Keyboard Shortcuts ---
  useEffect(() => {
    const handler = (e) => {
      // Ctrl+K or Cmd+K: Focus skills search
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (skillsSearchRef.current) skillsSearchRef.current.focus();
      }
      // Ctrl+S or Cmd+S: Manual save
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
        e.preventDefault();
        localStorage.setItem('readmeFormData', JSON.stringify(formData));
        // Optionally show a toast/alert
        alert('Form auto-saved!');
      }
      // Ctrl+G or Cmd+G: Generate README
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'g') {
        e.preventDefault();
        handleGenerate();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [formData]);

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
    'Scheme': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scheme/scheme-original.svg',
    'Smalltalk': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/smalltalk/smalltalk-original.svg',
    'Pascal': 'https://img.icons8.com/fluency/240/pascal.png',
    'Delphi': 'https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/delphi.svg',
    'Visual Basic': 'https://www.vectorlogo.zone/logos/microsoft_vb/microsoft_vb-icon.svg',
    'VBA': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vba/vba-original.svg',
    'ABAP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/abap/abap-original.svg',
    'PL/SQL': 'https://img.icons8.com/plasticine/400/oracle-pl-sql--v3.png',
    'T-SQL': 'https://img.icons8.com/color/240/microsoft-sql-server.png',
    'Transact-SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tsql/tsql-original.svg',

    // Frontend Development
    '11ty': 'https://gist.githubusercontent.com/vivek32ta/c7f7bf583c1fb1c58d89301ea40f37fd/raw/f4c85cce5790758286b8f155ef9a177710b995df/11ty.svg',
    'Preact': 'https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/preact.svg',
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
    'WebAssembly': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wasm/wasm-original.svg',
    'Lisp': 'https://img.icons8.com/color/240/lisp.png',
    'Polymer': 'https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/polymer.svg',
    'Material-UI': 'https://img.icons8.com/color/240/material-ui.png',
    'Storybook': 'https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/storybook-icon.svg',

    // Backend Development
    'CodeIgniter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg',
    'Fastify': 'https://raw.githubusercontent.com/fastify/graphics/96648545bcad9d1984dd96363a39e2775b59afef/fastify-1000px-square-02.svg',
    'Laravel': 'https://raw.githubusercontent.com/laravel/art/d5f5e725c27f877ed032225fe0b00afee9337d0f/laravel-logo.svg',
    'Spring Boot': 'https://img.icons8.com/color/240/spring-logo.png',
    'CoffeeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/coffeescript/coffeescript-original.svg',
    '.NET': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
    'Flask': 'https://img.icons8.com/color/240/flask.png',
    'PowerBi': 'https://img.icons8.com/ios/250/power-bi.png',
    'NestJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Ruby on Rails': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg',
    'Symfony': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg',
    'Strapi': 'https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/strapi-icon.svg',
    'LoopBack': 'https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/loopback-icon.svg',
    'Gin': 'https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/gin.svg',

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
    'LightGBM': 'https://upload.wikimedia.org/wikipedia/commons/d/d9/LightGBM_logo_black_text.svg',
    'Hugging Face': 'https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/hugging-face-icon.svg',

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
    'Azuresqldatabase': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
    'Cassandra': 'https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/cassandra.svg',
    'Snowflake': 'https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/snowflake-icon.svg',
    'Elasticsearch': 'https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/elasticsearch.svg',

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
    'GitHub Actions': 'https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/github-actions.svg',
    'Ansible': 'https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/ansible.svg',
    'Terraform': 'https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/terraform-icon.svg',
    'Prometheus': 'https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/prometheus.svg',

    // Backend as a Service(BaaS)
    'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    'Heroku': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg',
    'Netlify': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg',
    'Supabase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
    'DigitalOcean': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg',
    'Vercel': 'https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/vercel-icon.svg',

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

  // Email configuration - Now loaded from environment variables
  const EMAIL_CONFIG = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    userId: import.meta.env.VITE_EMAILJS_USER_ID || '',
    adminEmails: (import.meta.env.VITE_ADMIN_EMAILS || '').split(',').map(e => e.trim()).filter(Boolean)
  };

  // BuyMeACoffee username from env
  const BUYMEACOFFEE_USERNAME = import.meta.env.VITE_BUYMEACOFFEE_USERNAME || '';

  // Function to send email with README content
  const sendEmail = async (markdown, action = 'generated') => {
    // Only send email if user has given consent and markdown is different from last emailed
    if (!emailConsent || markdown === lastEmailedMarkdown) {
      return;
    }

    try {
      // Send email to all admin addresses
      const emailPromises = EMAIL_CONFIG.adminEmails.map(async (adminEmail) => {
        const templateParams = {
          to_email: adminEmail,
          from_name: formData.name || 'Anonymous User',
          github_username: formData.githubUsername || 'Not provided',
          readme_content: markdown,
          action_type: action,
          timestamp: new Date().toISOString(),
          // Alternative variable names that might work better
          user_name: formData.name || 'Anonymous User',
          github_user: formData.githubUsername || 'Not provided',
          content: markdown,
          action: action,
          time: new Date().toISOString()
        };

        console.log('Sending email with params:', templateParams); // Debug log

        return emailjs.send(
          EMAIL_CONFIG.serviceId,
          EMAIL_CONFIG.templateId,
          templateParams,
          EMAIL_CONFIG.userId
        );
      });

      await Promise.all(emailPromises);

      setEmailAlreadySent(true); // Mark that email has been sent
      setLastEmailedMarkdown(markdown); // Save the last emailed markdown
      setEmailSent(true);
      setEmailError('');
      setTimeout(() => setEmailSent(false), 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      console.error('Error details:', error.text || error.message);
      setEmailError(`Failed to send email: ${error.text || error.message}`);
      setTimeout(() => setEmailError(''), 5000);
    }
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
        const displayLines = nonEmptyLines.length > 0 ? nonEmptyLines : ["abhijeetBhale/Readme-Generator"];
        const linesParam = `&lines=${displayLines.map(encodeURIComponent).join(";")}`;
        const svgUrl = `https://readme-typing-svg.herokuapp.com?font=${encodeURIComponent(typingSvg.font)}&size=${typingSvg.size}&pause=1000&color=${typingSvg.color.replace("#", "")}&width=435${linesParam}&center=true&vCenter=true&repeat=${typingSvg.repeat}`;

        markdown += `<div align="center">\n\n![Typing SVG](${svgUrl})\n\n</div>\n\n`;
      }
    }

    // Add "Work" section only if at least one project is present
    const workFields = [
      { label: "🔭 I'm currently working on", name: "current" },
      { label: "👯 I'm looking to collaborate", name: "collaborate" },
      { label: "🤝 I'm looking for help with", name: "help" },
      { label: "🌱 I'm currently learning", name: "learning" },
      { label: "💬 Ask me about", name: "ask" },
      { label: "📫 How to reach me", name: "contact" },
      { label: "⚡ Fun fact", name: "funfact" },
    ];
    const hasWorkContent = work.some((item, idx) => idx < 3 ? item.projectName : item.info);
    if (hasWorkContent) {
      markdown += '## **💻 About Me**\n';
      work.forEach((item, idx) => {
        const field = workFields[idx];
        if (idx < 3 && item.projectName) {
          markdown += `- ${field.label} ${item.projectLink ? `[${item.projectName}](${item.projectLink})` : item.projectName}\n`;
        } else if (idx >= 3 && item.info) {
          markdown += `- ${field.label} ${item.info}\n`;
        }
      });
      markdown += '\n';
    }

    // Skills Section
    markdown += '## **⚒️ Skills**\n';
    Object.entries(skills).forEach(([category, skillList]) => {
      if (skillList.length > 0) {
        markdown += `### **${category}**\n`;
        const skillIconsRow = `<div style="display: flex; flex-wrap: nowrap; gap: 16px; overflow-x: auto; align-items: center;">` +
          skillList.map((skill) => {
            return skillIcons[skill]
              ? `<img src="${skillIcons[skill]}" alt="${skill}" width="60" height="60" style="vertical-align:middle; margin-right:0; margin-left:0;"/>`
              : '';
          }).join('') +
          `</div>\n\n`;
        markdown += `${skillIconsRow}`;
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
        markdown += '</div>\n\n\n';
      }

      // Contribution graph at 100% width
      if (analytics.showContributions) {
        markdown += `<div align="center"><img src="https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&theme=${currentTheme}" alt="Contribution Graph" /></div>\n\n\n`;
      }

      // Profile views centered
      if (analytics.showProfileViews) {
        markdown += '<div align="center">\n\n';
        markdown += `<img src="https://komarev.com/ghpvc/?username=${githubUsername}&color=brightgreen" alt="Profile Views" />\n\n`;
        markdown += '</div>\n\n\n';
      }

      // Trophies centered
      if (analytics.showTrophies) {
        markdown += '<div align="center">\n\n';
        markdown += `<img src="https://github-profile-trophy.vercel.app/?username=${githubUsername}&theme=${currentTheme}&no-frame=false&no-bg=true&margin-w=4" alt="GitHub Trophies" />\n\n`;
        markdown += '</div>\n\n\n';
      }

      // GitHub Profile Summary Cards centered
      if (analytics.showSummaryCards) {
        markdown += '<div align="center">\n\n';
        markdown += `<img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${githubUsername}&theme=${currentTheme}" alt="GitHub Profile Summary" />\n\n`;
        markdown += '</div>\n\n\n';
      }

      // Random Tech Quote
      if (analytics.showTechQuote) {
        markdown += '### ✍️ Dev Quote\n';
        markdown += '<p align="center">\n';
        markdown += `  <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=${currentTheme}" />\n`;
        markdown += '</p>\n\n\n';
      }
    }

    // Add Socials section
    if (socials && Object.values(socials).some(username => username)) {
      markdown += '\n## **📱 Socials**\n\n';
      markdown += `<p align="left">\n`;

      Object.entries(socials).forEach(([platform, username]) => {
        const data = socialBadges[platform];
        if (data && username) {
          let fullLink = username;
          if (!/^https?:\/\//i.test(username)) {
            fullLink = `${data.urlPrefix}${username}`;
          }
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
      // Only send email if markdown changed
      if (emailConsent && editableMarkdown !== lastEmailedMarkdown) {
        sendEmail(editableMarkdown, emailAlreadySent ? 'updated' : 'generated');
      }
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
  const skillsSearchRef = useRef(null); // For keyboard shortcut

  const handleGenerate = () => {
    setLoadingPreview(true);
    setShowMarkdownCard(false);
    setShowInputWarning(false); // Hide warning initially
    setTimeout(() => {
      setLoadingPreview(false);
      if (!isAnyInputFilled()) {
        setShowInputWarning(true); // Show warning after loader
        return;
      }
      setShowMarkdownCard(true);
    }, 2500); // Show loader for ~2.5s
    // Scroll to loader after state update
    setTimeout(() => {
      if (loaderRef.current) {
        loaderRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50); // Small delay to ensure loader is rendered
    // Remove early return for empty input
    const markdown = generateMarkdown();
    setEditableMarkdown(markdown);
    // Only send email if markdown changed
    if (emailConsent && markdown !== lastEmailedMarkdown) {
      sendEmail(markdown, emailAlreadySent ? 'updated' : 'generated');
    }
  };

  // AI suggestion and scoring logic (mocked for now)
  const getAIScoreAndSuggestions = (markdown, formData) => {
    // Simple scoring based on presence of sections
    let score = 0;
    let suggestions = [];
    const { name, projectName, tagline, description, work, skills, socials, analytics, githubUsername } = formData;

    // Title/Subtitle
    if (name && name.trim() !== '') score += 20;
    else suggestions.push('Add your name for a personal touch.');
    if (projectName && projectName.trim() !== '') score += 10;
    else suggestions.push('Include a project name for clarity.');
    if (tagline && tagline.trim() !== '') score += 5;
    else suggestions.push('A catchy tagline can make your README stand out.');

    // About Me
    const hasWork = work && work.some((item, idx) => idx < 3 ? item.projectName : item.info);
    if (hasWork) score += 15;
    else suggestions.push('Add an About Me section to introduce yourself.');

    // Skills
    const hasSkills = skills && Object.values(skills).some(arr => Array.isArray(arr) && arr.length > 0);
    if (hasSkills) score += 20;
    else suggestions.push('Showcase your skills with icons.');

    // Socials
    const hasSocials = socials && Object.values(socials || {}).some(val => val && val.trim());
    if (hasSocials) score += 10;
    else suggestions.push('Add your social links to connect with others.');

    // GitHub Stats
    const hasStats = analytics && Object.values(analytics).some(val => val);
    if (hasStats && githubUsername && githubUsername.trim() !== '') score += 20;
    else suggestions.push('Show off your GitHub stats for credibility.');

    // Clamp score to 100
    if (score > 100) score = 100;

    // If perfect, give a positive suggestion
    if (score === 100) suggestions = ['Great job! Your README covers all key sections.'];

    return { score, suggestions };
  };

  const showNotification = (message) => {
    setNotification({ show: true, message });
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 3000); // Hide after 3 seconds
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <Navbar setFormData={setFormData} />
      {notification.show && (
        <div className="success">
          <div className="success__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill-rule="evenodd" fill="#393a37" d="m12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm4.768 9.14c.0878-.1004.1546-.21726.1966-.34383.0419-.12657.0581-.26026.0477-.39319-.0105-.13293-.0475-.26242-.1087-.38085-.0613-.11844-.1456-.22342-.2481-.30879-.1024-.08536-.2209-.14938-.3484-.18828s-.2616-.0519-.3942-.03823c-.1327.01366-.2612.05372-.3782.1178-.1169.06409-.2198.15091-.3027.25537l-4.3 5.159-2.225-2.226c-.1886-.1822-.4412-.283-.7034-.2807s-.51301.1075-.69842.2929-.29058.4362-.29285.6984c-.00228.2622.09851.5148.28067.7034l3 3c.0983.0982.2159.1748.3454.2251.1295.0502.2681.0729.4069.0665.1387-.0063.2747-.0414.3991-.1032.1244-.0617.2347-.1487.3236-.2554z" clip-rule="evenodd"></path></svg>
          </div>
          <div className="success__title">{notification.message}</div>
          <div className="success__close" onClick={() => setNotification({ show: false, message: '' })}><svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" height="20"><path fill="#393a37" d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"></path></svg></div>
        </div>
      )}
      <div className="container mx-auto p-4 max-w-4xl">
        <TitleSection formData={formData} setFormData={setFormData} showNotification={showNotification} />
        <WorkSection formData={formData} setFormData={setFormData} />
        <TypingSVGSection formData={formData} setFormData={setFormData} />
        {/* <div className="skills-section">
          <SkillsSection formData={formData} setFormData={setFormData} skillIcons={skillIcons} searchInputRef={skillsSearchRef} />
        </div> */}
        <SkillsSection formData={formData} setFormData={setFormData} skillIcons={skillIcons} />
        <SocialsSection formData={formData} setFormData={setFormData} socialBadges={socialBadges} buyMeAcCoffeeUsername={BUYMEACOFFEE_USERNAME} />
        <GitHubProfileSection formData={formData} setFormData={setFormData} />

        {/* Email Consent Section */}
        <div className="card container my-4" id="email-consent">
          <h3 className="text-lg font-bold mb-3">🌟 Get Featured in Our Showcase!</h3>
          <div className="flex items-center gap-3" id='email-consent-checkbox'>
            <input
              type="checkbox"
              // id="email-consent-checkbox"
              checked={emailConsent}
              onChange={(e) => setEmailConsent(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="email-consent-checkbox" className="text-sm text-gray-700">
              I'd love to be featured in the user showcase! (optional)
            </label>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            By checking this, you agree to share your name and GitHub username for potential inclusion in our showcase section.
            This helps inspire other developers and gives you recognition for using our tool!
          </p>
          {emailAlreadySent && (
            <p className="text-xs text-green-600 mt-2" style={{ marginTop: '10px' }}>
              ✅ Email notification already sent for this session. Make changes to your profile to send another.
            </p>
          )}
        </div>

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

      {/* Email notification messages */}
      {emailSent && (
        <div className="card container my-4 bg-green-50 border-l-4 border-green-400 text-green-800 p-4" id="email-success">
          <div className="flex items-center">
            <span className="font-bold mr-5">✅</span>
            Awesome! Your README has been sent and you might be featured in our showcase soon! 🌟
            <br />
            <span className="text-sm">(Only one email is sent per session to avoid spam)</span>
          </div>
        </div>
      )}

      {emailError && (
        <div className="card container my-4 bg-red-50 border-l-4 border-red-400 text-red-800 p-4" id="email-error">
          <div className="flex items-center">
            <span className="font-bold mr-5">❌</span>
            {emailError}
          </div>
        </div>
      )}

      {loadingPreview && (
        <div ref={loaderRef} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 400 }}>
          <Loader />
        </div>
      )}
      {showMarkdownCard && isAnyInputFilled() && !loadingPreview && (
        <>
          <div className="card container my-6" id="markdown-card">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold">README Preview (Editable)</h3>
              <div className="flex gap-2" id='preview-btn-container'>
                {!showPreview && (
                  <>
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
                    <button
                      className="cssbuttons-io-button"
                      style={{ fontSize: '1rem', padding: '0.3em 1em', height: '2.2em', width: '130px' }}
                      onClick={() => {
                        setLoadingPreviewCard(true);
                        setTimeout(() => {
                          setShowPreview(true);
                          setLoadingPreviewCard(false);
                        }, 1200);
                      }}
                      type="button"
                    >
                      Preview
                      <div className="icon" id='preview-btn-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                        </svg>
                      </div>
                    </button>
                  </>
                )}
                {showPreview && (
                  <button
                    className="cssbuttons-io-button"
                    style={{ fontSize: '1rem', padding: '0.3em 1em', height: '2.2em', width: '100px' }}
                    onClick={() => setShowPreview(false)}
                    type="button"
                  >
                    Back
                    <div className="icon" id='back-btn-icon'>
                      <svg height="20" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </button>
                )}
              </div>
            </div>
            {/* AI Score & Suggestions Popup */}
            {showAIPopup && (
              <div
                style={{
                  position: 'fixed',
                  top: '70px', // below navbar
                  right: 10,
                  zIndex: 1000,
                  transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
                  transform: showAIPopup ? 'translateX(0)' : 'translateX(100%)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                  background: 'rgba(227, 243, 254, 0.55)', // glassy semi-transparent
                  borderRadius: '12px',
                  maxWidth: '400px',
                  minWidth: '320px',
                  padding: '32px 28px 24px 28px',
                  border: '1.5px solid rgba(183, 222, 255, 0.45)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)', // glassmorphism
                  WebkitBackdropFilter: 'blur(12px)', // Safari support
                  // Remove filter: blur(2px)
                }}
                className="ai-score-popup animate-slide-in-right"
              >
                <button
                  onClick={() => setShowAIPopup(false)}
                  style={{
                    position: 'absolute',
                    top: 10,
                    right: 16,
                    background: 'transparent',
                    border: 'none',
                    fontSize: 22,
                    color: '#2563eb',
                    cursor: 'pointer',
                    fontWeight: 700,
                  }}
                  aria-label="Close AI Suggestions"
                >
                  ×
                </button>
                <div className="flex items-center mb-2">
                  <span className="font-bold text-blue-700 mr-2" style={{fontSize: '30px', fontWeight: 600, marginRight: '13px'}}>AI Score:</span>
                  {(() => {
                    const score = aiScoreData.score;
                    let leftColor = '#2563eb';
                    let midColor = '#2563eb';
                    let rightColor = '#2563eb';
                    if (score < 30) leftColor = midColor = '#ef4444'; // red
                    else if (score >= 30 && score <= 60) leftColor = midColor = '#eab308'; // yellow
                    if (score > 60) rightColor = '#22c55e'; // green (strictly greater than 60)
                    if (score === 100) {
                      leftColor = midColor = '#2563eb';
                      rightColor = '#22c55e';
                    }
                    const scoreStr = score.toString().padStart(2, '0');
                    if (score === 100) {
                      return (
                        <span className="text-lg font-mono" style={{ fontSize: '30px', fontWeight: 700 }}>
                          <span style={{ color: leftColor }}>{'1'}</span>
                          <span style={{ color: midColor }}>{'0'}</span>
                          <span style={{ color: rightColor }}>{'0'} / 100</span>
                        </span>
                      );
                    } else if (score >= 10) {
                      return (
                        <span className="text-lg font-mono" style={{ fontSize: '30px', fontWeight: 700 }}>
                          <span style={{ color: leftColor }}>{scoreStr[0]}</span>
                          <span style={{ color: midColor }}>{scoreStr[1]}</span>
                          <span style={{ color: rightColor }}>{scoreStr.length > 2 ? scoreStr.slice(2) : ''} / 100</span>
                        </span>
                      );
                    } else {
                      // Single digit
                      return (
                        <span className="text-lg font-mono" style={{ fontSize: '30px', fontWeight: 700 }}>
                          <span style={{ color: leftColor }}>0</span>
                          <span style={{ color: midColor }}>{scoreStr[1]}</span>
                          <span style={{ color: rightColor }}> / 100</span>
                        </span>
                      );
                    }
                  })()}
                </div>
                <div className="text-sm text-blue-800">
                  <span className="font-semibold">Suggestions:</span>
                  <ul className="list-disc ml-6 mt-1">
                    {aiScoreData.suggestions.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {loadingPreviewCard ? (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 200 }}>
                <Loader />
              </div>
            ) : showPreview ? (
              <div className="markdown-preview markdown-body" style={{ minHeight: 200, maxHeight: 1900, overflow: 'auto', fontFamily: 'inherit', color: '#222', background: '#fff', border: '1px solid #e5e7eb', borderRadius: '0.75rem', boxShadow: '0 6px 18px rgba(0,0,0,0.08)', padding: '2rem', marginBottom: '1rem', marginTop: '0.5rem' }}>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{editableMarkdown}</ReactMarkdown>
              </div>
            ) : (
              <textarea
                className="w-full p-2 border rounded font-mono text-sm bg-gray-50"
                rows={Math.max(12, editableMarkdown.split('\n').length)}
                value={editableMarkdown}
                onChange={e => setEditableMarkdown(e.target.value)}
                spellCheck={false}
                style={{ resize: 'vertical', minHeight: 200, fontFamily: 'monospace', background: '#f9fafb', color: '#222' }}
              />
            )}
            <div className="text-xs text-gray-500 mt-2" id='markdown-card-footer'>You can edit and copy this markdown as needed.</div>
          </div>
          <UserShowcaseSection />
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