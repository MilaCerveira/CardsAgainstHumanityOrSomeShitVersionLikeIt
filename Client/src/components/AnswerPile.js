import './AnswerPile.css';
import cad from '../assets/cad.png';

const AnswerPile = ({card}) => {

    return (
        <div id='answer-pile'>
            <div id='answer-cards'>
                <div className='answer-card' >
                    <h2 className='white-card-text'>{card.text}</h2>
                    <div id="bottom">
                        <img className='bottom-img' src={cad} alt='logo'/>
                        Cards Against Humanity
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AnswerPile;