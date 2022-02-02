import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import white from '../assets/white.png';
import black from '../assets/black.png';

const Slider = () => {
    return (
        <>
            <h1>I'm a slider </h1>
            <motion.div className="slider">
                <motion.div className="inner-slider">

                </motion.div>

            </motion.div>

        </>
    )
}
export default Slider;