using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace decaPoints.Calculator
{
    public class totalPoints
    {
        internal static double points()
        {
            double points = Runs.hundredMeters.hundredMetersPoints() + Runs.fourHundred.fourHundredMetersPoints() + Runs.hurdles.hurdlesPoints() + Runs.fifteenHundredMeters.fourHundredMetersPoints() +
                +Jumps.longJump.longJumpPoints() + Jumps.highJump.highJumpPoints() + Jumps.poleVault.poleVaultPoints() + Throws.shotPut.shotPutPoints() + Throws.javelinThrow.javelinPoints() + Throws.discusThrow.discusPoints();
            return points;
        }
    }
}
