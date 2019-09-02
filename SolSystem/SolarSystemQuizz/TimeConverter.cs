using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.UI.WebControls;

namespace SolarSystemQuizz
{
    /// <summary>Converts time in string format to decimal total time in seconds </summary>
    public static class TimeConverter
    {
        private static readonly char[] Separators = { 'a', 'd', 't', 'm', 's' };

        /// <summary>Gets the time in seconds.</summary>
        /// <param name="timeInString">The time in string.</param>
        /// <returns></returns>
        public static decimal GetTimeInSeconds(string timeInString)
        {
            var timeInDecimal = ConvertToListOfDecimal(timeInString);
            return CalculateTimeInSec(timeInDecimal);
        }

        /// <summary>Calculates the total time in sec.</summary>
        /// <param name="timeInDecimal">The time in decimal.</param>
        /// <returns></returns>
        private static decimal CalculateTimeInSec(IReadOnlyList<decimal> timeInDecimal)
        {
            return (timeInDecimal[0] * 365 * 24 * 60 * 60) + (timeInDecimal[1] * 24 * 60 * 60) + (timeInDecimal[2] * 60 * 60) + (timeInDecimal[3] * 60) + timeInDecimal[4];
        }

        /// <summary>Converts to list of decimal.</summary>
        /// <param name="timeInString">The time in string.</param>
        /// <returns><list type="decimal"> The time in list of decimal</list></returns>
        private static List<decimal> ConvertToListOfDecimal(string timeInString)
        {
            var timeDecimals = new List<decimal>();
            decimal year = 0;
            decimal days = 0;
            decimal hours = 0;
            decimal min = 0;
            decimal sek = 0;
            string[] parts = Regex.Split(timeInString, @"(?<=[adtms])");
            foreach (string part in parts)
            {
                if (part.Contains('a'))
                {
                    year = decimal.Parse(part.Trim(Separators));
                }
                if (part.Contains('d'))
                {
                    days = decimal.Parse(part.Trim(Separators));
                }
                if (part.Contains('t'))
                {
                    hours = decimal.Parse(part.Trim(Separators));
                }
                if (part.Contains('m'))
                {
                    min = decimal.Parse(part.Trim(Separators));
                }
                if (part.Contains('s'))
                {
                    sek = decimal.Parse(part.Trim(Separators));
                }

            }
            timeDecimals.Add(year);
            timeDecimals.Add(days);
            timeDecimals.Add(hours);
            timeDecimals.Add(min);
            timeDecimals.Add(sek);
            return timeDecimals;
        }
    }
}