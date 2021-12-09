import React, {useEffect, useState} from 'react';

export const LkHistoryMainItem = ({img,date,id,from,color,to,value,price,status}) => {
    const d =new Date(date).toLocaleDateString()
    const time =new Date(date).toLocaleTimeString()
    const [statusInfo,setStatusInfo]=useState({
        name:'',
        color:''
    })
    useEffect(()=>{
        if(status ==='payed') setStatusInfo({name:'Завершен',color:'history_item_b_green'})
        if(status ==='discline') setStatusInfo({name:'Отменен',color:'history_item_b_red'})
        if(status ==='processing') setStatusInfo({name:'В обработке',color:'history_item_b_yealow'})
    },[status])
    return (
        <div className="history_item">
            <div className="history_item_img">
                <img src={img} alt=""/>
            </div>
            <div className="history_item_descr">
                <div className="history_item_code">{id}</div>
                <div className="history_item_date"><img src="/images/calend.png" alt=""/>{d}</div>
                <div className="history_item_time">
                    <img src="/images/clock.png" alt=""/>{time}
                </div>
            </div>
            <div className="history_item_text">
                <div className={color}>{from}</div>
                <div className="history_item_span">{to}</div>
            </div>
            <div className="history_item_coints">{value} <br/>btc</div>
            <div className="history_item_price">{price}</div>
            <div className="history_item_btn">
                <a href="/" className={"history_item_b "+statusInfo.color}>{statusInfo.name}</a>
            </div>
            <div className="history_item_dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

