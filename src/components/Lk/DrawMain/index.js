import React, {useState} from 'react';
import {DrawItem} from "./DrawItem";
import {DrawItemArchive} from "./DrawItemArchive";
import './style.scss';
import {Line} from "../MainTitle/GreyLine";
import {useSelector} from "react-redux";

export const DrawMain = () => {
    //filter code
    // .filter(item=>item.status==='active')
    const [filter,setFilter]=useState('all');
    const handleFilter=(e)=>{
        setFilter(e.value)
    }
    const { contests } = useSelector((state) => state);
    return (
        <>
            <Line/>
            <div className="main_for_all_pages">
                <div className="main_content_right_sidebar_title_bl">
                    <div className="sidebar_title_bl_left">
                        <div className="main_content_right_sidebar_title_bl_title">Розыгрыши</div>
                        <div className="main_content_right_sidebar_title_bl_subtitle">Тут какойто текст про
                            голосование
                        </div>
                    </div>
                    <div className="sidebar_title_bl_right">
                        <form>
                            <select defaultValue={'all'}  className="select_filter" name="filter" onChange={e => handleFilter(e.target)}>
                                <option value={'all'} >Все</option>
                                <option value={"active"}>Активные</option>
                                <option value={"past"}>Прошедшие</option>
                            </select>
                        </form>
                    </div>
                </div>
                {(filter==='all'||filter==='active')&&contests.value.contest.filter(item=>item.status==='active').map((item,index)=>
                    <DrawItem key={item.id} imgPrice={item.pic} priceAdd={item.Price} title={item.Name} desc={item.Description} date={item.expired_date}
                    members={item.members} startDate={item.date_of_creation}/>
                    )}

                <div className="rozgr_archive">
                    {(filter==='all'||filter==='past')&&contests.value.contest.filter(item=>item.status==='end').map((item,index)=>
                        <DrawItemArchive key={item.id} imgUrl={item.pic} priceAdd={item.Price} title={item.Name} desc={item.Description} date={item.expired_date}
                                  members={item.members} startDate={item.date_of_creation}/>
                    )}
                </div>
            </div>

        </>
    );
};

