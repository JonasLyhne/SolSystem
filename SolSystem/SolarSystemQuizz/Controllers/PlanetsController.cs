using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Devart.Common;

namespace SolarSystemQuizz.Controllers
{
    // https://docs.microsoft.com/en-us/aspnet/web-api/overview/getting-started-with-aspnet-web-api/tutorial-your-first-web-api <-- how to add a method to controller for WebApi.
    [Route("api/[controller]")]
    public class PlanetsController : ApiController
    {
        SolarSystemRepository repository = new SolarSystemRepository();
        [Route("api/getsolarsystem")]
        [HttpGet]
        public Star GetSolarSystem()
        {
            return repository.GetSolarSystem();
        }

    }
}