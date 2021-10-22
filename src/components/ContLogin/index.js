import React from 'react';
import './style.scss';
import {useHistory} from "react-router";
export const ContLogin = () => {
    const {push}=useHistory()
    const handlePushRegister=() => {
        push('/register')
    }
    const handlePushLk=() => {
        push('/lk')
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
                                    <input type="text" placeholder="Username" className=" inputp"/>
                                        <input type="password" placeholder="Password" className=" inputp"/>
                                            <div className="reemb_pasw">
                                                Я не помню свой пароль: <a href="#">Напомнить пароль</a>
                                            </div>
                                            <button onClick={handlePushLk} className="subm_form">войти</button>
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

