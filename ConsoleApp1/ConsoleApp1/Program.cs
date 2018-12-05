using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Casting c = new Casting1();
            Casting1 b = (Casting1)new Casting();
            b.RunRun();
        }
    }
}
