// let myHeading = document.querySelector('h1')
// myHeading.textContent = "Hello World"

// 변수 선언(새로운 단어 시작할 때마다 대문자로 작성)
// var myVariable
// 값 할당
// myVariable = 10
// 변수 선언 + 할당
var myVariable = 10

// console.log(myVariable)

// ES6 이전
var myV1 = 1
// ES6 이후
let myV2 = 2
const myV3 = 3


myV1 = 10
var myV1 = 100

// let 변수는 재선언X
// myV2 = 20
// let myV2 = 200

// const 변수는 재할당X, 재선언X
// myV3 = 30
// const myV3 = 300

let a = 'bob'
let b = 10
let c = true
let d = [1, 2, 3]
let e = {
    'apple': '사과',
}

// console.log(a, b, c, d, e)

// console.log("Hello" + "world!")

console.log(1+2)

let varA = '10'
let varB = 10

console.log(varA == varB)
console.log(varA === varB)
console.log(varA !== varB)

// Array
let myArray = []
myArray.push('hello')
myArray.push('world')
console.log(myArray)
myArray.pop()
console.log(myArray)
console.log(myArray[0])

// object
let myObject = {
    'apple': '사과'
}
console.log(myObject.apple)

myObject.grape = '포도'

console.log(myObject)

// 조건문
let iceCream = 'chocolate'
if (iceCream === 'I love chocolate') {
    console.log()
} else if (iceCream === 'vanila') {
    console.log('vanila')
} else {
    console.log('siuuuuuu')
}

// 반복문
console.log('---while---')
let i = 0
while (i < 5) {
    console.log(i)
    // i = i + 1(파이썬 문법)
    i++ 
}

console.log('---for1---')
for (let i = 0 ; i < 5 ; i++) {
    console.log(i)
}

let arrayA = ['a', 'b', 'c']
console.log('---for2---')
for (let i = 0; i < arrayA.length ; i++) {
    console.log(arrayA[i])
}

console.log('---for in---')
for (let index in arrayA) {
    console.log(index, arrayA[index])
}

console.log('---for of---')
for (let item of arrayA) {
    console.log(item)
}

console.log('---forEach---')
arrayA.forEach(function(item, index, array){
    console.log(item, index, array)
})

// 함수
// def func():

function multiply(num1, num2) {
    let result = num1 * num2
    return result
}
// console.log(multiply(2, 3))

// 함수 표현식
let multifly2 = function(num1, num2) {
    return num1 * num2
}
// console.log(multifly2(3, 4))

// 화살표 함수
let multifly3 = (num1, num2) => {
    return num1 * num2
}
// console.log(multifly3(2, 5))

// 화살표함수 생략1
// {} 안에 코드가 return 하는 문장 하나만 있다면
// {}, return을 생략 가능
let multifly4 = (num1, num2) => num1 * num2
console.log(multifly4(3, 4))

// 화살표함수 생략2
// () 안에 매개변수가 하나만 있다면
// ()를 생략 가능
let cube = (num) => num ** 3
console.log(cube(10))

// 이벤트(onclick)
// document.querySelector('html').onclick = function () {
//     alert('hello!!')
// }

// 이벤트 (이벤트리스너)
let myH1 = document.querySelector('h1')
// <element>.addEventListener(무슨 일이 일어났을 때, 무슨 행동을 할지)
myH1.addEventListener('click', function(e){
    // alert('hihi')
    console.log(e)
    console.log(e.clientX, e.clientY)
})

let myImg = document.querySelector('img')
myImg.addEventListener('click', function(){
    let src = myImg.getAttribute('src')

    if (src === 'images/dog.jpg') {
        myImg.setAttribute('src', 'images/firefox-icon.png')
    } else {
        myImg.setAttribute('src', 'images/flower.jpg')
    }
})

let myInput = document.querySelector('input')
myInput.addEventListener('keydown', function(e){
    console.log(e)
    console.log(myInput.Value)
})