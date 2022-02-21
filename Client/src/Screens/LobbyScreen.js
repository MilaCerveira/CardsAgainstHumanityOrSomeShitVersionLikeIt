import { useNavigate } from "react-router-dom";
import ConnectionInfo from "../components/ConnectionInfo";
import LobbyInfo from "../components/LobbyInfo";
import '../Screens/LobbyScreen.css'



const LobbyScreen = ({noOfPlayers, gameId,playerId}) => {

    return (
        <>
            <h1>Cards</h1>
            <span className='red'><h1>Against</h1></span>
            <h1> Humanity</h1>

            <div id='lobby'>

                <div id='connection-info'>
                    <ConnectionInfo />
                </div>

                <div id='lobby-info'>
                    <LobbyInfo playerId = {playerId} />
                </div>

            </div>


        </>


    )
}


export default LobbyScreen;