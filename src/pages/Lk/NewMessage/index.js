import React from 'react';
import {LkLeftMenu} from "../../../components/LkLeftMenu";
import {LkHomeHeader} from "../../../components/LkHomeHeader";
import {LkBalanceItemsMini} from "../../../components/LkBalanceItemsMini";

import {LkHomeRightSlidebar} from "../../../components/LkHomeRightSlidebar";
import {MessagesMain} from "../../../components/Lk/MessagesMain";
import {NewMessageMain} from "../../../components/Lk/NewMessageMain";

export const NewMessage = () => {
    return (
        <div className='bodyLk full_content bg_fullcontent'>
            <LkLeftMenu/>
            <div className='main_content'>
                <LkHomeHeader title={'Сообщения'}/>
                <div className='main_content_row'>
                    <div className="main_content_central">
                        <LkBalanceItemsMini/>
                         <NewMessageMain/>
                    </div>
                    <LkHomeRightSlidebar/>
                </div>
            </div>
        </div>
    );
};

