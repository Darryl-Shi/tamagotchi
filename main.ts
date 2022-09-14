input.onButtonPressed(Button.A, function () {
    let happy2: boolean;
let hungry2: boolean;
let sleepy2: boolean;
let unhappy_timer2: number;
if (happy == true) {
        happy = true
        hungry = false
        sleepy = false
        unhappy_timer = 100
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    let happy3: boolean;
let hungry3: boolean;
let sleepy3: boolean;
let unhappy_timer3: number;
if (sleepy == true) {
        happy = true
        hungry = false
        sleepy = false
        unhappy_timer = 100
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
let dead = false
let mood_chance = 0
let eye_movement_state = 0
let eye_movement_chance = 0
let sleepy = false
let hungry = false
let unhappy_timer = 0
let happy = false
happy = true
unhappy_timer = 100
basic.forever(function () {
    let unhappy_timer4: number;
eye_movement_chance = randint(0, 100)
    if (eye_movement_chance <= 10) {
        eye_movement_state = 2
    } else if (eye_movement_chance > 10 && eye_movement_chance <= 20) {
        eye_movement_state = 1
    } else {
        eye_movement_state = 0
    }
    if (happy == true) {
        mood_chance = randint(0, 5000)
    }
    if (mood_chance <= 2000) {
        happy = false
        hungry = true
        sleepy = false
    } else if (mood_chance > 2000 && mood_chance <= 4000) {
        happy = false
        hungry = false
        sleepy = true
    } else {
        happy = true
        hungry = false
        sleepy = false
    }
    if ((hungry == true || sleepy == true) && unhappy_timer == 0) {
        dead = true
    }
    if (hungry == true || sleepy == true) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        unhappy_timer = unhappy_timer - 1
    }
    if (dead == true) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . . . . .
            # # # # #
            `)
        pause(8000)
    }
    if (happy == true) {
        if (eye_movement_state == 0) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
        } else if (eye_movement_state == 1) {
            basic.showLeds(`
                . . . . .
                # . # . .
                . . . . .
                # . . . #
                . # # # .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . # . #
                . . . . .
                # . . . #
                . # # # .
                `)
        }
    }
    pause(2000)
})
