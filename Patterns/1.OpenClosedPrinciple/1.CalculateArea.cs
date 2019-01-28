using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SOLID.OpenClosedPrinciple.Setup
{
    public class Rectangle
    {
        public double Width { get; set; }
        public double Height { get; set; }
    }

    public class AreaCalculator
    {
        public double Area(Rectangle[] shapes)
        {
            double area = 0;
            foreach (var shape in shapes)
            {
                area += shape.Width * shape.Height;
            }
            return area;
        }
    }
}
