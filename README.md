Design Patterns
===============

Introduction to Design Patterns given in 2012 for AC Partners and in 2019 for itenium.


DotNet
======

## Example 1-3: Calculating shape area

Adhering to the OpenClosedPrinciple by introducing a PureFabrication (IAreaCalculator)
and using Polymorphism instead of type checking.

- Example 1: Calculate area of Circles
- Example 2: A naive implementation when Rectangles are added
- Example 3: Introducing the IAreaCalculator abstraction

## Example 4-7: Saving files

Keeping the code DRY:

- Example 4: Code duplication for the different "file saving mechanisms"
- Example 5: A solution with **TemplateMethod**
- Example 7: A solution with **Strategy**
- Example 6: Use **FactoryMethod** on Example 5 to allow each "file saving mechanism" to return custom metadata
