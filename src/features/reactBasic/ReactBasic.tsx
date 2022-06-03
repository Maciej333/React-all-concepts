import Composition from './Composition/Composition';
import ConditionalRendering from './ConditionalRendering/ConditionalRendering';
import Forms from './Forms/Forms';
import HandleEvents from './HandleEvents/HandleEvents';
import Lifecycle from './Lifecycle/Lifecycle';
import ListsObjects from './ListsObjects/ListsObjects';
import './ReactBasic.style.scss';
import StateAndProp from './StateAndProp/StateAndProp';

export default function ReactBasic() {
    return (
        <div className='react-basic'>
            <h1>React Basic</h1>
            <div className='minor'>
                <h2>state and props</h2>
                <StateAndProp propString='Value for prop string'>
                    <span>Children Paragraph</span>
                    <div>
                        <span>div paragraph <span>ABC</span></span>
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
            <div className='minor'>
                <h2>Forms</h2>
                <Forms />
            </div>
            <div className='minor'>
                <h2>Lists, Objects</h2>
                <ListsObjects />
            </div>
            <div className='minor'>
                <h2>Conditional rendering</h2>
                <ConditionalRendering />
            </div>
            <div className='minor'>
                <h2>Composition</h2>
                <Composition />
            </div>
        </div>
    )
}
