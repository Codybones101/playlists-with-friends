import { useState } from 'react';
import PlaylistForm from "../../components/PlaylistForm/PlaylistForm";
import * as playListAPI from "../../utilities/playlists-api";
import { Link } from "react-router-dom";

export default function PlayList () {
    const [playLists, setPlayLists] = useState([]);

    async function handleAddPlayList(playList) {
    
        const p = await playListAPI.addPlayList(playList)

        setPlayLists([...playLists, p])
        
    }
    return(
        <div>
            <PlaylistForm handleAddPlayList={handleAddPlayList} />
            <button />
        <h1>Playlist Page</h1>
            {playLists.map((p, idx) => <Link to="">{p.name}</Link>)}
        </div>
    );
}
