import { useNavigate } from 'react-router-dom';
import cad from '../assets/cad.png';
import '../components/LobbyInfo.css';
import { useState } from 'react';


const LobbyInfo = ({playerId}) => {

    const [deckChoice, setDeckChoice] = useState();
    const navigate = useNavigate();

    const handleNavigate = () => {
  ;
        if (!deckChoice) {
            return
        }
        navigate('/Game');
    }

    const handleDeckChoice = (event) => {
        setDeckChoice(event.target.value);
    }

    return (

        <>
            <div className='lobby-card'>
                <div className='lobby-inner'>
                    <div className='lobby-content'>
                        <h2>Connected Players (3/4)</h2>
                        <div id='lobby-details'>
                            <h3>{playerId} : Host</h3>
                            <h3>Dan : Connected</h3>
                            <h3>Ellie : Connected</h3>
                            <h3>Empty</h3>
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