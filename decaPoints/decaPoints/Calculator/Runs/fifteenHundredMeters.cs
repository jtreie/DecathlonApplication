using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace decaPoints.Calculator.Runs
{
    public class fifteenHundredMeters
    {
        static double a = 0.03768;
        static double b = 480.00;
        static double c = 1.85;

       internal static string time()
        {
            string t = "4:50.40";
            return t;
        }
        public static double fourHundredMetersPoints()
        {
            double t = TimeSpan.Parse("0:"+time()).TotalSeconds;
            double p = a * Math.Pow((b - t), c);
            double points = Math.Floor(p);
            return points;
        }
    }
}
