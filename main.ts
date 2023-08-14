radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == slaveID) {
        if (radio.receivedPacket(RadioPacketProperty.SignalStrength) >= -35) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            music.play(music.tonePlayable(587, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        }
        if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -35 && radio.receivedPacket(RadioPacketProperty.SignalStrength) >= -45) {
            basic.showLeds(`
                . . . . .
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            music.play(music.tonePlayable(440, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        }
        if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -45 && radio.receivedPacket(RadioPacketProperty.SignalStrength) >= -60) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                # # # # #
                `)
            music.play(music.tonePlayable(330, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        }
        if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -60 && radio.receivedPacket(RadioPacketProperty.SignalStrength) >= -70) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                `)
            music.play(music.tonePlayable(247, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        }
        if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -70 && radio.receivedPacket(RadioPacketProperty.SignalStrength) >= -80) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                `)
            music.play(music.tonePlayable(175, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
        if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -80) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    }
})
let slaveID = 0
radio.setGroup(3)
slaveID = 1
music.setVolume(127)
basic.forever(function () {
	
})
