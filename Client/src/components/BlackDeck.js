import cad from '../assets/cad.png';
import '../components/BlackDeck.css';
import {useState} from 'react';
import arrayShuffle from 'array-shuffle';


const BlackDeck = ({onBlackCardSelect}) => {


    return (

        <div id='black-deck'  onClick = {onBlackCardSelect}>
            <div className = 'cah-logo'>
            <img src={cad} alt='logo'/>
            </div>
        </div>

    )
}


export default BlackDeck;