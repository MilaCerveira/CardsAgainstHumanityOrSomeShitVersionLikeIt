import './WhiteCard.css';
import cad from '../assets/cad.png';
const WhiteCard = ({cards}) => {
    return (
        <div className='white-card'>
       
                <h2 className='white-card-text'>{cards[0].text}</h2>
             
                <div id="bottom">
                    <img className='bottom-img' src={cad} alt='logo' />
                    Cards Against Humanity
                </div>
            </div>
     

    );
  };
  
  export default WhiteCard;