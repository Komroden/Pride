import React from 'react';
import './style.scss';
export const ContactForm = () => {
    return (
        <div className="contact_block wow bounceInUp" data-wow-duration="3s">
            <div className="containerP">
                <div className="pride_title">
                    Форма обратной связи
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

