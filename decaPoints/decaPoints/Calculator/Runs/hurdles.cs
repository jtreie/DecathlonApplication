using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace decaPoints.Calculator.Runs
{
    public class hurdles
    {
        static double a = 5.74352;
        static double b = 28.50;
        static double c = 1.92;


        internal static double time()
        {
            double t = 14.22;
            return t;
        }
        public static double hurdlesPoints()
        {
            double p = a * Math.Pow((b - time()), c);
            double points = Math.Floor(p);
            return points;
        }
    }
}
