import './WhiteCard.css';
import cad from '../assets/cad.png';
import {useState} from 'react';


const WhiteCard = ({card, updateSelectedAnswer}) => {

    const [selected, setSelected] = useState(false);

    const toggleSelected = (event) => {
        setSelected(!selected);
        if( event.target.children[1].firstChild.className === "notSelected") {
        event.target.children[1].firstChild.className = "selected";
        }
        if(event.target.children[1].firstChild.className === "selected")
        {
            event.target.children[1].firstChild.className = 'notSelected';
        }

        updateSelectedAnswer(event.target);

    }

    return (
        <div className='white-card' onClick={toggleSelected} >
       
                <h2 className='white-card-text'>{card.text}</h2>
                    <div id ='button'>
                        <button className = 'notSelected'>Submit</button>
                    </div>
                <div id="bottom">
                    <img className='bottom-img' src={cad} alt='logo' />
                    Cards Against Humanity
                </div>
            </div>
     

    );
  };
  
  export default WhiteCard;