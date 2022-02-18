import './Modal.css';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({updateIds}) => {

    const [playerId,setPlayerId] = useState();
    const [gameId,setGameId] = useState();

    const navigate = useNavigate();

    const handleNavigate = () => {
        if (!playerId || !gameId) {
            alert('please enter name and game Id')
            return;
        }
        navigate('/Game');
        updateIds(playerId,gameId);
    }


    const handlePlayerIdChange = (event) => {
        setPlayerId(event.target.value);
    }

    const handleGameIdChange = (event) => {
        setGameId(event.target.value);
    }


    return (
        <>
            <div className={'modal'}>
                <form className={'modal-content'}>
                
                        <label>
                            <div className = 'form-item'>
                            <p> Name: </p>
                            <input type="text" placeholder="Enter Name" required onChange= {handlePlayerIdChange}/>
                            </div>
                        </label>
                        <br />
                        <label>
                        <div className = 'form-item'>
                            <p> Game Id:</p>
                            <input type="number" placeholder="enter game Id" required onChange = {handleGameIdChange}/>
                        </div>
                        </label>
                       
                
                    <button className={"play-button"} onClick={handleNavigate} type="submit"> START </button>
                </form>
            </div>
        </>
    )
}

export default Modal;
