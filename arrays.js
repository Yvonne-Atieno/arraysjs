
// Find the last element of the following arrays.
// arr1 = [3,7,34,90,12]
// arr2 = [true, "green", "where",12,56]

let arr1 = [3,7,34,90,12];
let arr4 = arr1[arr1.length-1];
console.log([arr4]);

let arr2 = [true, "green", "where",12,56];
let mix = arr2[arr2.length-1];
console.log(mix);



// Write a JS program that will join the following array elements into a string
let mypets =[" cow","python","snake","dog"];
let we = mypets.join();
console.log(we);



// write a JS script to sort the following array items
// var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var arr3 =[-5,9,5,3,2,-3,6,8,4,1];
let nums =arr3.sort((a,b)=>a -b);
console.log(nums);

// write a program to remove duplicates from the following array.
// Console the array without duplicates, and console anothegit commit -m "first commit"
//r array that only contains the duplicates
// var arr = ["apple", "mango", "apple",
//             "orange", "mango", "mango"];
var arr =["apple","mango","apple","orange","mango","mango",];
function removeFruit(arr){
    return[...new Set(arr)];


}
console.log(removeFruit(arr));

function findDuplicates(arr){
    return arr.filter((number,index)=>arr.indexOf(number) !==index)

}
console.log(findDuplicates(arr));

// iterate through the array. FInd a method to loop through
// Use an if statement to check if the current item is the item being searched for
// console as per the question
