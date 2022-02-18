
import lovetrash  from '../assets/lovetrash.mp3';
import './Loser.css';
import { motion, useElementScroll, useTransform } from "framer-motion";
const Loser = () => {
    
    const play = () => {
        const trash = new Audio(lovetrash);
        trash.play();    
    };

    const emoArray = [];
    for (let i = 0; i <= 100 ; i++) {
      emoArray.push( '💩')
      emoArray.push('👎  ')
      emoArray.push('🗑️')
      emoArray.push ('🐀')
      emoArray.push('🍅 ')
      emoArray.push('Loser')
    }

    const emoArray2 = [];
    for (let i = 0; i <= 100 ; i++) {
      emoArray2.push( '💩')
      emoArray2.push('👎  ')
      emoArray2.push('🗑️')
      emoArray2.push ('🐀')
      emoArray2.push('🍅 ')
      emoArray2.push('Loser')
    }
   const setEmoji = emoArray.map((emo) => {
        return (
            <motion.div 
            initial={{ y: Math.random() *800 , x: Math.random() *800 }}
            animate={{
               
             
              y: Math.random() * 600,
              x: Math.random() * 600,
              scale: [2, 3, 2, 3, 2]
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              loop: Infinity,
              repeatDelay: 2
            }}
            whileHover={{ scale: 35 }}
            whileTap={{ rotate: [0, 5, -5, 5, 0] }}
          >
          
            <span role="img" aria-label="poop">
              {emo}
            </span>
          
          </motion.div>
        );
    })

    const setEmoji2 = emoArray2.map((emo) => {
        return (
            <motion.div 
            initial={{ y: Math.random() * -800 , x: Math.random() * -800 }}
            animate={{
               
             
              y: Math.random() * -600,
              x: Math.random() * -600,
              scale: [2, 3, 2, 3, 2]
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              loop: Infinity,
              repeatDelay: 2
            }}
            whileHover={{ scale: 35 }}
            whileTap={{ rotate: [0, 5, -5, 5, 0] }}
          >
          
            <span role="img" aria-label="poop">
              {emo}
            </span>
          
          </motion.div>
        );
    })

  return (
    <div className='background'>
      <motion.div 
     >
     {setEmoji}
     
     </motion.div>
     <motion.div 
     >
     {setEmoji2}
     
     </motion.div>
    <button onClick={play}>Loser</button>
    </div>
  )
}

export default Loser