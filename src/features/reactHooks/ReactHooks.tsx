import Context from '../reactAdvance/Context/Context';
import Lifecycle from '../reactBasic/Lifecycle/Lifecycle';
import HookCallback from './HookCallback/HookCallback';
import HookMemo from './HookMemo/HookMemo';
import HookReducer from './HookReducer/HookReducer';
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

            <div className='minor'>
                <h2>useReducer</h2>
                <HookReducer />
            </div>

            <div className='minor'>
                <h2>useCallback</h2>
                <HookCallback />
            </div>

            <div className='minor'>
                <h2>useMemo</h2>
                <HookMemo />
            </div>
        </div>
    )
}
