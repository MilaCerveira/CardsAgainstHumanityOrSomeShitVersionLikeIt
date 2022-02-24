const PopUp = ({text}) => {
    return (
        <>
            <div className={'popUp'}>
                <p className={'popUp-Content'}>
                    <h1>{text}</h1>
                </p>
            </div>
        </>
    )
}

export default PopUp;