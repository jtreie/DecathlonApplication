using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace decaPoints.Model
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        public DbSet<Person> PersonList { get; set; }
         
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Person>().Property(p => p.ID).HasIdentityOptions(startValue: 2);

            modelBuilder.Entity<Person>().HasData(
                new Person
                {
                    ID = 1,
                    Name = "Peter Pan",
                    Gender = Gender.Male,
                    HundredMeters = Calculator.Runs.hundredMeters.time(),
                    LongJump = Calculator.Jumps.longJump.distance(),
                    ShotPut = Calculator.Throws.shotPut.distance(),
                    HighJump = Calculator.Jumps.highJump.distance(),
                    FourHundredMeters = Calculator.Runs.fourHundred.time(),
                    Hurdles = Calculator.Runs.hurdles.time(),
                    DiscusThrow = Calculator.Throws.discusThrow.distance(),
                    PoleVault = Calculator.Jumps.poleVault.distance(),
                    Javelin = Calculator.Throws.javelinThrow.distance(),
                    FifteenHundredMeters = Calculator.Runs.fifteenHundredMeters.time(),
                    TotalPoints = Calculator.totalPoints.points(),
                }) ;

        }
    }

}
