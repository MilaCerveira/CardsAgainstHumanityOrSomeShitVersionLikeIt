import './WhiteCard.css';
import cad from '../assets/cad.png';
const WhiteCard = ({card}) => {
    return (
        <div className='white-card'>
       
                <h2 className='white-card-text'>{card.text}</h2>
             
                <div id="bottom">
                    <img className='bottom-img' src={cad} alt='logo' />
                    Cards Against Humanity
                </div>
            </div>
     

    );
  };
  
  export default WhiteCard;