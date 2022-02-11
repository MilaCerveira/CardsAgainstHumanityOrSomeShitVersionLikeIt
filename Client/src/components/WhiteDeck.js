import { useState } from 'react';
import cad from '../assets/cad.png';
import '../components/WhiteDeck.css';
import arrayShuffle from 'array-shuffle';



const WhiteDeck = ({onWhiteCardSelect}) => {

    return (

        <div id='white-deck' onClick = {onWhiteCardSelect}>
            <div className='cah-logo'>
                <img src={cad} alt='logo' />
            </div>

        </div>

    )
}


export default WhiteDeck;