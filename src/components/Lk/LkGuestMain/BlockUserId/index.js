import React from 'react';
import {useSelector} from "react-redux";
import {ENDPOINT} from "../../../../api/endpoints";

export const BlockUserId = () => {
    const { auth } = useSelector((state) => state);
    const url = ENDPOINT
    //id props
     const handleBlockById=(e)=>{
        e.preventDefault()
        let payload={
            id:'3'
        }
        fetch(`${url}/api/auth/block-user`, {
            method:'POST',
            body:JSON.stringify(payload),
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization':`Bearer ${auth.token}`}
        })
            .then(res=>res.json())
            .then(res=>console.log(res))
            .catch(e=>console.log(e))
    }
    return (
        <a href={'/'} onClick={handleBlockById} className="gost_item_blocked">
										<span className="gost_item_blocked_img">
											<img src="/images/blocked.png" alt=""/>
										</span>
            <span className="gost_item_blocked_text">Заблокировать пользователя</span>
        </a>
    );
};

