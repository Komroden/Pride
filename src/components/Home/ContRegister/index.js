import React, {useCallback, useState,useEffect} from 'react';
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {UserRegistration} from "../../store/auth/actions";
import {FormRegist} from "../Home/FormRegist";


export const ContRegister = () => {
    const { userInfo } = useSelector((state) => state);
    const[token,setToken]=useState(null);
    const dispatch = useDispatch();
    const setTokens = useCallback(() => {
        dispatch(UserRegistration(token))
    }, [dispatch,token]);

    useEffect(() => {
        setTokens()
        },[token])

const handlePost=(e)=> {
        let cleanup = false
e.preventDefault()
    const payload= {
        email:userInfo.value.email,
        id_of_invited:'1',
        name:userInfo.value.name,
        password:userInfo.value.password,
        phone_number:userInfo.value.phone_number,
        patronymic:userInfo.value.patronymic,
        second_name:userInfo.value.second_name,
        username:userInfo.value.username
    }

    console.log(JSON.stringify(payload))
    fetch('http://127.0.0.1:8000/api/auth/register',{
        method:'POST',
        body:JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'}
    })
        .then(function(response) {
            return response.json()
        })
        .then(function(body) {
        setToken(body.token);
    })
        .then(()=>{
            push('/')
        })
        .catch(()=>{
            console.error()

    });
    return ()=>cleanup=true
}

    const {push}=useHistory()
    const handlePushLogin=() => {
        push('/login')
    }
    return (
        <div className="firstbl first_login">
            <div className="first_containerP">
                <div className="text_bg wow slideInLeft" data-wow-duration="3s">company see <br/><span>Pride.</span>
                </div>
                <div className="first_left wow slideInUp" data-wow-duration="3s">
                    <div className="log_block">
                        <img src="/images/logo_dark.png" alt="" className="img"/>
                            <div className="log_title">Регистрация в Pride</div>
                            <div className="log_form">
                                <form onSubmit={handlePost}>
  								<FormRegist/>
                                </form>
                            </div>
                            <div className="registr reemb_pasw">У меня есть аккаунт! <a onClick={handlePushLogin}>Вход в кабинет</a>
                            </div>
                    </div>
                </div>
                <div className="first_right">
                    <img className="booble_img wow pulse" data-wow-iteration="infinite" data-wow-duration="2.5s"
                         src="/images/first_img.png" alt=""/>
                        <div className="reg_bottext bottom_text wow slideInRight" data-wow-duration="2s"><span>.</span>твой
                            старт
                        </div>
                </div>
            </div>

        </div>
    );
};

