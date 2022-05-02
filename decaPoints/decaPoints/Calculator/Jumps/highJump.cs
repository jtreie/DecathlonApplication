using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace decaPoints.Calculator.Jumps
{
    public class highJump
    {
        static double a = 0.84654352;
        static double b = 75.00;
        static double c = 1.42;


        internal static double distance()
        {
            double t = 1.92;
            return t;
        }
        public static double highJumpPoints()
        {
            double p = a * Math.Pow((distance()*100 - b), c);
            double points = Math.Floor(p);
            return points;
        }
    }
}
