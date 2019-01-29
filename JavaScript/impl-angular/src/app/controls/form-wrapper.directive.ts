import { Directive, ElementRef, Input, OnInit } from '@angular/core';


// Used by Bootstrap only!

// When we create a form in a navbar instead of in a form
// different classes need to be added.

@Directive({
  selector: '[appFormWrapper]'
})
export class FormWrapperDirective implements OnInit {
  @Input('appFormWrapper') config: any;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.classList.add('form-group');

    // Poor Abstraction: Why does a "formWrapper" need to know about specific implementations?
    if (this.config && this.config.type === 'toggle') {
      this.el.nativeElement.classList.add('form-check');
    }

    // Will this become one of many `switch(config.type)` instances?

    // switch (this.config.type) {
    // case 'toggle': // do stuff
    // case 'radios': // do other stuff
    // // etc
    // }
  }
}
