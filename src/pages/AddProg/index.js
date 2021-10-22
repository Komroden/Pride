import React from 'react';
import {LkLeftMenu} from "../../components/LkLeftMenu";
import {LkHomeHeader} from "../../components/LkHomeHeader";

import {LkHomeRightSlidebar} from "../../components/LkHomeRightSlidebar";
import {LkAddProgMain} from "../../components/LkAddProgMain";
import {LkBalanceItemsMini} from "../../components/LkBalanceItemsMini";

export const AddProg = () => {
    return (
        <div className='bodyLk full_content bg_fullcontent'>
            <LkLeftMenu/>
            <div className='main_content'>
                <LkHomeHeader title={'Добавление программы'}/>
                <div className='main_content_row'>
                    <div className="main_content_central">
                    <LkBalanceItemsMini/>
                    <LkAddProgMain/>
                    </div>
                    <LkHomeRightSlidebar/>
                </div>
            </div>
        </div>
    );
};

