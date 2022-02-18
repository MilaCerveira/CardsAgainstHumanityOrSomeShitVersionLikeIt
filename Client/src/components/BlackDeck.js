import cad from '../assets/cad.png';
import '../components/BlackDeck.css';
import {useState} from 'react';
import arrayShuffle from 'array-shuffle';


const BlackDeck = ({onBlackCardSelect, gamePhase}) => {

    const handleSelect = (event) => {
        if (gamePhase != 'drawBlackCardPhase') {
            return;
        }
        onBlackCardSelect();
    }

    return (

        <div id='black-deck'  onClick = {handleSelect}>
            <div className = 'cah-logo'>
            <img src={cad} alt='logo'/>
            </div>
        </div>

    )
}


export default BlackDeck;