//TASK 1
// let arr = [12, 15, 20]
// console.log(arr);

// function Arryoxla(arr) {
//     if (Array.isArray(arr)) {
//         Minelement(arr);
//     }

//     else {
//         console.log('array deyil')
//     }
// }

// function Minelement(arr) {
//     let min = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i]
//         }
//     }
//     console.log(min)
// }
// Arryoxla(arr);



//TASK2



// let str = 'Elvincebrayilov'

// function Yoxla(str) {
//     if (typeof str === 'string') {
//         console.log('Stringdir')
//     }
//     else {
//         console.log('string deyil')
//     }
// }

// Yoxla(str);

// function Same(str) {

//     for (let i = 0; i <= str.length; i++) {
//         for (let j = i + 1; j <= str.length; j++) {
//             if (str[i] === str[j]) {
//                 console.log(str[i])

//             }
//         }

//     }
// }

// Same(str);



// TASK 3

let input = document.querySelector('#inp')
let button = document.querySelector('#btn')

button.onclick = function(){

  let string = input.value.split('')
  let reverse = string.reverse().join('')
  

  if (input.value === reverse){
    alert('Duzdur');
    
  }

  else{
    alert('sehvdir');
  }

}
