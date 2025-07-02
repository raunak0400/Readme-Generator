import React from 'react';

const SkillsSection = ({ formData, setFormData }) => {
  const skillSets = {
    'Programming Languages': [
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
      { name: 'Ruby', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg' },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
      { name: 'Scala', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg' },
      { name: 'Perl', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/perl/perl-original.svg' },
      { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
      { name: 'Haskell', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg' },
      { name: 'Objective-C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg' },
      { name: 'R', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
      { name: 'Lua', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg' },
      { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
      { name: 'Elixir', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg' },
      { name: 'Clojure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clojure/clojure-original.svg' },
      { name: 'F#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fsharp/fsharp-original.svg' },
      { name: 'Erlang', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/erlang/erlang-original.svg' },
      { name: 'Fortran', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fortran/fortran-original.svg' },
      { name: 'Groovy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/groovy/groovy-original.svg' },
      { name: 'Crystal', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/crystal/crystal-original.svg' },
      { name: 'Julia', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg' },
      { name: 'Prolog', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prolog/prolog-original.svg' },
      { name: 'OCaml', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ocaml/ocaml-original.svg' },
      { name: 'PowerShell', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg' },
      { name: 'Rust', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg' },
    ],
    'Frontend Development': [
      { name: '11ty', icon: 'https://gist.githubusercontent.com/vivek32ta/c7f7bf583c1fb1c58d89301ea40f37fd/raw/f4c85cce5790758286b8f155ef9a177710b995df/11ty.svg' },
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'AngularJS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original-wordmark.svg' },
      { name: 'Backbone.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/backbonejs/backbonejs-original.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'Bulma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Ember.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ember/ember-original.svg' },
      { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'Gatsby', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-original.svg' },
      { name: 'Gridsome', icon: 'https://www.vectorlogo.zone/logos/gridsome/gridsome-icon.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'Hugo', icon: 'https://gohugo.io/favicon.ico' },
      { name: 'Jekyll', icon: 'https://jekyllrb.com/favicon.ico' },
      { name: 'Materialize CSS', icon: 'https://materializecss.com/res/materialize.svg' },
      { name: 'Middleman', icon: 'https://raw.githubusercontent.com/leungwensen/svg-icon/b84b3f3a3da329b7c1d02346865f8e98beb05413/dist/svg/logos/middleman.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Pug', icon: 'https://www.vectorlogo.zone/logos/pugjs/pugjs-icon.svg' },
      { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg' },
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
      { name: 'Sapper', icon: 'https://sapper.svelte.dev/favicon.png' },
      { name: 'Sass', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
      { name: 'Scully', icon: 'https://raw.githubusercontent.com/scullyio/scully/main/assets/logos/SVG/scullyio-icon.svg' },
      { name: 'Svelte', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'Vuetify', icon: 'https://cdn.vuetifyjs.com/images/logos/vuetify-logo-light.svg' },
      { name: 'Webpack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' }
    ],
    'Backend Development': [
      { name: 'CodeIgniter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg' },
      { name: 'CoffeeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/coffeescript/coffeescript-original.svg' },
      { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
      { name: 'Flask', icon: 'https://img.icons8.com/nolan/256/flask.png' },
      { name: 'PowerBi', icon: 'https://img.icons8.com/ios/250/power-bi.png'},
      { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Ruby on Rails', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg' },
      { name: 'Symfony', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg' }
    ],
    'Mobile App Development': [
      { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
      { name: 'Apache Cordova', icon: 'https://www.vectorlogo.zone/logos/apache_cordova/apache_cordova-icon.svg' },
      { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'Ionic', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg' },
      { name: 'NativeScript', icon: 'https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/nativescript.svg' },
      { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
      { name: 'Xamarin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg' }
    ],
    'AI/ML': [
      { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
      { name: 'Keras', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg' },
      { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
      { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
      { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
      { name: 'Matplotlib', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
      { name: 'Jupyter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
    ],
    'Database': [
      { name: 'CockroachDB', icon: 'https://www.vectorlogo.zone/logos/cockroachlabs/cockroachlabs-icon.svg' },
      { name: 'CouchDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/couchdb/couchdb-original.svg' },
      { name: 'MariaDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: '(MSSQL)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Oracle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Realm', icon: 'https://avatars.githubusercontent.com/u/7575099?s=200&v=4' },
      { name: 'Azuresqldatabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
      { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' }
    ],
    'Data Visualization': [
      { name: 'D3.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg' },
      { name: 'Plotly', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plotly/plotly-original.svg' },
      { name: 'Google Charts', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
      { name: 'ZingChart', icon: 'https://www.zingchart.com/favicon.ico' },
      { name: 'Matlab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg' },
      { name: 'Hadoop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg' },
      { name: 'Hive', icon: 'https://www.vectorlogo.zone/logos/apache_hive/apache_hive-icon.svg' },
      { name: 'Seaborn', icon: 'https://seaborn.pydata.org/_images/logo-mark-lightbg.svg' },
    ],
    'Devops': [
      { name: 'AWS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
      { name: 'Babel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg' },
      { name: 'CircleCI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: '(GCP)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
      { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
      { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
      { name: 'OpenResty', icon: 'https://openresty.org/images/logo.png' },
      { name: 'Travis CI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/travis/travis-plain.svg' },
      { name: 'Vagrant', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vagrant/vagrant-original.svg' }
    ],
    'Backend as a Service(BaaS)': [
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'Heroku', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg' },
      { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
      { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
      { name: 'DigitalOcean', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg' },
    ],
    'Framework': [
      { name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'Django', icon: 'https://img.icons8.com/color/240/django.png' },
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'Nuxt.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
      { name: 'Meteor', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/meteor/meteor-original.svg' },
      { name: 'AdonisJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg' },
      { name: 'Phoenix', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phoenix/phoenix-original.svg' },
      { name: 'CakePHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cakephp/cakephp-original.svg' },
  
    ],
    'Software': [
      { name: 'Adobe Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
      { name: 'Adobe XD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Framer', icon: 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg' },
      { name: 'InVision', icon: 'https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg' },
      { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
      { name: 'Sketch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg' },
    ],
    'Testing': [
      { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
      { name: 'Mocha', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg' },
      { name: 'Selenium', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg' },
      { name: 'JUnit', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg' },
      { name: 'PyTest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg' },
      { name: 'RSpec', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rspec/rspec-original.svg' },
      { name: 'Karma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/karma/karma-original.svg' },
    ],
  };

  const toggleSkill = (category, skill) => {
    const updatedSkills = { ...formData.skills };
    if (!updatedSkills[category]) updatedSkills[category] = [];
    if (updatedSkills[category].includes(skill)) {
      updatedSkills[category] = updatedSkills[category].filter((s) => s !== skill);
    } else {
      updatedSkills[category].push(skill);
    }
    setFormData({ ...formData, skills: updatedSkills });
  };

  const searchInputRef = React.useRef(null);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const [search, setSearch] = React.useState('');

  // Flatten all skills for search
  const allSkills = Object.entries(skillSets).flatMap(([category, skills]) =>
    skills.map(skill => ({ ...skill, category }))
  );

  // Filtered skills by search
  const filteredSkillSets = React.useMemo(() => {
    if (!search.trim()) return skillSets;
    const lower = search.toLowerCase();
    const filtered = {};
    allSkills.forEach(skill => {
      if (skill.name.toLowerCase().includes(lower)) {
        if (!filtered[skill.category]) filtered[skill.category] = [];
        filtered[skill.category].push({ name: skill.name, icon: skill.icon });
      }
    });
    return filtered;
  }, [search, skillSets, allSkills]);

  return (
    <div className="card container text-center my-4">
      <div className="row align-items-center mb-3" style={{ minHeight: 56 }}>
        <div className="col text-start" style={{ display: 'flex', alignItems: 'center'}}>
          <h2 className="text-2xl font-bold text-dark m-0" style={{ fontSize: '2rem' }}>Skills</h2>
          <div style={{ position: 'relative', display: 'flex',justifyContent: 'end', width: '100%' }}>
            <div className="group" style={{ marginBottom: 12 }}>
              <div class="group">
                <svg viewBox="0 0 24 24" aria-hidden="true" class="search-icon">
                  <g>
                    <path
                      d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                    ></path>
                  </g>
                </svg>
                <input
                id="skill-search"
                className="input"
                type="search"
                placeholder="Ctrl + K"
                value={search}
                onChange={e => setSearch(e.target.value)}
                name="searchbar"
                style={{ maxWidth: 250, marginTop: 12 }}
                ref={searchInputRef}
              />
              </div>

            </div>
          </div>
        </div>
      </div>
      {Object.entries(filteredSkillSets).length === 0 && (
        <div className="text-muted mb-4">No skills found.</div>
      )}
      <div
        style={
          search.trim()
            ? { display: 'flex', justifyContent: 'flex-start', paddingLeft: 0 }
            : {}
        }
      >
        <div style={{ width: '100%' }}>
          {Object.entries(filteredSkillSets).map(([category, skills]) => {
            // Split skills into rows of 5 items each (horizontal arrangement)
            const rows = [];
            for (let i = 0; i < skills.length; i += 5) {
              rows.push(skills.slice(i, i + 5));
            }

            return (
              <div key={category} className="mb-5 text-start">
                <h3 className="text-lg font-medium text-secondary mb-3" style={{ fontSize: '1.5rem' }}>{category}</h3>
                <div className="container skills-section" id='skills'>
                  <div className="d-flex flex-column gap-2">
                    {rows.map((row, rowIdx) => (
                      <div key={rowIdx} className="d-flex justify-content-center gap-3 mb-2" id='skill-icons'>
                        {row.map((skill) => (
                          <div
                            key={skill.name}
                            id='skill-icons'
                            className="d-flex align-items-center p-2 rounded hover-shadow position-relative"
                            style={{ minWidth: 0 }}
                          >
                            <input
                              id='skill-checkbox'
                              type="checkbox"
                              checked={!!formData.skills[category]?.includes(skill.name)}
                              onChange={() => toggleSkill(category, skill.name)}
                              className="form-check-input me-2"
                              title={`Toggle ${skill.name}`}
                              style={{ accentColor: '#0d6efd', width: '24px', height: '24px', cursor:'pointer', padding: 30 }}
                            />
                            <div className="skill-icon-tooltip-wrapper" style={{ position: 'relative', display: 'inline-block' }}>
                              <img
                                src={skill.icon}
                                alt={`${skill.name} icon`}
                                className="img-fluid me-2"
                                style={{ width: '40px', height: '40px', objectFit: 'contain', flexShrink: 0 }}
                                onError={e => (e.target.src = 'https://via.placeholder.com/28?text=?')}
                                onMouseEnter={e => {
                                  const tooltip = e.target.nextSibling;
                                  tooltip.style.visibility = 'visible';
                                  tooltip.style.opacity = 1;
                                }}
                                onMouseLeave={e => {
                                  const tooltip = e.target.nextSibling;
                                  tooltip.style.visibility = 'hidden';
                                  tooltip.style.opacity = 0;
                                }}
                              />
                              <span
                                className="skill-tooltip"
                                style={{
                                  visibility: 'hidden',
                                  opacity: 0,
                                  transition: 'opacity .99s',
                                  position: 'absolute',
                                  zIndex: 10,
                                  background: '#222',
                                  color: '#fff',
                                  padding: '4px 10px',
                                  borderRadius: '4px',
                                  fontSize: '0.85rem',
                                  left: '140%',
                                  top: '40%',
                                  transform: 'translateY(-50%)',
                                  whiteSpace: 'nowrap',
                                  pointerEvents: 'none'
                                }}
                              >
                                {skill.name}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;