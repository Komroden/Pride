import React, {useEffect, useState} from 'react';
import {useTimer} from "../../../../hooks/useTimer";
import {EventLink} from "./EventLink";

export const Event = () => {

    const [show,setShow]=useState({
        contest:[0
        ]
    })


    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/api/contest/show-last-contests/`,{
            method:'GET',
            headers:{'Content-Type': 'application/json',
                'Accept': 'application/json'}
        })
            .then((res) => {
                if (res.status >= 200 && res.status < 300) {
                    return res.json();
                } else {
                    let error = new Error(res.statusText);
                    error.response = res;
                    throw error
                }
            })
            .then((body)=>{
                setShow(body)

            })

            .catch((e) => {
                console.log(e.message);

            });
    },[])

    const{day,seconds,hours,minute}=useTimer(show.contest[0].expired_date)
    return (
        <>
            <div className="show_left wow slideInLeft" data-wow-duration="2s">
                <div className="show_title">Конкурс от Pride.</div>
                <div className="show_descr">Тут блок с описание и правилами конкурса, текст пример Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                    accumsan lacus vel facilisis.
                </div>
                <div className="show_links">
                    <EventLink path='/draw' classes='winners' title={'Победители'}/>
                    <EventLink path='/draw' classes='lasr_prize' title={'Призы'}/>
                </div>
            </div>
            <div className="show_right">
                <img src="/images/plize.png" alt="" className="prize_img wow pulse" data-wow-iteration="infinite"
                     data-wow-duration="2s"/>
                <div className="title_dark_show">Получи {show.contest[0].Name}</div>
                <div className="clock_show">
                    <div className="day cl">
                        <div className="plate_clock" id="dayscount">{day}</div>
                        <div className="descr_clock">days</div>
                    </div>
                    <div className="hour cl">
                        <div className="plate_clock" id="hourscount">{hours}</div>
                        <div className="descr_clock">Hours</div>
                    </div>
                    <div className="minut cl">
                        <div className="plate_clock" id="minscount">{minute}</div>
                        <div className="descr_clock">minutes</div>
                    </div>
                    <div className="secu cl">
                        <div className="plate_clock" id="secscount">{seconds}</div>
                        <div className="descr_clock">seconds</div>
                    </div>
                </div>
                <div className="show_descr">{show.contest[0].Description}
                </div>
                <a href="/" className="open_prize">принять участие в конкурсе</a>
                <div className="sow_foot">Количество участников: <span>{show.contest[0].members}</span></div>
            </div>
        </>
    );
};

