using Grades;
using System;
using System.Collections;
using System.IO;

namespace ClassExample
{
    public abstract class GradeTracker:object,IGradeTracker
    {
        public abstract void AddGrade(float grade);
        public abstract GradeStatistics ComputeStatistics();
        public abstract void WriteGrade(TextWriter destination);

        public abstract IEnumerator GetEnumerator();

        public string Name
        {
            get
            {
                return _name;
            }
            set
            {
                if (!String.IsNullOrEmpty(value))
                {
                    if (_name != value)
                    {
                        NameChangedEventArgs args = new NameChangedEventArgs();
                        args.ExistingName = _name;
                        args.NewName = value;
                      //  NameChanged(this, args);//this means passing passing self
                    }
                    _name = value;
                }
            }
        }
        protected string _name;//as not using auto implemented property so we have to explictly hold the property 

       // public event NameChangedDelegate NameChanged;//instansiating that delegate 
        
        
    }
}

