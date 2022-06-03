import { ChangeEvent, FormEvent, useState } from 'react';
import './ValidationSubmit.style.scss';
import { numberMinMax, required, sameStrings, stringLength } from '../../../../core/utils/validatorFunctions';

export default function ValidationSubmit() {

  const [showState, setShowState] = useState(false);
  const [formState, setFormState] = useState({
    firstName: "",
    age: 0,
    password: "",
    repeatPassword: ""
  });
  const [formStateError, setFormStateError] = useState({
    firstName: "",
    age: "",
    password: "",
    repeatPassword: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => {
      return {
        ...prev,
        [name]: value,
      }
    });
    setFormStateError(prev => {
      return {
        ...prev,
        [name]: "",
      }
    })
  }

  const setError = (name: string, value: string) => {
    setFormStateError(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const validate = (): boolean => {
    const { firstName, age, password, repeatPassword } = formState;
    let result = true;

    let error = ""
    if ((error = stringLength("Length >= 3 & <= 30", 3, 30)(firstName))) {
      setError('firstName', error);
      result = false;
    }
    if ((error = required("firstName is required")(firstName))) {
      setError('firstName', error);
      result = false;
    }

    if ((error = numberMinMax("age must be >= 18 & <= 100", 18, 100)(age))) {
      setError('age', error);
      result = false;
    }

    if ((error = stringLength("Length >= 5 & <= 30", 5, 30)(password))) {
      setError('password', error);
      result = false;
    }
    if ((error = required("password is required")(password))) {
      setError('password', error);
      result = false;
    }

    if ((error = sameStrings("passwords don't match")({ first: password, second: repeatPassword }))) {
      setError('repeatPassword', error);
      result = false;
    }

    return result;
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate())
      setShowState(true);
  }

  return (
    <div className='validation-submit'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstName'>Firstname</label>
        <input id="firstName" name="firstName" type="text" value={formState.firstName} onChange={handleChange}></input>
        <span className='error'>{formStateError.firstName ? formStateError.firstName : ""}</span>

        <label htmlFor='age'>Age</label>
        <input id="age" name="age" type="number" value={formState.age} onChange={handleChange}></input>
        <span className='error'>{formStateError.age ? formStateError.age : ""}</span>

        <label htmlFor='password'>Password</label>
        <input id="password" name="password" type="password" value={formState.password} onChange={handleChange}></input>
        <span className='error'>{formStateError.password ? formStateError.password : ""}</span>

        <label htmlFor='repeatPassword'>Reapet password</label>
        <input id="repeatPassword" name="repeatPassword" type="password" value={formState.repeatPassword} onChange={handleChange}></input>
        <span className='error'>{formStateError.repeatPassword ? formStateError.repeatPassword : ""}</span>

        <button type='submit'>Submit</button>
      </form>
      <div>
        {
          showState ?
            <div className='form-state'>
              <span>FirstName</span>
              <span>{formState.firstName}</span>

              <span>Age</span>
              <span>{formState.age}</span>

              <span>Password</span>
              <span>{formState.password}</span>

              <span>Repeat password</span>
              <span>{formState.repeatPassword}</span>
            </div>
            :
            <span>Submit to show state or inputs error</span>
        }
      </div>
    </div>
  )
}
