import React, {useCallback} from 'react';
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {UserLogout} from "../../../store/auth/actions";

export const LkHeaderUserProfile = ({path,logo,homeClassName,textClassName}) => {
    const { auth,userData } = useSelector((state) => state);

    const dispatch = useDispatch();
    const setLogout = useCallback(() => {
        dispatch(UserLogout())
    }, [dispatch]);
    const handleLogout =()=>{
        setLogout()
        sessionStorage.clear()
    };
    const {push}=useHistory()
    const handlePushLogin=()=>{
        push('/login')
    }
    const handlePush=() => {
        push(path)
    }
    return (
        <div className={"user_part "+homeClassName}>
            <div className={"user_part_text "+textClassName}>
                <div className="user_part_hi">Добрый день</div>
                <div className="user_part_name">{userData.value.Name?userData.value.Name:'User'} {userData.value.Surename?userData.value.Surename:'User'}</div>
                <a onClick={auth.token!=null?handleLogout:handlePushLogin} className="user_part_exit">{auth.token!=null?'Выход':'Вход'}</a>
            </div>
            <div onClick={handlePush} className="user_part_logo">
                <div className="user_part_logo_img">
                    <img src={logo} alt=""/>
                </div>
            </div>
        </div>
    );
};

