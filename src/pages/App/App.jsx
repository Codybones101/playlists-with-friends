import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../Authpage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import Homepage from '../Home/homepage';
import PlayList from '../Playlist/playlist';
import PlayListDetailPage from "../PlaylistDetailPage/PlaylistDetail";
import * as playListsAPI from "../../utilities/playlists-api";


export default function App() {
  const [user, setUser] = useState(getUser());
  const[playLists, setPlayLists] = useState([]);
  useEffect(() => {
    async function getAllPlayLists() {
      const playLists = await playListsAPI.getAll()
      setPlayLists(playLists)
    }
    getAllPlayLists()
  },[])
  console.log(playLists)
  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/homepage" element={<Homepage />}/>
              <Route path="/playlist" element={<PlayList playLists={playLists} setPlayLists={setPlayLists} />} />
              <Route path="/playlist/:id" element={<PlayListDetailPage playLists={playLists} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
