import React from 'react';
import './style.scss';
import {LkHomeMainBalanceItem} from "../LkHomeMainBalanceItem";
import {useHistory} from "react-router";
import {LkTransactionsMainLineInfo} from "../LkTransactionsMainLineInfo";

export const LkTransactionsMain = () => {
    const {push}=useHistory()
    const handlePushUser=() => {
        push('/user')
    }
    return (
        <div>
            <div className="balance_cost">
                <div className="balance_cost_title">Балансы счетов:</div>
                <div className="balance_cost_row">
                    <LkHomeMainBalanceItem url='/images/c1.png' bgr='url(/images/coint1.png)' title={'Bitcoin'} text={'BTC'} value={'0.356 BTC'} allValue={'2 658 USD'} dayValue={'1 BTC - 8,837.88 USD'} allDayValue={'+ 236$'}/>
                    <LkHomeMainBalanceItem url='/images/c2.png' bgr='url(/images/coint2.png)' title={'Ethereum'} text={'ETH'} value={'0.25 ETH'} allValue={'248 USD'} dayValue={'1 ETH - 987 USD'} allDayValue={'- 31$'}/>
                    <LkHomeMainBalanceItem url='/images/c3.png' bgr='url(/images/coint3.png)' title={'Litecoin'} text={'LTC'} value={'25 LTC'} allValue={'5 361 USD'} dayValue={'1 LTC - 265 USD'} allDayValue={'+ 0,6$'}/>
                    <LkHomeMainBalanceItem url='/images/c4.png' bgr='url(/images/coint4.png)' title={'Tether'} text={'USDT'} value={'1 356 USDT'} allValue={'1 356 USD'} dayValue={'1 USDT - 1 USD'} allDayValue={'+ 0.001$'}/>
                    <LkHomeMainBalanceItem url='/images/c5.png' bgr='url(/images/coint5.png)' title={'Tron'} text={'TRX'} value={'125 TRX'} allValue={'248 USD'} dayValue={'1 TRX - 87 USD'} allDayValue={'- 31$'}/>
                    <div className="balance_cost_item balance_cost_item_plus ">
                        <a href="#">
                            <span className="dark_plus">+</span>
                            <span className="balance_cost_item_plus_text">Добавить кошелек</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="user_main_block">
                <div className="user_main_block_logo">
                    <img src="/images/user.png" alt=""/>
                </div>
                <div className="user_main_block_info">
                    <div className="user_main_block_info_top">
                        <div className="user_main_block_years">27 <span>лет</span></div>
                        <div className="user_main_block_verif">
                            <img src="/images/verif.png" alt=""/>
                            <span>Верефикация <br/>пройдена</span>
                        </div>

                    </div>
                    <div className="user_main_block_name">Natalia Familia</div>
                    <a href="mailto:superlady99@gmail.com" className="user_main_block_info_mail">
                        <img src="/images/email.png" alt=""/>
                        <span>superlady99@gmail.com</span>
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
                    <div className="user_main_block_percent_circle progress-pie-chart" data-percent="70">
                        <div className="ppc-progress">
                            <div className="ppc-progress-fill"></div>
                        </div>
                        <div className="ppc-percents">
                            <div className="pcc-percents-wrapper">
                                <span>%</span>
                            </div>
                        </div>
                    </div>
                    <div className="user_main_block_percent_text">
                        <a onClick={handlePushUser}>Ваш <br/>Профиль</a>
                    </div>
                </div>
                <div className="user_main_block_last">
                    <div className="user_main_block_last_top">
                        <ul>
                            <li>
                                <a href="#">
                                    <img src="/images/soc1.png" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/images/soc2.png" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/images/soc3.png" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/images/soc4.png" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/images/soc5.png" alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="user_main_block_last_bottom">
                        <img src="/images/curator.png" alt=""/>
                        <div className="user_main_block_last_bottom_text">
                            <span>Куратор</span>
                            <a href="#">Волкова Анастасия</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="withdrawn">
                <div className="detail_cost_title">
                    <img src="/images/withdraft.png" alt=""/>
                        <span>Рефералы</span>
                </div>
            </div>
            <LkTransactionsMainLineInfo status={'Active'}/>
            <LkTransactionsMainLineInfo status={'Inactive'} statusClass={'lineinfo__activeins_red'} userClass={'lineinfo__user_red'}/>
            <LkTransactionsMainLineInfo status={'Active'}/>
            <LkTransactionsMainLineInfo status={'Inactive'} statusClass={'lineinfo__activeins_red'} userClass={'lineinfo__user_red'}/>
            <LkTransactionsMainLineInfo status={'Active'}/>
            <LkTransactionsMainLineInfo status={'Inactive'} statusClass={'lineinfo__activeins_red'} userClass={'lineinfo__user_red'}/>
        </div>
    );
};

