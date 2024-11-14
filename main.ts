input.onButtonPressed(Button.A, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
    wuKong.setServoSpeed(wuKong.ServoList.S0, -50)
    wuKong.setServoSpeed(wuKong.ServoList.S1, 50)
})
input.onButtonPressed(Button.B, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.InBackground)
    wuKong.setServoSpeed(wuKong.ServoList.S0, 0)
    wuKong.setServoSpeed(wuKong.ServoList.S1, 0)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.InBackground)
    wuKong.setServoSpeed(wuKong.ServoList.S0, 0)
    wuKong.setServoSpeed(wuKong.ServoList.S1, 0)
})
wuKong.lightIntensity(100)
wuKong.setLightMode(wuKong.LightMode.BREATH)
wuKong.stopAllMotor()
basic.forever(function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
    basic.showNumber(input.rotation(Rotation.Pitch))
    basic.showNumber(sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_mm, DigitalPin.P8))
    basic.showNumber(input.rotation(Rotation.Roll))
})
