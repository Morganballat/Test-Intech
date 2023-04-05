const switchBtn = document.querySelector('#darkMode')

switchBtn.addEventListener('click', () => {
  const body = document.body
  if (body.style.backgroundColor === 'black') {
    body.style.backgroundColor = 'yellow'
    body.style.color = 'black'
  } else {
    body.style.backgroundColor = 'black'
    body.style.color = 'white'
  }
})
