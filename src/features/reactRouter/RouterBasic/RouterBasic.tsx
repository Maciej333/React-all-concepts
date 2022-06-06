import Location from './Location/Location'
import Navigation from './Navigation/Navigation'
import Paths from './Paths/Paths'

export default function RouterBasic() {
    return (
        <>
            <div className='minor'>
                <h2>Paths</h2>
                <Paths />
            </div>

            <div className='minor'>
                <h2>useLocation</h2>
                <Location />
            </div>

            <div className='minor'>
                <h2>useNavigate</h2>
                <Navigation />
            </div>
        </>
    )
}
