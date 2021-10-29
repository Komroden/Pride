import React, {useState,useCallback} from 'react';
import './style.scss';
import {CSSTransition} from "react-transition-group";
import {useDispatch, useSelector} from 'react-redux';
import { openMenu } from "../../store/menu/actions";
import {useHistory} from "react-router";
import {HeaderLinkItem} from "../Home/HeaderLinkItem";
import {UserLogout} from "../../store/auth/actions";


export const Header = (props) => {
    const { userData,auth } = useSelector((state) => state);
    const {push}=useHistory()
    const handlePushHome=() => {
        push('/')
    }
    const handlePushLk=() => {
        push('/lk')
    }
    const dispatch = useDispatch();
    const setName = useCallback(() => {
        dispatch(openMenu())
    }, [dispatch]);
    const setLogout = useCallback(() => {
        dispatch(UserLogout())
    }, [dispatch]);
    const [showName,setShowName]=useState(false);
    const [showLang,setShowLang]=useState(false);
    const handleLogout =()=>{
        setLogout()
        sessionStorage.clear()
    };
    const handlePushLogin=()=>{
        push('/login')
    }
    return (

            <header className="header">

                <div className="first_containerP">
                    <div className="header_left">
                        <a onClick={handlePushHome} className="logo">
                            <img className='logoImage' alt='pride'/>
                        </a>
                        <div className="menu">
                            <nav className="navig_menu">
                                <ul>
                                    <li className={props.activeHome}>
                                        <HeaderLinkItem title={'Главная'} path={'/'}/>

                                    </li>
                                    <li className={props.activeAbout}>
                                        <HeaderLinkItem title={'О нас'} path={'/about'}/>

                                    </li>
                                    <li className={props.activeFaq} >
                                        <HeaderLinkItem title={'Faq'} path={'/faq'}/>

                                    </li>
                                    <li className={props.activeRev}>
                                        <HeaderLinkItem title={'Отзывы'} path={'/review'}/>

                                    </li>
                                    <li className={props.activeCont}>
                                        <HeaderLinkItem title={'Контакты'} path={'/contact'}/>

                                    </li>

                                </ul>
                            </nav>
                        </div>

                    </div>
                    <div className="header_right">
                        <div className="hello_open_row">
                            <div className="hello_open">
                                <span className="hello_bas">Привет:</span>
                                <div onClick={()=>setShowName(!showName)} className="open_name_info">
                                    <div className="hello_name">{userData.value.Username?userData.value.Username:'User'}</div>
                                    <div className="btn_open_name"/>
                                </div>
                            </div>
                            <CSSTransition in={showName} classNames='alert' timeout={300} unmountOnExit >
                            <div className="name_row_open">
                                <a onClick={handlePushLk}>В КАБИНЕТ</a>
                                <a onClick={auth.token!=null?handleLogout:handlePushLogin}>{auth.token!=null?'Выход':'Вход'}</a>
                            </div>
                            </CSSTransition>
                        </div>
                        <div className="languag">
                            <div onClick={()=>setShowLang(!showLang)} className="lang_btn btn_for_open_lang">RU</div>
                            <CSSTransition in={showLang} classNames='alert' timeout={300} unmountOnExit >
                            <div className="open_row_lang">
                                <div className="lang_btn">ENG</div>
                                <div className="lang_btn">GER</div>
                            </div>
                            </CSSTransition>
                        </div>
                        <div className="menu_right">
                            <div onClick={setName} className="menu_right_btn">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                    </div>

                </div>
            </header>
)
};
