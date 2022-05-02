using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace decaPoints.Calculator.Throws
{
    public class javelinThrow
    {
        static double a = 10.14;
        static double b = 7.00;
        static double c = 1.08;


        internal static double distance()
        {
            double t = 58.20;
            return t;
        }
        public static double javelinPoints()
        {
            double p = a * Math.Pow((distance() - b), c);
            double points = Math.Floor(p);
            return points;
        }
    }
}
