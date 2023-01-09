import React, {createContext, useState} from 'react'

export const UserContext = createContext({})

export const UserContextProvider = (props) => {
    const [user, setUser] = useState({})


    const hasPermissions = (permissionInst)=> {
        let res = user?.permissions?.includes(permissionInst);
        return res
    }

    
    
    const value = {user, setUser, hasPermissions}
    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}

