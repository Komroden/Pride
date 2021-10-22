import React from 'react';
import {Header} from "../../components/Header";
import {HeaderSimpleFaq} from "../../components/HeaderSimpleFaq";

import {Footer} from "../../components/Footer";
import {ContAllNews} from "../../components/ContAllNews";
import {MenuRight} from "../../components/MenuRight";
import {Timer} from "../../components/Timer";
import {Message} from "../../components/Message";


export const AllNews = () => {
    return (
        <div className="simple_page bodyHome">
            <Header/>
            <HeaderSimpleFaq bread={'Новости'} title={'Новости от Pride'}/>
<ContAllNews/>
            <Footer/>
            <MenuRight/>
            <Timer />
            <Message/>
        </div>
    );
};