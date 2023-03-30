import { useState } from 'react';

export default function PlaylistForm({handleAddPlayList, playList, updatePlayList}) {
    const [playListData, setPlaylistData] = useState({
        name: playList ? playList.name : "",
    });

    function handleChange(evt) {
        const playlistTitle = {...playListData, [evt.target.name] : evt.target.value}
        setPlaylistData(playlistTitle)
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        playList ? updatePlayList(playListData, playList._id) : handleAddPlayList(playListData)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input value={playListData.name || "" } type="text" name="name" onChange={handleChange} />
            <button>{playList ? "Edit Playlist Name" : "Add Playlist" }</button>
        </form>
    )
}