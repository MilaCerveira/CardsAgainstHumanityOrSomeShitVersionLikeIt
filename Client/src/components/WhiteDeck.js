import { useState } from 'react';
import cad from '../assets/cad.png';
import '../components/WhiteDeck.css';
import arrayShuffle from 'array-shuffle';



const WhiteDeck = ({ onWhiteCardSelect, gamePhase }) => {

    const handleSelect = () => {
        onWhiteCardSelect();
    }
    return (

        <div id='white-deck' onClick={handleSelect}>
            <div className='cah-logo'>
                <img src={cad} alt='logo' />
            </div>

        </div>

    )
}


export default WhiteDeck;