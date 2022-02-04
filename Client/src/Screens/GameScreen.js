import Slider from "../components/Slider";
import WhiteCard from "../components/WhiteCard";
import arrayShuffle from 'array-shuffle';
import { useEffect, useState } from "react";

const GameScreen = ({cards,loaded}) => {
    const [hand, setHand] = useState();
    const [whiteCards, setWhiteCards] = useState();

    

    useEffect(() => {
        if (loaded){
            CreateHand();
            setWhiteCards(cards[0].white);
        }
    }, [])


    const CreateHand = () => {
        let tempCard = arrayShuffle(cards[0].white);

        setHand(tempCard.slice(0,7));

        console.log(hand);

    }
    

    return(
        <>
         {loaded && (
                <div id = 'slider'>
                    <Slider cards = {hand}/>
                    <WhiteCard cards = {hand}/>
                    </div>
                   
            )}         
        </>
    )
}


export default GameScreen;