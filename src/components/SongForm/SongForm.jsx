import { useState } from 'react';
import "./SongForm.css";

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
        <form className="songform" onSubmit={handleSubmit}>
            <h2>Add Song Below</h2>
            <div>
                <input className="artist" type="text" name="artist" value={songData.artist} placeholder="Artist" onChange={handleChange}/>
                <input className="title" type="text" name="songTitle"value={songData.songTitle} placeholder="Song Title" onChange={handleChange} />
                <input className="link" type="text" name="link" value={songData.link} placeholder="Link" onChange={handleChange} />
            </div>
            <button type="submit">Add Song</button>
        </form>
    )
}



