import React from "react"

//create the context
const UserContext = React.createContext()
//create a provider component 
function UserProvider({children}) {
    //the value of the prop will be the context data
    //the value will be available to the child components of this provider
    return <UserContext.Provider value={null}>{children}</UserContext.Provider>
}
export {UserContext, UserProvider}