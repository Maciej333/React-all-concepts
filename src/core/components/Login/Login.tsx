import './Login.style.scss';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { User } from '../../models/User';
import { login } from '../../store/user/user.actions';
import { UserRoles } from '../../utils/userRoles.enum';
import { useLocation, useNavigate } from 'react-router-dom';
import { ProtectedRouteLocationState } from '../../routes/ProtectedRoute';
import { validate } from './login.validate';
import { useAppSelector, useAppThunkDispatch } from '../../hooks/store.hooks';

export default function Login() {

    const location = useLocation();
    const navigate = useNavigate();
    
    const { userData, isLogin, error } = useAppSelector(state => state.user)
    const dispatch = useAppThunkDispatch();

    useEffect(() => {
        if (isLogin) {
            const locationState = location.state as ProtectedRouteLocationState;
            if (locationState) {
                let isRole = false;
                userData.role.forEach(role => {
                    if (locationState.role.includes(Number(role)))
                        isRole = true;
                })
                if (isRole)
                    navigate(`${locationState.from}`);
            }
        }
    }, [userData, isLogin, location, navigate])

    const [stateLogin, setStateLogin] = useState({
        firstname: "",
        lastname: "",
        role: "-1",
        success: true
    })

    const [stateLoginError, setStateLoginError] = useState({
        firstname: "",
        lastname: "",
        role: "",
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setStateLogin(prev => {
            return {
                ...prev,
                [name]: value
            }
        });
        setStateLoginError(prev => {
            return {
                ...prev,
                [name]: ""
            }
        });
    }

    const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target;
        setStateLogin(prev => {
            return {
                ...prev,
                success: checked
            }
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate(stateLogin, setStateLoginError)) {
            const { firstname, lastname, role, success } = stateLogin;
            const user: User = {
                id: 1,
                firstName: firstname,
                lastName: lastname,
                role: [Number(role)]
            }
            dispatch(login({ data: user, isSuccess: success }));
        }
    }

    return (
        <>
            {
                isLogin ?
                    <div className='login-msg'>U are currently logged</div>
                    :
                    <form className='login-form' onSubmit={handleSubmit}>
                        <p className='form-error'>{error ? error : null}</p>

                        <label htmlFor="firstname">Firstname:<span className='required'>*</span></label>
                        <input id="firstname" name="firstname" value={stateLogin.firstname} onChange={handleChange}></input>
                        <span className='error'>{stateLoginError.firstname}</span>

                        <label htmlFor="lastname">Lastname:<span className='required'>*</span></label>
                        <input id="lastname" name="lastname" value={stateLogin.lastname} onChange={handleChange}></input>
                        <span className='error'>{stateLoginError.lastname}</span>

                        <label htmlFor="role">Role:<span className='required'>*</span></label>
                        <select id="role" name="role" value={stateLogin.role} onChange={handleChange}>
                            <option value={"-1"}>{""}</option>
                            {
                                Object.keys(UserRoles)
                                    .filter(el => {
                                        if (el.match(/\d+/)) {
                                            return false;
                                        }
                                        return true;
                                    })
                                    .map((el, index) => {
                                        return <option key={`[role option] = ${el}`} value={index}>{el}</option>
                                    })
                            }
                        </select>
                        <span className='error'>{stateLoginError.role}</span>

                        <label htmlFor="success">Success:<span className='required'>*</span></label>
                        <input id="success" name="success" type="checkbox" checked={stateLogin.success} onChange={handleChecked}></input>

                        <button type="submit">Submit</button>
                    </form>
            }
        </>
    )
}
