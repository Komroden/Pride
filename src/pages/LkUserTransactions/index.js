import React from 'react';
import {LkLeftMenu} from "../../components/LkLeftMenu";
import {LkHomeHeader} from "../../components/LkHomeHeader";
import {LkHomeRightSlidebar} from "../../components/LkHomeRightSlidebar";
import {LkTransactionsMain} from "../../components/LkTransactionsMain";
import {LkMainHeaderTop} from "../../components/LkMainHeaderTop";


export const LkUserTransactions = () => {
    return (
        <div className='bodyLk full_content bg_fullcontent'>
            <LkLeftMenu/>
            <div className='main_content'>
                <LkHomeHeader title={'Личный кабинет'}/>
                <div className='main_content_row'>
                    <div className="main_content_central">
                        <LkMainHeaderTop/>
                        <LkTransactionsMain/>
                    </div>

                    <LkHomeRightSlidebar/>
                </div>
            </div>
        </div>
    );
};

