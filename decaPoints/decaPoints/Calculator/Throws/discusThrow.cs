using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace decaPoints.Calculator.Throws
{
    public class discusThrow
    {  
        static double a = 12.91;
        static double b = 4.00;
        static double c = 1.10;


        internal static double distance()
        {
            double t = 40.2;
            return t;
        }
        public static double discusPoints()
        {
            double p = a * Math.Pow((distance() - b), c);
            double points = Math.Floor(p);
            return points;
        }
    }
}
