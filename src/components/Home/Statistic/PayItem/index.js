import React from 'react';

export const PayItem = ({date,object}) => {
    return (
        <li >
            <span className="left_stat">{date}</span>
            <span className="left_pay">выплачено - {object} руб.</span>
        </li>
    );
};

