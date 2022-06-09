import { useEffect, useState } from 'react';
import './IntervalAndTimeout.style.scss';

export default function IntervalAndTimeout() {

    const [reset, setReset] = useState(false);
    const [stateInterval, setStateInterval] = useState(0);
    const [stateTimeout, setStateTimeout] = useState("");
    const [intervalId, setIntervalId] = useState<number>(-1);
    const [timeoutId, setTimeoutId] = useState<number>(-1);

    const handleStartInterval = () => {
        setIntervalId(window.setInterval(funInterval, 1000));
    }

    const handleStartTimeout = () => {
        setStateTimeout("");
        setTimeoutId(window.setTimeout(funTimeout, 5000));
    }

    const funInterval = () => {
        console.log("[IntervalAndTimeout] funInterval")
        setStateInterval(prev => prev + 1);
    }

    const funTimeout = () => {
        console.log("[IntervalAndTimeout] funTimeout")
        setStateTimeout("Return value from timeout!!!");
    }

    useEffect(() => {
        return () => {
            clearInterval(intervalId);
        }
    }, [intervalId])

    useEffect(() => {
        return () => {
            clearTimeout(timeoutId);
        }
    }, [timeoutId])

    useEffect(() => {
        setStateInterval(0);
        setStateTimeout("");
    }, [reset])

    return (
        <div className='interval-timeout'>
            <p>Open browser console, start timeout and interval and change page [no memory leak]</p>
            <p>Interval [every 1s will add 1 to nr]</p>
            <div>
                <span>Nr of interval:</span>
                <span>{stateInterval}</span>
                <button onClick={handleStartInterval}>Start interval</button>
                <button onClick={() => clearInterval(intervalId)}>Stop interval</button>
            </div>

            <p>Timeout [after 5s will render new timeout state]</p>
            <div>
                <span>Timeout state:</span>
                <span>{stateTimeout ? stateTimeout : "...click start"}</span>
                <button onClick={handleStartTimeout}>Start timeout</button>
                <button onClick={() => clearTimeout(timeoutId)}>Stop timeout</button>
            </div>

            <button onClick={() => setReset(prev => !prev)}>Reset</button>
        </div >
    )
}
