import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { io } from 'socket.io-client';
import MenuScreen from "../Screens/MenuScreen";
import GameScreen from "../Screens/GameScreen";
import LobbyScreen from "../Screens/LobbyScreen";
import ResultScreen from '../Screens/ResultScreen';
import PageNotFoundScreen from '../Screens/PageNotFound';
import '../Container/CaHContainer.css';
import arrayShuffle from 'array-shuffle';


const CaHContainer = () => {




    const [cards, setCards] = useState([]);
    const [playerId, setPlayerId] = useState();
    const [players, setPlayers] = useState([]);
    const [gameId, setGameId] = useState();
    const [loaded, setLoaded] = useState(false);
    const [noOfPlayers, setNoOfPlayers] = useState();
    const [socket, setSocket] = useState();
    const [host, setHost] = useState(false); 
    const [winnerId,setWinnerId] = useState();

    useEffect(() => {
        if(socket && host) {
        let tempCards = cards;
        tempCards[0].white = arrayShuffle(tempCards[0].white);
        tempCards[0].black = arrayShuffle(tempCards[0].black);
        console.log(tempCards);
        socket.emit('setDeck', tempCards);
        setCards(tempCards);
        }
    }, [cards[0]])

    const FetchCards = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/sfwCards`)
            const data = await response.json();
            await setCards(data);
            await setLoaded(true);
        }

        catch (error) {
            console.log('error');
        }

    }

    const updateIds = (playerId, gameId) => {
        setPlayerId(playerId);
        setGameId(gameId);
        const s = io('http://localhost:3002');
        setSocket(s);
        s.emit('join-game', playerId, gameId);

       
    }

    const updateHostLobby = async (playerId, noOfPlayers) => {
        setPlayerId(playerId);
        setNoOfPlayers(noOfPlayers);
        const s = io('http://localhost:3002');
        setSocket(s);
        setGameId('test');
        await s.emit('set-room', 'test');
        setHost(true);
        await FetchCards();
        s.emit('join-game', playerId, 'test');
       

    }

    if (socket) {
        socket.on('receive-players', playerList => {
            let tempList = playerList;
            setPlayers(tempList);
        })

        socket.on('receiveDeck', cards => {
            console.log(cards);
            setCards(cards);
            setLoaded(true);
        })

    }
    return (
        <>

            {!loaded && (
                <div>
                    {/* <Loading /> TO DO :MOVE to lobby */}
                </div>
            )}
            {/* <Overlay /> */}
            <div id='RouterContainer'>
                <Router>
                    <Routes>
                        <Route path="/" element={<MenuScreen updateIds={(playerId, gameId) => updateIds(playerId, gameId)} updateHostLobby={(playerId, noOfPlayers) => updateHostLobby(playerId, noOfPlayers)} />} />
                        <Route path="/Lobby" element={<LobbyScreen players={players} noOfPlayers={noOfPlayers} gameId={gameId} socket={socket} host={host} />} />
                        <Route path="/Game" element={<GameScreen cards={cards} loaded={loaded} playerId={playerId} players={players} socket={socket} setWinnerId={(winnerId) => setWinnerId(winnerId)}/>} />
                        <Route path="/Result" element={<ResultScreen playerId = {playerId} winnerId ={winnerId}/>} />
                        <Route path="/*" element={<PageNotFoundScreen />} />
                    </Routes>
                </Router>

            </div>

        </>
    );
}


export default CaHContainer;