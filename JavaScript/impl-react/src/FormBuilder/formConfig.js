export const environment = {
  ui: 'Angular',     // React / Angular
  css: 'Bootstrap', // Bootstrap / Foundation
  cssUrl: null,
};

export class FormConfig {
  constructor(config, env) {
    Object.assign(this, config);
    this.env = env;
  }
}


export const formConfig = [
  {
    type: 'email',
    label: 'Email',
    pattern: '^.*@.*$',
    placeholder: 'Enter email',
    hint: "We'll never share your email with anyone else."
  },
  {type: 'secret', label: 'Password', minLength: 8, placeholder: 'Password'},
  {type: 'toggle', label: 'Remain logged in'},
  {type: 'submit', label: 'Login'},

].map(config => new FormConfig(config, environment));
