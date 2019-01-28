import { Component } from '@angular/core';
import { formConfig } from '../FormBuilder/formConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formConfig = formConfig;
}
