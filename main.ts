let véletlen = 0
let pont2 = 0
let pont1 = 0
input.onGesture(Gesture.LogoDown, function () {
    véletlen = randint(1, 3)
    if (véletlen == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (véletlen == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    véletlen = randint(1, 3)
    if (véletlen == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (véletlen == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    game.setScore(pont2)
    pont2 += 1
    basic.pause(2000)
    basic.showString("" + (pont2))
    basic.pause(2000)
    basic.clearScreen()
    if (pont2 == 3) {
        basic.showString("A 1-es játékos nyert!")
        basic.pause(2000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    game.setScore(pont1)
    pont1 += 1
    basic.pause(2000)
    basic.showString("" + (pont1))
    basic.pause(2000)
    basic.clearScreen()
    if (pont1 == 3) {
        basic.showString("A 2-es játékos nyert!")
        basic.pause(2000)
        basic.clearScreen()
    }
})
