import '../components/WhiteCardSubmit.css'

const WhiteCardSubmit = ({ submitAnswer, id, selected }) => {
    
    const className = selected ? 'selected':'notSelected';


    return (
        <>
        <div className = 'card-submit'>
            <button className={className} onClick={submitAnswer} id={id}>Submit</button>
        </div>
        </>
    )
}


export default WhiteCardSubmit;