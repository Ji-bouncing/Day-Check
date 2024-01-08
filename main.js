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