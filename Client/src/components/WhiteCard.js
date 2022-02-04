import './WhiteCard.css';
import cad from '../assets/cad.png';
import {useState} from 'react';


const WhiteCard = ({card}) => {

    const [selected, setSelected] = useState(false);

    const toggleSelected = () => {
        setSelected(!selected);
    }

    return (
        <div className='white-card'  onClick={toggleSelected} >
       
                <h2 className='white-card-text'>{card.text}</h2>
             
                {selected && (
                    <div id ='button'>
                        <button>Submit</button>
                    </div>
                )}
                <div id="bottom">
                    <img className='bottom-img' src={cad} alt='logo' />
                    Cards Against Humanity
                </div>
            </div>
     

    );
  };
  
  export default WhiteCard;