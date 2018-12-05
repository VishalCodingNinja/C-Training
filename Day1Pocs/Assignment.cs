using System;

namespace Day1Pocs
{
	class Assignment
    {
        static void Main(string[] args)
        {
            IEmployee employee = new SoftwareEngineer("Trainee Software Engineer",3000,"Vishal Singh",".Net Project and Angualar 7");
            Console.WriteLine(employee);
            //Console.WriteLine(employee.GetType());
            //SoftwareProjectManager child = (SoftwareProjectManager)new SoftwareEngineer("Trainee Software Engineer", 3000, "Vishal Singh", ".Net Project");//run time casting error can not downcase an object....
            SoftwareProjectManager childRef = new SoftwareProjectManager(new Project("Ikia", "20-12-2018", "1-1-2018"), "Project Manager", 1000000, "Ashok Babu");
            childRef.POCForCasting();//POCForCasting now its an 
            SoftwareEngineer parentRef = (SoftwareEngineer)childRef;//it is fine right now
            //parentRef.POCForCasting();//in this case now it is an exclusive method for softwareengineer so we can not call the exclusive mthjod after upcast 
            Console.WriteLine(SoftwareEngineer.CompanyName);//static variable can be assess using the class name
            Console.WriteLine(HumanResource.CompanyName);//static variable...

			//if (childRef == parentRef)
			//{
			//	Console.WriteLine("hashcode called by them");
			//}
			if (childRef.Equals(parentRef))
			{
				Console.WriteLine("both are referenceing to the same address");
			}

			
			

			
			
			
			
			
			
			
			
			
			
			
			
			// HashSet<SoftwareEngineer> set = new HashSet<SoftwareEngineer>();
            //set.Add(new SoftwareEngineer("Trainee Software Engineer", 3000, "Sumit Kiran Gurav", ".net Project"));
            //set.Add(new SoftwareEngineer("Trainee Software Engineer", 3000, "Prasobh Kumar ", ".net Project"));
            //set.Add(new SoftwareEngineer("Trainee Software Engineer", 3000, "Shubham Chauhan", ".net Project"));
            //set.Add(new SoftwareEngineer("Trainee Software Engineer", 3000, "Vamsi Krishna", ".net Project"));
            //set.Add(new SoftwareEngineer("Trainee Software Engineer", 3000, "Ankur joshi", ".net Project"));
            //set.ToList().ForEach(ele => Console.WriteLine(ele));



            //FileStream fs = new FileStream("MySoftwareEngineers.bin", FileMode.OpenOrCreate, FileAccess.Write);
            //BinaryFormatter fm = new BinaryFormatter();
            //fm.Serialize(fs, set.ToList());
            //fs.Close();


        }

    }
   
}
