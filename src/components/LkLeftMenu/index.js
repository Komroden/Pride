import React, {useState} from 'react';
import './style.scss';
import {LkLeftMenuOpenFive} from "../LkLeftMenuOpenFive";
import {LkLeftMenuOpenThree} from "../LkLeftMenuOpenThree";
import {useHistory} from "react-router";



export const LkLeftMenu = () => {
    const {push}=useHistory()
    const handlePushTrans=() => {
        push('/transactions')
    }
    const handlePushHome=() => {
        push('/lk')
    }


    const [open,setOpen]=useState(false)
    const handleActive =() => {
        setOpen(!open)
    }
    return (
        <div  className={ open ?'menu_left_sidebar active':'menu_left_sidebar'} >
            <div className="top_sidebar">
                <div className="menu_left_sidebar_top">
                    <a href="/" className="logo">
                        <img src="/images/logo.png" alt=""/>
                    </a>
                    <div onClick={handleActive} className={!open ?'hamburger':'hamburger active'} >

                            <span></span>
                            <span></span>
                            <span></span>

                    </div>
                </div>
                <div onClick={handlePushHome} className="your_cab">
                    <div className="your_cab_ins">
                        <img src="/images/your_cab.png" alt=""/>
                            <span className="your_cab_text">Личный кабинет</span>
                    </div>
                </div>
                <div className="us_menu">
                    <ul>
                        <LkLeftMenuOpenFive title={'Основные'} icon={'/images/icon_m2.png'}
                                            subtitle1={'Главная'} subtitle2={'О нас'} subtitle3={'FAQ'} subtitle4={'Отзывы'} subtitle5={'Контакты'}
                                            path1={"/"} path2={'/about'} path3={'/faq'} path4={'/review'} path5={'/contact'}/>
                        <li  className="us_menu_li">
                            <a onClick={handlePushTrans}>
                                <img src="/images/icon_m1.png" alt=""/>
                                <span className="text_li">Настройки профиля</span>
                            </a>
                        </li>
                        <LkLeftMenuOpenFive title={'Платформа'} icon={'/images/icon_m2.png'}
                                            subtitle1={'Новости'} subtitle2={'Голосование'} subtitle3={'Розыгрыши'} subtitle4={'Сообщения'} subtitle5={'Гости'}
                        path4={'/messages'} path5={'/guest'}/>
                        <LkLeftMenuOpenThree title={'Финансы'} icon={'/images/icon_m2.png'}
                                            subtitle1={'Пополнить счет'} subtitle2={'Вывод средств'} subtitle3={'История операций'}
                        path3={'/history'}/>
                        <LkLeftMenuOpenThree title={'Прогораммы'} icon={'/images/icon_m2.png'}
                                             subtitle1={'Программа номер 1'} subtitle2={'Программа номер 2'} subtitle3={'Добавить программу'}
                        path3={'/addProg'}/>
                        <LkLeftMenuOpenThree title={'О проекте'} icon={'/images/icon_m2.png'}
                                             subtitle1={'Оферта'} subtitle2={'Правила'} subtitle3={'Мисиия'}/>

                    </ul>
                </div>
            </div>
            <div className="bottom_sidebar">
                <div className="balance_sidebar">
                    <div className="balance_sidebar_title">Баланс стабилизационного фонда</div>
                    <div className="balance_sidebar_total">1 348.343 ETH</div>
                    <a href="#" className="balance_sidebar_link">смореть на blockchain</a>
                </div>
                <div className="advert">
						<span className="us_menu_li">
							<a href="#">
								<img src="/images/icon_m2.png" alt=""/>
								<span className="text_li">Рекламодатели</span>
							</a>
						</span>
                    <a href="#" className="advert_link">
                        <img src="/images/advert1.png" alt=""/>
                    </a>
                    <a href="#" className="advert_link">
                        <img src="/images/advert2.png" alt=""/>
                    </a>
                </div>
                <div className="footer_sidebar">
                    <a href="#" className="call_help">
                        <span className="green_circle"></span>
                        <span>написать в тех.поддержку</span>
                    </a>
                    <div className="copyr"><strong>Pride.io User Dashboard</strong> <br/>© 2020 All Rights Reserved</div>
                    <div className="footer_links">
                        <a href="#">Публичная оферта</a>
                        |
                        <a href="#">Правила сервиса</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

