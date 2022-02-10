import Slider from "../components/Slider";
import arrayShuffle from 'array-shuffle';
import { useEffect, useState } from "react";
import BlackCard from "../components/BlackCard";
import '../Screens/GameScreen.css';

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
                    </div>
                )}

                {hand && (
                    <div id='hand1'>
                        <Slider hand={hand} />
                    </div>

                )}

                <div id='hand2'>
                
                </div>

                <div id='hand3'>

                </div>

                <div id='hand4'>

                </div>

                <div id = 'blackDeck'>
                    <h3>Black Deck placeholder</h3>

                </div>

                <div id = 'whiteDeck'>
                    <h3>White Deck placeholder</h3>

                </div>
            </div>
        </>
    )
}


export default GameScreen;