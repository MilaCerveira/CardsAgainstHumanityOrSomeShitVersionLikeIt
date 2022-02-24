import { useNavigate } from 'react-router-dom';
import cad from '../assets/cad.png';
import '../components/LobbyInfo.css';
import { useState } from 'react';


const LobbyInfo = ({playerId,players}) => {

    let connectedPlayers;

    const [deckChoice, setDeckChoice] = useState();
    const navigate = useNavigate();

    const handleNavigate = (event) => {
        event.preventDefault();
        // if(players.length < 3)
        // {
        //     alert('minimum of 3 players required');
        //     return;
        // }
        if (!deckChoice) {
            return
        }
        navigate('/Game');
    }

    const handleDeckChoice = (event) => {
        setDeckChoice(event.target.value);
    }


    if(players) {
        console.log(players);
        connectedPlayers = players.map((player,index) => {
            return (
                <h3 key = {index}>Player {index+1}: {player.name} ✅</h3>
            )
        })
    }

    return (

        <>
            <div className='lobby-card'>
                <div className='lobby-inner'>
                    <div className='lobby-content'>
                        <h2>Connected Players {players.length}</h2>
                        <div id='lobby-details'>
                            {connectedPlayers}
                            <form>
                                <select defaultValue={''} name='deck' onChange={handleDeckChoice} required>
                                    <option disabled value=''  >Select Deck</option>
                                    <option value='SFW'>SFW Deck</option>
                                    <option value='NSFW'>NSFW Deck</option>
                                </select>
                                <button id='start-game' type="submit" onClick={handleNavigate}>Start Game</button>
                            </form>
                        </div>

                        <div id="lobby-bottom">
                            <img className='landing-bottom-img' src={cad} alt='logo' />
                            Cards Against Humanity
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default LobbyInfo;