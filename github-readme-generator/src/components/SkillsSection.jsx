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
      { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
      // { name: 'Rust', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg' },
      { name: 'Scala', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg' },
      { name: 'Perl', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/perl/perl-original.svg' },
      { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
      { name: 'Haskell', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg' },
      { name: 'Objective-C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg' },
      { name: 'R', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
      { name: 'Lua', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg' },
      { name: 'Matlab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg' },
      { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
      { name: 'Shell', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
      { name: 'Elixir', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg' },
      { name: 'Clojure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clojure/clojure-original.svg' },
      { name: 'F#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fsharp/fsharp-original.svg' },
      { name: 'Erlang', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/erlang/erlang-original.svg' },
      { name: 'Fortran', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fortran/fortran-original.svg' },
      // { name: 'COBOL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cobol/cobol-original.svg' },
      // { name: 'Assembly', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/assembly/assembly-original.svg' },
      { name: 'Groovy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/groovy/groovy-original.svg' },
      { name: 'Crystal', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/crystal/crystal-original.svg' },
      { name: 'Julia', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg' },
      // { name: 'V', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/v/v-original.svg' },
      // { name: 'Pascal', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pascal/pascal-original.svg' },
      { name: 'Prolog', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prolog/prolog-original.svg' },
      { name: 'OCaml', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ocaml/ocaml-original.svg' },
      // { name: 'Scheme', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scheme/scheme-original.svg' },
      { name: 'PowerShell', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg' },
    ],
    'Frontend Development': [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'Svelte', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Gatsby', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-original.svg' },
      { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Material UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
      { name: 'jQuery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Sass', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
      { name: 'Less', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg' },
      { name: 'Webpack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' },
      // { name: 'Parcel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/parcel/parcel-original.svg' },
      { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg' },
      // { name: 'Pug', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pug/pug-original.svg' },
      { name: 'Handlebars', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg' },
      { name: 'Ember', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ember/ember-original.svg' },
      { name: 'Backbone', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/backbonejs/backbonejs-original.svg' },
    ],
    'Backend Development': [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
      { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
      { name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      // { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
      { name: 'Ruby on Rails', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg' },
      { name: 'ASP.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      // { name: 'Koa', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/koa/koa-original.svg' },
      { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
      { name: 'Phoenix', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phoenix/phoenix-original.svg' },
      { name: 'Symfony', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg' },
      { name: 'CakePHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cakephp/cakephp-original.svg' },
      { name: 'CodeIgniter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg' },
      // { name: 'Hapi', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hapi/hapi-original.svg' },
      // { name: 'Sails', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sails/sails-original.svg' },
      { name: 'AdonisJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg' },
      // { name: 'Micronaut', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/micronaut/micronaut-original.svg' },
    ],
    'Mobile App Development': [
      { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
      { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Xamarin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg' },
      { name: 'Ionic', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg' },
      // { name: 'Cordova', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cordova/cordova-original.svg' },
      // { name: 'PhoneGap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phonegap/phonegap-original.svg' },
      { name: 'Objective-C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg' },
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
      { name: 'R', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
      // { name: 'Theano', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/theano/theano-original.svg' },
      // { name: 'NLTK', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nltk/nltk-original.svg' },
      // { name: 'spaCy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spacy/spacy-original.svg' },
    ],
    'Database': [
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
      { name: 'Oracle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'Cassandra', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg' },
      { name: 'MariaDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg' },
      { name: 'DynamoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg' },
      { name: 'Elasticsearch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg' },
      // { name: 'MSSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mssql/mssql-original.svg' },
      { name: 'CouchDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/couchdb/couchdb-original.svg' },
      { name: 'Neo4j', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg' },
    ],
    'Data Visualization': [
      { name: 'D3.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg' },
      // { name: 'Chart.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chartjs/chartjs-original.svg' },
      { name: 'Plotly', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plotly/plotly-original.svg' },
      // { name: 'Highcharts', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/highcharts/highcharts-original.svg' },
      { name: 'Google Charts', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
      // { name: 'ECharts', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/echarts/echarts-original.svg' },
      // { name: 'Vega', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vega/vega-original.svg' },
    ],
    'Devops': [
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
      { name: 'Travis CI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/travis/travis-plain.svg' },
      { name: 'CircleCI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg' },
      { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'GitLab CI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
      { name: 'Ansible', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg' },
      { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
      { name: 'Vagrant', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vagrant/vagrant-original.svg' },
      // { name: 'Puppet', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/puppet/puppet-original.svg' },
      // { name: 'Chef', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chef/chef-original.svg' },
      { name: 'Prometheus', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
      { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
      { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
      { name: 'Apache', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg' },
    ],
    'Backend as a Service(BaaS)': [
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      // { name: 'AWS Amplify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
      { name: 'Heroku', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg' },
      { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
      { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
      // { name: 'Parse', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/parse/parse-original.svg' },
      { name: 'DigitalOcean App Platform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg' },
      // { name: 'Back4App', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/back4app/back4app-original.svg' },
    ],
    'Framework': [
      { name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
      { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
      // { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
      { name: 'Ruby on Rails', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg' },
      { name: 'Symfony', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg' },
      { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' }, // <-- corrected icon
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      // { name: 'Koa', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/koa/koa-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Nuxt.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
      { name: 'Gatsby', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-original.svg' },
      { name: 'Meteor', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/meteor/meteor-original.svg' },
      // { name: 'Sails', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sails/sails-original.svg' },
      { name: 'AdonisJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg' },
      { name: 'Phoenix', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phoenix/phoenix-original.svg' },
      // { name: 'Micronaut', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/micronaut/micronaut-original.svg' },
      { name: 'CakePHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cakephp/cakephp-original.svg' },
      { name: 'CodeIgniter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg' },
      // { name: 'Hapi', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hapi/hapi-original.svg' },
    ],
    'Testing': [
      { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
      { name: 'Mocha', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg' },
      // { name: 'Chai', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chai/chai-original.svg' },
      // { name: 'Cypress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypress/cypress-original.svg' },
      { name: 'Selenium', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg' },
      { name: 'JUnit', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg' },
      { name: 'PyTest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg' },
      { name: 'RSpec', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rspec/rspec-original.svg' },
      // { name: 'TestNG', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/testng/testng-original.svg' },
      { name: 'Karma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/karma/karma-original.svg' },
      // { name: 'Enzyme', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/enzyme/enzyme-original.svg' },
      // { name: 'AVA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ava/ava-original.svg' },
      // { name: 'QUnit', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qunit/qunit-original.svg' },
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

  return (
    <div className="card container text-center my-4">
      <h2 className="text-2xl font-bold mb-3 text-dark" style={{ fontSize: '2rem' }}>Skills</h2>

      {Object.entries(skillSets).map(([category, skills]) => {
        // Split skills into rows of 3 items each (horizontal arrangement)
        const rows = [];
        for (let i = 0; i < skills.length; i += 5) {
          rows.push(skills.slice(i, i + 5));
        }

        return (
          <div key={category} className="mb-5 text-start">
            <h3 className="text-lg font-medium text-secondary mb-3"style={{ fontSize: '1.5rem' }}>{category}</h3>
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
                          style={{ accentColor: '#0d6efd', width: '24px', height: '24px' }}
                        />
                        <div className="skill-icon-tooltip-wrapper" style={{ position: 'relative', display: 'inline-block' }}>
                          <img
                            src={skill.icon}
                            alt={`${skill.name} icon`}
                            className="img-fluid me-2"
                            style={{ width: '40px', height: '40px', objectFit: 'contain', flexShrink: 0, cursor: 'pointer' }}
                            onError={(e) => (e.target.src = 'https://via.placeholder.com/28?text=?')}
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
                              left: '200%',
                              top: '40%',
                              transform: 'translateY(-50%)',
                              whiteSpace: 'nowrap',
                              pointerEvents: 'none'
                            }}
                          >
                            {skill.name}
                          </span>
                        </div>
                        {/* <span className="text-dark small text-nowrap">{skill.name}</span> */}
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
  );
};

export default SkillsSection;