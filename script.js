let phone = document.querySelector('#phone');

phone.addEventListener('keydown', () => {
    let isDigit = false
    let isDash = false
    let isControl = false

    if (event.key >= 0 && event.key <= 9 && event.key != ' ') {
        isDigit = true
    }

    if (event.key == '-') {
        isDash = true
    }

    if (event.key == 'Backspace' || event.key == 'ArrowLeft' || event.key == 'ArrowRight') {
        isControl = true
    }

    if (!isDigit && !isControl && !isDash) {
        event.preventDefault();
    }
})