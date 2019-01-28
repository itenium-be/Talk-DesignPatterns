export const formConfig = [
  {type: 'text', label: 'Email', pattern: '^.*@.*$'},
  {type: 'secret', label: 'Password', minLength: 8},
  {type: 'secret', label: 'Repeat', minLength: 8},
  {type: 'submit', label: 'Login'},
];
