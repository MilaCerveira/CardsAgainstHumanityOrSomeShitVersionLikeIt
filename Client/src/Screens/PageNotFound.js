import oddjob from '../assets/oddjob.jpeg';
import n64 from '../assets/n64.png';

const PageNotFound = () => {

    return(
        <>
            <h2>404 Error</h2>

            <img src={oddjob} alt='oddjob' />
            <img  src={n64} alt='Boris' />
        </>
    )
}


export default PageNotFound;