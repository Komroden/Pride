import React from 'react';
import {LkLeftMenu} from "../../components/LkLeftMenu";
import {LkHomeHeader} from "../../components/LkHomeHeader";
import {LkHomeRightSlidebar} from "../../components/LkHomeRightSlidebar";

import {LkBalanceItemsMini} from "../../components/LkBalanceItemsMini";
import {LkHistoryMain} from "../../components/LkHistoryMain";

export const History = () => {
    return (
        <div className='bodyLk full_content bg_fullcontent'>
            <LkLeftMenu/>
            <div className='main_content'>
                <LkHomeHeader title={'История операций'}/>
                <div className='main_content_row'>
                    <div className="main_content_central">
                        <LkBalanceItemsMini/>
                        <LkHistoryMain/>
                    </div>
                        <LkHomeRightSlidebar/>
                </div>
            </div>
        </div>
    );
};

