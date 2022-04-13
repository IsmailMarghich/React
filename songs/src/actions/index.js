const selectSong = (song) => {
    /*action to select a song*/
    return {
        type: 'SONG_SELECT',
        payload: song
    }
}

