import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router";
import {useSelector} from "react-redux";
import {ENDPOINT} from "../../../api/endpoints";
import {CircularProgressWithLabel} from "./CircularProgressWithLabel";

export const UserBlock = () => {
    const[isVerify,setIsVerify]=useState({
        info:[]
    })
    const url=ENDPOINT
    const { auth,userData } = useSelector((state) => state);
    useEffect(()=>{
        if(auth.token){
        fetch(`${url}/api/auth/isverify`,{
            method:'GET',
            headers:{
                "accept":"application/json",
                'Authorization':`Bearer ${auth.token}`}})
            .then(res=>res.json())
            .then(body=>setIsVerify(body))
            .catch(error=>console.log(error))
        }
    },[auth.token,url])
    const {push}=useHistory()
    const handlePushUser=(e) => {
        e.preventDefault()
        push('/user')
    }

    return (
        <div className="user_main_block">
            <div className="user_main_block_logo">
                <img src="/images/user.png" alt=""/>
            </div>
            <div className="user_main_block_info">
                <div className="user_main_block_info_top">
                    <div className="user_main_block_years">27 <span>лет</span></div>
                    <div className={isVerify.info.Email&&isVerify.info.Phone?"user_main_block_verif":"user_main_block_verif no_verif"}>
                        <img src={isVerify.info.Email&&isVerify.info.Phone?"/images/verif.png":"/images/noVerif.png"} alt=""/>
                        <span>Верефикация <br/>пройдена</span>
                    </div>

                </div>
                <div className="user_main_block_name">{userData.value.Name?userData.value.Name:'User'} {userData.value.Surename?userData.value.Surename:'User'}</div>
                <a href={userData.value.email?userData.value.email:'#'} className="user_main_block_info_mail">
                    <img src="/images/email.png" alt=""/>
                    <span>{userData.value.email?userData.value.email:'none'}</span>
                </a>
            </div>
            <div className="user_main_block_vip">
                <div className="user_main_block_vip_top">
                    <img src="/images/vip.png" alt=""/>
                </div>
                <div className="user_main_block_vip_star">
                    <img src="/images/star.png" alt=""/>
                    <img src="/images/star.png" alt=""/>
                    <img src="/images/star.png" alt=""/>
                </div>
                <div className="user_main_block_vip_text">VIP Пользователь</div>
            </div>
            <div className="user_main_block_percent">
                {/* <div class="user_main_block_percent_circle">*/}
                {/*    <span>75%</span>*/}
                {/*</div> */}
                <CircularProgressWithLabel value={60} />
                <div className="user_main_block_percent_text">

                    <a href={'/'} onClick={handlePushUser}>Ваш <br/>Профиль</a>
                </div>
            </div>
            <div className="user_main_block_last">
                <div className="user_main_block_last_top">
                    <ul>
                        <li>
                            <a href="/">
                                <img src="/images/soc1.png" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src="/images/soc2.png" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src="/images/soc3.png" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src="/images/soc4.png" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src="/images/soc5.png" alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="user_main_block_last_bottom">
                    <img src="/images/curator.png" alt=""/>
                    <div className="user_main_block_last_bottom_text">
                        <span>Куратор</span>
                        <a href="/">Волкова Анастасия</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

