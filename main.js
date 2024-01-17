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
console.log(newAge);


/*Input Value Holder Variable*/
document.querySelector('#checkAge').addEventListener('click',checkAgeValue)
function checkAgeValue(){
let inputVal = Number(document.querySelector('#age').value);
inputVal += 25;
alert(inputVal);

}
/* Late Night Snacks Hacks*/

document.querySelector('#checkSnacks').addEventListener('click', tellToStop)

function tellToStop(){
  let num = Number(document.querySelector('#snacks').value)
 for(let i = 1; i <= num;i++){
   document.querySelector('#putSnacks').innerText += ' Stop Snacking' 
 }
}
tellToStop();

/*Loops Exercise */

function numCount(num){
  for(let i = 1; i <= num; i++){
    console.log('I love You')
  }
}
numCount(10);

/*Fizz Buzz Hacks*/

function fizzBuzz(num){
  for(let i = 1;i <= num;i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz')
  }else if(i % 3 === 0){
    console.log('Fizz')
  }else if (i % 5 === 0) {
    console.log('Buzz')
  }else{
    console.log(i)
  }
  }
}
fizzBuzz(15);

/*Arrays*/
let movies = ['John Wick','Vanguard','Hicki','ThreeIdiots']
movies.forEach((x,i) => console.log(x,i));

let series = ['Episode One','Episode Two','Episode Three','Episode Four'];

series.forEach((x,i,a) => console.log(x,i,a))


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
calcAndAlert([11,9,15,1])

/*Some built in function in array*/
let nums = [21,35,26,48,90,51,100]
let sorted = nums.sort((a,b) => a-b )
console.log(`The smallest number from the array is ${sorted[0]} and the largest number from the array it ${sorted[sorted.length - 1]}` )

let OnlyEvens = arr =>  arr.filter( n => n % 2 === 0)

console.log(OnlyEvens(nums))

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

playGame('Rock');

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
console.log(ryu)


/*Jan 16 daily code*/

let checkText = 'Do you have a good note?'
alert(checkText.endsWith('?'))


/*Jan 17 daily code*/
function takesIn(){
  let HeadOrTail = Math.random()
  if(HeadOrTail < .5){
    return 'Head'
  }else{
    return 'Tail'
  }
}
console.log(takesIn())