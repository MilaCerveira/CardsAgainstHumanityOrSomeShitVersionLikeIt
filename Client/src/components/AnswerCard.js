import './AnswerCard.css';
import cad from '../assets/cad.png';

const AnswerCard = ({card}) => {

    return (
                <div className='answer-card' >
                    <h2 className='answer-card-text'>{card.text}</h2>
                    <div id="bottom">
                        <img className='bottom-img' src={cad} alt='logo'/>
                        Cards Against Humanity
                    </div>
                </div>
    )
}

export default AnswerCard;