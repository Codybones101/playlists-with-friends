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
        setSongData({
            artist: "",
            songTitle: "",
            link: "",
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input className="artist" type="text" name="artist" value={songData.artist} placeholder="Artist" onChange={handleChange}/>
            <input className="title" type="text" name="songTitle"value={songData.songTitle} placeholder="Song Title" onChange={handleChange} />
            <input className="link" type="text" name="link" value={songData.link} placeholder="Link" onChange={handleChange} />
            <button type="submit">Add Song</button>
        </form>
    )
}



