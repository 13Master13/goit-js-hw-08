const nameInput = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')

nameInput.addEventListener('input', cleaningGap)

function cleaningGap() {
	const trimValue = nameInput.value.trim()

	nameOutput.textContent = trimValue || 'Anonymous'
}
