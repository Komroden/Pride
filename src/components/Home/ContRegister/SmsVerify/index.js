import React, {useState, useEffect, useCallback} from 'react';
import './style.scss';
import {useDispatch, useSelector} from "react-redux";
import Fade from '@mui/material/Fade';
import {Loader} from "../../../../api/Loader";
import {openMessageSms} from "../../../../store/messageSms/actions";
import {Captcha} from "../../ContReview/Captcha";




export const SmsVerify = () => {
    //captcha
    const [visible, setVisible] = useState(false);
    const [success,setSuccess]=useState(true);
    const [counter,setCounter]=useState(0)
    const openCaptcha = () => {
        setVisible(!visible);
    };
    const[setVerify]=useState(false)
    const[sec,setSec]=useState(59)
    const{ userData,auth } = useSelector((state) => state);
    const[loading,setLoading]=useState(false);
    const[code,setCode]=useState('');
    const[error,setError]=useState();
    const[open,setOpen]=useState(false);

    const dispatch = useDispatch();
    const setName = useCallback(() => {
        dispatch(openMessageSms())
    }, [dispatch]);



    useEffect(()=>{
        if(sec!==0){
            setTimeout(() => setSec(sec-1) , 1000);
        }
        if(sec===0){
            setOpen(true)
        }

    },[sec])
const handleSend=(e)=>{
    e.preventDefault()
}
    const payload={
        code:code
    };

    useEffect(()=>{
        if(code.length<6) return
        if (code.length>=6&&success){
            setLoading(true)
            setCounter(counter+1)
            fetch(`http://127.0.0.1:8000/api/auth/sms-verify`,{
                method:'POST',
                body:JSON.stringify(payload),
                headers:{'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization':`Bearer ${auth.token}`}
            })
                .then((res) => {
                    if (res.status >= 200 && res.status < 300) {
                        return res.json();
                    }
                    if (res.status === 403 ){
                        let error = new Error('Неправильный код');
                        error.response = res;
                        if(counter>=2){
                            setSuccess(false)
                            openCaptcha()
                        }
                        throw error
                    }else {
                        let error = new Error(res.statusText);
                        error.response = res;
                        throw error
                    }
                })
                .then((body)=>{
                    console.log(body);
                })
                .then(()=> setLoading(false))
                .then(()=> setVerify(true))
                .catch((e) => {
                    setLoading(false)
                    setError(e.message);

                });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[code])

    return (
            <>
                <p className='resend_number'>Отправленный на номер: {userData.value.PhoneNumber?userData.value.PhoneNumber:'Номер не введен'}</p>
                <Loader loading={loading}/>
                    <span className="inp">
                <input type="text" placeholder="Code" className="inputp input_sms" value={code}
                       onChange={event =>setCode(event.target.value) }
                />
                <Fade  in={visible}>
                    <div>
                        <Captcha setSuccess={setSuccess} setVisible={setVisible} visible={visible}/>
                    </div>
                </Fade>
                <p className='error_message' >{error}</p>
                <Fade  in={!open}  unmountOnExit>
                    <div className='timer_resend'>
                        0:{sec}
                    </div>
                    </Fade>

                <Fade  in={open}  unmountOnExit>
                    <div className='resend_wrapper'>
                        <div>
                            <a href='/' className='no_code' onClick={handleSend}>Отправить еще раз</a>
                        </div>
                    </div>
                </Fade>
                        <div className='button_group'>
                            <button onClick={setName}  className="subm_form button_item">Подтвердить позже</button>
                            {/*<button disabled={!isVerify} style={{opacity:isVerify?'1':'0'}} onClick={handlePushLk}  className="subm_form button_item">Завершить</button>*/}
                        </div>

            </span>

        </>
    );
};

