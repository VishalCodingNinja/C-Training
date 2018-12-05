using ClassExample;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grades
{
    //public delegate void NameChangedDelegate(string existingName, string newName);
    public delegate void NameChangedDelegate(object sender, NameChangedEventArgs newName);//object means we can pass any thing here

}
