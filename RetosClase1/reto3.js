function createPhoneNumber(num) 
{
    let formaf = '(***) ***-****'
    for (let i of num) 
    {
        formaf = formaf.replace('*',i)
    }
    return formaf
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"