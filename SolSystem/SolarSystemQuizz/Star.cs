using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SolarSystemQuizz
{
    public class Star : Element
    {
        public string Color { get; set; }
        public int NumberOfPlanets { get; set; }
        public List<Planet> Planets { get; set; }
    }
}