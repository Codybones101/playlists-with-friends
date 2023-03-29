import { useState } from 'react';

export default function SongForm({handleAddSong}) {
    const [songData, setSongData] = useState({
        artist: "",
        songTitle: "",
        link: "",
    });

    function handleChange(evt) {
        const data = {...songData, [evt.target.name] : evt.target.value}
        setSongData(data);
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        handleAddSong(songData)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="artist" onChange={handleChange}/>
            <input type="text" name="songTitle" onChange={handleChange} />
            <input type="text" name="link" onChange={handleChange} />
            <button type="submit">Add Song</button>
        </form>
    )
}



