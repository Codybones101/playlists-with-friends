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
        <div className="playlist-container0">
            <h1 className="ptitle">Click on playlists below</h1>
            <div className="playlists-container1">
                <PlaylistForm handleAddPlayList={handleAddPlayList} />
                {/* <button /> */}
            <div className="playlists-container">
                {playLists.map((p, idx) => <Link key={p._id} to={`/playlist/${p._id}`}>{p.name}</Link>)}
            </div>
            </div>
        </div>
    );
}
