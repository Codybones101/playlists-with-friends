import { useParams } from "react-router-dom";
import SongForm from "../../components/SongForm/SongForm";
import { useState } from "react";
import * as songsAPI from "../../utilities/song-api";

export default function PlayListDetailPage({playLists, setPlayLists}) {
    const {id} = useParams();
    const playList = playLists.find(p => p._id === id)
    const songs = playList.songs.map((s, idx) => <iframe width="560" height="315" src={s.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> ) 

    async function handleAddSong(songData) {
        const updatedPlayList = await songsAPI.addSong(songData, playList._id)
        setPlayLists([...playLists, updatedPlayList])
    }
    

    return(
        <>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/LYcWGG2tGzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {playList.name}
        <SongForm handleAddSong={handleAddSong} />
        {songs}
        </>
    )
}