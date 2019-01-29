import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import * as BootstrapControls from './controls/bootstrap';
import * as FoundationControls from './controls/foundation';
import { FormWrapperDirective } from './controls/form-wrapper.directive';
import { environment } from '../FormBuilder/formConfig';

@NgModule({
  declarations: [
    AppComponent,
    ...Object.values(environment.css === 'Bootstrap' ? BootstrapControls : FoundationControls),

    FormWrapperDirective,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
