import { useEffect, useState, useTransition } from 'react';
import './HookTransition.style.scss';

export default function HookTransition() {

    const [value, setValue] = useState(2);
    const [tab, setTab] = useState([1, 1, 2]);

    const [isPending, startTransition] = useTransition();

    const setTabTransition = () => {
        startTransition(() => {
            setTab(prev => {
                const newTab = [...prev];
                const length = newTab.length;
                newTab.push(newTab[length - 2] + newTab[length - 1]);
                return newTab;
            });
        });
    };

    useEffect(() => {
        if (value > 2)
            setTabTransition();
    }, [value])

    const handleClick = () => {
        setValue(prev => prev + 1);
    }

    return (
        <div className='hook-transition'>
            {
                isPending ?
                    <p className='wait'>Wait ... </p>
                    :
                    <div className='tab-container'>
                        {
                            tab.map((el, index) => {
                                return <span key={`[tab tran] id = ${index}`}>Element = {el}</span>
                            })
                        }
                    </div>
            }

            <div className='tab-container'>
                <span>Tab elements = {value}</span>
                <button onClick={handleClick}>Add new tab value</button>
            </div>
        </div>
    );
}