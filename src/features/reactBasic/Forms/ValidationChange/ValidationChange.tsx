import './ValidationChange.style.scss';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { numberMinMax, required, sameStrings, stringLength } from '../../../../core/utils/validatorFunctions';

export default function ValidationChange() {

  const [showState, setShowState] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [formState, setFormState] = useState({
    firstName: {
      value: '',
      touched: false,
      error: ''
    },
    age: {
      value: 0,
      touched: false,
      error: ''
    },
    password: {
      value: '',
      touched: false,
      error: ''
    },
    repeatPassword: {
      value: '',
      touched: false,
      error: ''
    },
  });
  const [formStateValidators] = useState({
    firstName: [
      stringLength("Length >= 3 & <= 30", 3, 30),
      required("firstName is required"),
    ],
    age: [
      numberMinMax("age must be >= 18 & <= 100", 18, 100)
    ],
    password: [
      stringLength("Length >= 5 & <= 30", 5, 30),
      required("password is required")
    ],
    repeatPassword: [
      sameStrings("passwords don't match")
    ],
  })

  useEffect(() => {
    if (formState.firstName.touched && formState.age.touched && formState.password.touched && formState.repeatPassword.touched)
      if (formState.firstName.error || formState.age.error || formState.password.error || formState.repeatPassword.error) {
        setValidForm(false);
      } else {
        setValidForm(true);
      }
  }, [formState])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let nameError = "";
    let validateValue: any;
    if (name === 'repeatPassword') {
      validateValue = {
        first: formState.password.value,
        second: value
      }
    } else {
      validateValue = value;
    }
    formStateValidators[(name as keyof typeof formStateValidators)].forEach((element) => {
      const result = element(validateValue);
      if (result) {
        nameError = result;
      }
    });
    setFormState(prev => {
      return {
        ...prev,
        [name]: {
          value: value,
          touched: true,
          error: nameError
        }
      }
    });
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validForm) {
      setShowState(true);
    }
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstName'>Firstname</label>
        <input id="firstName" name="firstName" type="text" value={formState.firstName.value} onChange={handleChange}></input>
        <span className='error'>{formState.firstName.touched && formState.firstName.error ? formState.firstName.error : ""}</span>

        <label htmlFor='age'>Age</label>
        <input id="age" name="age" type="number" value={formState.age.value} onChange={handleChange}></input>
        <span className='error'>{formState.age.touched && formState.age.error ? formState.age.error : ""}</span>

        <label htmlFor='password'>Password</label>
        <input id="password" name="password" type="password" value={formState.password.value} onChange={handleChange}></input>
        <span className='error'>{formState.password.touched && formState.password.error ? formState.password.error : ""}</span>

        <label htmlFor='repeatPassword'>Reapet password</label>
        <input id="repeatPassword" name="repeatPassword" type="password" value={formState.repeatPassword.value} onChange={handleChange}></input>
        <span className='error'>{formState.repeatPassword.touched && formState.repeatPassword.error ? formState.repeatPassword.error : ""}</span>

        <button type='submit' disabled={!validForm}>Submit</button>
      </form>
      <div>
        {
          showState ?
            <div className='form-state'>
              <span>FirstName</span>
              <span>{formState.firstName.value}</span>

              <span>Age</span>
              <span>{formState.age.value}</span>

              <span>Password</span>
              <span>{formState.password.value}</span>

              <span>Repeat password</span>
              <span>{formState.repeatPassword.value}</span>
            </div>
            :
            <span>Fill form and submit to show data</span>
        }
      </div>
    </div>
  )
}
