import { useState } from 'react';
import PlaylistForm from "../../components/PlaylistForm/PlaylistForm";
import * as playListAPI from "../../utilities/playlists-api";
import { Link } from "react-router-dom";
import "./playlist.css";

export default function PlayList ({playLists, setPlayLists}) {

    async function handleAddPlayList(playList) {
    
        const p = await playListAPI.addPlayList(playList)
        const updatedPlayList = [...playLists, p]

        setPlayLists(updatedPlayList)
        
    }
    return(
        <div>
            <PlaylistForm handleAddPlayList={handleAddPlayList} />
            <button />
        <h1>Playlist Page</h1>
        <div className="playlists-container">
            {playLists.map((p, idx) => <Link key={p._id} to={`/playlist/${p._id}`}>{p.name}</Link>)}
        </div>
        </div>
    );
}
