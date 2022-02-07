const menu = document.querySelector('.menu')

const button = document.querySelectorAll('.icon-menu')

for (const btn of button) {
  btn.addEventListener('click', function () {
    menu.classList.toggle('show')
    btn.classList.toggle('active')
  })
}
