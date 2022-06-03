import { ChangeEvent, FormEvent, Fragment, MouseEvent, useState } from 'react';
import './FormFields.style.scss';

export default function FormFields() {

    const [showFormData, setShowFormData] = useState(false);
    const [stateForm, setStateForm] = useState({
        valString: '',
        valTextArea: '',
        valNumber: '',
        valDate: '',
        valTime: '',
        valTab: [""],
        valSelect: '',
        valCheckbox: false,
        valRadio: '',
        valImage: '',
        valFile: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setStateForm(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleTabElChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setStateForm(prev => {
            const newTab = [...prev.valTab]
            newTab[Number(name)] = value;
            return {
                ...prev,
                valTab: newTab
            }
        })
    }

    const addTabEl = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setStateForm(prev => {
            return {
                ...prev,
                valTab: [...prev.valTab, ""]
            }
        })
    }

    const deleteTabEl = (e: MouseEvent<HTMLButtonElement>, index: number) => {
        e.preventDefault();
        setStateForm(prev => {
            const newTab = prev.valTab.filter(
                (el, id) => {
                    if (id === index) {
                        return false;
                    }
                    return true;
                }
            )
            return {
                ...prev,
                valTab: newTab
            }
        })
    }

    const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setStateForm((prev) => {
            return {
                ...prev,
                [name]: checked,
            };
        });
    };

    const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
        if (event?.target?.files) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const content = reader.result;
                setStateForm(prev => {
                    return {
                        ...prev,
                        valFile: content as string
                    }
                });
            }
            reader.readAsText(event.target.files[0], 'UTF-8');
        }
    }

    const handleImage = (event: ChangeEvent<HTMLInputElement>) => {
        if (event?.target?.files) {
            const file = event.target.files[0];
            setStateForm(prev => {
                return {
                    ...prev,
                    valImage: URL.createObjectURL(file)
                }
            })
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setShowFormData(true);
        //...
    }

    return (
        <div className='form-fields'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='valString'>String</label>
                <input id="valString" name="valString" type="text" value={stateForm.valString} onChange={handleChange}></input>

                <label htmlFor="valTextArea">Textarea</label>
                <textarea name="valTextArea" id="valTextArea" value={stateForm.valTextArea} onChange={handleChange}></textarea>

                <label htmlFor="valNumber">Number</label>
                <input id="valNumber" name="valNumber" type="number" value={stateForm.valNumber} onChange={handleChange}></input>

                <label htmlFor="valDate">Date</label>
                <input id="valDate" name="valDate" type="date" value={stateForm.valDate} onChange={handleChange}></input>

                <label htmlFor="valTime">Time</label>
                <input id="valTime" name="valTime" type="time" value={stateForm.valTime} onChange={handleChange}></input>

                <span>Tab</span>
                <div>
                    {
                        stateForm.valTab.map((element, index) => {
                            return <div key={`[form tab element][${index}]`}>
                                <input

                                    id={`${index}`}
                                    name={`${index}`}
                                    value={element}
                                    onChange={handleTabElChange}
                                ></input>
                                <button onClick={(e) => { deleteTabEl(e, index) }}>X</button>
                            </div>
                        })
                    }
                    <button onClick={addTabEl}>Add</button>
                </div>

                <label htmlFor="valSelect">Select</label>
                <select id="valSelect" name="valSelect" value={stateForm.valSelect} onChange={handleChange}>
                    <option value=""></option>
                    <option value="option1">option1</option>
                    <option value="option2">option2</option>
                </select>

                <label htmlFor="valCheckbox">Checkbox</label>
                <input id="valCheckbox" name="valCheckbox" type="checkbox" checked={stateForm.valCheckbox} onChange={handleChecked}></input>

                <label htmlFor="valRadio">Radio</label>
                <div>
                    Radio1: <input
                        name="valRadio" id="radio1" type="radio" value="radio1" checked={stateForm.valRadio === 'radio1'}
                        onChange={handleChange}
                    ></input>
                    Radio2: <input
                        name="valRadio" id="radio2" type="radio" value="radio2" checked={stateForm.valRadio === 'radio2'}
                        onChange={handleChange}
                    ></input>
                </div>

                <label htmlFor="valFile">File text</label>
                <input id="valFile" name="valFile" type="file" onChange={handleFile}></input>

                <label htmlFor="valImage">Image</label>
                <input id="valImage" name="valImage" type="file" accept="image/*" onChange={handleImage}></input>

                <button type="submit">Submit</button>
            </form>
            <div className='values-container'>
                {
                    showFormData ?
                        <Fragment>
                            <span>String = </span>
                            <span>{stateForm.valString}</span>

                            <span>Textarea = </span>
                            <span>{stateForm.valTextArea}</span>

                            <span>Number = </span>
                            <span>{stateForm.valNumber}</span>

                            <span>Date = </span>
                            <span>{stateForm.valDate}</span>

                            <span>Time = </span>
                            <span>{stateForm.valTime}</span>

                            <span>Tab = </span>
                            <span>{stateForm.valTab.map((el, id) => {
                                return <span key={`[span el][${id}]`}>{el} | </span>
                            })}</span>

                            <span>Select = </span>
                            <span>{stateForm.valSelect}</span>

                            <span>Checkbox = </span>
                            <span>{stateForm.valCheckbox ? "true" : "false"}</span>

                            <span>Radio = </span>
                            <span>{stateForm.valRadio}</span>

                            <span>File = </span>
                            <span>{stateForm.valFile}</span>

                            <span>Image = </span>
                            <img src={stateForm.valImage} alt="formImage"></img>
                        </Fragment>
                        :
                        <span>Submit the form to show data</span>
                }
            </div>
        </div>
    )
}
