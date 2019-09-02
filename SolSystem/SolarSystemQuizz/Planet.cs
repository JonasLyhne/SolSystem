using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SolarSystemQuizz
{
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