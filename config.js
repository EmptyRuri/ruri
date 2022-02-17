module.exports = {
    app: {
        px: '!',
        token: 'OTQzNjY4ODYyMTkxMjg4MzYx.Yg2aHQ.di3i_eAYDJ2b1qP4T_nBfqI1YDw',
        playing: 'Music!❤️ !help'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 50,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
