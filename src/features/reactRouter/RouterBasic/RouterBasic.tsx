import React from 'react'
import Location from './Location/Location'
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
        </>
    )
}
