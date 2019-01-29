import React, { Component } from 'react';
import './App.css';
import { formConfig } from '../FormBuilder/formConfig.js';
import * as Controls from './controls';

export class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="navbar-brand">itenium</div>
        </nav>

        <div className="container">
          {formConfig.map((config, index) => {
            switch (config.type) {
            case 'email': return <Controls.Email key={index} config={config} />;
            case 'secret': return <Controls.Secret key={index} config={config} />;
            case 'toggle': return <Controls.Toggle key={index} config={config} />;
            case 'submit': return <Controls.Submit key={index} config={config} />;
            default: return null;
            }
          })}


          {/*<form>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">Remain logged in</label>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>*/}
        </div>
      </div>
    );
  }
}
