import React, {useState} from 'react';
import {Vertify} from "@alex_xu/react-slider-vertify";

export const Captcha = ({setVisible,visible,setSuccess}) => {
    const [fail,setFail]=useState(false);
    const onSuccess=()=>{
        setVisible(false)
        setSuccess(true)
    }
    const onFail=()=>{
        setFail(true)
    }
    return (
        <div className='modal__wrapper'>
            <div className='modal__text'>
                {fail&&<span className='modal__text_fail'>Проверка не пройдена</span>}
                <Vertify
                    width={320}
                    height={160}
                    visible={visible}
                    onSuccess={() => onSuccess()}
                    onFail={() => onFail()}
                />
            </div>
            </div>
    );
};

