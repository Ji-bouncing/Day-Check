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