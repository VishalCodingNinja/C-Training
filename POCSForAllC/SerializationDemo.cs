using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Formatters.Binary;
using System.Text;
using System.Threading.Tasks;

namespace POCSForAllC
{
    class SerializationDemo
    {
        static void Main120(string[] args)
        {
            Console.WriteLine("Enter Your Name");
            string name = Console.ReadLine();
            Name n = new Name { name = name };
            FileStream fs = new FileStream("MyFile.bin", FileMode.OpenOrCreate, FileAccess.Write);
            BinaryFormatter bf = new BinaryFormatter();
            bf.Serialize(fs, n);
            fs.Close();


            //read operations 
            FileStream fsReader = new FileStream("MyFile.bin",FileMode.Open,FileAccess.Read);
            BinaryFormatter bformat = new BinaryFormatter();
            Name readT = bformat.Deserialize(fsReader) as Name;
            Console.WriteLine("Name is  {0} ",readT.name);
            fsReader.Close();



         }
    }


    [Serializable]
    public class Name
    {
        public string name { get; set; }
    }
}

