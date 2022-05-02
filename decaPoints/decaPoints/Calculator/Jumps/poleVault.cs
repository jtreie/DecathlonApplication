using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace decaPoints.Calculator.Jumps
{
    public class poleVault
    {
        static double a = 0.2797;
        static double b = 100.00;
        static double c = 1.35;


        internal static double distance()
        {
            double t = 4.50;
            return t;
        }
        public static double poleVaultPoints()
        {
            double p = a * Math.Pow((distance()*100 - b), c);
            double points = Math.Floor(p);
            return points;
        }
    }
}
