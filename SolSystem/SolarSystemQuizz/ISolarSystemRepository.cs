using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SolarSystemQuizz
{
    public interface ISolarSystemRepository
    {
        List<int> GetAllIDs();
        InformationHolder GetPlanetInfoById(int id);
        Star GetSolarSystem();
        Star GetStar();
        Planet GetPlanetById(int id);
        List<Planet> GetAllPlanets();
        Moon GetMoonById(int ud);
        List<Moon> GetMoonsByParentId(int parentId);
    }
}
