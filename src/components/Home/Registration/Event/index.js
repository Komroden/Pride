import React, {useEffect, useState} from 'react';

export const Event = () => {
    const[data, setData]=useState({})

    useEffect(()=>{
        fetch('http://lk.pride.kb-techno.ru/api/Main/last-contest',{
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
                setData(body)


            })
            .catch((e) => {
                console.log(e.message);

            });
    },[])
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
                    <a href="#" className="winners">Победители</a>
                    <a href="#" className="lasr_prize">Последние призы</a>
                </div>
                <div className="under_footer_right">
                    <ul>
                        <li>
                            <a href="#" className="fb"/>
                        </li>
                        {/* <li>*/}
                        {/*    <a href="#" class="m"></a>*/}
                        {/*</li> */}
                        <li>
                            <a href="#" className="telegram"/>
                        </li>
                        <li>
                            <a href="#" className="btc"/>
                        </li>
                        <li>
                            <a href="#" className="tw"/>
                        </li>
                        <li>
                            <a href="#" className="inst"/>
                        </li>
                        <li>
                            <a href="#" className="gith"/>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="show_right">
                <img src="/images/plize.png" alt="" className="prize_img wow pulse" data-wow-iteration="infinite"
                     data-wow-duration="2s"/>
                <div className="title_dark_show">Получи 0.25 BTC</div>
                <div className="clock_show">
                    <div className="day cl">
                        <div className="plate_clock" id="dayscount"></div>
                        <div className="descr_clock">days</div>
                    </div>
                    <div className="hour cl">
                        <div className="plate_clock" id="hourscount"></div>
                        <div className="descr_clock">Hours</div>
                    </div>
                    <div className="minut cl">
                        <div className="plate_clock" id="minscount"></div>
                        <div className="descr_clock">minutes</div>
                    </div>
                    <div className="secu cl">
                        <div className="plate_clock" id="secscount"></div>
                        <div className="descr_clock">seconds</div>
                    </div>
                </div>
                <a href="#" className="open_prize">принять участие в конкурсе</a>
                <div className="sow_foot">Количество участников: <span>12 985</span></div>
            </div>
        </>
    );
};

