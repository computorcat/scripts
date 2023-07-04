// name generator
// by me
// let the user input names.. put them in an array, then randomly select 2 names then combine them!
// input names seperated by commas! 
using System;
using System.Collections.Generic;
public class namegen{
    static void Main(){
        Console.WriteLine("This is a Name Generator.");
        Console.WriteLine("Please input names seperated by commas. I will collect these names and mash them together!");
        string names = Console.ReadLine();
        Console.WriteLine("You have inputted: " + names);
        List<string> namesList = new List<string>{names.Split(',')};
        Console.WriteLine(namesList[0]);
    }
}