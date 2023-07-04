# 3 classes Animal is the super class of Dog and Cat
# the speak method is overidden in the subclasses

class Animal():
    def __init__(self, name, age) -> None:
        self._name = name
        self._age = age
    
    def getname(self):
        return self._name
    
    def setname(self, name):
        self._name = name

    def getage(self):
        return self._age

    def speak(self):
        print("Hello!")

class Dog(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name,age)
        self._breed = breed
    
    def getbreed(self):
        return self._breed
    
    def speak(self):
        print("Woof! Woof!")

class Cat(Animal):
    def __init__(self, name, age, furcolour) -> None:
        super().__init__(name, age)
        self._furcolour = furcolour

    def getfurcolour(self):
        return self._furcolour
    
    def speak(self):
        print("Meow! Meow!")
    

def main():
    dog1 = Dog("Max", 4, "staff")
    cat1 = Cat("socks", 3, "ginger")
    animal1 = Animal("Bob", 18)
    animal2 = Animal("clem",5)


    print("Cat1 is called:", cat1.getname())
    print("Cat1 says:", end='')
    cat1.speak()

    print("Dog1 is", dog1.getage())
    print("Dog1 says:", end='')
    dog1.speak()
    

    print("animal1 is called:", animal1.getname())
    print("animal1 says:", end='')
    animal1.speak()
    


if __name__ == '__main__':
    main()






    

        