import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
    const [gameId, setGameId] = useState();
    const [loaded, setLoaded] = useState(false);
    const [noOfPlayers,setNoOfPlayers] = useState();


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
    }

    const updateHostLobby = (playerId,noOfPlayers) => {
        setPlayerId(playerId);
        setNoOfPlayers(noOfPlayers);
    }

    return (
        <>

            {!loaded && (
                <div>
                    <Loading/>
                </div>
            )}
            <Overlay />
            <div id='RouterContainer'>
                <Router>
                    <Routes>
                        <Route path="/" element={<MenuScreen updateIds={(playerId,gameId) => updateIds(playerId,gameId)} updateHostLobby={(playerId,noOfPlayers) => updateHostLobby(playerId,noOfPlayers)}/>} />
                        <Route path="/Lobby" element={<LobbyScreen noOfPlayers= {noOfPlayers} gameId = {gameId} playerId = {playerId}/>} />
                        <Route path="/Game" element={<GameScreen cards={cards} loaded={loaded} playerId = {playerId}/>} />
                        <Route path="/Result" element={<ResultScreen />} />
                        <Route path="/*" element={<PageNotFoundScreen />} />
                    </Routes>
                </Router>

            </div>

        </>
    );
}


export default CaHContainer;