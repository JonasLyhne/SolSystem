using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SolarSystemQuizz
{
    public class Information
    {
        public int ClassTier { get; set; }
        public string Title { get; set; }
        public string Info { get; set; }

        public Information() { }
        public Information(int classTier, string title, string info)
        {
            ClassTier = classTier;
            Title = title;
            Info = info;
        }
    }
}