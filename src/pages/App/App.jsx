import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../Authpage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import Homepage from '../Home/homepage';
import Playlist from '../Playlist/playlist';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/homepage" element={<Homepage />}/>
              <Route path="/playlist" element={<Playlist />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
