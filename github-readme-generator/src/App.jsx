import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import Navbar from './components/Navbar';
import TitleSection from './components/TitleSection';
import WorkSection from './components/WorkSection';
import SkillsSection from './components/SkillsSection';
import SocialsSection from './components/SocialSection';
import NotificationModel from './components/NotificationModel';

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
    'Swift': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
    'Scala': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg',
    'Perl': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/perl/perl-original.svg',
    'Dart': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
    'Haskell': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg',
    'Objective-C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg',
    'R': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
    'Lua': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg',
    'Matlab': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg',
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

    // Frontend Development
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    'Svelte': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'Gatsby': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-original.svg',
    'Redux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    'Tailwind': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    'Material UI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
    'jQuery': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
    'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'Sass': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    'Less': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg',
    'Webpack': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
    'Vite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg',
    'Handlebars': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg',
    'Ember': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ember/ember-original.svg',
    'Backbone': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/backbonejs/backbonejs-original.svg',

    // Backend Development
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    'Spring': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    'Ruby on Rails': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg',
    'ASP.NET': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
    'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    'NestJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
    'Phoenix': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phoenix/phoenix-original.svg',
    'Symfony': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg',
    'CakePHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cakephp/cakephp-original.svg',
    'CodeIgniter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg',
    'AdonisJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg',

    // Mobile App Development
    'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Xamarin': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg',
    'Ionic': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',

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
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'SQLite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
    'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    'Oracle': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
    'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    'Cassandra': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg',
    'MariaDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg',
    'DynamoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg',
    'Elasticsearch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg',
    'CouchDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/couchdb/couchdb-original.svg',
    'Neo4j': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg',

    // Data Visualization
    'D3.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg',
    'Plotly': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plotly/plotly-original.svg',
    'Google Charts': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',

    // Devops
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    'Jenkins': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
    'Travis CI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/travis/travis-plain.svg',
    'CircleCI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg',
    'GitHub Actions': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'GitLab CI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
    'Ansible': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg',
    'Terraform': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
    'Vagrant': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vagrant/vagrant-original.svg',
    'Prometheus': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg',
    'Grafana': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg',
    'Nginx': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
    'Apache': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg',

    // Backend as a Service
    'Heroku': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg',
    'Netlify': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg',
    'Supabase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
    'DigitalOcean App Platform': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg',

    // Framework
    'Nuxt.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
    'Meteor': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/meteor/meteor-original.svg',

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
    const { name, projectName, tagline, description, work, skills, socials } = formData;
    let markdown = '';

    // Add the "Hi I'm ..." line if name is present
    if (name && name.trim() !== '') {
      markdown += `<div align="center">\n\n# Hi 👋, I'm ${name}!\n\n</div>\n\n`;
    }

    // Project name as main heading if not already included in the name
    if (projectName && (!name || projectName !== name)) {
      markdown += `## ${projectName}\n\n`;
    }

    if (tagline) markdown += `${tagline}\n\n`;
    if (description) markdown += `${description}\n\n`;

    // Add "Work" section only if at least one project is present
    const hasWorkContent = work.some(item => item.projectName);
    if (hasWorkContent) {
      markdown += '## 💻 Work\n';
      work.forEach(({ projectName, projectLink }) => {
        if (projectName) {
          markdown += `- ${projectLink ? `I'm currently working on [${projectName}](${projectLink})` : `I'm currently working on ${projectName}`}\n`;
        }
      });
      markdown += '\n';
    }

    // Skills Section
    markdown += '## ⚒️ Skills\n';
    Object.entries(skills).forEach(([category, skillList]) => {
      if (skillList.length > 0) {
        markdown += `### ${category}\n`;
        const skillIconsRow = skillList.map((skill) => {
          return skillIcons[skill]
            ? `<img src="${skillIcons[skill]}" alt="${skill}" width="32" height="32" style="vertical-align:middle; margin-right:8px;"/>`
            : '';
        }).join(' ');
        markdown += `${skillIconsRow}\n\n`;
      }
    });

    // Add Socials section
    if (socials && Object.values(socials).some(username => username)) {
      markdown += '\n## 📱 Socials\n\n';
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

    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
    saveAs(blob, 'README.md');
  };


  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <Navbar />
      <div className="container mx-auto p-4 max-w-4xl">
        <NotificationModel />
        <TitleSection formData={formData} setFormData={setFormData} />
        <WorkSection formData={formData} setFormData={setFormData} />
        <SkillsSection formData={formData} setFormData={setFormData} />
        <SocialsSection formData={formData} setFormData={setFormData} />
        <div className="flex justify-center" id='generate-btn'>
          <button class="cssbuttons-io-button"
            onClick={generateMarkdown}>
            Generate README
            <div class="icon">
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
        </div>
      </div>
    </div>
  );
};

export default App;