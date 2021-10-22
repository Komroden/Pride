import React from 'react';

import {Footer} from "../../components/Footer";
import {Header} from "../../components/Header";
import {HeaderSimpleAbout} from "../../components/HeaderSimpleAbout";
import {ContReview} from "../../components/ContReview";
import {MenuRight} from "../../components/MenuRight";
import {Timer} from "../../components/Timer";
import {Message} from "../../components/Message";


export const Review = () => {
    return (

        <div className="simple_page bodyHome">
            <Header activeRev={'active'}/>
            <HeaderSimpleAbout bread={'Отзывы'} title={'Отзывы о Pride'}/>
            <ContReview/>
            <Footer/>
            <MenuRight/>
            <Timer />
            <Message/>
        </div>
    );
};