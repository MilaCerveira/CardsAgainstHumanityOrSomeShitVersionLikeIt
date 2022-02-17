import { useState } from "react";
import './landing.css';
import cad from '../assets/cad.png';
import Modal from "./Modal";
import Loser from "./Loser";


const Landing = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <Loser/>
            <h1>Cards</h1>
            <span className='red'><h1>Against</h1></span>
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
                        <button className="enter-button" onClick={() => setShowModal(!showModal)} >ENTER</button>
                        {showModal && <Modal />}
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
