Design Patterns
===============

Introduction to Design Patterns given in 2012 for AC Partners and in 2019 for itenium.

Some material:  
- [JavaScript exercise info](Handout.md)
- [Design Pattern definitions for this technical session](CheatSheet.md)
- [All design patterns with UML diagrams](designpatterns-cheatsheet.pdf)


JavaScript
==========

Creating a framework for generating user forms:

```
npm install

# React
cd JavaScript/impl-react
npm start

# Angular
cd JavaScript/impl-angular
npm start
```

# JavaScript

See [Handout.md](Handout.md)


## Exercise SOLID

**Angular - Bootstrap - FormWrapperDirective**:  

This high level component wraps a form control for use in a Bootstrap form  
There are several problems:  

- It has intimate knowledge of the low level controls (setting a specific extra class 'form-check' for 'toggle')
- Another big switch statement is waiting to happen here: A control can also appear in a navbar, ... with different classes


DotNet
======

1 OpenClosedPrinciple
---------------------

### Example 1-3: Calculating shape area

Adhering to the OpenClosedPrinciple by introducing a PureFabrication (IAreaCalculator)
and using Polymorphism instead of type checking.

- Example 1: Calculate area of Circles
- Example 2: A naive implementation when Rectangles are added
- Example 3: Introducing the IAreaCalculator abstraction

### Example 4-7: Saving files

Keeping the code DRY:

- Example 4: Code duplication for the different "file saving mechanisms"
- Example 5: A solution with **TemplateMethod**
- Example 7: A solution with **Strategy**
- Example 6: Use **FactoryMethod** on Example 5 to allow each "file saving mechanism" to return custom metadata


2 Patterns
----------

- 1-2.Observer: Examples of Observer: builtin support with `event EventHandler<EventArgs>`
- 3.Decorator: Example with Streams



TODO: De CheatSheet zouden moeten genummerd zijn
