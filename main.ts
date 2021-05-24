let red = 0
let blue = 0
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.setBrightness(50)
basic.forever(function () {
    blue = Math.constrain(Math.map(input.acceleration(Dimension.Y), -1023, 1023, 0, 255), 0, 255)
    red = Math.constrain(Math.map(input.acceleration(Dimension.X), -1023, 1023, 0, 255), 0, 255)
    strip.showColor(neopixel.rgb(red, 0, blue))
})
