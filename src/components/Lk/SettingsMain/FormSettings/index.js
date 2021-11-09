import React, {useState} from 'react';
import {useInputV} from "../../../../hooks/useInputV";
import {useSelector} from "react-redux";


export const FormSettings = () => {
    const { auth } = useSelector((state) => state);
    const [passwords,setPasswords]=useState({
        password:'',
        confirmPassword:''
    })
    const[value,setValue]=useState({
        firstName:'',
        lastName:'',
        middleName:'',
        birthDate:'',
        country:'',
        city:'',
        telegram:'',
        vkontakte:'',
        instagram:'',
        facebook:'',
        youtube:'',
        twitter:'',

    })
    const phoneNumber=useInputV('',{isPhone:true})
    const password=useInputV('',{minLength:6,maxLength:10});
    const passwordConfirm=useInputV('',{minLength:6,maxLength:10});
    const firstName=useInputV('')
    const lastName=useInputV('')
    const middleName=useInputV('')
    const birthDate=useInputV('')
    const [country,setCountry]=useState('')
    const city=useInputV('')
    const telegram=useInputV('')
    const vkontakte=useInputV('')

    const handlePut=(e)=>{
        e.preventDefault()
        setValue({
            firstName:firstName.value,
            lastName:lastName.value,
            middleName:middleName.value,
            birthDate:(birthDate.value),
            country:country,
            city:city.value,
            telegram:telegram.value,
            vkontakte:vkontakte.value,
            instagram:'',
            facebook:'',
            youtube:'',
            twitter:''
        })
        console.log(value)
        setPasswords({
            password:password.value,
            confirmPassword:passwordConfirm.value
        })
        console.log(passwords)
        console.log(phoneNumber.value)
        // fetch('http://lk.pride.kb-techno.ru/api/Profile/update', {
        //     method:'PUT',
        //     body:value,
        //     headers:{'accept': 'application/octet-stream',
        //         'Content-Type': 'application/json',
        //         'Authorization':`Bearer ${auth.token}`}
        // })
        //     .then((res) => res.json())
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((error) => {
        //     });
    }
    return (
        <form onSubmit={handlePut}>
            <div className="setting_form_row">
                <div className="setting_form_item setting_form_item_for_three">
                    <span className="title_input">Ваше Имя</span>
                    <input  onChange={e=>firstName.onChange(e)} value={firstName.value} type='text' className="dark_input" />


                </div>
                <div className="setting_form_item setting_form_item_for_three">
                    <span className="title_input">Фамилия</span>
                    <input  onChange={e=>lastName.onChange(e)} value={lastName.value} type='text' className="dark_input" />


                </div>
                <div className="setting_form_item setting_form_item_for_three">
                    <span className="title_input">Отчество</span>
                    <input  onChange={e=>middleName.onChange(e)} value={middleName.value} type='text' className="dark_input" />


                </div>
                <div className="setting_form_item setting_form_item_for_three">
                    <span className="title_input">Телефон</span>
                    <input  type='text' className="dark_input" onBlur={e => phoneNumber.onBlur(e)} onChange={e=>phoneNumber.onChange(e)} value={phoneNumber.value} />
                    {(phoneNumber.isDirty && phoneNumber.phoneError) && <span className="required_fail"> Неверный формат</span>}

                </div>
                <div className="setting_form_item setting_form_item_for_three">
                    <span className="title_input">Skype\Telegram</span>
                    <input  onChange={e=>telegram.onChange(e)} value={telegram.value} type='text' className="dark_input" />


                </div>
                <div className="setting_form_item setting_form_item_for_three">
                    <span className="title_input">Страница VK.com</span>
                    <input  onChange={e=>vkontakte.onChange(e)} value={vkontakte.value} type='text' className="dark_input" />


                </div>
                <div className="setting_form_item setting_form_item_for_two">
                    <span className="title_input">Страна</span>
                    <select value={country.value} onChange={e=>setCountry(e.target.value)}  className="dark_input" name="country">
                        <option value='Россия'   selected>Россия</option>
                        <option value='Пункт 2'  >Пункт 2</option>
                        <option value='Пункт 3'  >Пункт 3</option>
                        <option value='Пункт 4'  >Пункт 4</option>
                        <option value='Пункт 5'  >Пункт 5</option>
                        <option value='Пункт 6'  >Пункт 6</option>
                    </select>
                </div>
                <div className="setting_form_item setting_form_item_for_two">
                    <span className="title_input">Регион</span>
                    <input  onChange={e=>city.onChange(e)} value={city.value} type='text' className="dark_input" />


                </div>
                <div className="setting_form_item setting_form_item_for_two">
                    <span className="title_input">Логин</span>
                    <input type='text' className="dark_input" />


                </div>
                <div className="setting_form_item setting_form_item_for_two">
                    <span className="title_input">Дата рождения</span>
                    <input  onChange={e=>birthDate.onChange(e)}  type='date' className="dark_input" />


                </div>
                <div className="setting_form_item setting_form_item_for_two">
                    <span className="title_input">Пароль</span>
                    <input onBlur={e => password.onBlur(e)} onChange={e=>password.onChange(e)} value={password.value} type='password' className="dark_input" />
                    {(password.isDirty && password.minLengthError&&!password.isEmpty) && <span className="required_fail">Минимальная длинна пароля 6 символов</span>}
                    {(password.isDirty && password.maxLengthError&&!password.isEmpty) && <span className="required_fail">Максимальная длинна пароля 10 символов</span>}
                </div>
                <div className="setting_form_item setting_form_item_for_two">
                    <span className="title_input">Подтвердить пароль</span>
                    <input onBlur={e => passwordConfirm.onBlur(e)} onChange={e=>passwordConfirm.onChange(e)} value={passwordConfirm.value} type='password' className="dark_input" />
                    {(passwordConfirm.value!==password.value && !passwordConfirm.isEmpty) && <span className="required_fail">Пароли не совпадают</span>}

                </div>
                <div className="setting_form_item">
                    <span className="title_input">Кошелек Perfect Money USD</span>
                    <input type='text' className="dark_input" />
                </div>
            </div>
            <div className="violet_box">
                <div className="violet_box_title">Код подтверждения</div>
                <div className="violet_box_row">
                    <input type="text" className="dark_input" placeholder="00000"/>
                    <a href="#" className="give_code">Получить код</a>
                </div>
            </div>
            <div className="setting_form_bottom">
                <button disabled={passwordConfirm.value!==password.value} type='submit' className="form_sbm">Сохранить</button>
                <a href="#" className="form_refresh">Отменить</a>
            </div>
        </form>
    );
};

