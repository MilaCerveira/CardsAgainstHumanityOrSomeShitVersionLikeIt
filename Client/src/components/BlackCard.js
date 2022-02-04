import cad from '../assets/cad.png';
import '../components/BlackCard.css'

const BlackCard = ({selectedBlackCard}) => {

    return (
        <div className='black-card'>
       
                <h2 className='black-card-text'>{selectedBlackCard[0].text}</h2>
             
                <div id="bottom">
                    <img className='bottom-img' src={cad} alt='logo' />
                    Cards Against Humanity
                </div>
            </div>
     

    )}


export default BlackCard;