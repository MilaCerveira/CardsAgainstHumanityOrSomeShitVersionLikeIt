import cad from '../assets/cad.png';
import '../components/BlackCard.css';
// import {useState} from 'react';


const BlackCard = ({ selectedBlackCard }) => {

    return (
        <>
        <div id = 'black-card-answers'>
            <div className='black-card' >

                <h2 className='black-card-text'>{selectedBlackCard.text}</h2>

                <div id="bottom" >
                    <img className='bottom-img' src={cad} alt='logo' />
                    Cards Against Humanity
                </div>
            </div>
        </div>
        </>
    )
}


export default BlackCard;