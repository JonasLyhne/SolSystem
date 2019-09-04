using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SolarSystemQuizz
{
    /// <summary>
    /// a planet that is orbiting a star
    /// holds a list of moons that is orbiting around it 
    /// </summary>
    public class Planet : Element, IOrbitingElement
    {
        public int StarId { get; set; }
        public int NumberOfMoons { get; set; }
        public long DistanceToSun { get; set; }
        public decimal PeriodOfRevolution { get; set; }
        public decimal LengthOfDay { get; set; }
        public List<Moon> Moons { get; set; }
    }
}