import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const IsAuth = ({children}) => {
    const location = useLocation()
    const user = useSelector(state => state.user)



    if(!user) {
        return <Navigate to='/' state={{from: location}}/>
    }
    return children
};

export default IsAuth;
