// 1. _.chunk(array, size of chunks)
//Input should be array and size of array should be +ve interger, or a boolean , if true create chunks of 1 or else return empty array.
// returns chunks of array of specified size.

let chunk = (arr, arg = 1) => {
    let lengthOfArray = arr.length;
    let output = [];
    let chunkSize;
    if (typeof (arg) === 'boolean') {
        (arg) ? chunkSize = 1 : chunkSize = 0;
    }
    chunkSize = Math.floor(chunkSize === undefined ? arg : chunkSize);
    if ((isNaN(arg) && typeof (arg) !== 'boolean') || !Array.isArray(arr) || arg <= 0) {
        return [];
    } else if (lengthOfArray < chunkSize) {
        return [arr];
    } else {
        let noOfChunks = Math.ceil(lengthOfArray / chunkSize);
        let start = 0;
        let end = chunkSize;
        for (let i = 1; i <= noOfChunks; i++) {
            if (end > lengthOfArray) {
                end = lengthOfArray;
            }
            let chunk = customArraySlice(arr, start, end);
            output.push(chunk);
            start = start + chunkSize;
            end = end + chunkSize;
        }
        return output;
    }
}

let customArraySlice = (arr, start = 0, end = arr.length) => {
    let output = [];
    for (let index = start; index < end; index++) {
        output.push(arr[index]);
    }
    return output;
}

//Chunks of given array and size are created and returned.
console.log(chunk(['a', 'b', 'c'], 2)); // OUTPUT : [['a','b'], ['c']]

//In case of chunk size more than the array length entire array is returned.
console.log(chunk(['a', 'b', 'c'], 4)); // OUTPUT : [['a', 'b', 'c']]

// In case of zero size empty array is returned.
console.log(chunk(['a', 'b', 'c'], 0)); // OUTPUT : []

//In case -ve size empty array is returned.
console.log(chunk(['a', 'b', 'c'], -1)); // OUTPUT : []

//In case of any NaN (Not a number) empty array is returned, except for boolean.
console.log(chunk(['a', 'b', 'c'], 'as')); // OUTPUT : []

//In case of true, single chunks are created.
console.log(chunk(['a', 'b', 'c'], true)); // OUTPUT : [['a'],['b'],['c']]

//In case of false, empty array is returned.
console.log(chunk(['a', 'b', 'c'], false)); // OUTPUT : []

//In case of float, it converts into integer and then chunks it, with floor value.
console.log(chunk(['a', 'b', 'c'], 2.5)); // OUTPUT : [['a','b'], ['c']]

//In case of first input is not array then they return empty array.
console.log(chunk({}, 2)); // OUTPUT : []

//In case where the size is not passed, then default chunk size is 1;
console.log(chunk(['a', 'b', 'c'])); // OUTPUT : [['a'],['b'],['c']]



//2. _.compact(array)
//Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
//return an array with non falsy values.

let compact = (arr) => {
    let output = [];
    if (typeof arr === 'string') {
        return arr.split("");
    } else if (!Array.isArray(arr)) {
        return [];
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]) {
                output.push(arr[i]);
            }
        }
        return output;
    }
}

//Filters the falsy values and returns the array
console.log(compact([0, 1, false, 2, '', 3])); // OUTPUT : [1,2,3]

//In case when input is passed any thing other than array empty array is returned, and also when all valus are falsy.
console.log(compact({})); // OUTPUT : []

//In case of string is passed the string is split into array and returned.
console.log(compact('string')); // OUTPUT : ['s','t','r','i','n','g']



//3. _.concat(array, [values])
//Creates a new array concatenating array with any additional arrays and/or values.

let concat = (...arg) => {
    let arr = [...arg];
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            output.push(...arr[i]);
        } else {
            output.push(arr[i]);
        }
    }
    return output;
}


//In case of array and a number it will flatenen the array by depth of one and add it into an array and return it.
console.log(concat([1], 2, [3], [[4]])); //OUTPUT : [1,2,3,[4]]

//In case of a string it will add the string in array and return.
console.log(concat('Harsh')); //OUTPUT : ['Harsh']

//In case the argument is not passed it will return empty array.
console.log(concat()); //OUTPUT : []

//In case of an object it will add the object into an array and return it.
console.log(concat({ 'name': 'harsh' })); //OUTPUT : [{name: "harsh"}]

//In case of undefined it will add in array and return it.
console.log(concat(undefined)); //OUTPUT : [undefined]



//4. _.drop(array, [n=1])
//Creates a slice of array with n elements dropped from the beginning.
//Returns the slice of array, remove the specifies 'n' from the start of an array.

let drop = (arr, n = 1) => {
    let output = [];
    if (typeof arr === 'string') {
        arr = arr.split("");
    } else if (!Array.isArray(arr)) {
        return [];
    } else if (isNaN(n) || n <= 0) {
        return arr;
    }
    for (let index = n; index < arr.length; index++) {
        output.push(arr[index]);
    }
    return output
}

//In this case first two element are removed and the array is returned.
console.log(drop([1, 2, 3], 2)); //OUTPUT : [3]

//In case no value is specified, default drop value is 1.
console.log(drop([1, 2, 3])); //OUTPUT : [2, 3]

//In case of the drop size greater than no of elements entire array will be drop.
console.log(drop([1, 2, 3], 10)); //OUTPUT : []

//In case of string first char will be drop and other char will be returned in an array.
console.log(drop('harsh')); // OUTPUT : ['a','r','s','h']

//In case any thing other than array is passed empty array is returned.
console.log(drop({}, 10)); //OUTPUT : [];


//5. _.dropRight(array, [n=1])
//Creates a slice of array with n elements dropped from the end.
//Returns the slice of array. it drops the array elements form the right.

let dropRight = (arr, n = 1) => {
    let output = [];
    if (typeof arr === 'string') {
        arr = arr.split("");
    } else if (!Array.isArray(arr)) {
        return [];
    } else if (isNaN(n) || n <= 0) {
        return arr;
    }
    for (let index = 0; index < arr.length - Math.floor(n); index++) {
        output.push(arr[index]);
    }
    return output
}

//In this case last two element are removed and the array is returned.
console.log(dropRight([1, 2, 3], 2)); //OUTPUT : [1]

//In this case float will be rounded to the floor value and then element are removed and the array is returned.
console.log(dropRight([1, 2, 3], 2.5)); //OUTPUT : [1]

//In case no value is specified, default drop value is 1.
console.log(dropRight([1, 2, 3])); //OUTPUT : [1,2]

//In case of the drop size greater than no of elements entire array will be drop.
console.log(dropRight([1, 2, 3], 10)); //OUTPUT : []

//In case of string last char will be drop and other char will be returned in an array.
console.log(dropRight('harsh')); // OUTPUT : ['h','a','r','s']

//In case any thing other than array is passed empty array is returned.
console.log(dropRight({}, 10)); //OUTPUT : [];


//6. _.fill(array, value, [start=0], [end=array.length])
// Fills elements of array with value from start up to, but not including, end.

let fill = (arr, value, start = 0, end = arr.length) => {
    let output = arr;
    if (isNaN(start) || isNaN(end)) {
        return output;
    }
    for (let index = Math.floor(parseInt(start)); index < Math.floor(parseInt(end)); index++) {
        output[index] = value;
    }
    return output;
}

//In case no start and value is specified the complete array will be filled.
console.log(fill([1, 2, 3], 'a')) //OUTPUT : ['a', 'a', 'a']

//In case of specified start and end only those will be changed excluding the end element.
console.log(fill([1, 2, 3, 4], 'a', 1, 4)) // OUTPUT : ['1', 'a', 'a', 'a']

//In case of float the value will be floored and then the values will be filled.
console.log(fill([1, 2, 3, 4], 'a', 1.5, 4.2)) // OUTPUT : ['1', 'a', 'a', 'a']

//In case the number are passed in a string the string will be parsed into number and then values will be filled.
console.log(fill([1, 2, 3, 4], 'a', '1', '4')) // OUTPUT : ['1', 'a', 'a', 'a']

//In case of invalid start and end entire array will be returned
console.log(fill([1, 2, 3, 4], 'a', 'a', 'b')) // OUTPUT : [1, 2, 3, 4]


//7. _.flatten(array)
// Flattens array a single level deep.

let flatten = (arr) => {
    let output = [];
    if (!Array.isArray(arr)) {
        return [];
    }
    for (let index = 0; index < arr.length; index++) {
        if (Array.isArray(arr[index])) {
            output.push(...arr[index]);
        } else {
            output.push(arr[index]);
        }
    }
    return output;
}

//It will flatten the array at a depth of one and return the array
console.log(flatten([1, [2, [3, [4]], 5]])) //OUTPUT : [1, 2, [3, [4]], 5]

//In case any input other than array it will return empty array
console.log(flatten({})) // OUTPUT : []

//In case of four times nested array with no value it will still flatten the array and return
console.log(flatten([[[[]]]])) //OUTPUT : [[[]]]


//8. _.flattenDeep(array)
//Flattens array till no nested array are present.

let flattenDeep = (array, result = []) => {
    if (array.length === 0) {
        return result;
    } else if (!Array.isArray(array)) {
        return [];
    }
    let head = array[0];
    let rest = customArraySlice(array, 1);
    if (Array.isArray(head)) {
        return flattenDeep(head.concat(rest), result);
    }
    result.push(head);
    return flattenDeep(rest, result);
}

// In this case the values will be completely flatten and the array will be returned 
console.log(flattenDeep([1, [2, [3, [4]], 5]])) // OUTPUT : [1,2,3,4,5]

//In this case asa well the array will be completely flatten
console.log(flattenDeep([[1], [2, [3, [4]], 5]])) // OUTPUT : [1,2,3,4,5]

//In case of any other value instead of array is passed it will return empty array
console.log(flattenDeep({})); // OUTPUT : []


// 9. _.indexOf(array, value, [fromIndex=0])
//Gets the index at which the first occurrence of value is found in array 

let indexOf = (arr, value) => {
    let result = -1;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === value) {
            result = index;
            break;
        }
    }
    return result;
}

//Finds the first index of the word or char present in the given string
console.log(indexOf([1, 2, 1, 2], 2)); // OUTPUT : 1

//Returns -1 if the value is not present in the array
console.log(indexOf([1, 2, 1, 2], 8)); // OUTPUT : -1


//10. _.join(array, [separator=','])
//Converts all elements in array into a string separated by separator.

let join = (arr, seperator = ',') => {
    let result = '';
    if (arr.length <= 1) {
        return arr.toString();
    }
    for (let index = 0; index < arr.length; index++) {
        result += arr[index]
        if ((arr.length - 1) !== index) {
            result += seperator;
        }
    }
    return result;
}

//Joins the array element with the specified seperator
console.log(join([1, 2, 3], '~')); //OUTPUT : '1~2~3'

//Joins the array element with the specified seperator and returns a string.
console.log(join([1, 2, 3, 5, '1'], '+')); //OUTPUT : '1+2+3+5+1'

//Joins the elements by default seperator ',' if the seperator is not specified. 
console.log(join([1, 2, 3])); //OUTPUT : '1,2,3'

//Returns the elements as a string if one or less elements are present.
console.log(join([1], '~')); //OUTPUT : '1'
