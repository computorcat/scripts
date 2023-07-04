age = int(input("How old are you? "))
examresults = input("What are your exam results? (letter grade)")

if not (age <= 18 and age >= 16):
    print("you are NOT under 18 and NOT over 16")

if not (examresults == "A*" or examresults == "*"):
    print("you DID NOT got an A*")