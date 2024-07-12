import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeEmail } from '../redux/userSlice'

interface UserInterface {
    name: string,
    username: string,
    email: string
}

interface StateInterface {
    user: UserInterface
}


function Email() {
    const dispatch = useDispatch();
    const email = useSelector((state: StateInterface) => state.user.email);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeEmail(e.target.value))
    }

    return (
        <input type="email" placeholder='Email' value={email} onChange={handleChange} />
    )
}

export default Email