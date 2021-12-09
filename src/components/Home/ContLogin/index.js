import React, {useCallback, useEffect, useState} from 'react';
import './style.scss';
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {UserRegistration} from "../../../store/auth/actions";
import {useInput} from "../../../hooks/useInput";
import {Loader} from "../../../api/Loader";
import Fade from "@mui/material/Fade";
import {useInputV} from "../../../hooks/useInputV";
import Collapse from '@mui/material/Collapse';
import {Captcha} from "../ContReview/Captcha";




const saveJSON = (key,data)=>
    sessionStorage.setItem(key,JSON.stringify(data));

export const ContLogin = () => {
    const {push}=useHistory()
    const handlePushRegister=(e) => {
        e.preventDefault()
        push('/register')
    }

    //captcha
    const [visible, setVisible] = useState(false);
    const [success,setSuccess]=useState(true);
    const [counter,setCounter]=useState(0)
    const openCaptcha = () => {
        setVisible(!visible);
    };
    const [open,setOpen]=useState(false);
    const email=useInputV('',{isEmpty:true,isEmail:true});
    const[token,setToken]=useState(null);
    const[error,setError]=useState();
    const[errorEmail,setErrorEmail]=useState();
    const[loading,setLoading]=useState(false);
    const[username]=useInput('');
    const[password]=useInput('');
    const dispatch = useDispatch();

    const setTokens = useCallback(() => {
        dispatch(UserRegistration(token))
    }, [dispatch,token]);

    useEffect(() => {
        if(token===null)return
            setTokens()
            saveJSON('key',token)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[token])


    const handleLogin=(e)=>{
        e.preventDefault()
        const payload= {
            username:username.value,
            password:password.value,
        }
           setLoading(true)
        setCounter(counter+1)
        if (success) {
            fetch('http://127.0.0.1:8000/api/auth/login', {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {'Content-Type': 'application/json'}
            })
                .then((res) => {
                    if (res.status >= 200 && res.status < 300) {
                        return res.json();
                    }
                    if (res.status === 400) {
                        let error = new Error('Неверный логин или пароль');
                        error.response = res;
                        if(counter>=2){
                            setSuccess(false)
                            openCaptcha()
                        }
                        throw error
                    } else {
                        let error = new Error(res.statusText);
                        error.response = res;
                        throw error
                    }
                })
                .then(function (body) {
                    setToken(body.token);

                })
                .then(() => setLoading(false))
                .then(() => push('/'))
                .catch((e) => {
                    setLoading(false)
                    setError(e.message);

                });
        }
    }
    const handleOpen=(e)=>{
        e.preventDefault()
             setOpen(!open)
        setErrorEmail()
     }
    const handleDrop=(e)=>{
        const payload={
            email:email
        }
        e.preventDefault()
        setLoading(true)
        setCounter(counter+1)
        if(success) {
            fetch('http://127.0.0.1:8000/api/auth/request-reset-email', {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {'Content-Type': 'application/json'}
            })

                .then((res) => {
                    if (res.status >= 200 && res.status < 300) {
                        return res.json();
                    }
                    if (res.status === 400) {
                        let error = new Error('Аккаунта не существует');
                        error.response = res;
                        throw error
                    } else {
                        let error = new Error(res.statusText);
                        error.response = res;
                        throw error
                    }
                })
                .then(function (body) {
                    console.log(body)
                })
                .then(() => setLoading(false))
                .catch((e) => {
                    setLoading(false)
                    setErrorEmail(e.message);

                });
        }
}
    useEffect(()=>{
    if (!errorEmail) return
    setInterval(()=>setErrorEmail(),10000)
},[errorEmail])

    //vk
    // let search = window.location.search;
    // let params = new URLSearchParams(search);
    // let foo = params.get('code');
    // useEffect(()=>{
    //     if (foo==null) return
    //     // window.open(`https://oauth.vk.com/access_token?client_id=8008853&client_secret=l7noWLXCzFpZfR258bul&redirect_uri=http://localhost:3000/login&code=${foo}`)
    //     fetch(`https://oauth.vk.com/access_token?client_id=8008853&client_secret=l7noWLXCzFpZfR258bul&redirect_uri=http://localhost:3000/login&code=${foo}`,{
    //         method:'GET'
    //     })
    //         .then(res=>res.json())
    //         .then(body=>console.log(body))
    //     console.log('hello')
    // },[foo])

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
                                        <Loader loading={loading}/>
                                    <input type="text" placeholder="Username" className=" inputp" {...username}
                                           />
                                        <input type="password" placeholder="Password" className=" inputp" {...password}
                                        />
                                    <p className='error_message' >{error}</p>
                                            <div className="reemb_pasw">
                                                Я не помню свой пароль: <a href={'/'} onClick={handleOpen}>Сбросить пароль</a>
                                            </div>
                                    <Collapse  in={open}  unmountOnExit>
                                        <div>
                                            <span className="title_input">Введите Email</span>
                                            <div className='email__wrapper'>
                                            <input  onBlur={e => email.onBlur(e)} onChange={e=>email.onChange(e)} value={email.value} name='email' type='email' placeholder='Email' className=" inputp email_drop"
                                            />
                                            <button onClick={handleDrop} className="subm_form button_drop">Отправить</button>
                                            </div>
                                            {(email.isDirty && email.isEmpty) && <span className="error_message"> Обязательное поле</span>}
                                            {(email.isDirty && email.emailError &&!email.isEmpty) && <span className="error_message"> Неверный формат</span>}
                                            <p className='error_message' >{errorEmail}</p>
                                        </div>
                                    </Collapse>
                                            <button onClick={handleLogin} className="subm_form">войти</button>
                                    <Fade  in={visible}>
                                        <div>
                                            <Captcha setSuccess={setSuccess} setVisible={setVisible} visible={visible}/>
                                        </div>
                                    </Fade>

                                </form>

                            </div>
                            <div className="or">
                                OR
                            </div>
                        <a href='https://oauth.vk.com/authorize?client_id=8008853&redirect_uri=http://localhost:3000/login&scope=friends&response_type=code&v=5.131' className="login_vk">
                            <span><img src="/images/vk.png" alt=""/></span>login WITH Vkontakte</a>
                        <div className="registr reemb_pasw">У меня нет аккаунта? <a href="/" onClick={handlePushRegister}>Регистрация</a></div>
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

