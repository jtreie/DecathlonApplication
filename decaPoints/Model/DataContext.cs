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
                    HundredMeters = 11.1,
                    LongJump = 7.11,
                    ShotPut = 13.2,
                    HighJump = 2.05,
                    FourHundredMeters = 50.1,
                    Hurdles = 14.2,
                    DiscusThrow = 40.2,
                    PoleVault = 4.80,
                    Javelin = 59,
                    FifteenHundredMeters = "4:32.2",

                }) ;

        }
    }

}
