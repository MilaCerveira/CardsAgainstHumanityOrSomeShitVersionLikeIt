import { useEffect, useState } from "react";
import lovetrash  from '../assets/lovetrash.mp3';
import './Loser.css';
import { motion} from "framer-motion";
const Loser = () => {
  const [playMusic, setPlayMusic] = useState(true);
    
  const play = () => {
    const trash = new Audio(lovetrash);
    trash.play(); 
    }
      

// const handlePlay = () => {
//   playMusic ? play() : setPlayMusic(false)
// }


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
   const setEmoji = emoArray.map((emo, index) => {
        return (
            <motion.div key={index}
            initial={{ y: Math.random() *800 , x: Math.random() *800 }}
            animate={{
               
             
              y: Math.random() * 600,
              x: Math.random() * 600,
              scale: [2, 3, 2, 3, 2]
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
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

    const setEmoji2 = emoArray2.map((emo, index) => {
        return (
            <motion.div key={index}
            initial={{ y: Math.random() * -800 , x: Math.random() * -800 }}
            animate={{
               
             
              y: Math.random() * -600,
              x: Math.random() * -600,
              scale: [2, 3, 2, 3, 2]
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 2
            }}
            whileHover={{ scale: 5 }}
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
    <h1 className="neonLoser"onClick={play}>Loser</h1>
    </div>
  )
}

export default Loser;