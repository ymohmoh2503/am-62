function final () {
    basic.clearScreen()
    basic.showNumber(puntos)
    basic.pause(500)
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    if (juega && coche > 1) {
        led.unplot(coche, 4)
        coche = coche - 1
        led.plot(coche, 4)
    }
})
function carretera () {
    led.toggle(0, 0)
    led.toggle(4, 0)
    led.toggle(0, 1)
    led.toggle(4, 1)
    led.toggle(0, 2)
    led.toggle(4, 2)
    led.toggle(0, 3)
    led.toggle(4, 3)
    led.toggle(0, 4)
    led.toggle(4, 4)
}
function inicio () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    led.plot(cesta, 4)
}
input.onButtonPressed(Button.AB, function () {
    puntos = 0
    espera = 400
    cesta = 2
    inicio()
    juega = true
    basic.pause(20000)
    juega = false
    final()
})
input.onButtonPressed(Button.B, function () {
    if (juega && coche < 3) {
        led.unplot(coche, 4)
        coche = coche + 1
        led.plot(coche, 4)
    }
})
function manzana () {
    x = randint(1, 3)
    y = 0
    while (y <= 4) {
        carretera()
        led.plot(x, y)
        basic.pause(espera)
        led.unplot(x, y)
        y = y + 1
    }
}
function esquivar () {
    if (x == coche) {
        juega = false
    } else {
        puntos = puntos + 1
        espera = espera + 25
        led.unplot(x, y)
    }
}
let y = 0
let x = 0
let espera = 0
let cesta = 0
let coche = 0
let puntos = 0
let juega = false
juega = false
