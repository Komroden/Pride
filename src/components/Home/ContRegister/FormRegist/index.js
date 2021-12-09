import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {UserInfo} from "../../../../store/user/actions";
import './style.scss';
import Fade from '@mui/material/Fade';
import {useInputV} from "../../../../hooks/useInputV";




export const FormRegist = ({status}) => {
    const[value,setValue]=useState({
        username:'',
        email:'',
        name:'',
        second_name:'',
        password:'',
        phone_number:'',
        patronymic:'',
        id_of_invited:null
    })
    const email=useInputV('',{isEmpty:true,isEmail:true});
    const userName=useInputV('',{isEmpty:true});
    const name=useInputV('',{isEmpty:true});
    const secondName=useInputV('',{isEmpty:true});
    const password=useInputV('',{isEmpty:true,minLength:6,maxLength:10});
    const passwordConfirm=useInputV('',{isEmpty:true,minLength:6,maxLength:10})
    const phoneNumber=useInputV('',{isEmpty:true,isPhone:true});
    const patronymic=useInputV('');
    const idInvited=useInputV(1);
    const dispatch = useDispatch();
    const setUser = useCallback(() => {
        dispatch(UserInfo(value))
    }, [dispatch,value]);

    const handleWriteUserInfo=(e)=>{

        setValue({
            username:userName.value,
            email:email.value,
            name:name.value,
            second_name:secondName.value,
            password:password.value,
            phone_number:phoneNumber.value,
            patronymic:patronymic.value,
            id_of_invited:Number(idInvited.value)})
    }

    useEffect(() => {
        setUser()
    },[setUser,value])
    return (
        <Fade  in={status}  unmountOnExit>
        <div>
            <span className="inp">

            <input  onBlur={e => email.onBlur(e)} onChange={e=>email.onChange(e)} value={email.value} name='email' type='email' placeholder='Email' className=" inputp"
            />
                {(email.isDirty && email.isEmpty) && <span className="required_fail"> Обязательное поле</span>}
                {(email.isDirty && email.emailError &&!email.isEmpty) && <span className="required_fail"> Неверный формат</span>}
            </span>

            <span className="inp">
                <input type="text" placeholder="Phone number" className=" inputp" onBlur={e => phoneNumber.onBlur(e)} onChange={e=>phoneNumber.onChange(e)} value={phoneNumber.value}
                       />
                {(phoneNumber.isDirty && phoneNumber.isEmpty) && <span className="required_fail"> Обязательное поле</span>}
                {(phoneNumber.isDirty && phoneNumber.phoneError &&!phoneNumber.isEmpty) && <span className="required_fail"> Неверный формат</span>}
            </span>
            <span className="inp">
                <input type="text" placeholder="Username" className=" inputp" required onBlur={e => userName.onBlur(e)} onChange={e=>userName.onChange(e)} value={userName.value}/>
                {(userName.isDirty && userName.isEmpty) && <span className="required_fail"> Обязательное поле</span>}
            </span>
            <span className="inp">
                <input type="text" placeholder="Name" className=" inputp" required onBlur={e => name.onBlur(e)} onChange={e=>name.onChange(e)} value={name.value}
                       />
                {(name.isDirty && name.isEmpty) && <span className="required_fail"> Обязательное поле</span>}

            </span>
            <span className="inp">
                <input type="text" placeholder="Second Name" className=" inputp" required onBlur={e => secondName.onBlur(e)} onChange={e=>secondName.onChange(e)} value={secondName.value}
                       />
                {(secondName.isDirty && secondName.isEmpty) && <span className="required_fail"> Обязательное поле</span>}

            </span>
            <span className="inp">
                <input type="text" placeholder="Patronymic" className=" inputp" required onBlur={e => patronymic.onBlur(e)} onChange={e=>patronymic.onChange(e)} value={patronymic.value}
                       />

            </span>
            <span className="inp">
                <input type="password" placeholder="Password" className=" inputp" onBlur={e => password.onBlur(e)} onChange={e=>password.onChange(e)} value={password.value}
                       />
                {(password.isDirty && password.isEmpty) && <span className="required_fail"> Обязательное поле</span>}
                {(password.isDirty && password.minLengthError&&!password.isEmpty) && <span className="required_fail">Минимальная длинна пароля 6 символов</span>}
                {(password.isDirty && password.maxLengthError&&!password.isEmpty) && <span className="required_fail">Максимальная длинна пароля 10 символов</span>}

            </span>

            <span className="inp"><input type="password" placeholder="Confirm password" onBlur={e => passwordConfirm.onBlur(e)} onChange={e=>passwordConfirm.onChange(e)} value={passwordConfirm.value}
                                         className=" inputp"/>
                {(passwordConfirm.isDirty && passwordConfirm.isEmpty) && <span className="required_fail"> Обязательное поле</span>}
                {(passwordConfirm.value!==password.value && !passwordConfirm.isEmpty) && <span className="required_fail">Пароли не совпадают</span>}
            </span>

            <span className="inp">
                <input type='text' placeholder="Id Спонсора" className=" inputp" onBlur={e => idInvited.onBlur(e)} onChange={e=>idInvited.onChange(e)} value={idInvited.value}
                />
            </span>

        <div className="reemb_pasw check_b">
            <input className="input_checkbox" type="checkbox" id="rad"/>
            <label htmlFor="rad">
                I agree to the <a href="/">Terms of Service</a> and <a href="/">Privacy
                Policy</a>
            </label>
        </div>
        <button disabled={!email.inputValid||!userName.inputValid||!name.inputValid||!secondName.inputValid||!phoneNumber.inputValid||!password.inputValid||passwordConfirm.value!==password.value} onClick={handleWriteUserInfo} className="subm_form">Далее</button>

        </div>
        </Fade>
    );
};

