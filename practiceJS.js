// console.log('hello world')

// 1
// for (let i = 1; i <= 50; i++) {
//     if (i%3 === 0) {
//         console.log(i)
//     }
// }

// 2
// angel
// angle

// const firstWord = 'teem';
// const secondWord = 'team';
//
// let firstArr = firstWord.split('').sort((a, b) => a - b)
// let secondArr = secondWord.split('').sort((a, b) => a - b)
//
// console.log(firstArr)
// console.log(secondArr)
//
// console.log(JSON.stringify(firstArr) == JSON.stringify(secondArr))


// ----------------------------------------------------------
// let isAnagram = true

// for (let i = 0; i < firstWord.length; i++) {
//     if (secondWord.includes(firstWord[i])) {
//         isAnagram = true
//     } else {
//         isAnagram = false
//         break
//     }
// }
//
// console.log(isAnagram)


//3 hello world

// let string = 'hellow you world'
//
// let arrayWords = string.split(' ')
// let finalString = ''
//
// console.log(arrayWords)
//
// for (i = 0; i < arrayWords.length; i++) {
//     let word = arrayWords[i].split('').reverse().join('')
//     if (i === arrayWords.length-1){
//         finalString = finalString + word
//     } else {
//         finalString = finalString + word + ' '
//     }
// }
//
// console.log(finalString)

// --------------------------------------------------------------
// let firstWord = arrayWords[0].split('').reverse().join('')
// let secondWord = arrayWords[1].split('').reverse().join('')
//
// console.log(firstWord)
// console.log(secondWord)
// console.log(firstWord + ' ' + secondWord)



// 4

// const arr = [1, 1, 2, 3, 2, 3, 4, 4, 5, 3]
//
// console.log([...new Set(arr)])

// 5
// const testWord = 'heh';
//
// let isPolindrom = testWord == testWord.split('').reverse().join('');
//
// console.log(isPolindrom)

// 6
// const testNum = 6;
// let res = 1
//
// for (let i = 1; i <= testNum; i++) {
//     res =  res * i
//     console.log(res)
// }

// --------------------------------------------
// function calc (res) {
//
//     console.log('hi')
//
//     if (res < 5) {
//         res = 10
//         calc()
//     } else {
//         console.log('return')
//     }
// }
//
// calc(4)

// ----------------------------------------------------------
// let res = 1
//
// function calc (num) {
//
//     if (num > 0) {
//         console.log(num)
//         res = res * num
//         num--
//         calc(num)
//     } else {
//         console.log('else')
//     }
// }
//
// calc(5)
// console.log(res)

//
// let test = {
//     'one' : 1,
//     'two' : 22,
//     'three' : 333
// }
//
// for (let k in test) {
//     console.log(test[k])
// }

/////////////////////////////////
//
// import React from 'react'
//
// export class Card extends React.Component {
//     render() {
//         return <div>
//
//         </div>
//     }
// }
//
// const Box = () => {
//     return <div>
//         hi from box
//     </div>
// }

////////////////////////////////

import fetch from "node-fetch";

// const testFunc = async () => {
//     const res = await fetch('https://swapi.dev/api/people')
//     const finalRes = await res.json()
//     console.log(finalRes)
// }
//
// testFunc

// fetch('https://swapi.dev/api/people')
// .then(res => res.json())
// .then(result => console.log(result))