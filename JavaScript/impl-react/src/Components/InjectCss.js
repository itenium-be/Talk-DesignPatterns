import React, { Component } from 'react';
import './App.css';
import { environment } from '../FormBuilder/formConfig.js';


export class InjectCss extends Component {
  render() {
    const cssUrl = environment.css === 'Bootstrap' ?
      'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' :
      'https://cdn.jsdelivr.net/npm/foundation-sites@6.5.1/dist/css/foundation.min.css';

    return <link rel="stylesheet"href={cssUrl} />;
  }
}
