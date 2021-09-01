import react from 'react';
import SongsList from './SongsList';

const Song = ({song}) => {
    return (
      <>
      
        <li>{song["im:name"].label}, {song["im:artist"].label}</li>
        
        </>
    
        )
}

export default Song