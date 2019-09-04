using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SolarSystemQuizz
{
    /// <summary>
    /// a star that have planets orbiting around it 
    /// </summary>
    public class Star : Element
    {
        public string Color { get; set; }
        public int NumberOfPlanets { get; set; }
        public List<Planet> Planets { get; set; }
    }
}