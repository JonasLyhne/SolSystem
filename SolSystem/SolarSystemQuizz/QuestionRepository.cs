using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MySql.Data.MySqlClient;

namespace SolarSystemQuizz
{
    // Repository used for getting questions from the database
    public class QuestionRepository : IQuestionRepository
    {
        private static string connectionString = "User Id=root;Host=localhost;Database=solarsystem";
        public List<Question> GetQuestions(int difficultyLevel)
        {
            List<Question> questions = QueryQuestions(difficultyLevel);
            foreach (var question in questions)
            {
                question.Answers = GetAnswers(question.Id);
            }
            return questions;
        }

        // Querys the questions from the database.
        public List<Question> QueryQuestions(int difficulty)
        {
            List<Question> questions = new List<Question>();
            MySqlConnection connection = new MySqlConnection(connectionString);
            using (connection)
            {
                MySqlCommand command = new MySqlCommand(
                    "SELECT q.QuestionId, q.Content FROM Questions q JOIN Difficulty d ON d.DifficultyId = q.DiffId WHERE d.Difficulty = @DifficultyLevel;", connection);
                command.Parameters.AddWithValue("@DifficultyLevel", difficulty);
                connection.Open();
                MySqlDataReader reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        Question question = new Question();
                        question.Id = Convert.ToInt32(reader["QuestionId"]);
                        question.Text = reader["Content"].ToString();
                        questions.Add(question);
                    }
                }
                reader.Close();
            }

            return questions;
        }

        // Gets the answers for the questions.
        public List<Answer> GetAnswers(int questionId)
        {
            List<Answer> answers = new List<Answer>();
            MySqlConnection connection = new MySqlConnection(connectionString);
            using (connection)
            {
                MySqlCommand command = new MySqlCommand("SELECT a.Answer, a.IsCorrect FROM Answerchoise a JOIN quesanswer qa ON qa.AnswerID = a.AnswerID JOIN questions q ON q.QuestionID = qa.QuesID WHERE q.QuestionID = @QuestionId", connection);
                command.Parameters.AddWithValue("@QuestionId", questionId);
                connection.Open();
                MySqlDataReader reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        Answer answer = new Answer();
                        answer.Text = reader["Answer"].ToString();
                        answer.IsCorrect = Convert.ToBoolean(reader["IsCorrect"]);
                        answers.Add(answer);
                    }
                }    
            }

            return answers;
        }
    }
}