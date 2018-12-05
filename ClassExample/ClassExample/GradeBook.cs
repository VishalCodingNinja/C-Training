using Grades;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;

namespace ClassExample
{
    public class GradeBook:GradeTracker
    {
        public GradeBook()
        {
            _name = "Empty";
            _grades = new List<float>();
        }

        public bool ThrowAwayLowest{ get; set; }
        public override void AddGrade(float grade)
        {//scope
            _grades.Add(grade);
        }
        protected List<float> _grades;//encapsulate
        //default make it private so it can only be used inside class 

        //public string Name { get; set; }//auto implemented property 
       
        public override GradeStatistics ComputeStatistics()
        {
            Console.WriteLine("GradeBookStatics::ComputeStastics");
            GradeStatistics stats= new GradeStatistics();
            float sum = 0;
            foreach (float grade in _grades)
            {
                stats.HighestGrade = Math.Max(grade, stats.HighestGrade);
                stats.LowestGrade = Math.Min(grade, stats.LowestGrade);
                sum += grade;
            }
            stats.AverageGrade = sum / _grades.Count;
            return stats;
        }

        public override void WriteGrade(TextWriter destination)
        {
            for (int i = _grades.Count; i > 0; i--)
            {
                destination.WriteLine(_grades[i - 1]);
            }
        }

        public override IEnumerator GetEnumerator()
        {
            return _grades.GetEnumerator();
        }
    }
}
