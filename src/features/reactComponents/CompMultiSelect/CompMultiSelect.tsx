import { useState } from 'react';
import './CompMultiSelect.style.scss';
import MultiSelect, { changeTypeForMultiSelect, IMultiSelect } from './MultiSelect/MultiSelect';

export default function CompMultiSelect() {

    const [allData] = useState<IMultiSelect[]>([
        {
            id: 1,
            value: "Aldona",
            toString: () => { return "Aldona"; }
        },
        {
            id: 2,
            value: "Jagoda",
            toString: () => { return "Jagoda"; }
        },
        {
            id: 3,
            value: "Michael",
            toString: () => { return "Michael"; }
        },
        {
            id: 4,
            value: "Michał",
            toString: () => { return "Michał"; }
        }
    ]);
    const [selectedData, setSelectedData] = useState<number[]>([]);

    const [allDataFun] = useState<{ city: string, street: string }[]>([
        {
            city: "Warsaw",
            street: "Góralska"
        },
        {
            city: "Łódź",
            street: "Fabryczna"
        },
        {
            city: "Gdańsk",
            street: "Długa"
        },
        {
            city: "Kraków",
            street: "Kolejowa"
        },
    ]);
    const [selectedDataFun, setSelectedDataFun] = useState<number[]>([]);

    const handleSelect = (toSelect: number[]) => {
        setSelectedData(toSelect);
    }

    const handleSelectFun = (toSelect: number[]) => {
        setSelectedDataFun(toSelect);
    }

    return (
        <>
            <p className='comp-p'>Multi select without mapping fun</p>
            <div className='comp-multi-select'>
                <span>Selected in parent by id:</span>
                <div>[{
                    selectedData.map(data => {
                        return <span key={`[selected] = ${data}`}>{data}, </span>
                    })
                }]</div>
                <span className='grid-top'>Pls select:</span>
                <MultiSelect all={allData} selected={selectedData} select={handleSelect} />
            </div>

            <p className='comp-p'>Multi select with mapping fun</p>
            <div className='comp-multi-select'>
                <span>Selected in parent by id:</span>
                <div>[{
                    selectedDataFun.map(data => {
                        return <span key={`[selected] = ${data}`}>{data}, </span>
                    })
                }]</div>
                <span className='grid-top'>Pls select:</span>
                <MultiSelect
                    all={changeTypeForMultiSelect(allDataFun, (el) => `[${el.city}] ${el.street}`)}
                    selected={selectedDataFun}
                    select={handleSelectFun}
                />
            </div>

        </>
    )
}
