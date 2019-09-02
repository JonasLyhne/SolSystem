using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Devart.Data.MySql;

namespace SolarSystemQuizz
{
    public class SolarSystemRepository : ISolarSystemRepository
    {
        private static string connectionString = "User Id=root;Host=localhost;Database=solarsystem";
        

        public Star GetSolarSystem()
        {
            Star star = GetStar();
            star.Planets = GetAllPlanets();
            if (star.Planets != null)
            {
                foreach (var planet in star.Planets)
                {
                    planet.Moons = GetMoonsByParentId(planet.Id);
                }
            }

            return star;
        }

        public Star GetStar()
        {
            Star star = new Star();
            MySqlConnection connection = new MySqlConnection(connectionString);
            using (connection)
            {
                MySqlCommand command = new MySqlCommand(
                    "SELECT * FROM element e JOIN star s ON s.ElementId = e.ID", connection);
                connection.Open();
                MySqlDataReader reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        star.Id = Convert.ToInt32(reader["Id"]);
                        star.Name = reader["Name"].ToString();
                        //star.Mass = reader["Mass"].ToString();
                        star.Mass = reader["Mass"].ToString();
                        star.Diameter = Convert.ToInt32(reader["Diameter"]);
                        star.MinTemp = Convert.ToInt32(reader["MinTemp"]);
                        star.MaxTemp = Convert.ToInt32(reader["MaxTemp"]);
                        star.MeanTemp = Convert.ToInt32(reader["MeanTemp"]);
                        star.RotationPeriod = TimeConverter.GetTimeInSeconds(reader["RotationPeriod"].ToString());
                        star.RingSystem = Convert.ToBoolean(reader["RingSystem"]);
                        star.Color = reader["Color"].ToString();
                        star.NumberOfPlanets = Convert.ToInt32(reader["NumberOfPlanets"]);
                    }
                }
                reader.Close();
            }

            return star;
        }

        public Planet GetPlanetById(int id)
        {
            Planet planet = new Planet();
            MySqlConnection connection = new MySqlConnection(connectionString);
            using (connection)
            {
                MySqlCommand command = new MySqlCommand(
                    "SELECT * FROM element e JOIN planet p ON p.ElementId = e.ID JOIN orbitingelement oe ON oe.ElementId = p.ElementId WHERE p.ElementId = @Id;", connection);
                command.Parameters.AddWithValue("@Id", id);
                connection.Open();
                MySqlDataReader reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        planet.Id = Convert.ToInt32(reader["Id"]);
                        planet.Name = reader["Name"].ToString();
                        planet.Mass = reader["Mass"].ToString();
                        planet.Diameter = Convert.ToInt32(reader["Diameter"]);
                        planet.MinTemp = Convert.ToInt32(reader["MinTemp"]);
                        planet.MaxTemp = Convert.ToInt32(reader["MaxTemp"]);
                        planet.MeanTemp = Convert.ToInt32(reader["MeanTemp"]);
                        planet.RotationPeriod = TimeConverter.GetTimeInSeconds(reader["RotationPeriod"].ToString());
                        planet.RingSystem = Convert.ToBoolean(reader["RingSystem"]);
                        planet.StarId = Convert.ToInt32(reader["Star"]);
                        planet.NumberOfMoons = Convert.ToInt32(reader["NumberOfMoons"]);
                        planet.DistanceToSun = Convert.ToInt64(reader["DistanceToSun"]);
                        planet.PeriodOfRevolution = TimeConverter.GetTimeInSeconds(reader["Revolution"].ToString());
                        planet.LengthOfDay = TimeConverter.GetTimeInSeconds(reader["Revolution"].ToString());
                    }
                }
                reader.Close();
            }

            return planet;
        }

        public List<Planet> GetAllPlanets()
        {
            List<Planet> planets = new List<Planet>();
            MySqlConnection connection = new MySqlConnection(connectionString);
            using (connection)
            {
                MySqlCommand command = new MySqlCommand(
                    "SELECT * FROM element e JOIN planet p ON p.ElementId = e.ID JOIN orbitingelement oe ON oe.ElementId = p.ElementId", connection);
                connection.Open();
                MySqlDataReader reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        Planet planet = new Planet();
                        planet.Id = Convert.ToInt32(reader["Id"]);
                        planet.Name = reader["Name"].ToString();
                        planet.Mass = reader["Mass"].ToString();
                        planet.Diameter = Convert.ToInt32(reader["Diameter"]);
                        planet.MinTemp = Convert.ToInt32(reader["MinTemp"]);
                        planet.MaxTemp = Convert.ToInt32(reader["MaxTemp"]);
                        planet.MeanTemp = Convert.ToInt32(reader["MeanTemp"]);
                        planet.RotationPeriod = TimeConverter.GetTimeInSeconds(reader["RotationPeriod"].ToString());
                        planet.RingSystem = Convert.ToBoolean(reader["RingSystem"]);
                        planet.StarId = Convert.ToInt32(reader["Star"]);
                        planet.NumberOfMoons = Convert.ToInt32(reader["NumberOfMoons"]);
                        planet.DistanceToSun = Convert.ToInt64(reader["DistanceToSun"]);
                        planet.PeriodOfRevolution = TimeConverter.GetTimeInSeconds(reader["Revolution"].ToString());
                        planet.LengthOfDay = TimeConverter.GetTimeInSeconds(reader["Revolution"].ToString());
                        planets.Add(planet);
                    }
                }
                reader.Close();
            }

            return planets;
        }

        public Moon GetMoonById(int id)
        {
            Moon moon = new Moon();
            MySqlConnection connection = new MySqlConnection(connectionString);
            using (connection)
            {
                MySqlCommand command = new MySqlCommand(
                    "SELECT * FROM element e JOIN moons m ON m.ElementId = e.ID JOIN orbitingelement oe ON oe.ElementId = m.ElementId WHERE m.ElementId = @Id;", connection);
                command.Parameters.AddWithValue("@Id", id);
                connection.Open();
                MySqlDataReader reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        moon.Id = Convert.ToInt32(reader["Id"]);
                        moon.Name = reader["Name"].ToString();
                        moon.Mass = reader["Mass"].ToString();
                        moon.Diameter = Convert.ToInt32(reader["Diameter"]);
                        moon.MinTemp = Convert.ToInt32(reader["MinTemp"]);
                        moon.MaxTemp = Convert.ToInt32(reader["MaxTemp"]);
                        moon.MeanTemp = Convert.ToInt32(reader["MeanTemp"]);
                        moon.RotationPeriod = TimeConverter.GetTimeInSeconds(reader["RotationPeriod"].ToString());
                        moon.RingSystem = Convert.ToBoolean(reader["RingSystem"]);
                        moon.ParentId = Convert.ToInt32(reader["Parent"]);
                        moon.DistanceToPlanet = Convert.ToInt64(reader["DistanceToPlanet"]);
                        moon.PeriodOfRevolution = TimeConverter.GetTimeInSeconds(reader["Revolution"].ToString());
                        moon.LengthOfDay = TimeConverter.GetTimeInSeconds(reader["Revolution"].ToString());
                    }
                }
                reader.Close();
            }

            return moon;
        }

        public List<Moon> GetMoonsByParentId(int parentId)
        {
            List<Moon> moons = new List<Moon>();
            MySqlConnection connection = new MySqlConnection(connectionString);
            using (connection)
            {
                MySqlCommand command = new MySqlCommand(
                    "SELECT * FROM element e JOIN moons m ON m.ElementId = e.ID JOIN orbitingelement oe ON oe.ElementId = m.ElementId WHERE m.Parent = @ParentId;", connection);
                command.Parameters.AddWithValue("@ParentId", parentId);
                connection.Open();
                MySqlDataReader reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        Moon moon = new Moon();
                        moon.Id = Convert.ToInt32(reader["Id"]);
                        moon.Name = reader["Name"].ToString();
                        moon.Mass = reader["Mass"].ToString();
                        moon.Diameter = Convert.ToInt32(reader["Diameter"]);
                        moon.MinTemp = Convert.ToInt32(reader["MinTemp"]);
                        moon.MaxTemp = Convert.ToInt32(reader["MaxTemp"]);
                        moon.MeanTemp = Convert.ToInt32(reader["MeanTemp"]);
                        moon.RotationPeriod = TimeConverter.GetTimeInSeconds(reader["RotationPeriod"].ToString());
                        moon.RingSystem = Convert.ToBoolean(reader["RingSystem"]);
                        moon.ParentId = Convert.ToInt32(reader["Parent"]);
                        moon.DistanceToPlanet = Convert.ToInt64(reader["DistanceToPlanet"]);
                        moon.PeriodOfRevolution = TimeConverter.GetTimeInSeconds(reader["Revolution"].ToString());
                        moon.LengthOfDay = TimeConverter.GetTimeInSeconds(reader["Revolution"].ToString());
                    }
                }
                reader.Close();
            }

            return moons;
        }
    }
}