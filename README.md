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

## Basic principle

It works on the principle that "*each UI can be devided into many smaller pieces called components or micro compoments, which not only gives more flexible, reusable and mocular way to manage the frontends but also increases the performance and testability of the frontends*".

So a micro frontend component can be implement in such a way, it can be integrated anywhere irrespective of any frameworks or libraries. For example a REST full API can used used any where irrespective of any technologies and this is posible as it works on a protocol for taking input and giving output in JSON format, JSON is the common language for any technologies to communicate each other. 

Similarly there should be something common channel for frontends to communicate each other, which is nothing but web components. According to MDN ( Mozilla Developer Network ) "Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps".In current approach of implementing micro frontends, web components play key role.

So basically we have to transform a component created using a framework or library to web component which can be used in orher UI platform. 

A component will have following parts, 

* Inputs or attributes
* Outputs or events
* styles

![A typical micro frontend technique](https://github.com/bikash-b/micro-fed/blob/master/assets/Component.png)

### Code differences

An Angular component code,

***hello-world.component.ts***

```javascript
// Import statements
import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'hello-world',
  template: `
    <div> {{ message }} </div>
  `
})
export class HeroListComponent implements OnInit {
  
  // Class variable declaration and initialization if needed
  message: string = "Hello World";

  constructor(DI){}
  
  // Life cycle methods
  ngOnInit(){
  
  }
  
  // Other methods
  getMessage(){
  
  }
}
```

A React component code,

***HelloWorldComponent.js***

```javascript
// Import statements
import React from 'react';

class HelloWorldComponent extends React.Component {

    constructor(props){
        super(props);
        
        // State variables
        this.state = {
            message: 'Hello World'
        };
        
        // Events binding
        this.onEventHandle = this.onEventHandle.bind(this);
    }

    // Life cycle methods
    componentDidMount(){
        
    }

    // Event handeling methods
    onEventHandle() {
        
    }

    // Other methods
    getMessage(e){
        
    }

    // Rendering template
    render() {
        return <h1 onClick={this.onEventHandle}> {this.state.message} </h1>
    }
}

export default WebComponentTest;
```

A Vue component code,

***HelloWorldComponent.vue***

```javascript
<template>
  <div>
    <h1 v-on:click="getMessage">{{message}}</h1>
  </div>
</template>

<script>

// Import statements

export default {
  name: 'HelloWorldComponent',
  components: {
    // Dependant components
  },
  data() {
    return {
      message: 'Hello World'
    }
  },
  methods: {
    getMessage(){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{
    color: "000000";
  }
</style>

```

A Web component component code,

***HelloWorldComponent.js***

```javascript
class HelloWorldComponent extends HTMLElement {
  
  constructor(){
    super();
  }
  
  // Life cycle methods
  connectedCallback() {
    this.innerHTML = `<h1>Hello world</h1>`;
  }
}
    
customElements.define('hello-world-component', HelloWorldComponent);
```

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

* Use *ng serve* to run Angular project.

* Use *npm serve* or *webpack-dev-server --config ./webpack.config.js --mode development* to run React.js project.

* Use *npm serve* or *vue-cli-service* serve to run Vue.js project.

### Exporting micro frontend components as web components

As it uses web components as the key elements to build micro forntend, it needs to be export the micro frontend component into web components. 

![Exporting micro frontend components to web components](https://github.com/bikash-b/micro-fed/blob/master/assets/Exporting%20micro%20frontend%20components%20to%20web%20components.png)

Follow the below tecniques to get the web components.

#### Angular components as web components

You need to configure the Angular's root module ( e.g AppModule ) for exporting the Angular components into web components.

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CustomelementComponent } from './customelement/customelement.component';

@NgModule({
  declarations: [
    CustomelementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    CustomelementComponent
  ]
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {

    const { injector } = this;

    // create custom elements from angular components
    const ngCustomElement = createCustomElement(CustomelementComponent, { injector });
    ..........
    ..........
    ..........

    // define in browser registry
    customElements.define('ng-web-component', ngCustomElement);
    ..........
    ..........
    ..........

  }
}

```

#### React components as web components

To export React components as web components, the below configuration needs to be provided in the index.js.

```javascript
import React from 'react';
import ReactComponent from './ReactComponent';
import { render, unmountComponentAtNode } from 'react-dom';


class ReactWebComponent extends HTMLElement {
  
  constructor() {
    super();
    this.observer = new MutationObserver(() => this.update());
    this.observer.observe(this, { attributes: true });
  }

  connectedCallback() {
    this._innerHTML = this.innerHTML;
    this.mount();
  }

  disconnectedCallback() {
    this.unmount();
    this.observer.disconnect();
  }

  update() {
    this.unmount();
    this.mount();
  }

  mount() {
    const props = {...};
    render(<App {...props} />, this);
  }

  unmount() {
    unmountComponentAtNode(this);
  }

}

customElements.define('react-web-component', ReactWebComponent);

```
### Vue components as web components

Just similar to Angular and React, you need to configure the main.js to export Vue components as web components.

```javascript
import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'
import VueComponent from './components/VueComponent.vue';

const VueWebComponent = wrap(Vue, VueComponent)

window.customElements.define('vue-web-component', VueWebComponent)
```

Only configuration is not enough to export the micro frontend components to web components, you need to run below build commands to generate the web components.

For Angular

> ng build --prod --output-hashing none --single-bundle true

For React

> webpack --mode production

For Vue

> vue-cli-service build --target wc --name vue-web-components 'src/components/*.vue'

The above command will generate single JavaScript file with in a dist folder and which needs to be deployed and run as like as a service in backend system.

![Micro build and deployment](https://github.com/bikash-b/micro-fed/blob/master/assets/Micro%20build%20and%20deployment.png)

## Micro frontends all together

Once you are done with above steps, you will be able to use the micro frontends any where irrespective of any frontend frameworks or libraries. Below are use of the micro frontends.

* Integrating Angular components, React.js components and Vue.js components together in a SPA.
* Integrating React.js components and Vue.js components in Angular templates.
* Integrating Angular micro components and Vue.js components in React.js UI.
* Integrating React.js components and Angular components in Vue.js UI.

### Integrating Angular components, React.js components and Vue.js components together in a SPA

In this we can use any SPA framework or library as the primary platform for routing, state management, dependancy injection and others. For example *router-slot* is a SPA library has great routing feature. If we gather all components from Angular, React and Vue, then code would be some thing like this,

***index.html***

```html
<html>
  <head>
    <base href="/" />
    <style>
        
    </style>
  </head>
  <body>
     
    <header></header>
    
    <div>
      <angular-component></angular-component>
      <react-component></react-component>
      <vue-component></vue-component>
    </div>
    
    <footer></footer>
    
    </script>
    <!-- Supporting JS modules -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.9.1/zone.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.2.10/custom-elements-es5-adapter.js"></script>
    <script src="https://unpkg.com/vue"></script>
    
    <!-- Micro frontend modules -->
    <script src="http://cloud.com/angular-mf-module.js"></script>
    <script src="http://cloud.com/react-mf-module.js"></script>
    <script src="http://cloud.com/vue-mf-module.js"></script>
  </body>
</html>
```

### Integrating React.js components and Vue.js components in Angular templates

This is the scenario where we will be using Angular as the primary platform for wrapping the micro frontends. To achieve this, below steps needs to followed,

Import all the micro frontend modules directly from clound and the supporting JS libraries in index.html

***index.html***

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Angular Application</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  
  <!-- Supporting JS modules -->
  <script src="https://unpkg.com/vue"></script>
  <script src="https://unpkg.com/bootstrap-vue@2.0.0-rc.28/dist/bootstrap-vue.min.js"></script>
  
  <!-- Micro frontend modules -->
  <script src="http://cloud.com/angular-mf-module.js"></script>
  <script src="http://cloud.com/react-mf-module.js"></script>
  <script src="http://cloud.com/vue-mf-module.js"></script>
</head>
<body>
  <app-root></app-root>
</body>
</html>

```
As the micro frontend components act as web components which are custom HTML elements, we have to tell Angular that we are loading the components which are not belongs to you.

***app.module.ts***

```javascript
@NgModule({
  declarations: [
    ....
    ....
    ....
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
```

Now we can access the micro frontends in any of the Angular components.

### Integrating Angular micro components and Vue.js components in React.js UI

In this scenario we will be using React.js as the base platform to wrap micro frontends. To do so follow the below steps,

Import all the micro frontend modules directly from clound and the supporting JS libraries in index.html

***index.html***

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

    <!-- Supporting JS modules -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.2.10/custom-elements-es5-adapter.js"></script>
    <script src="https://unpkg.com/vue"></script>

    <!-- Micro frontend modules -->
    <script src="http://cloud.com/angular-mf-module.js"></script>
    <script src="http://cloud.com/react-mf-module.js"></script>
    <script src="http://cloud.com/vue-mf-module.js"></script>

    <title>React Application</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

Now we can access the micro frontends in any of the React.js components.

### Integrating React.js components and Angular components in Vue.js UI

This is the scenario where we will be using Angular as the main platform for wrapping the micro frontends. To achieve this, below steps needs to followed,

Import all the micro frontend modules directly from clound and the supporting JS libraries in index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    
    <!-- Supporting JS modules -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.2.10/custom-elements-es5-adapter.js"></script>

    <!-- Micro frontend modules -->
    <script src="http://cloud.com/angular-mf-module.js"></script>
    <script src="http://cloud.com/react-mf-module.js"></script>
    <script src="http://cloud.com/vue-mf-module.js"></script>
    
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>

  </body>
</html>
```

We have to inform Vue compiler that the micro frontends are ingnored.

```javascript
Vue.config.ignoredElements = [
  'angular-component',
  'react-component'
]

new Vue({
  render: h => h(App),
}).$mount('#app')
```

## Communicatiing micro frontend components

![A typical micro frontend technique](https://github.com/bikash-b/micro-fed/blob/master/assets/Micro%20frontends%20communication.png)

We won't be working only on static UI pages. As the data vary based on certain conditions so the values in the UI pages needs to changed. So the data bind shoud work for the components. And to communicating among the micro frontend components we need event binding. Each framework or library has its own way of implementation. So we can follow them to make this possible. Also we can use plain JavaScript attribute and event binding.

## Unit testing

Unit testing needs to be performed indivisual micro frontend project level. There are different frameworks available for writting unit cases and generating code coverage report. Some known testing frameworks are Karma with Jasmine, Chai with Mocha, Jest, etc.

## Building micro frontends

## Deploying micro frontends

## Including AR ( Augmented Reality ) component - Aditional
