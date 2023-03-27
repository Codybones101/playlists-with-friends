import { useState } from 'react';

export default function PlaylistForm({handleAddPlayList}) {
    const [playList, setPlaylist] = useState({
        name: "",
    });

    function handleChange(evt) {
        const playlistTitle = {...playList, [evt.target.name] : evt.target.value}
        setPlaylist(playlistTitle)
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddPlayList(playList)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input value={playList.name || "" } type="text" name="name" onChange={handleChange} />
            <button>Add Playlist</button>
        </form>
    )
}