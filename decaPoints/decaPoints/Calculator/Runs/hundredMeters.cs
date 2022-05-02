using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace decaPoints.Calculator.Runs
{
    public class hundredMeters
    {
        static double a = 25.4347;
        static double b = 18.00;
        static double c = 1.81;

        internal static double time()
        {
            double t = 10.95;
            return t;
        }
        public static double hundredMetersPoints()
        {
            double p = a * Math.Pow((b - time()),c);
            double points = Math.Floor(p);
            return points;
        }
    }
}
