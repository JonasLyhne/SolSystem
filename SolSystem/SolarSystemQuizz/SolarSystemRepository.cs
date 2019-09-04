using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MySql.Data.MySqlClient;

namespace SolarSystemQuizz
{
    // Repository used for getting Solarsystem elements from the database.
    public class SolarSystemRepository : ISolarSystemRepository
    {
        private static string connectionString = "User Id=root;Host=localhost;Database=solarsystem";
        
        // Gets the solarsystem. A solar System in this context a solarsystem is an Star with a list of planets with a list of moons.
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

        // Gets all element id's
        public List<int> GetAllIDs()
        {
            List<int> ids = new List<int>();
            MySqlConnection connection = new MySqlConnection(connectionString);
            using (connection)
            {
                MySqlCommand command = new MySqlCommand(
                    "SELECT ID FROM element", connection);
                connection.Open();
                MySqlDataReader reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        ids.Add(Convert.ToInt32(reader["ID"]));
                    }
                }
                reader.Close();
            }
            return ids;
        }
        // Gets planet info by planet id
        public InformationHolder GetPlanetInfoById(int id)
        {
            string lastPlanetName = "";
            string currentPlanetName = "";
            InformationHolder informationHolder = new InformationHolder();
            MySqlConnection connection = new MySqlConnection(connectionString);
            using (connection)
            {
                MySqlCommand command = new MySqlCommand(
                    "SELECT * FROM ElementInfo ei JOIN Element e ON ei.ElementId = e.ID where ei.ElementId = @Id", connection);
                command.Parameters.AddWithValue("@Id", id);
                connection.Open();
                MySqlDataReader reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    List<Information> information = new List<Information>();
                    while (reader.Read())
                    {
                        currentPlanetName = reader["Name"].ToString();
                        if (lastPlanetName == currentPlanetName)
                        {
                            information.Add(new Information(Convert.ToInt32(reader["ClassTier"]), reader["Title"].ToString(), reader["Info"].ToString()));
                        }
                        else
                        {
                            informationHolder = new InformationHolder();
                            informationHolder.Name = currentPlanetName;
                            informationHolder.Id = Convert.ToInt32(reader["Id"]);
                            information.Add(new Information(Convert.ToInt32(reader["ClassTier"]), reader["Title"].ToString(), reader["Info"].ToString()));
                        }
                    }
                    informationHolder.Information = information.ToArray();
                }
                reader.Close();
            }

            return informationHolder;
        }

        // Gets the star.
        public Star GetStar()
        {
            Star star = new Star();
            MySqlConnection connection = new MySqlConnection(connectionString);
            using (connection)
            {
                MySqlCommand command = new MySqlCommand(
                    "SELECT * FROM element e JOIN star s ON s.ElementId = e.ID JOIN Pics p ON p.ElementId = e.ID", connection);
                connection.Open();
                MySqlDataReader reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        star.Id = Convert.ToInt32(reader["Id"]);
                        star.Name = reader["Name"].ToString();
                        //star.Mass = reader["Mass"].ToString();
                        star.Image = reader["Title"].ToString();
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

        // Gets Planet by id.
        public Planet GetPlanetById(int id)
        {
            Planet planet = new Planet();
            MySqlConnection connection = new MySqlConnection(connectionString);
            using (connection)
            {
                MySqlCommand command = new MySqlCommand(
                    "SELECT * FROM element e JOIN planet p ON p.ElementId = e.ID JOIN orbitingelement oe ON oe.ElementId = p.ElementId JOIN Pics pi ON pi.ElementId = e.ID WHERE p.ElementId = @Id;", connection);
                command.Parameters.AddWithValue("@Id", id);
                connection.Open();
                MySqlDataReader reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        planet.Id = Convert.ToInt32(reader["Id"]);
                        planet.Name = reader["Name"].ToString();
                        planet.Image = reader["Title"].ToString();
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

        // Gets All the planets.
        public List<Planet> GetAllPlanets(bool getComicPictures = false)
        {
            List<Planet> planets = new List<Planet>();
            MySqlConnection connection = new MySqlConnection(connectionString);
            using (connection)
            {
                MySqlCommand command = new MySqlCommand(
                    "SELECT * FROM element e JOIN planet p ON p.ElementId = e.ID JOIN orbitingelement oe ON oe.ElementId = p.ElementId JOIN Pics pi ON pi.ElementId = e.ID WHERE pi.Comic = @GetComic", connection);
                command.Parameters.AddWithValue("@GetComic", getComicPictures);
                connection.Open();
                MySqlDataReader reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        Planet planet = new Planet();
                        planet.Id = Convert.ToInt32(reader["Id"]);
                        planet.Name = reader["Name"].ToString();
                        planet.Image = reader["Title"].ToString();
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

        // Gets Moon by Id
        public Moon GetMoonById(int id)
        {
            Moon moon = new Moon();
            MySqlConnection connection = new MySqlConnection(connectionString);
            using (connection)
            {
                MySqlCommand command = new MySqlCommand(
                    "SELECT * FROM element e JOIN moons m ON m.ElementId = e.ID JOIN orbitingelement oe ON oe.ElementId = m.ElementId JOIN Pics p ON p.ElementId = e.ID WHERE m.ElementId = @Id;", connection);
                command.Parameters.AddWithValue("@Id", id);
                connection.Open();
                MySqlDataReader reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        moon.Id = Convert.ToInt32(reader["Id"]);
                        moon.Name = reader["Name"].ToString();
                        moon.Image = reader["Title"].ToString();
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

        // Gets moons by parent id. Parent is the planet the moon is orbiting.
        public List<Moon> GetMoonsByParentId(int parentId, bool getComic = false)
        {
            List<Moon> moons = new List<Moon>();
            MySqlConnection connection = new MySqlConnection(connectionString);
            using (connection)
            {
                MySqlCommand command = new MySqlCommand(
                    "SELECT * FROM element e JOIN moons m ON m.ElementId = e.ID JOIN orbitingelement oe ON oe.ElementId = m.ElementId JOIN Pics p ON p.ElementId = e.ID WHERE m.Parent = @ParentId AND p.Comic = @GetComic;", connection);
                command.Parameters.AddWithValue("@ParentId", parentId);
                command.Parameters.AddWithValue("@GetComic", parentId);
                connection.Open();
                MySqlDataReader reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        Moon moon = new Moon();
                        moon.Id = Convert.ToInt32(reader["Id"]);
                        moon.Name = reader["Name"].ToString();
                        moon.Image = reader["Title"].ToString();
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
                        moons.Add(moon);
                    }
                }
                reader.Close();
            }

            return moons;
        }
    }
}