import CodeSplit from './CodeSplit/CodeSplit';
import Context from './Context/Context';
import Fragment from './Fragment/Fragment';
import HigherOrder from './HigherOrder/HigherOrder';
import MemoElement from './MemoElement/MemoElement';
import './ReactAdvance.style.scss';
import Reference from './Reference/Reference';

export default function ReactAdvance() {
    return (
        <div className='react-advance'>
            <h1>React Advance</h1>
            <div className='minor'>
                <h2>Code spliting [ Lazy ]</h2>
                <CodeSplit />
            </div>

            <div className='minor'>
                <h2>Context</h2>
                <Context />
            </div>

            <div className='minor'>
                <h2>Fragment</h2>
                <Fragment />
            </div>

            <div className='minor'>
                <h2>Reference</h2>
                <Reference />
            </div>

            <div className='minor'>
                <h2>Higher order components</h2>
                <HigherOrder />
            </div>

            <div className='minor'>
                <h2>Memo</h2>
                <MemoElement />
            </div>

            <div className='minor'>
                <h2>Other Hooks</h2>

            </div>

            <div className='minor'>
                <h2>Fetch | axios [ require backend ]</h2>

            </div>
        </div>
    )
}
