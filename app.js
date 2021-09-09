const birthDate = document.querySelector('#birth-date');
const luckyNumber = document.querySelector('#lucky-no');
const result = document.querySelector('#result');
const checkButton = document.querySelector('#chk-btn');

checkButton.addEventListener('click', submitHandler);

function submitHandler(){
 const dob = birthDate.value;
 const replaceDate = dob.replaceAll('-','')
 const luckno= Number(luckyNumber.value);
 sumOfDigits(replaceDate, luckno)
}

function sumOfDigits(birthdayDate, luckyno )
{
     let sum = 0;
     for ( let index = 0; index<=birthdayDate.length; index++ ){
      sum = sum +  Number(birthdayDate.charAt(index));
     } 
    if( sum% luckyno == 0)
    {
     result.innerText = 'Your birthday is lucky'; 
     result.style.color = "green"
    } else {
      result.innerText= 'Your birthday is not lucky';
      result.style.color = "red";
    }
}