const buttonLeft = document.querySelector('#validatorButtonLeft')
const buttonRight = document.querySelector('#validatorButtonRight')
const answer = document.querySelector('#answer')

buttonLeft.addEventListener('click', () => {
  if (buttonLeft.value === answer.value) {
    buttonLeft.style.background = 'green'
  } else {
    buttonLeft.style.background = 'red'
  }
})

buttonRight.addEventListener('click', () => {
  if (buttonRight.value === answer.value) {
    buttonRight.style.background = 'green'
  } else {
    buttonRight.style.background = 'red'
  }
})
