import React, {useState} from 'react';
import {CSSTransition} from "react-transition-group";

export const HomeFaqItem = () => {
    const [showFaq,setShowFaq]=useState(false);
    return (
        <div onClick={()=>setShowFaq(!showFaq)} className="faq_tabs_item wow slideInLeft" data-wow-duration="2s">
            <div  className="faq_tabs_title">What is CRYPTO Token?</div>
            <CSSTransition  in={showFaq} classNames='alert' timeout={300} unmountOnExit>
                <div className="faq_tabs_body">CRYPTO is a utility token based on the ERC20 standard. All
                    transactions on the CRYPTEN platform will be carried out in CRYPTO. TheCRYPTO token will be
                    freely tradable on major exchanges and is fully compatible with Ethereum wallets.
                </div>
            </CSSTransition>
        </div>
    );
};

