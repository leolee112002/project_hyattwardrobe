function 當Drying完成時 () {
    basic.showString("Ironing")
    music.playMelody("G F E F G A B C5 ", 120)
    basic.showIcon(IconNames.Diamond)
    OLED.clear()
    OLED.writeNumNewLine(5)
    game.startCountdown(300000)
}
function 當Stop被按下 () {
    music.playMelody("C5 C5 C5 C5 - - - - ", 120)
    basic.showIcon(IconNames.No)
    OLED.clear()
    basic.showString("Continue")
    OLED.newLine()
    basic.showString("Exit")
    if (true) {
        basic.clearScreen()
    } else {
        return
    }
}
function 當Cleaning完成 () {
    basic.showString("Drying")
    music.playMelody("D E D E F G A B ", 120)
    basic.showIcon(IconNames.TShirt)
    OLED.writeNumNewLine(10)
    game.startCountdown(600000)
}
input.onButtonPressed(Button.A, function () {
    music.playMelody("D E F G A B C5 - ", 120)
    basic.showIcon(IconNames.Heart)
    game.startCountdown(300000)
})
function 經過10分鐘600000ms () {
    OLED.writeNumNewLine(0)
    music.playMelody("D E D E F G A B ", 120)
    basic.showIcon(IconNames.Yes)
    OLED.clear()
    basic.showString("Done")
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
}
function 當Cleaning被按下 () {
    music.playMelody("D E F G A B C5 - ", 120)
    basic.showIcon(IconNames.Heart)
    OLED.clear()
    OLED.writeNumNewLine(5)
    game.startCountdown(300000)
    OLED.drawLoading(0)
}
function 經過5分鐘300000ms2 () {
    OLED.writeNumNewLine(0)
    music.playMelody("D E D E F G A B ", 120)
    basic.showIcon(IconNames.Yes)
    OLED.clear()
    basic.showString("Done")
}
function 經過5分鐘300000ms () {
    OLED.writeNumNewLine(0)
    music.playMelody("D E F G A B C5 - ", 120)
    basic.showIcon(IconNames.Yes)
    OLED.clear()
    basic.showString("Done")
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
}
function 當Ironing完成時 () {
    music.playMelody("F C5 - - - - - - ", 120)
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)
    basic.showString("DONE!")
    OLED.newLine()
    basic.showString("Have a nice day")
    basic.showIcon(IconNames.Happy)
}
basic.showIcon(IconNames.Happy)
