import CodeSplit from './CodeSplit/CodeSplit';
import Context from './Context/Context';
import './ReactAdvance.style.scss';

export default function ReactAdvance() {
    return (
        <div className='react-advance'>
            <h1>React Advance</h1>
            <div className='minor'>
                <h2>Code spliting</h2>
                <CodeSplit />
            </div>

            <div className='minor'>
                <h2>Context</h2>
                <Context />
            </div>

            <div className='minor'>
                <h2>Fragment</h2>

            </div>

            <div className='minor'>
                <h2>Higher order components</h2>

            </div>

            <div className='minor'>
                <h2>Lazy</h2>

            </div>

            <div className='minor'>
                <h2>Reference</h2>

            </div>

            <div className='minor'>
                <h2>Memo</h2>

            </div>

            <div className='minor'>
                <h2>Fetch | axios [ require backend ]</h2>

            </div>
        </div>
    )
}
