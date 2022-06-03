import { useState } from 'react';
import './ListsObjects.style.scss';

export default function ListsObjects() {

    const [stateTab] = useState([
        "Element 1",
        "Element 2",
        "Element 3",
        "Elemenet 99"
    ])

    const [stateObject] = useState({
        first: "ABC",
        second: 99,
        third: true,
        fourth: ["el 1 ", "el 2 ", "el 3 "]
    })

    return (
        <div className='lists-objects'>
            <p>Render tab</p>
            <div className="container">
                {
                    stateTab.map((element) => {
                        return <span key={element}>{element}</span>
                    })
                }
            </div>
            <p>Filter tab</p>
            <div className="container">
                {
                    stateTab
                        .filter((element, index) => {
                            if (index === 0) {
                                return false;
                            }
                            return true;
                        })
                        .map((element, index) => {
                            return <span key={index}>{element}</span>
                        })
                }
            </div>
            <p>map tab</p>
            <div className="container">
                {
                    stateTab
                        .map((element) => {
                            return element + " | a new from map"
                        })
                        .map((element, index) => {
                            return <span key={`[MAP] = ${index}`}>{element}</span>
                        })
                }
            </div>
            <p>Render object</p>
            <div className="container">
                {
                    Object.entries(stateObject).map((element, index) => {
                        return <span key={`[Object] = ${index}`}>{element[0]} | {element[1]}</span>
                    })
                }
            </div>
        </div>
    )
}
