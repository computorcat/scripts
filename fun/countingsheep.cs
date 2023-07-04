using System;

public static class Kata
{
    public static int count;
  public static int CountSheeps(bool[] sheeps)
  {
    for (int i = 0; i < sheeps.length; i++)
    {
        if (sheeps[i])
        {
            count++;
        }
        else
        {
            continue;
        }
        
    } 
  }
}