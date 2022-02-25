import { useRef, useEffect, useState } from "react";
import { motion, useElementScroll, useTransform } from "framer-motion";
import './Slider.css';
import WhiteCard from "./WhiteCard";

const Slider = ({ hand, updateAnswers, gamePhase, updatePopUp }) => {

    const [cardsCounter, setCardsCounter] = useState(0);
    
    let setHand;
  

    useEffect(() => {
        if (gamePhase === 'drawBlackCardPhase') {
            setCardsCounter(0);
        }
    }, [gamePhase])
    

    const updateSlider = (cardId) => {
            
            updateAnswers(cardId,cardsCounter);
            let tempCounter = cardsCounter;
            tempCounter+=1;
            setCardsCounter(tempCounter);
            
    }


    if (hand) {
    setHand = hand.map((card, index) => {
        return (
                <WhiteCard card={card} gamePhase = {gamePhase} index={index} key = {index} updateSlider={(cardId) => updateSlider(cardId)} updatePopUp = {updatePopUp}/>
        );
    })
}
    return (
        <>
            {setHand}
        </>
    );
}
export default Slider;