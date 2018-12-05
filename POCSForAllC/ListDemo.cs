using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POCSForAllC
{
    class ListDemo
    {
        static void Main2(string[] args)
        {
            List<Student> list = new List<Student>();
            list.Add(new Student { StudentID = 111, Name = "Vishal Singh", Address = "Bareilly" });
            list.Add(new Student { StudentID = 222, Name = "Sumit Kumar Gurav", Address = "Kolapur" });
            list.Add(new Student { StudentID = 333, Name = "Prasob", Address = "wayanad" });
            list.Add(new Student { StudentID = 444, Name = "Vamsi Krishna", Address = "Kunur" });
            list.Add(new Student { StudentID = 555, Name = "Shubham Chauhan", Address = "Kashipur" });
            list.Add(new Student { StudentID = 555, Name = "Shubham Chauhan", Address = "Kashipur" });
            //it will take duplicates as it is list 
            foreach (Student s in list)
            {
                Console.WriteLine(s);
            }
        }
    }
}