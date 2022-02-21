import '../components/ConnectionInfo.css';
import cad from '../assets/cad.png';

const ConnectionInfo = () => {

    return (

        <>
            <div className='connection-card'>
                <div className='connection-inner'>
                    <div className='connection-content'>
                        <h2>Setting Up Host Lobby</h2>

                        <div id='game-details'>
                            <p>Awaiting Players...</p>

                            <div id='game-id'>
                                <h3>Game Id: 112233</h3>
                                <p>Other players should enter this ID to join the lobby</p>
                            </div>
                        </div>
                        <div id="connection-bottom">
                            <img className='landing-bottom-img' src={cad} alt='logo' />
                            Cards Against Humanity
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ConnectionInfo;