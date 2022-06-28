import CompMultiSelect from './CompMultiSelect/CompMultiSelect';
import './ReactComponents.style.scss';
import ScalableMenu from './ScalableMenu/ScalableMenu';

export default function ReactComponents() {
    return (
        <div className='react-components'>
            <h1>Components</h1>

            <div className='minor'>
                <h2>Multi select</h2>
                <CompMultiSelect />
            </div>

            <div className='minor'>
                <h2>Scalable menu</h2>
                <ScalableMenu />
            </div>
        </div>
    )
}
