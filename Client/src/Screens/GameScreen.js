import Slider from "../components/Slider";
import arrayShuffle from 'array-shuffle';
import { useEffect, useState } from "react";
import BlackCard from "../components/BlackCard";
import BlackDeck from '../components/BlackDeck';
import WhiteDeck from '../components/WhiteDeck';
import OpponentHand from "../components/OpponentHand";
import '../Screens/GameScreen.css';
import Timer from "../components/Timer";

const GameScreen = ({ cards, loaded }) => {
    const [hand, setHand] = useState();
    const [whiteCards, setWhiteCards] = useState();
    const [blackCards, setBlackCards] = useState();
    const [selectedBlackCard, setSelectedBlackCard] = useState();




    useEffect(() => {
        if (loaded) {
            CreateHand();
            CreateBlackCard();
        }
    }, [])


    const CreateHand = () => {
        let tempCard = arrayShuffle(cards[0].white);

        setHand(tempCard.splice(0, 7));
        setWhiteCards(tempCard);

    }

    const CreateBlackCard = () => {
        let tempCard = arrayShuffle(cards[0].black);
        setSelectedBlackCard(tempCard.splice(0, 1));
        setBlackCards(tempCard);
    }


    return (
        <>
            <div id="gameScreen">
                {selectedBlackCard && (
                    
                    <div id='blackCard'>
                        
                        <BlackCard selectedBlackCard={selectedBlackCard} />
                        <Timer/>
                    </div>
                )}

                {hand && (
                    <div id='hand1'>
                        <Slider hand={hand} />
                    </div>

                )}

                <div id='hand2'>
                    <OpponentHand identifier = 'card-left' id = 'hand-left' />
                </div>

                <div id='hand3'>
                    <OpponentHand identifier = 'card-top' id = 'hand-top'/>

                </div>

                <div id='hand4'>
                    <OpponentHand identifier = 'card-right'id = 'hand-right'/>
                </div>

                <div id='blackDeck'>
                    <BlackDeck />
                </div>

                <div id='whiteDeck'>
                    <WhiteDeck />
                </div>
            </div>
           
        </>
    )
}


export default GameScreen;