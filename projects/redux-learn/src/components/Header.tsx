import React from 'react'
import { useSelector } from 'react-redux'

interface UserInterface {
    name: string,
    username: string,
    email: string
}

interface StateInterface {
    user: UserInterface
}

function header() {
    const user = useSelector((state: StateInterface) => state.user);
    return (
        <header>
            <h1>Redux Toolkit</h1>
            <ul>
                <li>
                    Name: {user.name}
                </li>
                <li>
                    Email: {user.email}
                </li>
                <li>
                    username: {user.username}
                </li>
            </ul>
        </header>
    )
}

export default header