//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace Day1Pocs
//{
//    public class AccessModifier
//    {
//        static void Main2(string[] args)
//        {
//            SoftwareEngineer sf = new SoftwareEngineer();
//            //sf.name; as name is private we can not use it outside of the class
//            //sf.EmpId we can use the EmpId inside of the class in which we are inherited the base class 
//            sf.Address = "bareilly";//as it is the public member we can use it outside of the class
//            sf.value = "*****";//it can be used every where in the assembly
//            //we can not give more then one acess ,modifier
//        }
//    }
//    internal class Employee
//    {
//        protected int EmpId;
//        protected string desig;
//        public string Address;
        
        
//    }
//    internal class SoftwareEngineer:Employee
//    {
//        private string name;
//        private string salary;
//         internal  string value;
//    }
//}
