import React from 'react';

export const InvestItem = ({date,object}) => {
    return (
        <li >
            <span className="left_stat">{date}</span>
            <span className="left_money">Инвестированно - {object} р</span>
        </li>
    );
};

