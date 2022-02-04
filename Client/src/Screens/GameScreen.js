import Slider from "../components/Slider";
import arrayShuffle from 'array-shuffle';
import { useEffect, useState } from "react";
import BlackCard from "../components/BlackCard";

const GameScreen = ({cards,loaded}) => {
    const [hand, setHand] = useState();
    const [whiteCards, setWhiteCards] = useState();
    const [blackCards, setBlackCards] = useState();
    const [selectedBlackCard,setSelectedBlackCard] = useState();


    

    useEffect(() => {
        if (loaded){
            CreateHand();
            CreateBlackCard();
        }
    }, [])


    const CreateHand = () => {
        let tempCard = arrayShuffle(cards[0].white);
        
        setHand(tempCard.splice(0,7));
        setWhiteCards(tempCard);

    }
    
    const CreateBlackCard = () => {
        let tempCard = arrayShuffle(cards[0].black);
        setSelectedBlackCard(tempCard.splice(0,1));
        setBlackCards(tempCard);
    }


    return(
        <>
         {hand && (
                <div id = 'slider'>
                    <BlackCard selectedBlackCard={selectedBlackCard}/>
                    <Slider hand = {hand}/>
                    
              
                    
                    </div>
                   
            )}         
        </>
    )
}


export default GameScreen;