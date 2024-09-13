using System;

public class HedgehogColorChange
{
    public static int MinEncounters(int[] counts, int desiredColor)
    {
        int total = counts[0] + counts[1] + counts[2];
        int c1 = (desiredColor + 1) % 3;
        int c2 = (desiredColor + 2) % 3;

       
        int T0 = (counts[0] * 0 + counts[1] * 1 + counts[2] * 2) % 3;
        int T_desired = (total * desiredColor) % 3;

        
        if (T0 != T_desired)
            return -1;

        int encounters = 0;

        while (counts[c1] > 0 || counts[c2] > 0)
        {
            
            if (counts[c1] > 0 && counts[c2] > 0)
            {
                counts[c1]--;
                counts[c2]--;
                counts[desiredColor] += 2;
                encounters++;
            }
            
            else if (counts[c1] > 0 && counts[desiredColor] > 0)
            {
                counts[c1]--;
                counts[desiredColor]--;
                counts[c2] += 2;
                encounters++;
            }
            else if (counts[c2] > 0 && counts[desiredColor] > 0)
            {
                counts[c2]--;
                counts[desiredColor]--;
                counts[c1] += 2;
                encounters++;
            }
            else
            {
                return -1;
            }
        }

        return encounters;
    }

    public static void Main()
    {
        int[] counts = { 0, 0, 4 };
        int desiredColor = 2;
        int result = MinEncounters(counts, desiredColor);
        Console.WriteLine(result);
    }
}
