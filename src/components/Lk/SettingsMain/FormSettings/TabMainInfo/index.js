import React, {useState} from 'react';
import {useInputV} from "../../../../../hooks/useInputV";
import {useSelector} from "react-redux";


export const TabMainInfo = () => {
    const { auth } = useSelector((state) => state);
    const[value,setValue]=useState({
        username:'',
        firstName:'',
        lastName:'',
        middleName:'',
        birthDate:'',
        country:'',
        city_of_born:'',
    })
    const login=useInputV('')
    const firstName=useInputV('')
    const lastName=useInputV('')
    const middleName=useInputV('')
    const birthDate=useInputV('')
    const [country,setCountry]=useState('')
    const city=useInputV('')
    const handlePut=(e)=>{
        e.preventDefault()
        setValue({
            username:login.value,
            firstName:firstName.value,
            lastName:lastName.value,
            middleName:middleName.value,
            birthDate:birthDate.value,
            country:country,
            city_of_born:city.value,
        })

            fetch("http://127.0.0.1:8000/api/auth/add-more-info",{
                method:"POST",
                body:JSON.stringify(value),
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization':`Bearer ${auth.token}`}
            })
                .then(res=>res.json())
                .then(res=>console.log(res))
                .catch(e=>console.log(e))


    }
    const handleReset=()=>{
        login.onReset();
        firstName.onReset()
        lastName.onReset()
        middleName.onReset()
        birthDate.onReset()
        setCountry('')
        city.onReset()
    }
    return (
        <form onSubmit={handlePut} onReset={handleReset}>
            <div className="setting_form_row">
                <div className="setting_form_item setting_form_item_for_three">
                    <span className="title_input">Логин</span>
                    <input onBlur={e => login.onBlur(e)} onChange={e=>login.onChange(e)} value={login.value} type='text' className="dark_input" />
                </div>
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
                    <span className="title_input">Дата рождения</span>
                    <input  onChange={e=>birthDate.onChange(e)}  type='date' className="dark_input" />
                </div>
                <div className="setting_form_item setting_form_item_for_three">
                    <span className="title_input">Страна</span>
                    <select  defaultValue={'Россия'} value={country.value} onChange={e=>setCountry(e.target.value)}  className="dark_input" name="country">
                        <option value='Россия' >Россия</option>
                        <option value='Пункт 2'  >Пункт 2</option>
                        <option value='Пункт 3'  >Пункт 3</option>
                        <option value='Пункт 4'  >Пункт 4</option>
                        <option value='Пункт 5'  >Пункт 5</option>
                        <option value='Пункт 6'  >Пункт 6</option>
                    </select>
                </div>
                <div className="setting_form_item setting_form_item_for_three">
                    <span className="title_input">Регион</span>
                    <input  onChange={e=>city.onChange(e)} value={city.value} type='text' className="dark_input" />
                </div>


            </div>

            <div className="setting_form_bottom">
                <button onClick={handlePut} type='submit' className="form_sbm">Сохранить</button>
                <button type='reset' className="form_refresh">Отменить</button>
            </div>
        </form>
    );
};

