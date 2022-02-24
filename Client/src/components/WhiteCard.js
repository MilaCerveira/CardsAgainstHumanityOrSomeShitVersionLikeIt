import './WhiteCard.css';
import cad from '../assets/cad.png';
import { useState } from 'react';
import WhiteCardTitle from './WhiteCardTitle';
import WhiteCardSubmit from './WhiteCardSubmit';
import PopUp from './PopUp';



const WhiteCard = ({ card, index, updateSlider, gamePhase }) => {
    const [selected, setSelected] = useState(false);
    const [popUp, setPopUp] = useState(false);

    
    const select = (event) => {
        setSelected(true);
    }
    const deSelect = (event) => {
        setSelected(false);
    }

    const submitAnswer = (event) => {
        if (gamePhase != 'selectPhase') {
           setPopUp(true)
            return;
        }
        updateSlider(event.target.id)
    }

    return (
        <div className='white-card' onMouseEnter={select} onMouseLeave={deSelect}>
            <WhiteCardTitle text={card.text} />
            <div className = 'white-card-button'>
                <WhiteCardSubmit id={index} submitAnswer={(selectedCard) => submitAnswer(selectedCard)} selected={selected} />
            </div>
            <div id="bottom">
                <img className='bottom-img' src={cad} alt='logo' />
                Cards Against Humanity
            </div>
            if {popUp && 
            <PopUp text='Its not the select phase'/>
}
        </div>


    );
};

export default WhiteCard;