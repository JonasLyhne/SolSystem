using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SolarSystemQuizz
{
    public class Moon : Element, IOrbitingElement
    {
        public int ParentId { get; set; }
        public long DistanceToPlanet { get; set; }
        public decimal PeriodOfRevolution { get; set; }
        public decimal LengthOfDay { get; set; }
    }
}