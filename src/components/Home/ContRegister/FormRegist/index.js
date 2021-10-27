import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {UserInfo} from "../../../store/user/actions";
import {useInput} from "../../../hooks/useInput";

export const FormRegist = () => {
    const[value,setValue]=useState({
        username:'',
        email:'',
        name:'',
        second_name:'',
        password:'',
        phone_number:'',
        patronymic:''
    })
    const [valueUserName]=useInput('');
    const [valueEmail]=useInput('');
    const [valueName]=useInput('');
    const [valueSecondName]=useInput('');
    const [valuePassword]=useInput('');
    const [valuePhoneNumber]=useInput('');
    const [valuePatronymic]=useInput('');
    const dispatch = useDispatch();
    const setUser = useCallback(() => {
        dispatch(UserInfo(value))
    }, [dispatch,value]);
    const handleWriteUserInfo=(e)=>{

        setValue({
            username:valueUserName,
            email:valueEmail,
            name:valueName,
            second_name:valueSecondName,
            password:valuePassword,
            phone_number:valuePhoneNumber,
            patronymic:valuePatronymic})
    }

    useEffect(() => {
        setUser()
    },[value])
    return (
        <>
        <span className="inp">
            <input type='email' placeholder='Email' className=" inputp" {...valueEmail}
                   />
        </span>
            <span className="inp">
                <input type="text" placeholder="Phone number" className=" inputp" {...valuePhoneNumber}
                       />
            </span>
            <span className="inp">
                <input type="text" placeholder="Username" className=" inputp" required {...valueUserName}/>
                                           <span className="required_fail">This username exists</span>
            </span>
            <span className="inp">
                <input type="text" placeholder="Name" className=" inputp" required {...valueName}
                       />

            </span>
            <span className="inp">
                <input type="text" placeholder="Second Name" className=" inputp" required {...valueSecondName}
                       />

            </span>
            <span className="inp">
                <input type="text" placeholder="Patronymic" className=" inputp" required {...valuePatronymic}
                       />

            </span>
            <span className="inp">
                <input type="password" placeholder="Password" className=" inputp" {...valuePassword}
                       />
            </span>
            <span className="inp"><input type="password" placeholder="Re-Password"
                                         className=" inputp"/></span>
        <div className="reemb_pasw check_b">
            <input className="input_checkbox" type="checkbox" id="rad"/>
            <label htmlFor="rad">
                I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy
                Policy</a>
            </label>
        </div>
        <button  onClick={handleWriteUserInfo} className="subm_form">Регистрация</button>
        </>

    );
};

