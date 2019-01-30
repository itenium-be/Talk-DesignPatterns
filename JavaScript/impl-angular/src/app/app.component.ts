import { Component, OnInit } from '@angular/core';
import { formConfig, environment } from '../FormBuilder/formConfig';
import { DomSanitizer } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formConfig = formConfig;
  env = environment;

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {
    // TODO: What is this doing here?
    if (this.env.css === 'Bootstrap') {
      this.env.cssUrl = 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css';
    } else {
      this.env.cssUrl = 'https://cdn.jsdelivr.net/npm/foundation-sites@6.5.1/dist/css/foundation.min.css';
    }
  }

  switchCss(): void {
    const switchTo = this.env.css === 'Bootstrap' ? 'Foundation' : 'Bootstrap';
    this.env = {...this.env, css: switchTo, cssUrl: null};
    this.ngOnInit();
  }
}

// To change between Bootstrap/Foundation with a button:
// Would need to change global configuration and reload module like below:
// function tryBootstrapNewApplication(tagName) {
//   const newNode = document.createElement(tagName);
//   document.getElementsByTagName('body')[0].insertAdjacentElement('beforeend', newNode);

//   const newAppModule = require('./app.module').AppModule; // or here: Circular Depedency
//   platformBrowserDynamic().bootstrapModule(newAppModule);
// }
