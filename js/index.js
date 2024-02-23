const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const input = document.querySelector('.form-input');
const buttonSubscribe = document.querySelector('.card-form .button');
const modal = document.querySelector('.modal');
const buttonDismiss = document.querySelector('.modal .button')
const error = document.querySelector('.email-invalid');
const confirmation = document.querySelector('.modal .confirmation')


buttonSubscribe.addEventListener('click', ()=> {

  if(pattern.test(input.value)) {
    console.log(input.value);
    confirmation.textContent = input.value;
    modal.classList.add('show')
  } else {
    error.classList.add('show');
    input.classList.add('form-input-isRed');
    setTimeout(()=>{
      error.classList.remove('show');
      input.classList.remove('form-input-isRed')
    }, 2000)
  }
});

buttonDismiss.addEventListener('click', ()=> {
  modal.classList.remove('show');
  input.value = '';
}) 



