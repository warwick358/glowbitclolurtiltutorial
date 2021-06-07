# colourtilt

## Step 1 
Setup
We will start by createing a variable calles "strip" click the "variable" tab
In the blocks then make a variable call it "strip". 
Go to the "neopixal" tab and get the  "set strip" block and place it in the "on start" block.
 
```blocks
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)

```

## step 2
Setup
Make sure that the pin = "0" this is where we connect the wire on the microbit.
Then change the number of LED's to "13" this is how many lights we have on the GlowBit.
Alos make sure the LED'd are set as "RGB" this is the type of light we have.

```blocks

let strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)

```

## Step 3
In this step we will set the brightness. LED's use a scale from 0 - 255 for brighness.
We will go to the "more" tab
Under the "neopixal" tab and select the "setBrightness" block place it under the "set strip" block.
Change the number to 50.

```blocks 
let strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
strip.setBrightness(50)
```

## step 4
We will now start the forever loop and tell the microbit what to do to the LED's when we tild it.
Go the the "variable" tab and make 2 new variables. 1."blue" 2."red".
In the "variable" tab get the "set strip to 0" block and place it in the "forever" block.
Change the variable to "red". then place another and change it to "blue".
```block
basic.forever(function () {
    blue = 0
    red = 0
})
```

## step 5
Go to the "math" tab and look for the "constrain 0 betwene 0 and 0" block.
Place it in the "0" of the set "red" block. then do the same for the "blue" block.

```block
basic.forever(function () {
    blue = Math.constrain(0, 0, 255)
    red = Math.constrain(0, 0, 255)
})
```
## step 6
Next we go to the "math" tab again and look for the "map 0 form low 0 high 1023 to low 0 high 4" block
Place this block in the first "0" of the previous constrain block.
Next change the numbers to match the following.
"from low -1023 high 1023 to low 0 high 255 between 0 and 255" and do the same for the blue block.
```block
basic.forever(function () {
    blue = Math.constrain(Math.map(0, -1023, 1023, 0, 255), 0, 255)
    red = Math.constrain(Math.map(0, -1023, 1023, 0, 255), 0, 255)
```
## step 7
In this step we use the input from the microbits accelerometer.
Go to the "input" tab and look for the "acceleration" block.
Place this in the first "0" of the "map' bock on the "blue" line.
Then do the same for the "red" but change the dropdown to "y".
Make sure it looks like the hint code.

```block
basic.forever(function () {
    blue = Math.constrain(Math.map(input.acceleration(Dimension.Y), -1023, 1023, 0, 255), 0, 255)
    red = Math.constrain(Math.map(input.acceleration(Dimension.X), -1023, 1023, 0, 255), 0, 255)
})
```
## step 8
Go to the "neopixal" tab and get the "strip show clolur" block
Place it under the "set red" block in the forever loop.
Next go to the "neopixal" "more" tab and look for the "red 255 green 255 blue 255" block.
Place this in the "red" section of the "show clolur" block.
Then go to the "variable" tab and replace the "0" after red with the "red" variable.
and do the same for the blue. blue "0" to "blue" variable. Set the green value to "0"


```block
let red = 0
let blue = 0
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.setBrightness(50)
basic.forever(function () {
    blue = Math.constrain(Math.map(input.acceleration(Dimension.Y), -1023, 1023, 0, 255), 0, 255)
    red = Math.constrain(Math.map(input.acceleration(Dimension.X), -1023, 1023, 0, 255), 0, 255)
    strip.showColor(neopixel.rgb(red, 0, blue))
})
```
## step 9 
Make sure your code matches the hint and download to the microbit.

```block
let red = 0
let blue = 0
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.setBrightness(50)
basic.forever(function () {
    blue = Math.constrain(Math.map(input.acceleration(Dimension.Y), -1023, 1023, 0, 255), 0, 255)
    red = Math.constrain(Math.map(input.acceleration(Dimension.X), -1023, 1023, 0, 255), 0, 255)
    strip.showColor(neopixel.rgb(red, 0, blue))
})

```
