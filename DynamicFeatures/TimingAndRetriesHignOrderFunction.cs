using System;
using System.Diagnostics;
using System.Net;

namespace Csharp_function
{
	class TimeKeeper
	{
		public TimeSpan Measure(Action action)
		{
			var watch = new Stopwatch();
			watch.Start();
			action();
			return watch.Elapsed;

		}
	}
	public static class Extension
	{
		public static T WithRetry<T>(this Func<T> action)//withRetry() is extension method for func<T>();
		{
			var result = default(T);
			int retryCount = 0;
			bool sucessfull = false;
			do
			{
				try
				{
					result = action ( );
					sucessfull = true;

				}
				catch(WebException ex)
				{

					retryCount++;

				}

			} while (retryCount < 3 && !sucessfull);
			return result;
		}


		public static Func<TResult> Partial<TParam1,TResult>(this Func<TParam1,TResult> func,TParam1 parameter)
		{

			return () => func(parameter);
		}
		public static Func<TParam1, Func<TResult>> Curry<TParam1, TResult>(this Func<TParam1, TResult> func)
		{
			return parameter => () => func(parameter);
		}
	}
}
