using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SOLID.OpenClosedPrinciple.Solution
{
	public interface IAreaCalculator
	{
		double CalculateArea();
	}

	public class Rectangle : IAreaCalculator
	{
		public double Width { get; set; }
		public double Height { get; set; }
		public double CalculateArea()
		{
			return Width * Height;
		}
	}

	public class Circle : IAreaCalculator
	{
		public double Radius { get; set; }
		public double CalculateArea()
		{
			return Radius * Radius * Math.PI;
		}
	}

	public class OpenClosedAreaCalculator
	{
		public double Area(IAreaCalculator[] shapes)
		{
			double area = 0;
			foreach (var shape in shapes)
			{
				area += shape.CalculateArea();
			}

			return area;
		}
	}
}