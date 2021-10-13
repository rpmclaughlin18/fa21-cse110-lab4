1) 3 is printed since i is declared as a var (function scope) and ranges over the length of prices.
2) 150 is printed since 300 is the last price in prices and half of it is 150. discountedPrice is delcared as a var so it has function scope
3) 150 is printed since finalPrice is declared with keyword var on line 4 and this is the last value assigned to it.
4) [ 50, 100, 150 ] will be returned since that is the value of the array discounted after the for loop finishes. discounted is declared as a var so it has function scope
5) This will throw an error since i is declared with the key word let and there for has block scope within the for loop on line 6.
6) This will throw an error since discountedPrice is declared with the key word let and there for has block scope within the for loop on line 6.
7) 150 is printed since finalPrice is declared within the scope of the function, so block scope is function scope in this case.
8) [ 50, 100, 150 ] will be returned since that is the value of the array discounted after the for loop finishes. discounted is declared with let so it has block scope, but in this case block scope is function scope.
9) This will throw an error since i is declared with the key word let and there for has block scope within the for loop on line 6.
10) 3 is printed since prices has 3 elements and there is no scoping issue here.
11) [ 50, 100, 150 ] is returned since that is the array of prices after the discount is applied. Although discountedPrice is const, it is declared at the start of each iteration of the for loop so no error is thrown.
12) A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]
13) A. '32' because '3' is a string so the + 2 becomes concatenation
    B. 1 because the - operator casts the '3' to be the numeric value 3
    C. 3 because adding null does nothing
    D. '3null' because the + is treated as concatenation since '3' is a string
    E. 4 because true is treated as 1 implicitly
    F. 0 because false is 0 implicitly and null is nothing
    G. '3undefined' because '3' is a string to the + is treated as concatenation
    H. NaN because that is the String conversion for undefined
14) A. true because '2' becomes 2
    B. false because strings are compared letter by letter and '2' is indeed not less than '1'
    C. true because '2' becomes 2
    D. false because === is type equality as well, and these are not of the same type.
    E. false because true is 1
    F. true because Boolean(2) is true so === holds
15) == is for value comparison regardless of type, === is strict comparison with type checking on.
16) See fa21-cse110-lab4/expose/javascript/part2-question16.js
17) [ 2, 4, 6 ] is returned since the for loop on line 3 iterates over array, pushing the return value of doSomething to newArr along the way. The parameter to doSomething is array[i], so that is how we end up with newArr containing double the values of array
18) See fa21-cse110-lab4/expose/javascript/part2-question18.js
19) 1
    4
    3
    2