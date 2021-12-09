import React, {useState} from 'react';

import Fade from "@mui/material/Fade";
import {Captcha} from "../Captcha";
import {useInputV} from "../../../../hooks/useInputV";

export const ReviewForm = () => {
    const [visible, setVisible] = useState(false);
    const [success,setSuccess]=useState(false);
    const message=useInputV('');
    const openCaptcha = (e) => {
        e.preventDefault()
        setVisible(!visible);
    };

    const handlePost=(e)=>{
        e.preventDefault()
        if(success) console.log('Успешно')
        setSuccess(false)

    }

    // только авторизованный
    return (
        <div className="contact_block wow bounceInUp contact_blockFormReview" data-wow-duration="3s">
            <div className="containerP">
                <div className="pride_title pride_titleFormReview">
                    Оставить отзыв
                </div>
                <div className="form_cont">
                    <form>
                        {/*<input type="text" placeholder="Email Address" className="inputp"/>*/}
                        {/*<input type="text" placeholder="Phone" className="inputp"/>*/}
                        {/*<input type="text" placeholder="Subject" className="inputp"/>*/}
                        <textarea placeholder="Message" className="inputp" onBlur={e => message.onBlur(e)} onChange={e=>message.onChange(e)} value={message.value}/>
                        <button disabled={!message.value}  onClick={success?handlePost:openCaptcha} className="subm_form">
                            Отправить сообщение
                        </button>
                        <Fade  in={visible}>
                            <div>
                            <Captcha setSuccess={setSuccess} setVisible={setVisible} visible={visible}/>
                            </div>
                        </Fade>

                    </form>
                </div>
            </div>
        </div>
    );
};

