import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {UserInfo} from "../../../store/user/actions";

export const InputItem = ({type,placeholder}) => {
    const [value,setValue]=useState('');
    const dispatch = useDispatch();
    const setTokens = useCallback(() => {
        dispatch(UserInfo({}))
    }, [dispatch,value]);

    useEffect(() => {
        setTokens()
    },[value])
    return (
        <span className="inp">
            <input type={type} placeholder={[placeholder]} className=" inputp" value={value}
                   onChange={event => setValue(event.target.value)}/>
        </span>
    );
};

