using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace SolarSystemQuizz
{
    public abstract class Element
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Mass { get; set; }
        public int Diameter { get; set; }
        public int MinTemp { get; set; }
        public int MaxTemp { get; set; }
        public int MeanTemp { get; set; }
        public decimal RotationPeriod { get; set; }
        public bool RingSystem { get; set; }
        public string Image { get; set; }

    }
}