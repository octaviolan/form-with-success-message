const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const input = document.querySelector('.form-input');
const buttonSubscribe = document.querySelector('.card-form .button');
const modal = document.querySelector('.modal');
const buttonDismiss = document.querySelector('.modal .button');
const errorMessage = document.querySelector('.email-invalid');
const emailConfirmation = document.querySelector('.modal .confirmation')


buttonSubscribe.addEventListener('click', ()=> {

  if(pattern.test(input.value)) {
    emailConfirmation.textContent = input.value;
    modal.classList.add('show')
    document.documentElement.scrollTop = 0;
  } else {
    errorMessage.classList.add('show');
    input.classList.add('form-input-isRed');
    setTimeout(()=>{
      errorMessage.classList.remove('show');
      input.classList.remove('form-input-isRed');
    }, 1500)
  }
});

buttonDismiss.addEventListener('click', ()=> {
  modal.classList.remove('show');
  input.value = '';
  document.documentElement.scrollTop = 0;
}) 



