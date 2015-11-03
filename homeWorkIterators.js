// #Iterators Lab
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//1. Write a function called `each` that takes in an array and a callback function. `each` should iterate through all items in the array /////
//and call the callback function with each item and its index as parameters. `each` should return the original array that was passed in.////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Setting the array and callBack function.
var arr = [3, 2];
var oldFunc = function(x) {
    return x +=1;
};

var each = function(arr, callBack) {
    for(var i = 0; i < arr.length; i++){
        oldFunc(arr[i], i);
    }
    return arr;
    
};
each(arr, oldFunc); // Note: even though I declared 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2. Write a function called `map` that takes in an array and a callback function. `map` should iterate through all items in the array, //// 
//call the callback function with each item and its index as parameters, and return a new array of the results. ////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//An array with 3 elements, 3, 2, 6. These numbers were selected arbitrarily.  
var origArr = [3, 2, 6];
//The callBack function. This adds 1 to the inputted perameter, then returns it.
var oldFunc = function(x) {
    return x +=1;
};
//Declaring the newArray that will be filled with the results from soon-to-be function, "map". 
//Declaring it globaly because, I'm not sure when you would want to create a new array with results from a function, and/while 
//only use it in the function it's declared in (a local variable). Is this line of thinking right? 
var newArr = [];
//A function called map that takes in an array and a callBack function
var map = function(arr, callBack) {
	//Map function should iterate through all items in the array
    for(var i = 0; i < origArr.length; i++){
    	//And call the callBack function with each item and it's index as perameters AND add to the new array(newArr)
        newArr.push(oldFunc(arr[i], i));
    }
    //returns the results in the new array
    return newArr;
    
};
//Calls the map function
map(origArr, oldFunc);
//Shows the NEW array with the results which should equate to each element in variable origArr plus 1. origArr is still the same
newArr; 
//========> newArr = [4, 3, 6]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3. Write a function called reduce that takes in an array of numbers. `reduce` should return the sum of all the numbers in the array. //// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//An array to be tested in the function
var myArr = [2, 4, 6];
//A function called reduced that takes in one parameter of an array
function reduce(arr) {
	//A variable to store the function's results
    var total = null;
    //Iterating through the array
    for(var i = 0; i < arr.length; i++) {
    	//Adding each number in the array to the variable total.
        total += arr[i];
    }
    return total;
}
reduce(myArr);
//  ======> 12 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//4. Write a function called `filter` that takes in an array and another function (a truth test). `filter` should iterate through       //// 
//the array, check whether each value passes the truth test function, and return a new array containing all the values that passed.     //// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
//Declaring function isEven. I was having a tough time getting it to work while declared in function filter. Same with the next question.
//Declares true if an inputted number is even.
var isEven = function(num) {
return num % 2 === 0;
}
//Declaring filter which takes an array and a truthTest
function filter(array, truthTest) {
    //Declaring an empty array for eventual even numbers
    var evenNumbers = [];
    for(var i = 0; i < array.length; i++){
    	//Testing (calling) the callback (truthTest) while iterating the array, and returning the numbers that pass--the even ones.
        if (truthTest(array[i])) {
          evenNumbers.push(array[i]);   
        }
    } 

    return evenNumbers;
}
filter([1, 2, 3, 4, 5, 6], isEven);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//5. Write a function called `partition` that takes in an array and another function (a truth test).  `partition` should ///////////////////////
//split the array into two groups: one whose elements all pass the truth test and one whose elements all fail. It should return  //////////////
//a new array with the two groups nested inside. //////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Declaring function isOdd. I was having a tough time getting it to work while declared in function filter. Same with the previos question.
var isOdd = function(num){ 
		return num % 2 !== 0;
}
//Declating partition which takes an array and a truthTest
function partition(array, truthTest) {
    //Declaring empty array's for eventual even/odd numbers
    var evens = [];
    var odds = [];
    //Testing (calling) the callback (truthTest) while iterating the array, and returning the passing/failing numbers in their respective array
    for(var i = 0; i < array.length; i++){
        if(truthTest(array[i])){
            evens.push(array[i]);
        } else {
            odds.push(array[i]);
        }
    }
   
    return[evens, odds];
}

partition([0, 1, 2, 3, 4, 5], isOdd);
