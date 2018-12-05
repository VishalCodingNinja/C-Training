using System.Collections;
using System.IO;

namespace ClassExample
{
    internal interface IGradeTracker:IEnumerable
    {

         void AddGrade(float grade);
          GradeStatistics ComputeStatistics();
          void WriteGrade(TextWriter destination);
        string Name { get; set; }

        

    }
}