import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import * as Controls from './controls';
import { FormWrapperDirective } from './controls/form-wrapper.directive';

@NgModule({
  declarations: [
    AppComponent,
    ...Object.values(Controls),

    FormWrapperDirective,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
