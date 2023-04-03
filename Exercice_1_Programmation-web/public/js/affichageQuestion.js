const buttonLeft = document.querySelector('#validatorButtonLeft')
const buttonRight = document.querySelector('#validatorButtonRight')
const question = document.querySelector('#question')

buttonLeft.addEventListener('click', () => {
  if (buttonLeft.value === question.value) {
    buttonLeft.style.background = 'green'
  } else {
    buttonLeft.style.background = 'red'
  }
})

buttonRight.addEventListener('click', () => {
  if (buttonLeft.value === question.value) {
    buttonRight.style.background = 'green'
  } else {
    buttonLeft.style.background = 'red'
  }
})
