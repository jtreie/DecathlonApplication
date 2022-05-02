using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace decaPoints.Model
{
    public class Person
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public Gender Gender { get; set; }
        public double HundredMeters { get; set; }
        public double LongJump { get; set; }
        public double ShotPut { get; set; }
        public double HighJump { get; set; }
        public double FourHundredMeters { get; set; }
        public double Hurdles { get; set; }
        public double DiscusThrow { get; set; }
        public double PoleVault { get; set; }
        public double Javelin { get; set; }
        public String FifteenHundredMeters { get; set; }
        public double TotalPoints { get; set; }
    }

    [JsonConverter(typeof(JsonStringEnumConverter))]

    public enum Gender
    {
        Male = 1,
        Female = 2,
    }
}
