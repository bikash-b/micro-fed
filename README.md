# micro-fed

[![micro fed](https://github.com/bikash-b/micro-fed/blob/master/assets/icon.png)](#features)

Micro FED is a micro service based front ends. In this we can build front end using various components using Angular, React, Vue and others.It uses web components approaches to achieve micro frontends.

## How it works

It works based on following steps,

* Independent development of the frontends using frameworks/libraries like Angular, React.js, Vue.js and etc.
* Exporting the different forntend components into native web components.
* Testing and building the frontends.
* Integrating the frontends/frontend components runing at the runtime as SPA container

![A typical micro frontend technique](https://github.com/bikash-b/micro-fed/blob/master/assets/Micro%20frontend%20architecture.png)

## Prerequisites

To design and develop micro frontend, you must have idea on following,

* HTML, CSS and JavaScript
* How a forntend works in a client-server architecture
* Monolithic architecture
* Any one framework/library i.e Angular, React.js or Vue.js
* Node and NPM 
* Webpack and Babel

To start working on micro frontend, you must have following environment

* Node.js ( latest stable version i.e 12.16.1 )

## How to use

As the starter project is ready to use, follow the below steps to start with micro frontends.

### Clone the starter project

Clone the starter project i.e https://github.com/bikash-b/micro-fed.git.

### Install the required packages

Install the required npm packages required by the root application and the other micro frontend applications. Just use below below command in project root directory as well as other micro forntend directories.

> npm install

### Designing and implementing the components

There may be indivisual and independent team can be responsible for each micro frontends.

If you open the folder demo-frontends, you see there are three micro frontends available i.e angular-fed, react-fed and vue-fed. Each frontend can be mantained by respective team as follows,

Team Angular --> angular-fed

Team React   --> react-fed

team Vue     --> vue-fed

![Micro frontend team work](https://github.com/bikash-b/micro-fed/blob/master/assets/Micro%20frontend%20team%20work.png)

* For Angular frontend development, Angular-CLI can be used as the platform to support.

* For React.js frontend development react, babel and webpack can be combinely used.

* For Vue.js frontend development Vue-CLI can be used as the platform to support.

Follow below command to run the frontends in development mode,

* Use ng serve to run Angular project.
* Use npm serve or webpack-dev-server --config ./webpack.config.js --mode development to run React.js project.
* Use npm serve or vue-cli-service serve to run Vue.js project.
