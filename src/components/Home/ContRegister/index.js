import React, {useCallback, useState,useEffect} from 'react';
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {UserRegistration} from "../../../store/auth/actions";
import {FormRegist} from "./FormRegist";
import Fade from '@mui/material/Fade';
import './style.scss';

import {SmsVerify} from "./SmsVerify";
import {Loader} from "../../../api/Loader";
import {Captcha} from "../ContReview/Captcha";



const saveJSON = (key,data)=>
    sessionStorage.setItem(key,JSON.stringify(data));
export const ContRegister = () => {
    //captcha
    const [visible, setVisible] = useState(false);
    const [success,setSuccess]=useState(true);
    const [counter,setCounter]=useState(0)
    const openCaptcha = () => {
        setVisible(!visible);
    };
    const { userInfo } = useSelector((state) => state);
    const {push}=useHistory()
    const handlePushLogin=(e) => {
        e.preventDefault()
        push('/login')
    }
    const[token,setToken]=useState(null);
    const[error,setError]=useState();
    const[loading,setLoading]=useState(false);
    const[open,setOpen]=useState(false)
    const dispatch = useDispatch();
    const setTokens = useCallback(() => {
        dispatch(UserRegistration(token))
    }, [dispatch,token]);




    useEffect(() => {
        setTokens()
        saveJSON('key',token)
    },[setTokens,token])


const handleOpen=()=>{
        setOpen(!open)
}
const handlePost=(e)=> {

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
    setLoading(true)
    setCounter(counter+1)
    if(success){
    fetch('http://127.0.0.1:8000/api/auth/register',{
        method:'POST',
        body:JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'}
    })
        .then((res) => {
            if (res.status >= 200 && res.status < 300) {
                return res.json();
            } else {
                let error = new Error(res.statusText);
                error.response = res;
                if(counter>=2){
                    setSuccess(false)
                    openCaptcha()
                }
                throw error
            }
        })
        .then(function(body) {
        setToken(body.token);

    })
        .then(()=> setLoading(false))
        .then(()=> setOpen(true))
        .catch((e) => {
            setLoading(false)
            setError(e.message);

        });
    }

}


    return (
        <div  className="firstbl first_login">
            <div className="first_containerP">
                <div className="text_bg wow slideInLeft" data-wow-duration="3s">company see <br/><span>Pride.</span>
                </div>
                <div className="first_left wow slideInUp" data-wow-duration="3s">
                    <div className="log_block">
                        <img onClick={handleOpen}  src="/images/logo_dark.png" alt="" className="img"/>
                            <div className="log_title">{open?'Введите код':'Регистрация в Pride'}</div>
                            <div className="log_form">

                                <form onSubmit={handlePost}>
                                    <Loader loading={loading}/>
                                        <FormRegist status={!open}/>
                                    <Fade  in={open}  unmountOnExit>
                                        <div>
                                        <SmsVerify />
                                        </div>
                                    </Fade>
                                    <Fade  in={visible}>
                                        <div>
                                            <Captcha setSuccess={setSuccess} setVisible={setVisible} visible={visible}/>
                                        </div>
                                    </Fade>

                                </form>
                            </div>
                            <div className="registr reemb_pasw" style={{display:open?'none':'block'}}>У меня есть аккаунт! <a href='/' onClick={handlePushLogin}>Вход в кабинет</a>
                            </div>
                        <pre>{JSON.stringify(error, null, 2)}</pre>
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

