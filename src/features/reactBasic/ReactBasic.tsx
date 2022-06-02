import HandleEvents from './HandleEvents/HandleEvents';
import Lifecycle from './Lifecycle/Lifecycle';
import './ReactBasic.style.scss';
import StateAndProp from './StateAndProp/StateAndProp';

export default function ReactBasic() {
    return (
        <div className='react-basic'>
            <h1>React Basic</h1>
            <div className='minor'>
                <h2>state and props</h2>
                <StateAndProp propString='Value for prop string'>
                    <p>Children Paragraph</p>
                    <div>
                        <p>div paragraph <span>ABC</span></p>
                    </div>
                </StateAndProp>
            </div>
            <div className='minor'>
                <h2>lifecycle</h2>
                <Lifecycle />
            </div>
            <div className='minor'>
                <h2>Events</h2>
                <HandleEvents />
            </div>
        </div>
    )
}
