import { useParams } from "react-router-dom";
import SongForm from "../../components/SongForm/SongForm";
import * as songsAPI from "../../utilities/song-api";
import { useState, useEffect } from 'react';
import PlaylistForm from "../../components/PlaylistForm/PlaylistForm";
import * as playListsAPI from '../../utilities/playlists-api';
import "./PlaylistDetail.css";


export default function PlayListDetailPage({playLists, setPlayLists}) {
    const [editPlaylist, setEditPlaylist] = useState(false);
    const {id} = useParams();
    const [playList, setPlayList] = useState(null);
    const songs = playList && playList.songs.map((s, idx) => (
        <div className="flx-vrt">
            <iframe key={s.link} width={560} height={315} src={s.link} title={"YouTube video player"} frameBorder={0} allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"} allowFullScreen></iframe>
            <button onClick={() => handleDelete(s._id)}>Delete</button>
        </div>
    )) 

    useEffect(() => {
        async function getPlaylistDetail() {
          const playLists = await playListsAPI.getPlayList(id)
          setPlayList(playLists)
        }
        getPlaylistDetail()
      },[])
        console.log(playList)
    async function handleAddSong(songData) {
        const updatedPlayList = await songsAPI.addSong(songData, playList._id)
        // setPlayLists([...playLists, updatedPlayList])
        const updatedPlayLists = playLists.map(function(p){
            if(p._id === updatedPlayList._id) return(updatedPlayList)
            else return p
        })
        setPlayLists(updatedPlayLists)
    }
    
    async function handleDelete(id) {
        const deletedSong = await songsAPI.deleteSong(id)
        const updatedPlayLists = playLists.map(function(p) {
            return p._id === deletedSong._id ? deletedSong : p
        })

        setPlayLists(updatedPlayLists)
        
    }

    async function updatePlayList(data, id) {
        const newplayList = await playListsAPI.update(data, id)
        const updatedPlaylists = playLists.map(function(p) {
            return p._id === newplayList._id ? newplayList : p
        })
        setPlayLists(updatedPlaylists)
        setEditPlaylist(false)
    }

    return(
        <>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/LYcWGG2tGzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {editPlaylist ? <PlaylistForm updatePlayList={updatePlayList} playList={playList} /> : playList && playList.name} 
        {!editPlaylist && <button onClick={() => setEditPlaylist(!editPlaylist) }>Edit Playlist</button>}
        <SongForm handleAddSong={handleAddSong} />
        {songs}
        </>
    )
}