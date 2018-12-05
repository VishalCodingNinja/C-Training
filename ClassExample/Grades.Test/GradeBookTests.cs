using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using ClassExample;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grades.Test
{
    [TestClass]
    public class GradeBookTests
    {
        [TestMethod]
        public void ComputesHighestGrade()
        {
            GradeBook book = new GradeBook();
            book.AddGrade(100);
            book.AddGrade(33);

            GradeStatistics result = book.ComputeStatistics();
            Assert.AreEqual(100, result.HighestGrade);

        }
        [TestMethod]
        public void ComputesLowestGrade()
        {
            GradeBook book = new GradeBook();
            book.AddGrade(100);
            book.AddGrade(33);

            GradeStatistics result = book.ComputeStatistics();
            Assert.AreEqual(33, result.LowestGrade);

        }


        [TestMethod]
        public void ComputesAverageGrade()
        {
            GradeBook book = new GradeBook();
            book.AddGrade(100);
            book.AddGrade(33);

            GradeStatistics result = book.ComputeStatistics();
            Assert.AreEqual(66.5, result.AverageGrade);//rembember delta precision for third argument

        }
    }
}
