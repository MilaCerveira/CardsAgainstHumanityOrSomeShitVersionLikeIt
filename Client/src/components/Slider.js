import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import './Slider.css';
import images from "./images";
import WhiteCard from "./WhiteCard";

const Slider = ({ hand }) => {

    const [width, setWidth] = useState(0);
    const slider = useRef();


    useEffect(() => {
        setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
    }, [])
    
    const setHand = hand.map((card, index) => {
        return (
            <motion.div className="item" key={index}>
                <WhiteCard card = {card}/>
            </motion.div>
        );
    })
    
    return (
        <>
            <div className="container">
                <motion.div ref={slider} className="slider" whileTap={{ cursor: "grabbing" }}>
                    <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="inner-slider">
                        {setHand}
                    </motion.div>

                </motion.div>

            </div>
        </>
    );
}
export default Slider;