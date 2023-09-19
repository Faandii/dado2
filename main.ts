let Numero = 0
input.onButtonPressed(Button.A, function () {
    Numero = randint(0, 6)
    if (Numero == 1) {
        basic.showNumber(1)
    }
    if (Numero == 2) {
        basic.showNumber(2)
    }
    if (Numero == 3) {
        basic.showNumber(3)
    }
    if (Numero == 4) {
        basic.showNumber(4)
    }
    if (Numero == 5) {
        basic.showNumber(5)
    }
    if (Numero == 6) {
        basic.showNumber(6)
    }
})
