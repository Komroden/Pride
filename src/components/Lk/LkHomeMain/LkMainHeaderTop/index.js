import React, {useRef, useState} from 'react';
import {LkHomeMainLiderTopItem} from "../LkHomeMainLiderTopItem";
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import './style.scss';




export const LkMainHeaderTop = () => {
    const[open,setOpen]=useState(false);
    const[isvirify,setIsVerify]=useState(false)
    const items=[
        <LkHomeMainLiderTopItem key={1} url='/images/user1.png' number='#1'  />,
        <LkHomeMainLiderTopItem key={2} url='/images/user2.png' number='#2'  />,
        <LkHomeMainLiderTopItem key={3} url='/images/user3.png' number='#3'  />,
        <LkHomeMainLiderTopItem key={4} url='/images/user4.png' number='#4'  />,
        <LkHomeMainLiderTopItem key={5} url='/images/user5.png' number='#5'  />,
        <LkHomeMainLiderTopItem key={6} url='/images/user6.png' number='#6'  />,
    ]

    const [itemsInTop,setItemsInTop]=useState(items.slice(0, 7))
    const handleClick = () => {
        if(isvirify===true) return
        setOpen(!open)

        setItemsInTop(items)

    };
    const containerRef =useRef(null)
    const handleVerify=()=>{
        setIsVerify(true)
    }
    const handlePush=(e)=>{
        e.preventDefault()
    }


    return (
        <div className="lider_top" >
            <div className="lider_top_title">
                лидеры <br/>
                ваш топ
            </div>
            <div onClick={handleClick}  className="lider_top_add">
                <Fade direction="right" in={open} timeout={1000} unmountOnExit>
                <span  className={isvirify?'add_top hidden':'add_top visible'} onClick={handleVerify} >Добавить себя</span>
                </Fade>
                <span ref={containerRef}>
                    <span  className="dark_plus">+</span>
                </span>
            </div>

            <Slide direction="right" in={open} container={containerRef.current} timeout={1000} unmountOnExit mountOnEnter>
                <div className="lider_top_item" >

                    <a href="/" onClick={handlePush} className="lider_top_item_link">
									<span className="lider_top_item_img">
										<img src={'/images/user.png'} alt=""/>
									</span>
                        <span className="green_lin"/>
                        <span className="number_lin">#1</span>
                    </a>
                </div>
            </Slide>
            {itemsInTop.map(item=>item)}
            <Fade direction="left" in={!open} timeout={1000} unmountOnExit mountOnEnter>
                <div className="lider_top_item" >
                    <a href="/" onClick={handlePush} className="lider_top_item_link">
									<span className="lider_top_item_img">
										<img src='/images/user7.png' alt=""/>
									</span>
                        <span className="green_lin"/>
                        <span className="number_lin">#7</span>
                    </a>
                </div>
            </Fade>
        </div>
    );
};

