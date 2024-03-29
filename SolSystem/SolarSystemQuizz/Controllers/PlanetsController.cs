﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SolarSystemQuizz.Controllers
{
    // https://docs.microsoft.com/en-us/aspnet/web-api/overview/getting-started-with-aspnet-web-api/tutorial-your-first-web-api <-- how to add a method to controller for WebApi.
    [Route("api/[controller]")]
    public class PlanetsController : ApiController
    {
        SolarSystemRepository repository = new SolarSystemRepository();
        /// <summary>
        /// gets the solarsystem
        /// </summary>
        /// <returns>a star with all the planets with its moon that is orbing around it</returns>
        [Route("api/getsolarsystem")]
        [HttpGet]
        public Star GetSolarSystem()
        {
            return repository.GetSolarSystem();
        }

        /// <summary>
        /// gets all the information about all solarsystem objects
        /// </summary>
        /// <returns>a array of informationholders foreach solarsystem objects</returns>
        [Route("api/GetInfo")]
        [HttpGet]
        public InformationHolder[] GetInfo()
        {
            List<int> ids = repository.GetAllIDs();
            List<InformationHolder> informationHolders = new List<InformationHolder>();
            for (int i = 0; i < ids.Count; i++)
            {
                informationHolders.Add(repository.GetPlanetInfoById(ids[i]));
            }
            return informationHolders.ToArray(); ;
        }


    }
}