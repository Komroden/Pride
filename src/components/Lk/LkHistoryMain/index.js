import React, {useEffect, useState} from 'react';
import './style.scss';

import {Line} from "../MainTitle/GreyLine";
import {LkHistoryMainItem} from "./LkHistoryMainItem";
import {useSelector} from "react-redux";
import {ENDPOINT} from "../../../api/endpoints";
import {Pagination} from "./LkHistoryMainItem/Pagination";

export const LkHistoryMain = () => {
    const [filter,setFilter]=useState('all');
    const [infoList,setInfoList]= useState({
        info:[]
    })
    const { auth } = useSelector((state) => state);
    const url = ENDPOINT
    useEffect(()=>{
        if (auth.token){
        fetch(`${url}/api/finance/show-sharing-money`, {
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization':`Bearer ${auth.token}`}
        })
            .then(res=>res.json())
            .then(res=>{
                setInfoList(res)
            })
            .catch(e=>console.log(e))
        }
    },[url,auth.token])

    // pagination
    const [currentPage,setCurrentPage]=useState(1);
    const [itemOnPage]=useState(24);
    const lastItemIndex = currentPage * itemOnPage
    const firstItemIndex = lastItemIndex-itemOnPage
    const currentItem = infoList.info.slice(firstItemIndex,lastItemIndex)


    const paginate=pageNumber=> setCurrentPage(pageNumber);
    const nextPage=(e)=> {

        e.preventDefault()
        if(currentPage===Math.ceil(infoList.info.length/itemOnPage)){
            setCurrentPage(1)
            return
        }
        setCurrentPage(prev => prev + 1)
    };
    const prevPage=(e)=> {
        e.preventDefault()
        if(currentPage===1){
            setCurrentPage(Math.ceil(infoList.info.length/itemOnPage))
            return
        }
        setCurrentPage(prev => prev - 1)
    };

    return (
        <>
            <Line/>
            <div className="main_for_all_pages">
                <div className="main_content_right_sidebar_title_bl">
                    <div className="sidebar_title_bl_left">
                        <div className="main_content_right_sidebar_title_bl_title">ИСТОРИЯ ОПЕРАЦИЙ</div>
                        <div className="main_content_right_sidebar_title_bl_subtitle">отображение истории транзакций
                        </div>
                    </div>
                    <div className="sidebar_title_bl_right filter_history">
                        <form className="filter_history_form">
                            <select onChange={e => setFilter(e.target.value)} defaultValue={'all'} className="select_filter " name="filter">
                                <option value={'all'} >Все</option>
                                <option value={'payed'} >Завершен</option>
                                <option value={"discline"}>Отменен</option>
                                <option value={"processing"}>В обработке</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="history_row">
                    {(filter==='all')&&currentItem.map((item,index)=><LkHistoryMainItem key={index} value={item.summ} img={'/images/history_img.png'} date={item.date_of_operation} from={item.way_to_pay} status={item.status}/>)}
                    {(filter==='payed')&&currentItem.filter(item=>item.status==='payed').map((item,index)=><LkHistoryMainItem key={index} value={item.summ} img={'/images/history_img.png'} date={item.date_of_operation} from={item.way_to_pay} status={item.status}/>)}
                    {(filter==='discline')&&currentItem.filter(item=>item.status==='discline').map((item,index)=><LkHistoryMainItem key={index} value={item.summ} img={'/images/history_img.png'} date={item.date_of_operation} from={item.way_to_pay} status={item.status}/>)}
                    {(filter==='processing')&&currentItem.filter(item=>item.status==='processing').map((item,index)=><LkHistoryMainItem key={index} value={item.summ} img={'/images/history_img.png'} date={item.date_of_operation} from={item.way_to_pay} status={item.status}/>)}
                </div>


                {infoList.info.length>0&&<div className="history_pagin_row">
                    <div className="voice_pagination">
                        <ul>
                            <li className="arrow_li li_start">
                                <a href={'/'} onClick={prevPage}>
                                    <img src="/images/pag_arr.png" alt=""/>
                                </a>
                            </li>
                            <Pagination itemsPerPage={itemOnPage} totalItems={infoList.info.length} paginate={paginate}  currentPage={currentPage}  />
                            <li className="arrow_li li_eng">
                                <a href={'/'} onClick={nextPage}>
                                    <img src="/images/pag_arr.png" alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>}
            </div>

        </>
    );
};

