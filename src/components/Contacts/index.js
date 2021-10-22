import React from 'react';
import './style.scss'
export const Contacts = () => {
    return (
        <div className="contact_block wow bounceInUp" data-wow-duration="3s">
            <div className="containerP">
                <div className="pride_title">
                    Контакты
                </div>
                <div className="contact_block_sub_title">Have any question? Write to us and we’ll get back to you
                    shortly.
                </div>
                <div className="contact_soc">
                    <a href="tel:+61383766284" className="tel">
                        <img src="/images/tel.png" alt=""/>
                            <span>+61 3 8376 6284</span>
                    </a>
                    <a href="mailto:info@pride.com" className="email">
                        <img src="/images/email.png" alt=""/>
                            <span>info@pride.com</span>
                    </a>
                </div>
                <div className="form_cont">
                    <form>
                        <input type="text" placeholder="Name" className="inputp"/>
                            <input type="text" placeholder="Email Address" className="inputp"/>
                                <input type="text" placeholder="Phone" className="inputp"/>
                                    <input type="text" placeholder="Subject" className="inputp"/>
                                        <textarea placeholder="Message" className="inputp"></textarea>
                                        <button className="subm_form">
                                            Отправить сообщение

                                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

