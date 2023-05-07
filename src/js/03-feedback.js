const throttle = require('lodash.throttle')

const email = document.querySelector('[name="email"]')
const message = document.querySelector('[name="message"]')
const form = document.querySelector('.feedback-form')
const FORM_STATE = 'feedback-form-state'

let formData = JSON.parse(localStorage.getItem(FORM_STATE)) ?? {}

form.addEventListener('input', throttle((onButtonForm), 500))
form.addEventListener('submit', onSubmitButton)

formElementsValueAfterReload()
 
function onButtonForm(e) {
  e.target.name === 'email' ? formData.email = e.target.value : formData.message = e.target.value 
  localStorage.setItem(FORM_STATE, JSON.stringify(formData))
}

function onSubmitButton(e) {
  e.preventDefault()
  if(email.value === '' || message.value === '') return alert('Для відправки форми заповніть всі поля!')
  console.log('Объект в консоль:', formData);
  form.reset()
  localStorage.removeItem(FORM_STATE)
  // alert('Форма Відправлена!') 
}

function formElementsValueAfterReload() {
  email.value = formData.email ?? ''
  message.value = formData.message ?? ''
}
// localStorage.clear()

// try {
// email.value = JSON.parse(localStorage.getItem('feedback-form-state')).email 
// message.value = JSON.parse(localStorage.getItem('feedback-form-state')).message
// } catch (error) {
//   console.log(error.name); // "SyntaxError"
//   console.log(error.message); // Unexpected token W in JSON at position 0
// }


// email.addEventListener('keydown', throttle((re), 500))
// message.addEventListener('keydown', throttle((cer), 500))
// submit.addEventListener('click', submitForm)

// function re(e) {
//   console.log(e.target.value);
//   a.email = e.target.value
//   localStorage.setItem('feedback-form-state', JSON.stringify(a))
// }

// function cer(e) {
//   console.log(e.target.value);
//   a.message = e.target.value
//   localStorage.setItem('feedback-form-state', JSON.stringify(a))
// }

// function submitForm(e) {
//   e.preventDefault()
//   console.log(a);
//   feedbackForm.reset()
//   localStorage.removeItem('feedback-form-state')
// }