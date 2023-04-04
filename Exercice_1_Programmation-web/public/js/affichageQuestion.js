const buttonLeft = document.querySelector('#validatorButtonLeft')
const buttonRight = document.querySelector('#validatorButtonRight')
const answer = document.querySelector('#answer')

buttonLeft.addEventListener('click', () => {
  handleAnswerClick(buttonLeft)
})

buttonRight.addEventListener('click', () => {
  handleAnswerClick(buttonRight)
})

function handleAnswerClick(button) {
  if (button.value === answer.value) {
    button.style.background = 'green'
  } else {
    button.style.background = 'red'
  }
  buttonLeft.disabled = true
  buttonRight.disabled = true
}
