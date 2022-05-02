using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace decaPoints.Calculator.Throws
{
    public class shotPut
    {
        static double a = 51.39;
        static double b = 1.50;
        static double c = 1.05;


        internal static double distance()
        {
            double t = 15.23;
            return t;
        }
        public static double shotPutPoints()
        {
            double p = a * Math.Pow((distance() - b), c);
            double points = Math.Floor(p);
            return points;
        }
    }
}
