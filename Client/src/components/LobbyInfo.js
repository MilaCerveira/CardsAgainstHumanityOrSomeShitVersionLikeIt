import { useNavigate } from 'react-router-dom';
import cad from '../assets/cad.png';
import '../components/LobbyInfo.css';

const LobbyInfo = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/Game');
    }

    return (

        <>
             <div className='lobby-card'>
                <div className='lobby-inner'>
                    <div className='lobby-content'>
                        <h2>Connected Players (3/4)</h2>
                        <div id='lobby-details'>
                            <h3>Player 1 : Host</h3>
                            <h3>Dan : Connected</h3>
                            <h3>Ellie : Connected</h3>
                            <h3>Empty</h3>
                            <button onClick = {handleNavigate}>Start Game</button>
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