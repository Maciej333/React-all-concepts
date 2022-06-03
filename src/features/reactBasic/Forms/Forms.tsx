import FormFields from './FormFields/FormFields';
import './Forms.style.scss';
import ValidationChange from './ValidationChange/ValidationChange';
import ValidationSubmit from './ValidationSubmit/ValidationSubmit';

export default function Forms() {
    return (
        <div className='forms'>
            <p>All form fields (inputs, select, etc..)</p>
            <FormFields />
            <p>Validation onChange</p>
            <ValidationChange />
            <p>Validation onSubmit</p>
            <ValidationSubmit />
        </div>
    )
}
