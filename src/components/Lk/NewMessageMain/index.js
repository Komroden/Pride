import React from 'react';
import './style.scss';
import {NewMessage} from "./NewMessage";
export const NewMessageMain = () => {
    return (
        <>
            <div className="grey_line"/>
            <div className="main_for_all_pages">
                <div className="main_content_right_sidebar_title_bl">
                    <div className="main_content_right_sidebar_title_bl_title">СООБЩЕНИЯ</div>
                    <div className="main_content_right_sidebar_title_bl_subtitle">Тут какойто текст про голосование
                    </div>
                </div>
                <div className="messages_row">
                    <NewMessage name={'Eunice Clarke'} text={'Привет как дела тут тема сообщения короч'} date={'19 мин'}/>
                    <NewMessage name={'Nathan Cooper'} text={'Привет как дела тут тема сообщения короч'} date={'час назад'}/>
                    <NewMessage name={'Lura Osborne'} text={'Привет!'} date={'12.09.2020'}/>
                    <NewMessage name={'Nathan Cooper'} text={'Привет как дела тут тема сообщения короч'} date={'час назад'}/>
                    <NewMessage name={'Lura Osborne'} text={'Привет!'} date={'12.09.2020'}/>
                    <NewMessage name={'Nathan Cooper'} text={'Привет как дела тут тема сообщения короч'} date={'час назад'}/>
                    <NewMessage name={'Lura Osborne'} text={'Привет!'} date={'12.09.2020'}/>
                    <NewMessage name={'Nathan Cooper'} text={'Привет как дела тут тема сообщения короч'} date={'час назад'}/>
                    <NewMessage name={'Lura Osborne'} text={'Привет!'} date={'12.09.2020'}/>
                    <NewMessage name={'Nathan Cooper'} text={'Привет как дела тут тема сообщения короч'} date={'час назад'}/>
                    <NewMessage name={'Lura Osborne'} text={'Привет!'} date={'12.09.2020'}/>

                </div>
            </div>
        </>
    );
};

