import React from 'react';
import {useHistory} from "react-router";

export const NewsCard = (prop) => {
    const {push}=useHistory()
    const handlePushFullNews=() => {
        push('/full')
    }
    return (
        <div className="news_item">
            <div className="news_card" style={{backgroundImage:prop.url}}>
                <div className="news_card_bottom">
                    <div className="news_date">09.10.2020</div>
                    <div className="news_descr">Список стран на которые распространяется запрет
                        тут
                    </div>

                </div>
            </div>
            <a onClick={handlePushFullNews} className="news_link">полная новость</a>
        </div>
    );
};

