
import lovetrash  from '../assets/lovetrash.mp3';

const Loser = () => {
    const play = () => {
        const trash = new Audio(lovetrash);
        lovetrash.play();
        
    };
  return (
    <>
    <h1 onMouseEnter={play}>Loser</h1>
    </>
  )
}

export default Loser