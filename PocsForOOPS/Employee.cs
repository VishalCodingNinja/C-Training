using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PocsForOOPS
{
    internal class Employee
    {
        protected int salary;
        
        protected int DeptId { get; set; }
        protected string DeptName { get; set; }
        public virtual void setSalary()
        {
            this.salary = 0;
        }


    }
    internal class SoftwareEngineer:Employee
    {
        private string _name;//encapsulation
        private int salary;
        public override void setSalary()
        {
            this.salary = 10000;//data  encapsulation //binding the data with the method is known as encapsulation
        }
        public void SetName(string name)
        {
            this._name = name;

        }

    }
    internal class Manager : Employee
    {
        private string _name;//encapsulation
        private int salary;// to hide the data use new keyword over there
        public override void setSalary()
        {
            this.salary = 10000;//data  encapsulation //binding the data with the method is known as encapsulation
        }
        public void SetName(string name)
        {
            this._name = name;

        }
    }
}
