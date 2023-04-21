import React, {createContext,useContext, useEffect, useState} from "react";
import PropTypes from 'prop-types'
const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const [userData, setUserData] = useState({})

    const putUserData = async (useInfo) => {
        setUserData(useInfo)

        await localStorage.setItem('codeburger:userDate',JSON.stringify(useInfo))

    }

    const logout = async ()=>{
        await localStorage.removeItem('codeburger:userDate')
    }

    useEffect(()=>{

        const loadUserData = async()=>{
            const clientInfo = await localStorage.getItem('codeburger:userDate')
            
            if(clientInfo){
                
                setUserData(JSON.parse(clientInfo))
            }
            //console.log(JSON.parse(clientInfo))
        }
    
        loadUserData()
    
    },[])
    // const user = {name:"Rodolfo", age:"28"}
    // const outroUser = {name:'João', age:'25'}

    return(
        <UserContext.Provider value={{putUserData,userData,logout}}>{children}</UserContext.Provider>
        // <UserContext.Provider value={{user,outroUser}}>{children}</UserContext.Provider>

    )
}

export const useUser = () =>{
    const context = useContext(UserContext)

    if(!context){
        throw new Error("useUser must be used with UserContext")
    }

    return context
}

UserProvider.prototype = {
    children: PropTypes.node
}