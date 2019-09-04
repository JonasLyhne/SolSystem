using System.Collections.Generic;

namespace SolarSystemQuizz
{
    public interface IQuestionRepository
    {
        List<Question> GetQuestions(int difficultyLevel);
        List<Question> QueryQuestions(int difficulty);
        List<Answer> GetAnswers(int questionId);
    }
}