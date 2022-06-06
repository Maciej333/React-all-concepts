import Context from '../reactAdvance/Context/Context';
import Lifecycle from '../reactBasic/Lifecycle/Lifecycle';
import HookState from './HookState/HookState';
import './ReactHooks.style.scss';

export default function ReactHooks() {
    return (
        <div className='react-hooks'>
            <h1>React hooks</h1>
            <div className='minor'>
                <h2>useState</h2>
                <HookState />
            </div>

            <div className='minor'>
                <h2>useEffect</h2>
                <Lifecycle />
            </div>

            <div className='minor'>
                <h2>useContext</h2>
                <Context />
            </div>
        </div>
    )
}
