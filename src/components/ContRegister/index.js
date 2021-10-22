import React from 'react';
import {useHistory} from "react-router";

export const ContRegister = () => {
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
                                <form>
  								<span className="inp">
  									<input type="email" placeholder="Email" className=" inputp"/>
  								</span>
                                    <span className="inp">
  									<input type="text" placeholder="Login" className=" inputp" required/>
  									<span className="required_fail">This username exists</span>
  								</span>
                                    <span className="inp">
  									<input type="password" placeholder="Password" className=" inputp"/>
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
                                    <button className="subm_form">Регистрация</button>
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

