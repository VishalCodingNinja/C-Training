using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POCSForAllC
{
    public class OverringClassOOPSDemo
    {
        static void Main1(string[] args)
        {
            HashSet<Student> students = new HashSet<Student>();
            students.Add(new Student { StudentID = 111, Name = "Vishal Singh",     Address = "Bareilly" });//so when ever we are adding the objects in the list here it is calling the hashcode method
            students.Add(new Student { StudentID  = 222,Name ="Sumit Kumar Gurav", Address="Kolapur" });
            students.Add(new Student { StudentID = 333, Name = "Prasob",           Address = "wayanad" });
            students.Add(new Student { StudentID = 444, Name = "Vamsi Krishna",    Address = "Kunur" });
            students.Add(new Student { StudentID = 555, Name = "Shubham Chauhan",  Address = "Kashipur" });
            students.Add(new Student { StudentID = 555, Name = "Shubham Chauhan", Address = "Kashipur" });//here first hashcode() will get called to check whether this object already present in the hashSet or not if hashcode is same then it will call the equals method... for content comparision 
            //students.Add(new Student { StudentID = 666, Name = "Ankur", Address = "Hardawani" });
            Console.WriteLine(students.Count);
            //Console.WriteLine(new Student { StudentID = 666, Name = "Ankur", Address = "Hardawani" });//overriding demo
            if(new Student { StudentID = 666, Name = "Ankur", Address = "Hardawani" }== new Student { StudentID = 666, Name = "Ankur", Address = "Hardawani" })
                Console.WriteLine("they are equal Objects");
            Student student=new Student{ StudentID=1323,Name="Random ",Address="No place"};
            Console.WriteLine(student.ScholarShip);
            student += 2000;
            Console.WriteLine("After operating the + operator in this we will get this value "+student.ScholarShip);

            var list =students.ToList();



           



        }

       
    }
}
