import React from 'react';
import './style.scss';
import {LkLeftMenu} from "../../components/LkLeftMenu";
import {LkHomeHeader} from "../../components/LkHomeHeader";
import {LkHomeMain} from "../../components/LkHomeMain";
import {LkHomeRightSlidebar} from "../../components/LkHomeRightSlidebar";
import {LkMainHeaderTop} from "../../components/LkMainHeaderTop";

export const LkHome = () => {
    return (
        <div className='bodyLk full_content bg_fullcontent'>
<LkLeftMenu/>
      <div className='main_content'>
<LkHomeHeader title={'Личный кабинет'}/>
      <div className='main_content_row'>
          <div className="main_content_central">
              <LkMainHeaderTop/>
              <LkHomeMain/>
          </div>
          <LkHomeRightSlidebar/>
      </div>
      </div>
        </div>
    );
};

