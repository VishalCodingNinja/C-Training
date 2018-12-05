using MySql.Data;
using MySql.Data.MySqlClient;
using System.Configuration;
using System;


namespace ReadingValuesFromDataBase
{
    class Program
    {
        static void Main(string[] args)
        {
            string selectString = "SELECT * FROM blogTable";
         MySqlConnection con =new MySqlConnection("server = localhost; user id = root; PASSWORD = root@mysql.com; database = AngularApp; SslMode = none");
            con.Open();
            MySqlCommand cmd = new MySqlCommand(selectString, con);
            using (MySqlDataReader reader = cmd.ExecuteReader())
            {
                if (reader.Read())
                {
                    Console.WriteLine(String.Format("{0}", reader["blog"]));
                }
            }
            con.Close();
        }
    }
}
