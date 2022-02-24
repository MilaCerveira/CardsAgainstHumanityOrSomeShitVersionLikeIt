import './PopUp.css'

const PopUp = ({text}) => {
    return (
        <>
            <div className={'popUp'}>
                <div className={'popUp-Content'}>
                    <h2>{text}</h2>
                </div>
            </div>
        </>
    )
}

export default PopUp;