using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
   public class Casting
    {
        public void Run()
        {
            Console.WriteLine("run");
        }
        public void dontRun()
        {
            Console.WriteLine("dont run");
        }
    }

    public class Casting1:Casting
    {
        public new void Run()//here it will call the parent Run() method
        {

        }
        public void RunRun()
        {
            Console.WriteLine("RunRun");
        }
    }


}
