input.onButtonPressed(Button.A, function () {
    wuKong.setServoSpeed(wuKong.ServoList.S0, 50)
    wuKong.setServoSpeed(wuKong.ServoList.S2, 50)
})
input.onButtonPressed(Button.B, function () {
    wuKong.stopAllMotor()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    wuKong.stopAllMotor()
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
