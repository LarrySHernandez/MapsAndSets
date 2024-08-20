// Maps and Sets Exercise
// Quick Question #1
// // What does the following code return?
// let mySet = new Set([1,1,2,2,3,4]) //{1,2,3,4}


// Quick Question #2
// What does the following code return?
// [...new Set("referee")].join("") //["referee"]


// Quick Questions #3
// What does the Map m look like after running the following code?
// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);//{{[1,2,3], true},{[1,2,3], false}}


// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false


// const hasDuplicate = (arr)=> {
//     const mySet = new Set();
//     arr.foreach((val)=> mySet.set(val));
//     if(arr.length === mySet.size) return true;

//     return false;
// };

const hasDuplicate = (arr)=> {
    const mySet = new Set (arr);
    console.log(mySet);
    if(mySet.size === arr.length) return false;

    return true;
};


// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }





const vowelCount = (str) => {
    const mySet = new Set(str);
    const myMap = new Map();
    mySet.forEach((val) => {if('aeiou'.indexOf(val) === -1) mySet.delete(val)});
    mySet.forEach((val) => {
        let counter = 0;
        for(let char of str){
            if(val === char){
                counter++;
            }
        }
        myMap.set(val, counter);
    })

    return myMap;
}






































