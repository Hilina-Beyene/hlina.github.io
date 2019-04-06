//functions
function max(num1, num2) {
    if(num1 > num2)
        return num1;
    else
        return num2;
}

function maxOfThree(num1, num2, num3) {
    let largest = num1;
    let list = [num2,num3];

    for(let i=0; i<list.length; i++){
        if(largest < list[i])
            largest = list[i];
    }

    return largest;
}

function isVowel(character) {
    let vowel = false;
    let vowels = ['a','e','i','o','u'];

    for(let i=0; i<vowels.length; i++){
        if(character === vowels[i]){
            vowel = true;
            break;
        }
    }

    return vowel;
}

function sum(nums){
    let add = 0;

    for(let i=0; i<nums.length; i++){
        add += nums[i];
    }

    return add;
}

function multiply(nums) {
    let multi = 1;

    if(nums)

    for(let i=0; i<nums.length; i++){
        multi *= nums[i];
    }

    return multi;
}

function reverse(str) {
    let rev = "";
    for(let i=(str.length - 1); i>=0; i--){
        rev = rev + str.charAt(i);
    }

    return rev;
}

function findLongestWord(words){
    let longest = words[0].length;

    for(let i=1; i<words.length; i++){
        if(longest < words[i].length)
            longest = words[i].length;
    }

    return longest;
}

function filterLongWords(words, num) {
        let arrWords = [];

        for (let i=0; i<words.length;i++){
            if(num < words[i].length)
                arrWords.push(words[i]);
        }

        return arrWords;
}

function map(array){
    //a) multiply each element by 10;
    const f = array.map(a => a * 10);
    //function(elem, i, array){return elem + 3;});
    return f;
}

function filter(array){
    //b) return array with all elements equal to 3;
    const f = array.filter(a => a === 3);
    //{return elem === 3;});
    return f;
}

function reduce(array){
    //c) return the product of all elements;
    const f = array.reduce((a,b)=> a + b);
        //function(accumulator, currentValue, currentIndex, array){return prevVal + elem; });

    return f;
}
//Test function
function myFunctionTest (expected, result) {
    if(expected === result())
        return "TEST SUCCEEDED";
    else
        return  "TEST FAILED.  Expected " + expected + " found " + result();
}

function myArrayTest (expected, result){
    let getResult = result();
    let test = "TEST SUCCEEDED";

    if(getResult === null || getResult === []){
        if(expected !== [])
            test = "TEST FAILED.  Expected " + expected + " found " + getResult;
    }
    else {
        for(let i=0; i<getResult.length;i++){
            if(expected[i] === null){
                test = "TEST FAILED.  Expected " + expected + " found " + getResult;
                break;
            }
            if(expected[i] !== getResult[i]) {
                test = "TEST FAILED.  Expected " + expected + " found " + getResult;
                break;
            }
        }
    }

    return test;
}

//Test cases

//max expected output TEST SUCCEEDED
console.log("Expected output of max(20,10) is 20 and  " + myFunctionTest(20, function(){
    return max(20,10);
}));

//max expected output TEST FAILED
console.log("Expected output of max(20,10) is 10 and  " + myFunctionTest(10, function(){
    return max(20,10);
}));

//maxOfThree expected output TEST SUCCEEDED
console.log("Expected output of maxOfThree(20,10,30) is 30 and  " + myFunctionTest(30, function(){
    return maxOfThree(20,10, 30);
}));

//maxOfThree expected output TEST FAILED
console.log("Expected output of maxOfThree(20,10,30) is 10 and  " + myFunctionTest(10, function(){
    return maxOfThree(20,10,30);
}));



//isVowel expected output TEST SUCCEEDED
console.log("Expected output of isVowel('a') is true and  " + myFunctionTest(true, function(){
    return isVowel('a');
}));

//isVowel expected output TEST FAILED
console.log("Expected output of isVowel('c') is false and  " + myFunctionTest(true, function(){
    return isVowel('c');
}));


//sum expected output TEST SUCCEEDED
console.log("Expected output of sum([1,2,5,9]) is 17 and  " + myFunctionTest(17, function(){

    return sum([1,2,5,9]);
}));

//sum expected output TEST FAILED
console.log("Expected output of sum([1,2,5,9]) is 20 and  " + myFunctionTest(20, function(){
    return sum([1,2,5,9]);
}));


//multiply expected output TEST SUCCEEDED
console.log("Expected output of multiply([1,2,5,9]) is 90 and  " + myFunctionTest(90, function(){

    return multiply([1,2,5,9]);
}));

//multiply expected output TEST FAILED
console.log("Expected output of multiply([1,2,5,9]) is 90 and  " + myFunctionTest(100, function(){
    return multiply([1,2,5,9]);
}));


//reverse expected output TEST SUCCEEDED
console.log("Expected output of reverse(\"ratset gaj\") is \"jag testar\" and  " + myFunctionTest("jag testar", function(){

    return reverse("ratset gaj");
}));

//reverse expected output TEST FAILED
console.log("Expected output of reverse(\"jag testar\") is \"gdhtrsgdkdh\" and  " + myFunctionTest("gdhtrsgdkdh", function(){
    return reverse("ratset gaj");
}));



//findLongestWord expected output TEST SUCCEEDED
console.log("Expected output of findLongestWord([\"kick\",\"kiss\",\"kidnap\",\"goInFront\"]) is 9 and  " + myFunctionTest(9, function(){

    return findLongestWord(["kick","kiss","kidnap","goInFront"]);
}));

//findLongestWord expected output TEST FAILED
console.log("Expected output of findLongestWord([\"kick\",\"kiss\",\"kidnap\",\"goInFront\"]) is 4 and  " + myFunctionTest(4, function(){
    return findLongestWord(["kick","kiss","kidnap","goInFront"]);
}));

//filterLongWords expected output TEST SUCCEEDED
console.log("Expected output of filterLongWords([\"kick\",\"kiss\",\"kidnap\",\"goInFront\"]) is [\"kidnap\",\"goInFront\"] and  " + myArrayTest(["kidnap","goInFront"], function(){

    return filterLongWords(["kick","kiss","kidnap","goInFront"],4);
}));

//filterLongWords expected output TEST FAILED
console.log("Expected output of filterLongWords([\"kick\",\"kiss\",\"kidnap\",\"goInFront\"]) is [] and  " + myArrayTest([], function(){
    return filterLongWords(["kick","kiss","kidnap","goInFront"],11);
}));

//map expected output TEST SUCCEEDED
console.log("Expected output of map([1,3,5,3,3]) is [10,30,50,30,30] and  " + myArrayTest([10,30,50,30,30], function(){

    return map([1,3,5,3,3]);
}));

//map expected output TEST FAILED
console.log("Expected output of map([1,3,5,3,3]) is [50,30,30] and  " + myArrayTest([50,30,30], function(){
    return map([1,3,5,3,3]);
}));

//filter expected output TEST SUCCEEDED
console.log("Expected output of reduce([1,3,5,3,3]) is [3,3,3] and  " + myArrayTest([3,3,3], function(){

    return filter([1,3,5,3,3]);
}));

//filter expected output TEST FAILED
console.log("Expected output of filter([1,3,5,3,3]) is [5,3,3] and  " + myArrayTest([5,3,3], function(){
    return filter([1,3,5,3,3]);
}));

//reduce expected output TEST SUCCEEDED
console.log("Expected output of reduce([1,3,5,3,3]) is 15 and  " + myFunctionTest(15, function(){

    return reduce([1,3,5,3,3]);
}));

//reduce expected output TEST FAILED
console.log("Expected output of reduce([1,3,5,3,3]) is 35 and  " + myFunctionTest(35, function(){
    return reduce([1,3,5,3,3]);
}));