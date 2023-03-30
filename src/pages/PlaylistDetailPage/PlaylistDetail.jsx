import { useParams } from "react-router-dom";
import SongForm from "../../components/SongForm/SongForm";
import * as songsAPI from "../../utilities/song-api";
// import * as playListsAPI from '../../utilities/playlists-api';


export default function PlayListDetailPage({playLists, setPlayLists}) {
    const {id} = useParams();
    const playList = playLists.find(p => p._id === id)
    const songs = playList.songs.map((s, idx) => <iframe key={s.link} width={560} height={315} src={s.link} title={"YouTube video player"} frameBorder={0} allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"} allowFullScreen></iframe> ) 

    async function handleAddSong(songData) {
        const updatedPlayList = await songsAPI.addSong(songData, playList._id)
        setPlayLists([...playLists, updatedPlayList])
        const updatedPlayLists = playLists.map(function(p){
            if(p._id === updatedPlayList._id) return(updatedPlayList)
            else return p
        })
        setPlayLists(updatedPlayLists)
    }

    // useEffect(() => {
    //     async function getAllPlayLists() {
    //       const playLists = await playListsAPI.getAll()
    //       setPlayLists(playLists)
    //     }
    //     getAllPlayLists()
    //   },[addSong])
    

    return(
        <>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/LYcWGG2tGzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {playList.name}
        <SongForm handleAddSong={handleAddSong} />
        {songs}
        </>
    )
}