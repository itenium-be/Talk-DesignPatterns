using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SOLID.OpenClosedPrinciple.Setup;

namespace SOLID.OpenClosedPrinciple.Violation
{
	public class Circle
	{
		public double Radius { get; set; }
	}

	public class AdvancedAreaCalculator
	{
		public double Area(object[] shapes)
		{
			double area = 0;
			foreach (var shape in shapes)
			{
				if (shape is Rectangle)
				{
					Rectangle rectangle = (Rectangle)shape;
					area += rectangle.Width * rectangle.Height;
				}
				else
				{
					Circle circle = (Circle)shape;
					area += circle.Radius * circle.Radius * Math.PI;
				}
				// Fool me once, shame on you. Fool me twice, shame on me.
				// Triangles, Elipses, ...
			}

			return area;
		}
	}
}
