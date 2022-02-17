import Slider from "../components/Slider";
import arrayShuffle from 'array-shuffle';
import { useEffect, useState } from "react";
import BlackCard from "../components/BlackCard";
import BlackDeck from '../components/BlackDeck';
import WhiteDeck from '../components/WhiteDeck';
import HandTop from "../components/HandTop";
import HandLeft from "../components/HandLeft";
import HandRight from "../components/HandRight";
import '../Screens/GameScreen.css';
import Timer from "../components/Timer";
import AnswerPile from "../components/AnswerPile";


const GameScreen = ({ cards, loaded }) => {
    const [hand, setHand] = useState();
    const [whiteDeck, setWhiteDeck] = useState();
    const [selectedBlackCard, setSelectedBlackCard] = useState();
    const [selectedAnswerCard, setSelectedAnswerCard] = useState();
    const [blackDeck, setBlackDeck] = useState();

    useEffect(() => {
        if (loaded && cards[0]) {
            CreateHand();
            setBlackDeck(arrayShuffle(cards[0].black));
        }
        
    }, [])

    const CreateHand = () => {
        let tempCard = arrayShuffle(cards[0].white);
        setHand(tempCard.splice(0, 7));
        setWhiteDeck(tempCard);
    }

    const addToHand = () => {
        let tempHand = [...hand];
        let tempWhiteCards = [...whiteDeck];
        tempHand.push(tempWhiteCards.splice(0, 1)[0]);
        setHand(tempHand);
        setWhiteDeck(tempWhiteCards);
    }

    const CreateBlackCard = () => {
        let tempBlackCards = [...blackDeck];
        setSelectedBlackCard(tempBlackCards.splice(0, 1));
        setBlackDeck(tempBlackCards);
    }

    const updateAnswers = (cardId) => {
        setSelectedAnswerCard(hand[cardId]);
        let tempHand = [...hand];
        let TempCard =tempHand.splice(cardId,1);
        setHand(tempHand);
    }

    return (
        <>
          
            <div id="gameScreen">
                {selectedBlackCard && (
                    <div id='blackCard'>
                        <BlackCard selectedBlackCard={selectedBlackCard} />
                        <Timer />
                    </div>
                )}
                {hand && (
                    <div id='hand1'>
                        <Slider hand={hand} updateAnswers={(cardId) => updateAnswers(cardId)} />
                    </div>
                )}
                <div id='hand2'>
                    <HandLeft />
                </div>

                <div id='hand3'>
                    <HandTop />
                </div>

                <div id='hand4'>
                    <HandRight />
                </div>
                {cards[0] && (
                    <div id='blackDeck'>
                        <BlackDeck blackCards={cards[0].black} onBlackCardSelect={(selectedCard) => CreateBlackCard()} />
                    </div>
                )}
                {cards[0] && (
                    <div id='whiteDeck'>
                        <WhiteDeck whiteCards={cards[0].white} onWhiteCardSelect={() => addToHand()} />
                    </div>
                )}
                {selectedAnswerCard && (
                <div id='answerCards'>
                    <AnswerPile card={selectedAnswerCard} />
                </div>
                )}
            </div>
        </>
    )
}

export default GameScreen;