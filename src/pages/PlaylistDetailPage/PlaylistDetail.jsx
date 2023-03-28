import { useParams } from "react-router-dom";

export default function PlayListDetailPage({playLists}) {
    const {id} = useParams();
    const playList = playLists.find(p => p._id === id)
    return(
        <>
        
        {playList.name}
        </>
    )
}