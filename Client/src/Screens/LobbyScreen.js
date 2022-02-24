import { useNavigate } from "react-router-dom";
import ConnectionInfo from "../components/ConnectionInfo";
import LobbyInfo from "../components/LobbyInfo";
import '../Screens/LobbyScreen.css'



const LobbyScreen = ({noOfPlayers, gameId, players, socket , host}) => {


    return (
        <>
            <h1>Cards</h1>
            <span className='red'><h1><span className='highlight'>!</span>Again<span className='highlight'>st</span></h1></span>
            <h1> Humanity</h1>

            <div id='lobby'>

                <div id='connection-info'>
                    <ConnectionInfo gameId = {gameId} />
                </div>

                <div id='lobby-info'>
                    <LobbyInfo players ={players} socket = {socket} host = {host}/>
                </div>

            </div>


        </>


    )
}


export default LobbyScreen;