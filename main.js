document.querySelector('#check').addEventListener('click',getInput)

function getInput(){
  const day = document.querySelector('#day').value.toLowerCase()
  if( day == 'monday' || day == 'tuesday'){
    document.querySelector('#result').innerText = 'You have Class';
  }else if(day == 'saturday' || day == 'sunday' ){
        document.querySelector('#result').innerText = 'Its Weekend'
  }else{
        document.querySelector('#result').innerText = 'Boring';

  }
}

/*Variable class 16 Revision*/
let newAge = 20;
newAge -= 10;
//console.log(newAge);


/*Input Value Holder Variable*/
document.querySelector('#checkAge').addEventListener('click',checkAgeValue)
function checkAgeValue(){
let inputVal = Number(document.querySelector('#age').value);
inputVal += 25;
//alert(inputVal);

}
/* Late Night Snacks Hacks*/

document.querySelector('#checkSnacks').addEventListener('click', tellToStop)

function tellToStop(){
  let num = Number(document.querySelector('#snacks').value)
 for(let i = 1; i <= num;i++){
   document.querySelector('#putSnacks').innerText += ' Stop Snacking' 
 }
}
//tellToStop();

/*Loops Exercise */

function numCount(num){
  for(let i = 1; i <= num; i++){
   // console.log('I love You')
  }
}
//numCount(10);

/*Fizz Buzz Hacks*/

function fizzBuzz(num){
  for(let i = 1;i <= num;i++){
  if(i % 3 === 0 && i % 5 === 0){
   // console.log('FizzBuzz')
  }else if(i % 3 === 0){
  //  console.log('Fizz')
  }else if (i % 5 === 0) {
   // console.log('Buzz')
  }else{
  //  console.log(i)
  }
  }
}
//fizzBuzz(15);

/*Arrays*/
let movies = ['John Wick','Vanguard','Hicki','ThreeIdiots']
//leties.forEach((x,i) => console.log(x,i));

let series = ['Episode One','Episode Two','Episode Three','Episode Four'];

//series.forEach((x,i,a) => console.log(x,i,a))


/*Function that takes in an array*/
function calcAndAlert(arr){
  if(arr[0] > arr[arr.lenght-1]){
    console.log('Hello Good Morning')
  } else if(arr[0] < arr[arr.length - 1]){
    console.log('Bye, We close in an hour')
  }else{
    console.log('You are late')
  }
}
//calcAndAlert([11,9,15,1])

/*Some built in function in array*/
let nums = [21,35,26,48,90,51,100]
let sorted = nums.sort((a,b) => a-b )
//letsole.log(`The smallest number from the array is ${sorted[0]} and the largest number from the array it ${sorted[sorted.length - 1]}` )

let OnlyEvens = arr =>  arr.filter( n => n % 2 === 0)

//console.log(OnlyEvens(nums))

/*Sunday Jan 14 Daily Challenge*/

function rockPaperScissors(){
  let random = Math.random()
  if(random < .33){
    return 'Rock'
  }else if(random < .66){
    return 'Paper'
  }else{
    return 'Scissors'
  }
}
//console.log(rockPaperScissors());

function playGame(playerChoice){
  let botChoice = rockPaperScissors();
  if(playerChoice === 'Rock' && botChoice === 'Scissors' || playerChoice === 'Paper' && botChoice === 'Rock' || playerChoice === 'Scissors' && botChoice === 'Paper'){
   console.log('You win')
  }else if(botChoice === playerChoice){
    console.log('You Tied')
  }else{
    console.log('You Lose')
  }
}

//playGame('Rock');

/*Object Exercises*/

function MakeSFCharacter(name,kick, catchPhrase, strength){
  this.name = name
  this.kick = kick
  this.catchPhrase = catchPhrase
  this.strength = strength
  this.skill = function(){
    console.log(`Yoi cannot handle my ${this.catchPhrase}`)
  }
  this.finalBlow = function(){
    console.log(`Haha! take my ${this.kick} kick`)
  }
}

let ryu = new MakeSFCharacter('ryu','Strong','Jujustsu','Excellent')
//console.log(ryu)


/*Jan 16 daily code*/

let checkText = 'Do you have a good note?'
//letrt(checkText.endsWith('?'))


/*Jan 17 daily code*/
function takesIn(){
  let HeadOrTail = Math.random()
  if(HeadOrTail < .5){
    return 'Head'
  }else{
    return 'Tail'
  }
}
//console.log(takesIn())


//const url = 'https://dog.ceo/api/breeds/image/random'
//const url ='https://newsapi.org/v2/everything?q=keyword&apiKey=1848fed5f696438a94d6fd899e286a10'
//fetch(url)
//.then(res => res.json())
//.then(data => {
  //console.log(data.articles.content)
  //data.articles.forEach( (x) => 
 // document.querySelector('h5').innerText += x
//  )
//})
//.catch(err => {
  //console.log(`error ${err}`)
//})

function checkPomodoro(word){
  console.log( word.split('').reverse().join(''))
}
checkPomodoro('love')

let returnNumSquare = arr => arr.map(x => x**2)
//console.log(returnNumSquare([2,3,5,9]))

function MakePerson(name,height,color,dob,state){
  this.name = name;
  this.height = height
  this.color = color
  this.dob = dob
  this.state = state
  this.talk = function(){
    console.log('Hello, my name is ${this.nane}')
  }
  this.sayState = function(){
    console.log('I am from ${this.state} state')
  }
}
let Abdullah = new MakePerson('Abdullah',67.5,'Chocolate','Jan 21st','Oyo')
console.log(Abdullah)

function bookLow(n){
  let meme = n.split('').reverse().join('')
  console.log(meme)
}
bookLow('man')

class StopWatch{
  constructor(name,brand,color){
    this.name = name
    this.brand = brand 
    this.color = color
  }
  yell(){
    console.log(`Hello! i am made of ${this.brand} brand`)
  }
  tellColor(){
    console.log(`I have different types of color but right now you are seing a ${this.color} version of me`)
  }
}
let gShock = new StopWatch('G-Shock','Apple','Grey')

//Pomodoro

function testPomodoro(n){
  let pomodoro = n.split(' ').reverse().join(' ')
  if( pomodoro === n){
    console.log('True')
  }else{
    console.log('False')
  
}
}
//testPomodoro('racecar')


class EspressorMachine{
  constructor(name,brand,color,size){
    this.name = name
    this.brand = brand 
    this.color = color
    this.size = size
  }
  sound(){
    console.log('Fiuuuuuuuuuummmmmmmm')
  }
  start(){
    console.log('I am now put on ')
  }
}
let opay = new EspressorMachine('Opay','Apple','Red','Large')
let jiji = new EspressorMachine('jiji','Apple','Black','Medium')



//Jan 29 Daily challenge
function takesInArr(a,b){
  return a.reduce( (acc,c) => acc + c**2,0 ) > b.reduce((acc,c) => acc + c**3,0)
}

console.log(takesInArr([10,'5',8,2],['5',8,4,20]))

//jan 30 daily challenge
function sortNum(arr){
  let sorted = arr.sort( (a,b) => a-b )
  console.log(sorted);
}
sortNum([10,5,3,20])