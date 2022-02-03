import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import './Slider.css';
import images from "./images";
const Slider = () => {
    const [width, setWidth] = useState(0);
    const slider = useRef();
    
    useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
   
    }, [])

    
    return (
        <>
    
        <div className="container">
        <h2>Question: blah</h2>
        <h2>Options</h2>
            <motion.div ref={slider} className="slider" whileTap={{cursor:"grabbing"}}>
                <motion.div  drag="x"  dragConstraints={{right:0, left: -width}} className="inner-slider">
                {images.map((image, index)=> {
                    return(
                       <motion.div className="item" key = {index}> 
                           <img src={image} alt="img" />
                           </motion.div> 
                    );
                })}
                </motion.div>

            </motion.div>

        </div>
        </>
    );
}
export default Slider;