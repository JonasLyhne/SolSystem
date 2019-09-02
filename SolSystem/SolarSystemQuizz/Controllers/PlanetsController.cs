using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SolarSystemQuizz.Controllers
{
    // https://docs.microsoft.com/en-us/aspnet/web-api/overview/getting-started-with-aspnet-web-api/tutorial-your-first-web-api <-- how to add a method to controller for WebApi.
    public class PlanetsController : ApiController
    {
        SolarSystemRepository repository = new SolarSystemRepository();

        public Star GetSolarSystem()
        {
            return repository.GetSolarSystem();
        }

    }
}