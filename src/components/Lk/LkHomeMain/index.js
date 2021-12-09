import React, {useEffect, useState} from 'react';
import './style.scss';


import {useSelector} from "react-redux";
import {LkHomeMainBalanceItem} from "./LkHomeMainBalanceItem";
import {LkHomeMainDetailItem} from "./LkHomeMainDetailItem";
import {VoteItem} from "./VoteItem";
import {UserBlock} from "../UserBlock";


export const LkHomeMain = () => {
    const { cryptoData,votes,auth } = useSelector((state) => state);
    const [valueTop,setValueTop]=useState({history:[]})
    const [valueBot,setValueBot]=useState({history:[]})

    //пополнение
    useEffect(()=>{
        if(auth.token) {
            fetch('http://127.0.0.1:8000/api/finance/show-history-of-top-up', {
                method: 'GET',
                headers: {
                    "accept": "application/json",
                    'Authorization': `Bearer ${auth.token}`
                }
            })
                .then(res => {
                        if (res.status === 204) {
                            return
                        }
                        return res.json()
                    }
                )
                .then(body => {
                    if (body) {
                        setValueTop(body)
                    }
                })
        }
    },[auth.token])
    //вывод
    useEffect(()=>{
        if(auth.token) {
            fetch('http://127.0.0.1:8000/api/finance/show-history-of-consumption', {
                method: 'GET',
                headers: {
                    "accept": "application/json",
                    'Authorization': `Bearer ${auth.token}`
                }
            })
                .then(res => {
                        if (res.status === 204) {
                            return
                        }
                        return res.json()
                    }
                )
                .then(body => {
                    if (body) {
                        setValueBot(body)
                    }
                })
        }
    },[auth.token])





    return (
        <>
            <div className="balance_cost">
                <div className="balance_cost_title">Балансы счетов:</div>
                <div className="balance_cost_row">
                    <LkHomeMainBalanceItem url='/images/c1.png' bgr='url(/images/coint1.png)' title={'Bitcoin'} text={'BTC'} value={'0.356 BTC'} allValue={'2 658 USD'} price={'1 BTC - '+cryptoData.value[1].quote.USD.price.toFixed(2)+'$'} change={'+236$'}/>
                    <LkHomeMainBalanceItem url='/images/c2.png' bgr='url(/images/coint2.png)' title={'Ethereum'} text={'ETH'} value={'0.25 ETH'} allValue={'248 USD'} price={'1 ETH - '+cryptoData.value[1027].quote.USD.price.toFixed(2)+'$'} change={'- 31$'}/>
                    <LkHomeMainBalanceItem url='/images/c3.png' bgr='url(/images/coint3.png)' title={'Litecoin'} text={'LTC'} value={'25 LTC'} allValue={'5 361 USD'} price={'1 LTC - '+cryptoData.value[2].quote.USD.price.toFixed(2)+'$'} change={'+ 0,6$'}/>
                    <LkHomeMainBalanceItem url='/images/c4.png' bgr='url(/images/coint4.png)' title={'Tether'} text={'USDT'} value={'1 356 USDT'} allValue={'1 356 USD'} price={'1 USDT - '+cryptoData.value[825].quote.USD.price.toFixed(2)+'$'} change={'+ 0.001$'}/>
                    <LkHomeMainBalanceItem url='/images/c5.png' bgr='url(/images/coint5.png)' title={'Tron'} text={'TRX'} value={'125 TRX'} allValue={'248 USD'} price={'1 TRX - '+cryptoData.value[1958].quote.USD.price.toFixed(2)+'$'} change={'- 31$'}/>
                    <LkHomeMainBalanceItem url='/images/c5.png' bgr='url(/images/coint5.png)' title={'Tron'} text={'TRX'} value={'125 TRX'} allValue={'248 USD'} price={'1 TRX - '+cryptoData.value[1958].quote.USD.price.toFixed(2)+'$'} change={'- 31$'}/>
                    {/*<div className="balance_cost_item balance_cost_item_plus ">*/}
                    {/*    <a href="#">*/}
                    {/*        <span className="dark_plus">+</span>*/}
                    {/*        <span className="balance_cost_item_plus_text">Добавить кошелек</span>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                </div>
            </div>
            <UserBlock/>
            <div className="home2link">
                <div className="home2link__logo">
                    <img src="/images/homelogo.png" alt=""/>
                </div>
                <div className="home2link__text">ваша реферальная ссылка:</div>
                <div className="home2link__form">
                    <input type="text" defaultValue={"http://www.pride.io/ref_000001123"}/>
                    <button>
                        <img src="/images/copyimg.png" alt=""/>
                    </button>
                </div>
            </div>
            <div className="detail_cost">
                <div className="earned">
                    <div className="detail_cost_title">
                        <img src="/images/earned.png" alt=""/>
                            <span>Внесено</span>
                    </div>
                    <div className="detail_cost_row">
                        {valueTop.history.map(item=> <LkHomeMainDetailItem logo='/images/e1.png' img='/images/i1.png' currency='Bitcoin' allValue='$4,604.00 USD' value='0.1234 BTC' />)}
                    </div>
                </div>
                <div className="withdrawn">
                    <div className="detail_cost_title">
                        <img src="/images/withdraft.png" alt=""/>
                            <span>Выведено</span>
                    </div>
                    <div className="detail_cost_row">
                        {valueBot.history.map(item=> <LkHomeMainDetailItem logo='/images/e1.png' img='/images/i1.png' currency='Bitcoin' allValue='$4,604.00 USD' value='0.1234 BTC' />)}
                    </div>
                </div>
            </div>
            <div className="voice">
                <div className="detail_cost_title">
                    <img src="/images/voice.png" alt=""/>
                        <span>Голосование</span>
                </div>
                {votes.value.post.filter((item,index)=>index===0).map((item,index)=>
                    <VoteItem key={index} title={item.question}  votesBars={item.answers} all={item.all}/>)}

            </div>
        </>
    );
};

