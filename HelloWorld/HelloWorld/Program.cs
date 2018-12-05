using System;

namespace HelloWorld
{
    class Program 
    {
        //static void Main(string[] args) => Console.WriteLine("hello " + args[0]);
        static void Main(string[] args)
        {
            Console.WriteLine("Enter your name:");
            string name = Console.ReadLine();
            Console.WriteLine(name);

            Console.WriteLine("How many hours of sleep did you get last night?");
            int hoursOfSleep = int.Parse(Console.ReadLine());
            if (hoursOfSleep >= 8)
                Console.WriteLine("you are well rested");
            else
                Console.WriteLine("you are not well rested you need more sleep");

        }
    }
}
