import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-email',
  template: `
    <div class="form-group">
      <label>{{ config.label }}</label>
      <input type="email" class="form-control" />
    </div>
`})
export class EmailComponent {
  @Input() config: any;
}



@Component({
  selector: 'app-secret',
  template: `
    <div class="form-group">
      <label>{{ config.label }}</label>
      <input type="password" class="form-control" />
    </div>
`})
export class SecretComponent {
  @Input() config: any;
}



@Component({
  selector: 'app-toggle',
  template: `
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" />
      <label class="form-check-label">{{ config.label }}</label>
    </div>
`})
export class ToggleComponent {
  @Input() config: any;
}



@Component({
  selector: 'app-submit',
  template: `
    <button type="submit" class="btn btn-primary">{{ config.label }}</button>
`})
export class SubmitComponent {
  @Input() config: any;
}
