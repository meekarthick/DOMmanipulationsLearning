// let input = 'name'
// let obj = {
//     name : "karthi",
//     Dep : "EIE",
//     car : {
//         brand : "Ducati",
//         No1  : "987"
//     }
// };

// // for in loop
// for(let key in obj)
// {
//     console.log(key, obj[key]);
//     if(typeof(obj[key]) == 'object' )
//     {
//         for(let y in obj[key])
//         {
//             console.log(y,obj[key][y]);
//         }
//     }
// }


// functions are treated as obj in jss

let add = function value(num1 , num2)
{
    return num1 + num2
}

let result=add(2,6)
console.log(result);