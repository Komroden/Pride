import React, {useCallback, useEffect, useState} from 'react';
import './style.scss';
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {UserRegistration} from "../../store/auth/actions";
import {useInput} from "../../hooks/useInput";


const loadJSON=key=>
     JSON.parse(sessionStorage.getItem(key));
const saveJSON = (key,data)=>
    sessionStorage.setItem(key,JSON.stringify(data));

export const ContLogin = () => {
    const[token,setToken]=useState(loadJSON('key'));
    const[username]=useInput('');
    const[password]=useInput('');
    const dispatch = useDispatch();
    const setTokens = useCallback(() => {
        dispatch(UserRegistration(token))
    }, [dispatch,token]);

    useEffect(() => {
        setTokens()
        saveJSON('key',token)

    },[token])
    useEffect(() => {
        if(token){
            push('/lk')
        }else return
    },[])

    const {push}=useHistory()
    const handlePushRegister=() => {
        push('/register')
    }

    const handleLogin=(e)=>{
        e.preventDefault()
        const payload= {
            username:username.value,
            password:password.value,
        }
        console.log(payload)
        fetch('http://127.0.0.1:8000/api/auth/login',{
            method:'POST',
            body:JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function(response) {
                return response.json()
            })
            .then(function(body) {
                console.log(body)
                setToken(body.token);
            })
            .then(()=>{
                push('/')
            })

            .catch(console.error);
    }
    return (
        <div className="firstbl first_login">
            <div className="first_containerP">
                <div className="text_bg wow slideInLeft" data-wow-duration="3s">company see <br/><span>Pride.</span>
                </div>
                <div className="first_left wow slideInUp" data-wow-duration="3s">
                    <div className="log_block">
                        <img src="/images/logo_dark.png" alt="" className="img"/>
                            <div className="log_title">Войти в личный аккаунт</div>
                            <div className="log_form">
                                <form>
                                    <input type="text" placeholder="Username" className=" inputp" {...username}
                                           />
                                        <input type="password" placeholder="Password" className=" inputp" {...password}
                                        />
                                            <div className="reemb_pasw">
                                                Я не помню свой пароль: <a href="#">Напомнить пароль</a>
                                            </div>
                                            <button onClick={handleLogin} className="subm_form">войти</button>
                                </form>

                            </div>
                            <div className="or">
                                OR
                            </div>
                            <a href="#" className="login_vk">
                                <span><img src="/images/vk.png" alt=""/></span>login WITH Vkontakte</a>
                            <div className="registr reemb_pasw">У меня нет аккаунта? <a onClick={handlePushRegister}>Регистрация</a></div>
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

