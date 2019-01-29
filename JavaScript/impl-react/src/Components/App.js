import React, { Component } from 'react';
import './App.css';
import { formConfig, environment } from '../FormBuilder/formConfig.js';
import * as BootstrapControls from './controls/bootstrap';
import * as FoundationControls from './controls/foundation';
import { InjectCss } from './InjectCss.js';
import { Header } from './Header.js';

export class App extends Component {
  render() {
    return (
      <div>
        <InjectCss />
        <Header />

        <div className="container grid-container">
          {formConfig.map((config, index) => {
            const Controls = environment.css === 'Bootstrap' ? BootstrapControls : FoundationControls;
            switch (config.type) {
            case 'email': return <Controls.Email key={index} config={config} />;
            case 'secret': return <Controls.Secret key={index} config={config} />;
            case 'toggle': return <Controls.Toggle key={index} config={config} />;
            case 'submit': return <Controls.Submit key={index} config={config} />;
            default: return null;
            }
          })}
        </div>
      </div>
    );
  }
}
