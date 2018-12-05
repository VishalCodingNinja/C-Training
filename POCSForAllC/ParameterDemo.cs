using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace POCSForAllC
{
    class ParameterDemo
    {
        static void Main3(string[] args)
        {
            int i = 10, j = 20;//local parameter
                               // localParameter(i, j);
                               //Console.WriteLine(i+"    "+j);//default params do not change ad also called injectors,dependency injectors
                               //RefVariable(ref i);//use ref at invoking time also
                               //Console.WriteLine(i);//now 11 will come i++ will be reflected here also...

            //OutParameter(out j);
            ParamsParameter(1,2,3,4,5,56,34);
        }

        private static void ParamsParameter(params int[] value)
        {
            foreach (int args in value)
            {
                Console.WriteLine(args);
            }
        }

        private static void OutParameter(out int value)
        {
            //value  has to be assign inside the function in out parameter.
            value = 1234;//value has to be set inside of the function.
        }

        private static void RefVariable(ref int i)
        {
            i++;
        }

       

        private static void localParameter(int i, int j)
        {
            i++;
            j++;
        }
    }
}
