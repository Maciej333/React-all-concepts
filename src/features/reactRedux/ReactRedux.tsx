import BasicRedux from './BasicRedux/BasicRedux';
import './ReactRedux.style.scss';
import ToolkitRedux from './ToolkitRedux/ToolkitRedux';
import ToolkitSliceRedux from './ToolkitSliceRedux/ToolkitSliceRedux';

export default function ReactRedux() {
    return (
        <div className='react-redux'>
            <h1>React Redux</h1>
            <div className='minor'>
                <h2>Basic redux</h2>
                <BasicRedux />
            </div>

            <div className='minor'>
                <h2>Toolkit redux</h2>
                <ToolkitRedux />
            </div>

            <div className='minor'>
                <h2>Toolkit slice redux</h2>
                <ToolkitSliceRedux />
            </div>
        </div>
    )
}
