import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './style.scss';
import {CSSTransition} from "react-transition-group";
import {openMenu} from "../../store/menu/actions";
import {useHistory} from "react-router";
export const MenuRight = () => {
    const dispatch = useDispatch();
    const setName = useCallback(() => {
        dispatch(openMenu())
    }, [dispatch]);
    const { showMenu } = useSelector((state) => state);
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
    return (
        <CSSTransition in={showMenu.showMenuBurg} classNames='alert' timeout={300} unmountOnExit>
        <div className="menu_right_open_r closed wow slideInRight">
            <div onClick={setName} className="close_menu_btn">
                <span className="before"/>
                <span className="after"/>
            </div>
            <ul>
                <li className="active">
                    <a onClick={handlePushHome}>Главная</a>
                </li>
                <li>
                    <a onClick={handlePushAbout}>О нас</a>
                </li>
                <li>
                    <a onClick={handlePushFaq}>Faq</a>
                </li>
                <li>
                    <a onClick={handlePushRev}>Отзывы</a>
                </li>
                <li>
                    <a onClick={handlePushCont}>Контакты</a>
                </li>
            </ul>
        </div>
        </CSSTransition>
    );
};

