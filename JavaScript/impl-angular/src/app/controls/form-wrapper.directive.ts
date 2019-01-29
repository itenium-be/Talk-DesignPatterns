import { Directive, ElementRef, Input, OnInit } from '@angular/core';

// Exercise SOLID:
// This high level component wraps a form control for use in a Bootstrap form
// There are several problems
// - It has intimate knowledge of the low level controls (setting a specific extra class 'form-check' for 'toggle')
// - Another big switch statement is waiting to happen here: A control can also appear in a navbar, ... with different classes


// Exercise DesignPatterns:
// Since our FormBuilder project is so successful, team M will also start using it.
// Unfortunately, these guys do not use Bootstrap but Foundation. Ideally we would
// split up the project in seperate npm packages:
// - formbuilder-core:
//    - Bridge (?): To achieve loose coupling between react/angular and bootstrap/foundation
//    - Builder (?): Turn configuration into classes
//    - AbstractFactory (?): Create the correct classes from angular/react and bootstrap/foundation
//    - Decorator (?): This FormWrapperDirective could've been implemented with Decorator instead
//    - Composite (?): The AbstractFactory may return a Composite
//        - Visitor (?): If it did return a Composite, we could add extra behavior in an OCP way (validation, layouting, tooltips, ...)
//        - Chain Of Responsibility (?): Events may be handled at different levels (the control itself, it's parent, the main window)
//    - Mediator (?): React/Foundation/... is getting complex... Do we need a Mediator
//    - Memento (?): We can store the state of the controls in localStorage and restore it on demand
//    - Observer (?): Users of our library may want to respond as changes happen
// - formbuilder-angular/react: The controls in Angular/React
// - formbuilder-bootstrap/foundation: The Html markup in Bootstrap/Foundation
//    - Strategy (?): Implement the interfaces of formbuilder-core in Angular/React/Foundation/Bootstrap
//    - State (?): Have controls behave/look differently based on disabled / error / focused / ...
//    - Adapter (?): Make both Angular/React work with Bootstrap/Foundation


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
