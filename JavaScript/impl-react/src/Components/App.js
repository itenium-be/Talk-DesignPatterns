import React, { Component } from 'react';
import './App.css';
import { formConfig } from '../FormBuilder/formConfig.js';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <pre>{JSON.stringify(formConfig)}</pre>
      </div>
    );
  }
}
