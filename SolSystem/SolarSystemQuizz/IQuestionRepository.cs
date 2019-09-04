using System.Collections.Generic;

namespace SolarSystemQuizz
{
    /// <summary>
    /// interface of a repository for questions
    /// </summary>
    public interface IQuestionRepository
    {
        List<Question> GetQuestions(int difficultyLevel);
        List<Question> QueryQuestions(int difficulty);
        List<Answer> GetAnswers(int questionId);
    }
}