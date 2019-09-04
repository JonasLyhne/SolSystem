using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SolarSystemQuizz
{
    public class Question
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public int Difficulty { get; set; }
        public List<Answer> Answers { get; set; }

    }
}