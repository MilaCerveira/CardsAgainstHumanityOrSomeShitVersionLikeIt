import { motion} from "framer-motion";
import ALLIDOISWIN  from '../assets/ALLIDOISWIN.mp3';
import './Winner.css';
const Winner = () => {
    
  const play = () => {
    const winning = new Audio(ALLIDOISWIN);
    winning.play();    
};
    const winEmoArray = [];
    for (let i = 0; i <= 100 ; i++) {
      winEmoArray.push( '💰')
      winEmoArray.push('🤑')
      winEmoArray.push('💸')
      winEmoArray.push ('🥇')
      winEmoArray.push('👑')
      
    }

    const winEmoArray2 = [];
    for (let i = 0; i <= 100 ; i++) {
        winEmoArray2.push( '💰')
        winEmoArray2.push('🤑')
        winEmoArray2.push('💸')
        winEmoArray2.push ('🥇')
        winEmoArray2.push('👑')
        
    }
   const setWinEmoji = winEmoArray.map((emo, index) => {
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

    const setWinEmoji2 = winEmoArray2.map((emo, index) => {
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
    <div className='winner__background'>
      <motion.div 
     >
     {setWinEmoji}
     
     </motion.div>
     <motion.div 
     >
     {setWinEmoji2}
     
     </motion.div>
     <h1 class="neonMonster" onClick={play}>Winner</h1>
    </div>
  )
}

export default Winner;