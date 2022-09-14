dead = False
sleepy = False
hungry = False
mood_chance = 0
eye_movement_state = 0
eye_movement_chance = 0
happy = True
unhappy_timer = 100

def on_button_pressed_a():
    if hungry == True:
        happy = True
        hungry = False
        sleepy = False
        unhappy_timer = 100
        basic.show_leds("""
            . . . . .
                        . . . . #
                        . . . # .
                        # . # . .
                        . # . . .
        """)
    else:
        basic.show_leds("""
            # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
        """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if sleepy == True:
        happy = True
        hungry = False
        sleepy = False
        unhappy_timer = 100
        basic.show_leds("""
            . . . . .
                        . . . . #
                        . . . # .
                        # . # . .
                        . # . . .
        """)
    else:
        basic.show_leds("""
            # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
        """)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    global eye_movement_chance, eye_movement_state, mood_chance, happy, hungry, sleepy, dead
    eye_movement_chance = randint(0, 100)
    if eye_movement_chance <= 10:
        eye_movement_state = 2
    elif eye_movement_chance > 10 and eye_movement_chance <= 20:
        eye_movement_state = 1
    else:
        eye_movement_state = 0
    if happy == True:
        mood_chance = randint(0, 5000)
    if mood_chance <= 1:
        happy = False
        hungry = True
        sleepy = False
    elif mood_chance > 1 and mood_chance <= 3:
        happy = False
        hungry = False
        sleepy = True
    else:
        happy = True
        hungry = False
        sleepy = False
    if (hungry == True or sleepy == True) and unhappy_timer == 0:
        dead = True
    if hungry == True or sleepy == True:
        basic.show_leds("""
            . . . . .
                        . # . # .
                        . . . . .
                        . # # # .
                        # . . . #
        """)
        unhappy_timer = unhappy_timer - 1
    if dead == True:
        basic.show_leds("""
            . . . . .
                        # # . # #
                        . . . . .
                        . . . . .
                        # # # # #
        """)
        pause(8000)
    if happy == True:
        if eye_movement_state == 0:
            basic.show_leds("""
                . . . . .
                                . # . # .
                                . . . . .
                                # . . . #
                                . # # # .
            """)
        elif eye_movement_state == 1:
            basic.show_leds("""
                . . . . .
                                # . # . .
                                . . . . .
                                # . . . #
                                . # # # .
            """)
        else:
            basic.show_leds("""
                . . . . .
                                . . # . #
                                . . . . .
                                # . . . #
                                . # # # .
            """)
    pause(2000)
basic.forever(on_forever)
