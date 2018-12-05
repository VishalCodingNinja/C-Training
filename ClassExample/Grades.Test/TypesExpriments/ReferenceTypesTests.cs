using ClassExample;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grades.Test.TypesExpriments
{
   
    [TestClass]
    public class TypesTests
    {

        [TestMethod]
        public void UsingArray()
        {
            float[] grades;
            grades = new float[3];
            AddGrades(grades);
            Assert.AreEqual(89.1f, grades[1]);

        }

        public void AddGrades(float[] grades)
        {
            grades[1] = 89.1f;
        }

        [TestMethod]
        public void UpperCaseString()
        {
            string name = "EuroMonitorInternational";
            name =name.ToUpper();
            Assert.AreEqual("EUROMONITORINTERNATIONAL", name);
        }
        [TestMethod]
        public void AddDaysToDateTime()
        {
            DateTime date = new DateTime(2018, 11, 1);
            //date.AddDays(1);//it will create a new object of date so we will just have one day
            date = date.AddDays(1); //here in this we will have true results
            Assert.AreEqual(2, date.Day);
        }
        [TestMethod]
        public void ValueTypesPassByValue()
        {
            int x = 46;
            IncrementNumber(ref x);//here 46 copied to the parameter of the function incrementnumber() function 
            Assert.AreEqual(47, x); 
        }
        private void IncrementNumber(ref int number)
        {
            number += 1;//the changes we make are only visible inside of this method  

        }
        [TestMethod]
        public void ReferenceTypesPassByValue()
        {
            GradeBook book1 = new GradeBook();
            GradeBook book2 = book1;
            GiveBookAName(ref book2);//when we invoked this method the value(address) of book2 copied to the parameter of GiveBookAName
            Assert.AreEqual("A EuroMonitor Grade Book", book2.Name);//passed
        }

        private void GiveBookAName(ref GradeBook book)//so book is a pointer/reference
        {
            book = new GradeBook();
            book.Name = "A EuroMonitor Grade Book";

        }
        [TestMethod]
        public void StringComparations()
        {
            string name1 = "EuromonitorInternational";
            string name2 = "euromonitorinternational";
            bool result = string.Equals(name1, name2, StringComparison.InvariantCultureIgnoreCase);
            Assert.IsTrue(result);
        }

        [TestMethod]
        public void IntVariableHoldAValue()
        {
            int x1 = 100;
            int x2 = x1;//both variable stored location are different and in the stack
            x1 = 4;
            //  Assert.AreEqual(x1, x2);//test failed
            Assert.AreNotEqual(x1, x2);//test passed
        }

        [TestMethod]
        public void VariablesHoldReference()
        {

            GradeBook g1 = new GradeBook();
            GradeBook g2 = g1;//two pointer/references pointing to same references  
            //g1 = new GradeBook();//now test failed because g1 is pointing to the new object and g1 still pointing to the same object
            g1.Name = "EuroMonitor's Grade Book";
            Assert.AreEqual(g1.Name, g2.Name);//passed

        }


    }
}
