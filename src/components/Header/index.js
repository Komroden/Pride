import React, {useState,useCallback} from 'react';
import './style.scss';
import {CSSTransition} from "react-transition-group";
import { useDispatch } from 'react-redux';
import { openMenu } from "../../store/menu/actions";
import {useHistory} from "react-router";
import {loginUser} from "../../store/auth/actions";

export const Header = (props) => {
    const {push}=useHistory()
    const handlePushHome=() => {
        push('/')
    }
    const handlePushAbout=() => {
        push('/about')
    }
    const handlePushFaq=() => {
        push('/faq')
    }
    const handlePushRev=() => {
        push('/review')
    }
    const handlePushCont=() => {
        push('/contact')
    }

    const handlePushLk=() => {
        push('/lk')
    }
    const dispatch = useDispatch();
    const setName = useCallback(() => {
        dispatch(openMenu())
    }, [dispatch]);
    const handleLogin = useCallback(() => {
        dispatch(loginUser())
    }, [dispatch]);
    const [showName,setShowName]=useState(false);
    const [showLang,setShowLang]=useState(false);

    return (


            <header className="header">

                <div className="first_containerP">
                    <div className="header_left">
                        <a onClick={handleLogin} className="logo">
                            <img className='logoImage' alt='pride'/>
                        </a>
                        <div className="menu">
                            <nav className="navig_menu">
                                <ul>
                                    <li className={props.activeHome}>
                                        <a onClick={handlePushHome}>Главная</a>
                                    </li>
                                    <li className={props.activeAbout}>
                                        <a onClick={handlePushAbout}>О нас</a>
                                    </li>
                                    <li className={props.activeFaq} >
                                        <a onClick={handlePushFaq}>Faq</a>
                                    </li>
                                    <li className={props.activeRev}>
                                        <a onClick={handlePushRev}>Отзывы</a>
                                    </li>
                                    <li className={props.activeCont}>
                                        <a onClick={handlePushCont}>Контакты</a>
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
                                    <div className="hello_name">Дмитрий</div>
                                    <div className="btn_open_name"/>
                                </div>
                            </div>
                            <CSSTransition in={showName} classNames='alert' timeout={300} unmountOnExit >
                            <div className="name_row_open">
                                <a onClick={handlePushLk}>В КАБИНЕТ</a>
                                <a href="#">ВЫХОД</a>
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

