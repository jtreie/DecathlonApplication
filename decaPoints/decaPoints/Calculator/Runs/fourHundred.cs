using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace decaPoints.Calculator.Runs
{
    public class fourHundred
    {
            static double a = 1.53775;
            static double b = 82.00;
            static double c = 1.81;


            internal static double time()
            {
                double t = 49.70;
                return t;
            }
            public static double fourHundredMetersPoints()
            {
                double p = a * Math.Pow((b - time()), c);
                double points = Math.Floor(p);
                return points;
            }
    }
}
