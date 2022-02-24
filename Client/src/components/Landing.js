import { useState } from "react";
import './landing.css';
import cad from '../assets/cad.png';
import Modal from "./Modal";




const Landing = ({updateIds, updateHostLobby}) => {
    const [showModal, setShowModal] = useState(false);
    const[playerType,setPlayerType] = useState();

const joinLobby = (type) => {
   setPlayerType(type);
   
}
const setModalVisible = () => {
    setShowModal(false);

}



    return (
        <>
            <h1>Cards</h1>
            <span className='red'><h1><span className='highlight'>!</span>Again<span className='highlight'>st</span></h1></span>
            <h1> Humanity</h1>
            <div className='card'>
                <div className='card-inner'>
                    <div className='card-front'>
                        <h1>Instead of coal Santa now gives bad children</h1>
                        <div id="landing-bottom">
                            <img className='landing-bottom-img' src={cad} alt='logo' />
                            Cards Against Humanity
                        </div>
                    </div>
                    <div className='card-back'>
                        <h1>Multiple stab wounds</h1>
                        <button className="enter-button" onClick={() => {joinLobby('Host'); setShowModal(!showModal);}} >Host</button>
                        <button className="enter-button" onClick={() => {joinLobby('Join'); setShowModal(!showModal);}} >Join</button>
                       
                        {showModal && 
                        <Modal updateIds={(playerId,gameId) => updateIds(playerId,gameId)} playerType ={playerType} setModalVisible={() => setModalVisible()}  updateHostLobby={(playerId,noOfPlayers) =>  updateHostLobby(playerId,noOfPlayers)} />}
                        <div id="landing-bottom">
                            <img className='landing-bottom-img' src={cad} alt='logo' />
                            Cards Against Humanity
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Landing;
