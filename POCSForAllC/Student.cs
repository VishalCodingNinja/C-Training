using System;

namespace POCSForAllC
{
    class Student
    {
        public int StudentID{ get; set; }
        public string Name { get; set; }
        public string Address{ get; set; }
        public int ScholarShip{ get; set; }
        public override string ToString()
        {
            return string.Format("{0} from {1}", Name, Address);
        }
        public override bool Equals(object obj)
        {
            Console.WriteLine("Equals Getting called");
            if (obj is Student)
            {
                Student other = obj as Student; //unboxing for references types
                return other.StudentID == this.StudentID;
            }
            return false;
        }
        public override int GetHashCode()
        {
            Console.WriteLine("I am not getting clled");
            return StudentID.GetHashCode();
        }

        public static bool operator ==(Student obj1, Object obj2)
        {
            if ((obj1 is Student) && (obj2 is Student))
            {
                Student s1 = obj1 as Student;
                Student s2 = obj2 as Student;
                return s1.Equals(s2);
            }
            return false;
        }
        public static bool operator !=(Student obj1, Object obj2)
        {
            if ((obj1 is Student) && (obj2 is Student))
            {
                Student s1 = obj1 as Student;
                Student s2 = obj2 as Student;
                return !s1.Equals(s2);
            }
            return false;
        }

        public static Student operator +(Student student, int amount)
        {
            student.ScholarShip += amount;
            return student;
        }
    }
}
