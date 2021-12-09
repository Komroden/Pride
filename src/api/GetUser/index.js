import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {UserData} from "../../store/userInfo/actions";

export const GetUser = () => {
    const { auth } = useSelector((state) => state);
    const[value,setValue]=useState({})
    const dispatch = useDispatch();
    const setUserData = useCallback(() => {
        dispatch(UserData(value))
    }, [dispatch,value]);
    useEffect(() => {
        setUserData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[value])


    useEffect(() => {
        if(!auth.token) {
            setValue({
                Name:''
            })
            return
        }

            fetch(`http://127.0.0.1:8000/api/auth/show-data`,{
                method:'GET',
                headers:{'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization':`Bearer ${auth.token}`}
            })
                .then((res) => {
                    if (res.status >= 200 && res.status < 300) {
                        return res.json();
                    } else {
                        let error = new Error(res.statusText);
                        error.response = res;
                        throw error
                    }

                })
                .then((body)=>{
                    setValue(body)
                })
                .catch((e) => {
                    setValue({})
                    console.log(e.message);

                });


    },[auth.token])


    return null
};

