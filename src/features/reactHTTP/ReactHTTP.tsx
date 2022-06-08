import HTTPAxios from './HTTPAxios/HTTPAxios';
import HTTPFetch from './HTTPFetch/HTTPFetch';
import './ReactHTTP.style.scss';

export default function ReactHTTP() {
    return (
        <div className='react-HTTP'>
            <h1>React HTTP</h1>

            <div className='minor'>
                <h2>Fetch</h2>
                <HTTPFetch />
            </div>

            <div className='minor'>
                <h2>axios</h2>
                <HTTPAxios />
            </div>


            <div className='minor'>
                <h2>useFetch hook</h2>

            </div>

            <div className='minor'>
                <h2>API service</h2>

            </div>
        </div>
    )
}
