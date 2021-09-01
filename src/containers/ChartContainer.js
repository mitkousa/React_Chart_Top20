import React, {useState, useEffect} from 'react';
import SongsList from '../components/SongsList';

const ChartContainer = () => {
    const[songs, setSongs] = useState([])

    useEffect(() => {
       getSongs()
    }, [])

    const getSongs = function() {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(response => response.json())
        .then(songs => setSongs(songs.feed.entry))
        console.log(songs)
    }

    return (
        <>
        <SongsList songs={songs} />
        </>
    )
}


export default ChartContainer