import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './style.scss';
import {CSSTransition} from "react-transition-group";
import {openMenu} from "../../store/menu/actions";
import {MenuRightLinkItem} from "../Home/MenuRightLinkItem";
import {LkHeaderUserProfile} from "../Lk/LkHeaderUserProfile";
export const MenuRight = () => {
    const dispatch = useDispatch();
    const setName = useCallback(() => {
        dispatch(openMenu())
    }, [dispatch]);
    const { showMenu, userData,auth } = useSelector((state) => state);

    return (
        <CSSTransition in={showMenu.showMenuBurg} classNames='alert' timeout={300} unmountOnExit>
        <div className="menu_right_open_r closed wow slideInRight">

            <div onClick={setName} className="close_menu_btn">
                <span className="before"/>
                <span className="after"/>
            </div>

            <ul>
                <li className="active">
                    <LkHeaderUserProfile path={'/transactions'}  logo={'/images/user.png'} textClassName={'userProfileText'} homeClassName={auth.token!=null?'user_profile_rightMenu':'user_profile_rightMenu none'}/>
                    <MenuRightLinkItem linkClassName={auth.token!=null?'none':''} path={'/login'} title={'Вход'}/>
                </li>
                <li className="active">
                    <MenuRightLinkItem path={'/'} title={'Главная'}/>
                </li>
                <li>
                    <MenuRightLinkItem path={'/about'} title={'О нас'}/>
                </li>
                <li>
                    <MenuRightLinkItem path={'/faq'} title={'Faq'}/>
                </li>
                <li>
                    <MenuRightLinkItem path={'/review'} title={'Отзывы'}/>
                </li>
                <li>
                    <MenuRightLinkItem path={'/contact'} title={'Контакты'}/>
                </li>
            </ul>
        </div>
        </CSSTransition>
    );
};

