import { Component } from '@angular/core';

// Unsure when the Decorators proposal will get through
// https://github.com/tc39/proposal-decorators
// For now TypeScript has implemented it for us
// Or starting from Babel 7.1


// While HigherOrderComponents are handy in React
// In Angular it might be better to use a Directive instead

function ConsoleDecorator(target) {
  // Executes once
  console.log('Decorated Component', target);
}

// Usage
@ConsoleDecorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class DecoratedComponent {}



// --------------------------------------------------------

// Method Decorator: add pre/post actions

class MyClass {
  @log
  myMethod(arg: string) {
    return "Message -- " + arg;
  }
}

function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
  const originalMethod = descriptor.value;

  // NOTE: Do not use arrow syntax here. Use a function expression in
  // order to use the correct value of `this` in this method
  descriptor.value = function(...args: any[]) {
    console.log("The method args are: " + JSON.stringify(args));
    const result = originalMethod.apply(this, args);
    console.log("The return value is: " + result);
    return result;
  };

  return descriptor;
}



// --------------------------------------------------------

// Decorator Factory (Decorators with parameters)

class MyClass {
  @enumerable(false)
  get prop() {
    return true;
  }
}

function enumerable(isEnumerable: boolean) {
  return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
    descriptor.enumerable = isEnumerable;
    return descriptor;
  };
}





// -------------------------------------------------------

// Log the class name for each `new SomeClass()`

function InstanceConsoleDecorator(target: any) {
  const original = target;

  // a utility function to generate instances of a class
  function construct(constructor, args) {
    const c: any = function () {
      return constructor.apply(this, args);
    }
    c.prototype = constructor.prototype;
    return new c();
  }

  // the new constructor behaviour
  const f: any = function (...args) {
    console.log("New: " + original.name);
    return construct(original, args);
  }
  f.prototype = original.prototype;

  // return new constructor (will override original)
  return f;
}


@InstanceConsoleDecorator
class Person {
  public name: string;
  public surname: string;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }
}

const p = new Person("remo", "jansen");
const p = new Person("remo", "jansen");
