import oddjob from '../assets/oddjob.png';
import n64 from '../assets/n64.png';
import './PageNotFound.css';

const PageNotFound = () => {

    return(
        <>
            <h2 className={'error'}>404 Error</h2>

            <img className={'odd__job'} src={oddjob} alt='oddjob' />
            <img className={'boris'}  src={n64} alt='Boris' />
        </>
    )
}


export default PageNotFound;