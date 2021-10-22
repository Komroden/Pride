import React from 'react';
import './style.scss';
import {LkAddProgMainBalanceItem} from "../LkAddProgMainBalanceItem";
import {LkGuestMainGuestItem} from "../LkGuestMainGuestItem";

export const LkGuestMain = () => {
    return (
        <div className="main_content_central">
            <div className="balance_cost balance_for_every_page">
                <div className="balance_cost_row">
                    <LkAddProgMainBalanceItem url='/images/c1.png' bgr='url(/images/coint1.png)' title={'Bitcoin'} text={'BTC'} value={'0.356 BTC'} allValue={'2 658 USD'}/>
                    <LkAddProgMainBalanceItem url='/images/c2.png' bgr='url(/images/coint2.png)' title={'Ethereum'} text={'ETH'} value={'0.25 ETH'} allValue={'248 USD'}/>
                    <LkAddProgMainBalanceItem url='/images/c3.png' bgr='url(/images/coint3.png)' title={'Litecoin'} text={'LTC'} value={'25 LTC'} allValue={'5 361 USD'}/>
                    <LkAddProgMainBalanceItem url='/images/c4.png' bgr='url(/images/coint4.png)' title={'Tether'} text={'USDT'} value={'1 356 USDT'} allValue={'1 356 USD'}/>
                    <LkAddProgMainBalanceItem url='/images/c5.png' bgr='url(/images/coint5.png)' title={'Tron'} text={'TRX'} value={'125 TRX'} allValue={'248 USD'}/>
                    <div className="balance_cost_item balance_cost_item_plus ">
                        <a href="#">
                            <span className="dark_plus">+</span>
                            <span className="balance_cost_item_plus_text">Добавить кошелек</span>
                        </a>
                    </div>

                </div>
            </div>
            <div className="grey_line"/>
            <div className="main_for_all_pages">
                <div className="main_content_right_sidebar_title_bl gost_top">
                    <div className="sidebar_title_bl_left">
                        <div className="main_content_right_sidebar_title_bl_title">Гости</div>
                        <div className="main_content_right_sidebar_title_bl_subtitle">Тут какойто текст про
                            голосование
                        </div>
                    </div>
                    <div className="gost_text_center">
                        <span className="bid_t"> Статистика: </span>
                        <span className="norm_text">вами интересовались за неделю <span
                            className="red_col">500 человек</span></span>
                    </div>
                    <div className="gost_red_block">
                        <div className="gost_red_block_title">Вы популярны!</div>
                        <div className="gost_red_block_descr">Вам надо больше проводить время на сайте.</div>
                    </div>
                </div>
                <div className="gost_row">
                    <LkGuestMainGuestItem image={'url(/images/u1.png)'} name={'Dmitriy Ivanov'} year={'25 лет'} isOnline={'Online'} />
                    <LkGuestMainGuestItem image={'url(/images/u2.png)'} name={'Dmitriy Ivanov'} year={'25 лет'} isOnline={'Online'} />
                    <LkGuestMainGuestItem image={'url(/images/u3.png)'} name={'Dmitriy Ivanov'} year={'25 лет'} isOnline={'Online'} />
                    <LkGuestMainGuestItem image={'url(/images/u4.png)'} name={'Dmitriy Ivanov'} year={'25 лет'} isOnline={'Online'} />
                    <LkGuestMainGuestItem image={'url(/images/u5.png)'} name={'Dmitriy Ivanov'} year={'25 лет'} isOnline={'Online'} />
                    <LkGuestMainGuestItem image={'url(/images/u6.png)'} name={'Dmitriy Ivanov'} year={'25 лет'} isOnline={'Online'} />
                    <LkGuestMainGuestItem image={'url(/images/u1.png)'} name={'Dmitriy Ivanov'} year={'25 лет'} isOnline={'Online'} />
                    <LkGuestMainGuestItem image={'url(/images/u2.png)'} name={'Dmitriy Ivanov'} year={'25 лет'} isOnline={'Online'} />
                    <LkGuestMainGuestItem image={'url(/images/u3.png)'} name={'Dmitriy Ivanov'} year={'25 лет'} isOnline={'Online'} />
                    <LkGuestMainGuestItem image={'url(/images/u4.png)'} name={'Dmitriy Ivanov'} year={'25 лет'} isOnline={'Online'} />
                    <LkGuestMainGuestItem image={'url(/images/u5.png)'} name={'Dmitriy Ivanov'} year={'25 лет'} isOnline={'Online'} />
                    <LkGuestMainGuestItem image={'url(/images/u6.png)'} name={'Dmitriy Ivanov'} year={'25 лет'} isOnline={'Online'} />
                </div>
                <a href="#" className="more_news open_more_gost">
                    <span>Покать больше гостей</span>
                    <img src="/images/chev.png" alt=""/>
                </a>
            </div>

        </div>
    );
};
