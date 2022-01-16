let menuBtn = document.querySelector('.menu-btn')

let menu = document.querySelector('header nav ul')

let ind = false

menuBtn.addEventListener('click', () => {

	if (!ind) {

		menu.style.left = 0
		menuBtn.style.color = '#178573'
		ind = true

	} else {

		menu.style.left = '100%'
		menuBtn.style.color = '#1FB299'
		ind = false

	}

})

window.addEventListener('click', (el) => {

	if (!el.target.classList.contains('menu-btn') && ind) {

		menu.style.left = '100%'
		menuBtn.style.color = '#1FB299'
		ind = false

	}

})