function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`
}

const controls = document.querySelector('#controls')
const input = controls.querySelector('input')
const createBtn = controls.querySelector('[data-create]')
const destroyBtn = controls.querySelector('[data-destroy]')
const boxes = document.querySelector('#boxes')

createBtn.addEventListener('click', () => createBoxes(input.value))
destroyBtn.addEventListener('click', destroyBoxes)

function createBoxes(amount) {
	const validateAmount = parseInt(amount)
	if (isNaN(validateAmount) || validateAmount < 1 || validateAmount > 100) {
		alert('Please enter a number between 1 and 100.')
		return
	}
	boxes.innerHTML = ''
	const fragment = document.createDocumentFragment()
	let size = 30

	for (let i = 0; i < validateAmount; i++) {
		const box = document.createElement('div')
		box.style.width = `${size}px`
		box.style.height = `${size}px`
		box.style.backgroundColor = getRandomHexColor()
		fragment.appendChild(box)

		size += 10
	}

	boxes.appendChild(fragment)
	input.value = ''
}

function destroyBoxes() {
	boxes.innerHTML = ''
}
