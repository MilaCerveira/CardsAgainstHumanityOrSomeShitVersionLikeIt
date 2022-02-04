import './Modal.css';
import { useNavigate } from 'react-router-dom';
const Modal = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/Game');
    }

    return (
        <>
            <div className={'modal'}>
                <form className={'modal-content'}>
                    <form>
                        <label>
                            Name:
                            <input type="text" name="name" />
                        </label>
                        <br />
                        <label>
                            Ref:
                            <input type="number" name="number" />
                        </label>
                       
                    </form>
                    <button className={"play-button"} onClick={handleNavigate} type="submit"> PLAY! </button>
                </form>
            </div>
        </>
    )
}

export default Modal;
