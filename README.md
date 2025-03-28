# jQuery SPA Framework

A lightweight Single Page Application framework built with jQuery that provides React-like components and routing.

## ✨ Features

- **Component-based architecture** with lifecycle methods
- **Client-side routing** with dynamic parameters
- **State management** at component level
- **Plugin system** for jQuery extensions
- **CSS management** with automatic injection
- **Optimized production builds**
- **Easy integration** with existing jQuery plugins

## ✨ Project Folder Structure

├── src/
│   ├── core/
│   │   ├── Component.js
│   │   ├── Router.js
│   │   ├── PluginSystem.js
│   │   ├── CSSLoader.js
│   │   └── index.js
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   └── Navbar.js
│   │   └── pages/
│   │       ├── HomePage.js
│   │       ├── AboutPage.js
│   │       └── ContactPage.js
│   ├── App.js
│   ├── main.js
│   └── styles/
│       └── main.css
├── public/
│   ├── index.html
│   └── assets/
├── package.json
├── rollup.config.js
└── README.md



### Configure routes:

// src/App.js
import { Router } from './core';
import { Greeting } from './components/Greeting';

export const routes = {
  '/': Greeting
};

export function initApp() {
  return new Router(routes, '#app');
}
#### Define routes with parameters:

const routes = {
  '/': HomePage,
  '/products/:id': ProductPage,
  '/about': AboutPage,
  '*': NotFoundPage
};

#### Access route parameters:
class ProductPage extends Component {
  render() {
    return `
      <h1>Product ID: ${this.props.id}</h1>
    `;
  }
}

### Initialize the application:

// src/main.js
import { initApp } from './App';

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

### Create your first component:

// src/components/Greeting.js
import { Component } from '../../core/Component';

export class Greeting extends Component {
  render() {
    return `
      <h1>Hello, ${this.props.name}!</h1>
    `;
  }
}


### Use jQuery plugins easily:

// Register plugin
PluginSystem.registerJQueryPlugin('datepicker', function(options) {
  return this.datepicker(options);
});

// Use in component
this.useJQueryPlugin('datepicker', {
  format: 'yyyy-mm-dd'
});


### Update component state:

this.setState({ items: newItems }, () => {
  console.log('State updated!');
});


### Layout Components
class MainLayout extends Component {
  render() {
    return `
      <header>...</header>
      <main>${this.props.children}</main>
      <footer>...</footer>
    `;
  }
}


### Component-scoped styles:

import styles from './Button.module.css';

class Button extends Component {
  render() {
    return `<button class="${styles.primary}">Click me</button>`;
  }
}


## API Integration

class UserList extends Component {
  async componentDidMount() {
    const users = await fetch('/api/users').then(r => r.json());
    this.setState({ users });
  }

  render() {
    return `
      <ul>
        ${this.state.users?.map(user => `
          <li>${user.name}</li>
        `).join('')}
      </ul>
    `;
  }
}


## Build Project 

#### Development
npm run dev

#### Production build
npm run build

#### Start development server
npm run serve


## 📦 Dependencies
- Query 3.6.0+
- rollup (for bundling)
- postcss (for CSS processing)


# Your Contribution will be appreciated 