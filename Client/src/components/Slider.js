import { useRef, useEffect, useState } from "react";
import { motion, useElementScroll, useTransform } from "framer-motion";
import './Slider.css';
import WhiteCard from "./WhiteCard";

const Slider = ({ hand, }) => {

    const [width, setWidth] = useState(0);
    const slider = useRef();
    const[selectedAnswer,setSelectedAnswer] = useState();
    const[previousAnswer,setPreviousAnswer] = useState(null);
    
    let setHand;
    useEffect(() => {
        setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
    }, [])

    if (hand) {
    setHand = hand.map((card, index) => {
        return (
            <motion.div className="item" key={index} whileHover={{ scale: 1.1 }}>
                <WhiteCard card={card} updateSelectedAnswer={(card) => updateAnswer(card)}/>
            </motion.div>
        );
    })
}

const updateAnswer = (card) => {

    if(card === previousAnswer) {
        card.children[1].firstChild.className = 'notSelected'
        setPreviousAnswer(null);
        return;
    }

    if (previousAnswer) {
        previousAnswer.children[1].firstChild.className = "notSelected";
    }

    setPreviousAnswer(card);
    card.children[1].firstChild.className = 'selected';
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