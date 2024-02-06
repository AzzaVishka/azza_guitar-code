input.onPinPressed(TouchPin.P0, function () {
    music.play(music.stringPlayable("E B D G A C5 C F ", 300), music.PlaybackMode.UntilDone)
})
input.onPinPressed(TouchPin.P2, function () {
    music.playTone(165, music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
})
input.onPinPressed(TouchPin.P1, function () {
    music.playTone(F, music.beat(BeatFraction.Half))
    music.playTone(A, music.beat(BeatFraction.Half))
    music.playTone(C, music.beat(BeatFraction.Half))
})
input.onGesture(Gesture.Shake, function () {
    if (true) {
        basic.showIcon(IconNames.Heart)
        music.play(music.createSoundExpression(
        WaveShape.Sine,
        3318,
        1101,
        189,
        50,
        1000,
        SoundExpressionEffect.Vibrato,
        InterpolationCurve.Curve
        ), music.PlaybackMode.UntilDone)
    } else {
        basic.clearScreen()
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("LETS ROCK")
})
let C = 0
let A = 0
let F = 0
F = 349
A = 440
C = 523
let E = 659
basic.showIcon(IconNames.Ghost)
