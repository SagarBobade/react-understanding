import { useState } from "react"

type User = {
    name: String,
    email: String
}

export const User = () => {

    const [user, setUser] = useState<User | null>(null)
    const handleLogin = () => {
        setUser({
            name: 'sagar',
            email: 'sagar@gmail.com'
        })
    }
    const handleLoggedOut = () => {
        setUser(null)
    }
    return (
        <div> 
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLoggedOut}>Logout</button>
            <p>Name is {user?.name}</p> 
            <p>Email is {user?.email}</p>
        </div>
    )
}