import React, {useEffect, useState} from 'react';
import {LkHomeMainLiderTopItem} from "../LkHomeMainLiderTopItem";
import Slider from "react-slick";
import {CSSTransition} from "react-transition-group";
import './style.scss';
export const LkMainHeaderTop = () => {
    useEffect(() => {
        slider?.current?.slickNext()
    },[])
    const[open,setOpen]=useState(false)
    const handleOpen=()=>{
        setOpen(!open)
        slider?.current?.slickPrev()
    }
    const handleClose=()=>{
        setOpen(!open)
        slider?.current?.slickNext()
    }

    const slider = React.useRef(null);
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows:false
    };

    return (
        <div className="lider_top">
            <div className="lider_top_title">
                лидеры <br/>
                ваш топ
            </div>
            <div onMouseEnter={handleOpen} onMouseLeave={handleClose}   className="lider_top_add">
                <a>
                    <span  className="dark_plus">+</span>

                </a>
                    <span className={open?'add_top activeMessage':'add_top'} >Добавить себя</span>
            </div>

            <div className="top_slider">

            <Slider ref={slider} {...settings}>
                <CSSTransition in={open} classNames='alert' timeout={300} unmountOnExit >
                    <LkHomeMainLiderTopItem url='/images/user1.png' number='#1'/>
                </CSSTransition>
                <LkHomeMainLiderTopItem url='/images/user1.png' number='#1'/>
            <LkHomeMainLiderTopItem url='/images/user2.png' number='#2' />
            <LkHomeMainLiderTopItem url='/images/user3.png' number='#3'/>
            <LkHomeMainLiderTopItem url='/images/user4.png' number='#4'/>
            <LkHomeMainLiderTopItem url='/images/user5.png' number='#5'/>
            <LkHomeMainLiderTopItem url='/images/user6.png' number='#6'/>
            <LkHomeMainLiderTopItem url='/images/user7.png' number='#7'/>
            </Slider>

            </div>

        </div>
    );
};

