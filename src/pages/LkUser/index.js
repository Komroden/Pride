import React from 'react';
import {LkLeftMenu} from "../../components/LkLeftMenu";
import {LkHomeHeader} from "../../components/LkHomeHeader";

import {LkHomeRightSlidebar} from "../../components/LkHomeRightSlidebar";
import {LkUserMain} from "../../components/LkUserMain";
import {LkMainHeaderTop} from "../../components/LkMainHeaderTop";

export const LkUser = () => {
    return (
        <div className='bodyLk full_content bg_fullcontent'>
            <LkLeftMenu/>
            <div className='main_content'>
                <LkHomeHeader title={'Личный кабинет'}/>
                <div className='main_content_row'>
                    <div className="main_content_central">
                        <LkMainHeaderTop/>
                        <LkUserMain/>
                    </div>
                    <LkHomeRightSlidebar/>
                </div>
            </div>
        </div>
    );
};

