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