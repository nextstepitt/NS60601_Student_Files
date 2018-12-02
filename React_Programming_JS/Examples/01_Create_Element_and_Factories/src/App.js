import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { code, div, h1, header, img, p } from './react-element-factory';

/* Original generated code, using JSX */

/*
class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
*/

/* Rendering the React DOM tree using createElement */

/*
class App extends Component {
  render() {

    return React.createElement('div', { className: 'App' }, [ 
      React.createElement('header', { className: 'App-header' }, [
        React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }, null),
        React.createElement('h1', { className: 'App-title' }, 'Welcome to React')
      ]),
      React.createElement('p', { className: 'App-Intro' }, [
          'To get started, edit ',
          React.createElement('code', null, 'src/App.js'),
          ' and save to reload.'
      ])
    ])
  }
}
*/

/* Rendering the React DOM tree using functions built from createFactory method */

/*
class App extends Component {
  render() {

    return div({ className: 'App' }, [ 
      header({ className: 'App-header' }, [
        img({ src: logo, className: 'App-logo', alt: 'logo' }, null),
        h1({ className: 'App-title' }, 'Welcome to React')
      ]),
      p( { className: 'App-Intro' }, [
          'To get started, edit ',
          code(null, 'src/App.js'),
          ' and save to reload.'
      ])
    ])
  }
}
*/

/* Rendering the React DOM tree using a function that returns the tree */

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
    </div>
  )
}

export default App;