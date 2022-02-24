import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import {io} from 'socket.io-client';
import MenuScreen from "../Screens/MenuScreen";
import GameScreen from "../Screens/GameScreen";
import LobbyScreen from "../Screens/LobbyScreen";
import ResultScreen from '../Screens/ResultScreen';
import PageNotFoundScreen from '../Screens/PageNotFound';
import '../Container/CaHContainer.css';
import Loading from "../components/Loading";
import Overlay from "../components/Overlay";



const CaHContainer = () => {

   


    const [cards, setCards] = useState([]);
    const [playerId,setPlayerId] = useState();
    const [players,setPlayers] = useState([]);
    const [gameId, setGameId] = useState();
    const [loaded, setLoaded] = useState(false);
    const [noOfPlayers,setNoOfPlayers] = useState(); 
    const [socket, setSocket] = useState();
    const [host, setHost] = useState(false);


    useEffect(() => {
        FetchCards();
    }, [])


    const FetchCards = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/CaH/`)
            const data = await response.json();
            await setCards(data);
            await setLoaded(true);
        }

        catch (error) {
            console.log('error');
        }

    }

    const updateIds = (playerId,gameId) => {
        setPlayerId(playerId);
        setGameId(gameId);
        const s = io('http://localhost:3002');
        setSocket(s);

        s.emit('join-game', playerId, gameId);
       
       
    }

    const updateHostLobby = (playerId,noOfPlayers) => {
        setPlayerId(playerId);
        setNoOfPlayers(noOfPlayers);
        const s = io('http://localhost:3002');
        setSocket(s);
        setGameId('test');
        s.emit('set-room','test');
        s.emit('join-game', playerId, 'test');
        setHost(true);
       
    }

    if(socket) {
    socket.on('receive-players', playerList => {
        let tempList = playerList;
        setPlayers(tempList);
    })
}
    return (
        <>

            {!loaded && (
                <div>
                    <Loading/>
                </div>
            )}
            {/* <Overlay /> */}
            <div id='RouterContainer'>
                <Router>
                    <Routes>
                        <Route path="/" element={<MenuScreen updateIds={(playerId,gameId) => updateIds(playerId,gameId)} updateHostLobby={(playerId,noOfPlayers) => updateHostLobby(playerId,noOfPlayers)}/>} />
                        <Route path="/Lobby" element={<LobbyScreen players = {players} noOfPlayers= {noOfPlayers} gameId = {gameId} socket={socket} host = {host}/>} />
                        <Route path="/Game" element={<GameScreen cards={cards} loaded={loaded} playerId = {playerId} players = {players}/>} />
                        <Route path="/Result" element={<ResultScreen />} />
                        <Route path="/*" element={<PageNotFoundScreen />} />
                    </Routes>
                </Router>

            </div>

        </>
    );
}


export default CaHContainer;