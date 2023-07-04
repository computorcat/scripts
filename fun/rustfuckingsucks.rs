fn main(){
    println!("Hello world!");
    print!("this should print something.");
    print!("and this should be on the same line.");
    eprint!("this should be an error? but actually ends up on the same line as the previous print statement.");
    eprintln!("this should be on a new line!. actually turns out both eprint statements go on the same line before other print statements! what the hell...");
    println!("\nthis should be on a new line.");
    println!("i think whatever i put in the brackets will be replaced by whatever i put after this. like {}!, this is 0 1 0. {0}! {0} {0} {0}! ", 616);
    println!("HOLY SHIT YOU CAN CONVERT NUMBERS??? ARE THEY DYNAMICALLY TYPED? {}, {0:b}, {0:o}, {0:x}, {0:X}", 255);
    println!("1 + 2 = {}", 1 + 2);
    println!("if you see 3 it worked. woohoo!");
    println!("1 - 2 = {}", 1 - 2);
    println!("if you see -1 it worked. woohoo!");
    println("3 x 4 = {}", 3 * 4);
    println!("if you see 12 it worked. woohoo!");
}