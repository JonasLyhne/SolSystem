using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SolarSystemQuizz.Controllers
{
    [Route("api/[controller]")]
    public class QuizzController : ApiController
    {
        QuestionRepository repository = new QuestionRepository();

        [Route("api/GetQuestions")]
        [HttpGet]
        public List<Question> GetQuestions(int difficulty = 1)
        {
            return repository.GetQuestions(difficulty);
        }
    }
}
