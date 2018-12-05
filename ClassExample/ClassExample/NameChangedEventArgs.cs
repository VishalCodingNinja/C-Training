using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassExample
{
   public class NameChangedEventArgs:EventArgs
    {
        public string ExistingName { get; set; }
        public string NewName{ get; set; }
    }
}
