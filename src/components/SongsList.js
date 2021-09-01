import React from 'react'
import Song from './Song'

const SongsList = ({songs}) => {

    const songsItem = songs.map((song, index) => {
        return <Song song={song} key={index} />
    })

return (
    <ol>
        {songsItem}
    </ol>
)

}

export default SongsList