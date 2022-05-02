using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace decaPoints.Calculator.Jumps
{
    public class longJump
    {
        static double a = 0.14354;
        static double b = 220.00;
        static double c = 1.40;


        internal static double distance()
        {
            double m = 7.22;
            return m;
        }
        public static double longJumpPoints()
        {
            double p = a * Math.Pow((distance()*100 - b), c);
            double points = Math.Floor(p);
            return points;
        }
    }
}
