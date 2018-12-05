using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Csharp_function;
namespace DynamicFeatures
{
	static class  HigherOrderFunctions
	{
		static void Main(string[] args)
		{
			var numbers = new[] { 3, 4, 5, 6, 7, 8, 89, 13 };
			foreach (var prime in numbers.Find(IsOdd))
			{
				Console.WriteLine(prime);
			}

			var client =new WebClient();
			//Func<string> download = () => client.DownloadString("http://microsoft.com");
			Func<string, string> download = (url) => client.DownloadString(url);
			var data = download.Partial("http://microsoft.com").WithRetry();//now partial adapting the function that does not need a parameter....

			Func<string, Func<string>> downloadCurry = download.Curry();
			var data2 = downloadCurry("http://microsoft.com").WithRetry();
			var timekeeper = new TimeKeeper();
			var elapse= timekeeper.Measure(() =>
			{
				foreach (var val in getRandomNUmbers().Find(IsOdd).Take(2))
				{

					Console.WriteLine(val);
				}

			});
			Console.WriteLine(elapse);

			var timekeeper2 = new TimeKeeper();
			var elapsed2 = timekeeper.Measure(() => FindOddNumberAsParellel(0, 100000000));
			Console.WriteLine("for parellel  "+elapsed2);

			Console.WriteLine("Task specific things ");
			var task = new Task<IEnumerable<int>>(

				() => FindOddNumber(3, 100000)
				);
			
		       var task2=task.ContinueWith((antecedent) => {
				foreach (var number in antecedent.Result)
				{
					Console.WriteLine(number);
				}
			});
			task.Start();

			Console.WriteLine("doing some other task");
			task2.Wait();













		}

		private static IList<int> FindOddNumber(int start, int end)
		{
			var primes = Enumerable.Range(start, end - start).ToList();
			return primes.Where(IsOdd).ToList();
		}

		private static IList<int> FindOddNumberAsParellel(int start, int end)
		{
			var primes = Enumerable.Range(start, end - start).ToList();
			return primes.AsParallel().Where(IsOdd).ToList();
		}
		private static IEnumerable<int> Find(this IEnumerable<int> values, Func<int, bool> test)//deciding is the test
		{
			
			foreach (var number in values)
			{
				if (test(number))
				{
					yield return number;// doing ...using yeild c# compiler will generate the code for IEnumerable object and allow the caller to enumerate in this returned obejct
				}
			}
			
		}
		private static bool IsOdd(int number)
		{
			if (number % 2 == 0)
			{
				return true;
			}
			return false;
		}

		static private IEnumerable<int> getRandomNUmbers()
		{
			Console.WriteLine("Freaky gyan");
			yield return 1;
			yield return 2;
			yield return 3;
			yield return 4;
			yield return 5;
			yield return 6;

		}
	}
}
