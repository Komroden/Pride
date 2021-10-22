import React from 'react';
import {LkLeftMenu} from "../../components/LkLeftMenu";
import {LkHomeHeader} from "../../components/LkHomeHeader";

import {LkHomeRightSlidebar} from "../../components/LkHomeRightSlidebar";
import {LkGuestMain} from "../../components/LkGuestMain";

export const Guest = () => {
    return (
        <div className='bodyLk full_content bg_fullcontent'>
            <LkLeftMenu/>
            <div className='main_content'>
                <LkHomeHeader title={'Гости'}/>
                <div className='main_content_row'>
                    <LkGuestMain/>
                    <LkHomeRightSlidebar/>
                </div>
            </div>
        </div>
    );
};

