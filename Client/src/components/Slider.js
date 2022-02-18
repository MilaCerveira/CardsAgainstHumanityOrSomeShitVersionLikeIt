import { useRef, useEffect, useState } from "react";
import { motion, useElementScroll, useTransform } from "framer-motion";
import './Slider.css';
import WhiteCard from "./WhiteCard";

const Slider = ({ hand, updateAnswers, gamePhase }) => {

    const [width, setWidth] = useState(0);
    const slider = useRef();
    
    let setHand;
    useEffect(() => {
        setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
    }, [])

    const updateSlider = (cardId) => {
        updateAnswers(cardId);
    }


    if (hand) {
    setHand = hand.map((card, index) => {
        return (
            <motion.div className="item" key={index}  whileHover={{ scale: 1.1 }}>
                <WhiteCard card={card} gamePhase = {gamePhase} index={index} updateSlider={(cardId) => updateSlider(cardId)}/>
            </motion.div>
        );
    })
}

   
    return (
        <>
            <div className="container">
                <motion.div ref={slider} className="slider" whileTap={{ cursor: "grabbing" }} >
                    {<motion.div drag="x" dragConstraints={{ right: 0, left: - width }} className="inner-slider">
                        {setHand}
                       
                    </motion.div>}
                    
                </motion.div>
            </div>
        </>
    );
}
export default Slider;