import { Routes, Route } from "react-router-dom";
import "./App.css";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";

function App() {
  return (
    <div className="flex justify-center h-screen bg-purple-500 App 00">
      <LobbyScreen />
      <Routes>
        <Route exact path="/" element={<LobbyScreen />} />
        <Route exact path="/room/:roomId" element={<RoomPage />} />
      </Routes>
    </div>
  );
}

export default App;
