import React from 'react';
import './style.scss';
import {HomeFaqItem} from "../HomeFaqItem";

export const ContFaq = () => {

    return (

        <div className="main_cont">
            <div className="faq_tabs containerP">

                <div className="ins_row_faq">
                    <HomeFaqItem/>
                    <HomeFaqItem/>
                    <HomeFaqItem/>
                    <HomeFaqItem/>
                    <HomeFaqItem/>
                    <HomeFaqItem/>
                    <HomeFaqItem/>
                </div>
                <div className="ins_row_faq">
                    <HomeFaqItem/>
                    <HomeFaqItem/>
                    <HomeFaqItem/>
                    <HomeFaqItem/>
                    <HomeFaqItem/>
                    <HomeFaqItem/>
                    <HomeFaqItem/>
                </div>
            </div>
            <div className="pagination_p">
                <div className="containerP">
                    <a href="#" className="prev_pag ">
                        <i className="fa fa-arrow-left" aria-hidden="true"/>
                    </a>
                    <a href="#" className="prev_pag ">
                        1
                    </a>
                    <a href="#" className="prev_pag ">
                        2
                    </a>
                    <a href="#" className="prev_pag ">
                        3
                    </a>
                    <a href="#" className="prev_pag ">
                        <i className="fa fa-arrow-right" aria-hidden="true"/>
                    </a>
                </div>
            </div>
        </div>

    );
};

