using System;
namespace Day1Pocs
{
    interface IEmployee
    {
        void setSalary(int salary);
        string getDesignation();
        void setDesignation(string desig);
        void setName(string name);
        string getName();

    }
    [Serializable]
    internal class SoftwareEngineer : IEmployee
    {
        protected string desig;
        protected int salary;
        protected string name;
        private string project;
        protected Department department;
        public  static string CompanyName = "EuroMonitorInternational";

        public SoftwareEngineer(string desig,int salary,string name,string project)
        {
            this.desig = desig;
            this.salary = salary;
            this.name = name;
            this.project = project;
        }
        public SoftwareEngineer(string desig, int salary, string name)//overloaded constructor compile time Polymorphism
        {
            this.desig = desig;
            this.salary = salary;
            this.name = name;
            
        }
        //swallow copy...copy constructor for swallow copy
        public SoftwareEngineer(SoftwareEngineer se)//copy constructor
        {
            this.desig = se.desig;
            this.salary = se.salary;
            this.name = se.name;
            this.project = se.project;
           
        }

        //deep copy
        //public SoftwareEngineer(SoftwareEngineer se)
        //{
        //    this.desig = se.desig;
        //    this.salary = se.salary;
        //    this.name = se.name;
        //    this.project = se.project;
        //    this.department = new Department("Technology Department");//deep copy
        //}




        public string getDesignation()
        {
            return this.desig;
        }

        public string getName()
        {
            return this.name;
        }

        public int GetSalary()
        {
            return this.salary;
        }

        public void setDesignation(string desig)
        {
            this.desig = desig;
        }

        public void setName(string name)
        {
            this.name = name;
        }

        public void setSalary(int salary)
        {
            this.salary = salary;
        }

        public void SetProject(string project)
        {
            this.project = project;

        }

        virtual public  string  GetProject()
        {
            Console.WriteLine("parent getproject");
           return  this.project;

        }
        public override string ToString()
        {
            return "Designation :" + this.desig + "  Name :" + this.name+ "Salary :" + this.salary + "Project :" + this.project+ "";
        }
		public override int GetHashCode()
		{
			Console.WriteLine("get hashcode of parent called");
			return 1;
		}
	}
    internal class SoftwareProjectManager : SoftwareEngineer
    {
        protected Project project;//has a relation

        public SoftwareProjectManager(Project project, string desig, int salary, string name) :base(desig,salary,name)
        {
            this.project = project;
        }
       
        public override string GetProject()
        {
            return this.project.GetProjectName();
        }
        public override string ToString()
        {
            return "" + this.name + "" + this.salary + "" + this.salary + "" + this.desig + "" + this.project.GetProjectName()+"";
        }
        public void POCForCasting()
        {
            Console.WriteLine("if you cast SOftwareProjectManager then you can not get me");
        }
		public override int GetHashCode()
		{
			Console.WriteLine("get hashcode of child called");
			return 1;
		}
	}
    public class Project
    {
        private string _projectName;
        private string _projectDueDate;
        private string _projectStartDate;
        public Project(string projectName, string projectDueDate, string projectStartDate)
        {
            this._projectName = projectName;
            this._projectDueDate = projectDueDate;
            this._projectStartDate = projectStartDate;
        }

        public string GetProjectName()
        {
            return this._projectName;

        }
        public string GetProjectDueDate()
        {
            return this._projectDueDate;
        }
        public string GetProjectStartDate()
        {
            return this._projectStartDate;
        }
    }

    internal class HumanResource : IEmployee
    {
        private string desig;
        private int salary;
        private string name;
        public static string CompanyName = "EuroMonitorInternational";
        public string getDesignation()
        {
            return this.desig;
        }

        public string getName()
        {
            return this.name;
        }

        public int getSalary()
        {
            return this.salary;
        }

        public void setDesignation(string desig)
        {
            this.desig = desig;
        }

        public void setName(string name)
        {
            this.name = name;
        }

        public void setSalary(int salary)
        {
            this.salary = salary;
        }

    }
    internal class Department
    {
        public string department;
        public Department(string department)
        {
            this.department = department;
        }
    }


}
