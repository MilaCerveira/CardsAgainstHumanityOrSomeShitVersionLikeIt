import './Modal.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({ updateIds, playerType, setModalVisible, updateHostLobby }) => {

    const [playerId, setPlayerId] = useState();
    const [gameId, setGameId] = useState();
    const [noOfPlayers, setNoOfPlayers] = useState();

    const navigate = useNavigate();

    const handleNavigate = () => {

        if (playerType === 'Join') {

            if (!playerId || !gameId) {
                return;
            }
            updateIds(playerId, gameId);
        }

        if (playerType === 'Host') {
            if (!playerId || !noOfPlayers) {
                return;
            }
            updateHostLobby(playerId, noOfPlayers);
        }

        navigate('/Lobby');
    }


    const handlePlayerIdChange = (event) => {
        setPlayerId(event.target.value);
    }

    const handleGameIdChange = (event) => {
        setGameId(event.target.value);
    }


    const handleNumberOfPlayers = (event) => {
        setNoOfPlayers(event.target.value);
    }


    const handleBack = () => {
        setModalVisible();
    }


    return (
        <>
            {playerType == 'Host' && (
                <div className={'modal'}>
                    <form className={'modal-content'}>

                        <label>
                            <div className='form-item'>
                                <p> Name: </p>
                                <input type="text" placeholder="Enter Name" required onChange={handlePlayerIdChange} />
                            </div>
                        </label>
                        <br />
                        <label>
                            <div className='form-item'>
                                <p> No. of Players:</p>
                                <select defaultValue={''} name='noOfPlayers' required onChange={handleNumberOfPlayers}>
                                    <option disabled value='' required></option>
                                    <option value='3'>3 Player Game</option>
                                    <option value='4'>4 Player Game</option>
                                </select>
                            </div>
                        </label>


                        <button className={"play-button"} onClick={handleNavigate} type="submit"> Host Game </button>
                        <button className={"play-button"} onClick={handleBack} > Back </button>
                    </form>
                </div>
            )}

            {playerType == 'Join' && (
                <div className={'modal'}>
                    <form className={'modal-content'}>

                        <label>
                            <div className='form-item'>
                                <p> Name: </p>
                                <input type="text" placeholder="Enter Name" required onChange={handlePlayerIdChange} />
                            </div>
                        </label>
                        <br />
                        <label>
                            <div className='form-item'>
                                <p> Game Id:</p>
                                <input type="text" placeholder="enter game Id" required onChange={handleGameIdChange} />
                            </div>
                        </label>


                        <button className={"play-button"} onClick={handleNavigate} type="Submit"> Join </button>
                        <button className={"play-button"} onClick={handleBack} > Back </button>
                    </form>
                </div>
            )}





        </>
    )
}

export default Modal;
