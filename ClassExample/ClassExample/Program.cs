using System;
using System.IO;
using System.Speech.Synthesis;

namespace ClassExample
{
    class Program
    {
        static void Main(string[] args)
        {
            //AddingSpeechSyntisizer();
            //it is also another form of encapsulation
            IGradeTracker book = CreateGradeBook();
            AddingEventListners(book);
            GetBookName(book);
            AddGrades(book);
            SaveGrades(book);
            WriteResults(book);

        }
       
        private static IGradeTracker CreateGradeBook()
        {
           
            return new ThrowAwayGradeBook();
            //Is-A Relationship
        }

        private static void AddingSpeechSyntisizer()
        {
            SpeechSynthesizer synth = new SpeechSynthesizer();
            synth.Speak("hello world ! this is the grade program");
        }

        private static void AddingEventListners(IGradeTracker book)
        {
            //book.NameChanged = new NameChangedDelegate(OnNameChanged);//now delegate is very happy because now it got whome to call.
            //book.NameChanged = new NameChangedDelegate(OnNameChanged2);//by providing again the parameter to delegate we are overritting the previous method values
            //book.NameChanged = OnNameChanged;//now delegate is very happy because now it got whome to call.
            //book.NameChanged = OnNameChanged2;//by providing again the parameter to delegate we are overritting the previous method values
            //book.NameChanged += OnNameChanged;
        }

        private static void WriteResults(IGradeTracker book)
        {
            GradeStatistics stats = book.ComputeStatistics();
            foreach (float grade in book)
            {
                Console.WriteLine(grade);
            }


            Console.WriteLine(stats.AverageGrade);
            Console.WriteLine(stats.HighestGrade);
            Console.WriteLine(stats.LowestGrade);
            Console.WriteLine(book.Name);
            book.Name = "EutoMonitorInternational";
            Console.ReadLine();
        }

        private static void SaveGrades(IGradeTracker book)
        {
            using (StreamWriter outputFile = File.CreateText("grades.txt"))
            {
                book.WriteGrade(outputFile);
            }
        }

        private static void AddGrades(IGradeTracker book)
        {
            book.AddGrade(91);
            book.AddGrade(89.9f);
            //GradeBook book1 = book;//to pointer poining to the same address or two references variable pointing to the same address in the memory
            //it means runtime will copy the address of the book to book1,now we can use the book1 and book variable to access the same obejct memory location
            book.AddGrade(75);
        }

        private static void GetBookName(IGradeTracker book)
        {
            try
            {
                Console.WriteLine("Enter a name");
                book.Name = Console.ReadLine();
            }
            catch (ArgumentException ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        static void OnNameChanged(object sender, NameChangedEventArgs args)
        {
            Console.WriteLine($"Grade book changing name from {args.ExistingName} to{args.NewName}");
        }
        //static void OnNameChanged2(string existingName, string newName)
        //{
        //    Console.WriteLine("***********");
        //}

    }
}
