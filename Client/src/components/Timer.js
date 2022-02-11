import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = () => {

    let minuteSeconds = 30;

    const timerProps = {
        isPlaying: true,
        size: 140,
        strokeWidth: 6
    };

    const renderTime = (time) => {
        if (time > 0){
        return (
            <>
                <div>{time}</div>

            </>
        
        );
        }
        else if (time == 0){
            return (
                <div>🍆</div>
            )
        }
    };

    const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
    return (

        <>
            <CountdownCircleTimer
                {...timerProps}
                colors={["#A6D9F7", "#BCCCE0", "#FF0000"]}
                colorsTime={[30, 10, 0]}
                duration={minuteSeconds}
                initialRemainingTime={30}
                onComplete={(totalElapsedTime) => [30 - totalElapsedTime > 0, false]}
            >
                {({ elapsedTime }) =>
                    renderTime(getTimeSeconds(elapsedTime))
                }
            </CountdownCircleTimer>

        </>
    )

}
export default Timer;
