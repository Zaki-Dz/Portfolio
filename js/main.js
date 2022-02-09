let menuBtn = document.querySelector('.menu-btn')

let menu = document.querySelector('header nav ul')

let hidden = true

menuBtn.addEventListener('click', () => {

	if (hidden) {

		menu.style.left = 0
		menu.style.opacity = 1
		menuBtn.style.color = '#178573'

	} else {

		menu.style.left = '100%'
		menu.style.opacity = 0
		menuBtn.style.color = '#1FB299'

	}

	hidden = !hidden

})

window.addEventListener('resize', () => {

	if (window.innerWidth > 767) {

		menu.style.opacity = 1

	}

})

window.addEventListener('click', (el) => {

	if (!el.target.classList.contains('menu-btn') && !hidden) {

		menu.style.left = '100%'
		menu.style.opacity = 0
		menuBtn.style.color = '#1FB299'
		hidden = true

	}

})

let topBtn = document.querySelector('.to-top-btn')

window.addEventListener('scroll', () => {

	if (window.scrollY > 500) {

		topBtn.style.right = 0

	} else {

		topBtn.style.right = '-100px'

	}

})

topBtn.addEventListener('click', () => {

	window.scrollTo(0, 0)

})