export const formConfig = [
  {type: 'email', label: 'Email', pattern: '^.*@.*$'},
  {type: 'secret', label: 'Password', minLength: 8},
  {type: 'toggle', label: 'Remain logged in'},
  {type: 'submit', label: 'Login'},
];
