namespace SolarSystemQuizz
{
    /// <summary>
    /// interface of a object that is orbiting
    /// </summary>
    public interface IOrbitingElement
    {
         decimal PeriodOfRevolution { get; set; }
         decimal LengthOfDay { get; set; }
    }
}