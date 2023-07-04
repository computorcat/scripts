public class DnaStrand 
    {
        public static string dnaComplement = "";
        public static string MakeComplement(string dna)
        {
            dnaComplement = "";
            for (int i = 0; i < dna.Length; i++)
            {
                if (dna[i] == 'A')
                {
                    // append to dnaComplement
                    dnaComplement += 'T';
                }
                else if (dna[i] == 'T')
                {
                    dnaComplement += 'A';
                }
                else if (dna[i] == 'C')
                {
                    dnaComplement += 'G';
                }
                else if (dna[i] == 'G')
                {
                    dnaComplement += 'C';
                }
            }
            return dnaComplement;
        }
    }
