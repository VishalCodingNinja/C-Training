using System;
using System.Dynamic;

namespace DynamicFeatures
{
	class Program
    {
        static void Main1234(string[] args)
        {

            //object o = GetASpeaker();//assume that we dont know the kind of obejct we are getitng from the setSpeak() method
            ////here we can use the refelection 
            //o.GetType().GetMethod("Speak").Invoke(o,null);

            //without reflection we can access the speak method using dyunamic keyword
            dynamic o = GetASpeaker();
            o.Speak();//it will be resolvod at run time..
            dynamic expando = new ExpandoObject();//type dynamically
            expando.Name = "Vishal Singh";
            expando.Speak = new Action(() => Console.WriteLine(expando.Name));
            foreach(var member in expando)
            {
                //Console.WriteLine(member.key);

            }

            //var doc = XDocument.Load("EmployeeXml.xml");
            //foreach(var element in doc.Element("Employees").Elements("Employee"))
            //{
            //    Console.WriteLine(element.Element("FirstName").Value);
            //}


            //using dynamic obejct 
            dynamic doc = new DynamicXml("EmployeeXml.xml");
            foreach (var employee in doc.Employees)
            {
                Console.WriteLine(employee.FirstName);
            }

        }
        private static object GetASpeaker()
        {
            return new Employee { FirstName = "Vishal singh" };
        }
    }
    
}
