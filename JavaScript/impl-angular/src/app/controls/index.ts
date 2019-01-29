import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-email',
  template: `
    <div appFormWrapper>
      <label>{{ config.label }}</label>
      <input type="email" class="form-control" [placeholder]="config.placeholder" />
      <small class="form-text text-muted">{{ config.hint }}</small>
    </div>
`})
export class EmailComponent {
  @Input() config: any;
}


@Component({
  selector: 'app-secret',
  template: `
    <div appFormWrapper>
      <label>{{ config.label }}</label>
      <input type="password" class="form-control" [placeholder]="config.placeholder" />
    </div>
`})
export class SecretComponent {
  @Input() config: any;
}



@Component({
  selector: 'app-toggle',
  template: `
    <div [appFormWrapper]="config">
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
