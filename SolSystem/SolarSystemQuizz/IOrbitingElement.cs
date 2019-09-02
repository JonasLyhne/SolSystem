namespace SolarSystemQuizz
{
    public interface IOrbitingElement
    {
         decimal PeriodOfRevolution { get; set; }
         decimal LengthOfDay { get; set; }
    }
}