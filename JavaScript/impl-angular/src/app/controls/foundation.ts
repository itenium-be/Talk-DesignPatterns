import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-email',
  template: `
    <label>
      {{ config.label }}
      <input type="email" class="form-control" [placeholder]="config.placeholder" />
    </label>
    <p class="help-text">{{ config.hint }}</p>
`})
export class EmailComponent {
  @Input() config: any;
}


@Component({
  selector: 'app-secret',
  template: `
    <label>
      {{ config.label }}
      <input type="password"  [placeholder]="config.placeholder">
    </label>
`})
export class SecretComponent {
  @Input() config: any;
}



@Component({
  selector: 'app-toggle',
  template: `
    <input type="checkbox">
    <label>{{ config.label }}</label>
`})
export class ToggleComponent {
  @Input() config: any;
}



@Component({
  selector: 'app-submit',
  template: `
    <button type="submit" class="success button">{{ config.label }}</button>
`})
export class SubmitComponent {
  @Input() config: any;
}
