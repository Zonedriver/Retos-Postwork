/*console.log('Test 1');
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) 
{
    console.log(numbers[i]);
}

console.log('Test 2');
const numbers1 = [1, 2, 3, 4, 5];

numbers1.forEach(function(number) {

  console.log(number);
});

console.log('Test 3');
const numbers2 = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers2.length; i++) {

  if(numbers2[i] === 3) continue;

  console.log(numbers2[i]);
}

console.log('Test 4');
const numbers3 = [1, 2, 3, 4, 5];

for (let number2 of numbers3) 
{
  console.log(number2);
}

console.log('Test 5');
//También podemos manipular las iteraciones con break o continue.

const numbers4 = [1, 2, 3, 4, 5];

for (let number3 of numbers4) 
{
  if(number3 === 3) continue;

  console.log(number3);
}

console.log('Test 6');
function range(start, end, step) 
{
    if(!step)
    {step=1}
    let sora = [];
    if(step<0)
    {
        for(let i = start; i >= end; i+=step)
        {
            sora.push(i)
        }
    }
    else
    {
        for(let i = start; i <= end; i+=step)
        {
            sora.push(i)
        }
    }   
    return sora;
}
  
function sum(array) 
{   
    //console.log(array)
    let total = 0
    //for(let i = 0; i<array.length; i++)
    for(const riku of array)
    {
        //console.log(array[i])
        total+=riku;
    }
    return total;
}
  
console.log(range(1,5)); // [1, 2, 3, 4, 5]

console.log(range(1, 10, 2) ); // [1, 3, 5, 7, 9]
 
console.log(range(5, 1, -1) ); // [5, 4, 3, 2]
 
console.log(sum(range(1,10)) ); // 55

console.log('Test 7');
function deepEqual(a, b) 
{
  if (a === b) return true;
  if (a == null || typeof a != "object" ||

      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) 
  {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  return true; 
}

let obj = { here: { is: "an" }, object: 2 };

console.log(deepEqual(obj, obj)); // true

console.log(deepEqual(obj, { here: 1, object: 2 })); // false

console.log(deepEqual(obj, { here: { is: "an" }, object: 2 })); // true
*/

console.log('Test 8');
function arrayToList(array) 
{
  let lista = null;
  for (let i = array.length - 1; i >= 0; i--) 
  {lista = { value: array[i], rest: lista }}
  return lista;
}

function listToArray(list) 
{
  let array = [];
  for (let node = list; node; node = node.rest) 
  {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) 
{
  return {value, rest: list};
}

function nth(list, n) 
{
  if (!list) return undefined;
  else if (n === 0) return list.value;
  else return nth(list.rest, n - 1);
}

console.log(arrayToList([1, 2]));
// {value: 1, rest: {value: 2, rest: null}}
console.log(listToArray(arrayToList([1, 2, 3, 4])));
// [1, 2, 3]
console.log(prepend(1, prepend(2, null)));
// {value: 1, rest: {value: 2, rest: null}}
console.log(nth(arrayToList([1, 2, 3]), 1));
// 2