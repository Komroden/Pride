import React from 'react';
import './style.scss';
import {Main} from "../../components/Main";
import {WhyMe} from "../../components/WhyMe";
import {CryptoShop} from "../../components/CryptoShop";
import {InvestPlan} from "../../components/InvestPlan";
import {Calculator} from "../../components/Calculator";
import {Registration} from "../../components/Registration";
import {Statistic} from "../../components/Statistic";
import {Contacts} from "../../components/Contacts";
import {Footer} from "../../components/Footer";
import {Header} from "../../components/Header";
import {MenuRight} from "../../components/MenuRight";
import {Timer} from "../../components/Timer";
import {Message} from "../../components/Message";



export const Home = () => {
    return (
        <div className='bodyHome'>
            <div className='bg_pink'/>
                <Header activeHome={'active'}/>
            <Main/>
            <WhyMe/>
            <CryptoShop/>
            <InvestPlan/>
            <Calculator/>
            <Registration/>
            <Statistic/>
            <Contacts/>
            <Footer/>
            <MenuRight/>
            <Timer />
            <Message/>
        </div>
    );
};

