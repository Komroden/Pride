import React, {useEffect, useState} from 'react';
import './style.scss';
import Slider from "react-slick";
import {useHistory} from "react-router";
import {NewsCard} from "../NewsCard";
export const Registration = () => {
    const {push}=useHistory()

    const handlePushAllNews=() => {
        push('/allNews')
    }
    const [seconds, setSeconds] = useState(60);
    const [minute, setMinute] = useState(59);
    const [hours, setHours] = useState(59);
    const [day, setDays] = useState(59);
    useEffect(() => {
        if (hours == 0) {
            setHours(59)
        } else {
            setTimeout(() => setHours(hours - 1), 3600000);
        }
        if (day == 0) {
            setDays(59)
        } else {
            setTimeout(() => setDays(day - 1), 86400000);
        }
        if (minute == 0) {
            setMinute(59)
        } else {
            setTimeout(() => setMinute(minute - 1), 60000);
        }
        if (seconds == 0) {
            setSeconds(59)
        } else {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        }
    });

    const slider = React.useRef(null);
        const settings = {
            arrows:false,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1

        };

    return (
        <div className="bg_big">
            <div className="register_click">
                <div className="containerP">
                    <div className="register_click_left">
                        <img src="/images/reg_img.png" alt="" className="register_click_img wow pulse"
                             data-wow-iteration="infinite" data-wow-duration="2.5s"/>
                    </div>
                    <div className="register_click_right">
                        <div className="yel_titl">как начать зарабатывть</div>
                        <div className="regg_title">Регистрируйся в пару кликов</div>
                        <div className="steps wow slideInRight" data-wow-duration="2s">
                            <div className="count_step">
                                <span>1</span>
                            </div>
                            <div className="right_step">
                                <div className="step_tit">Регистрация</div>
                                <div className="step_descr">Yellentesque vestibulum fermentum velit non placerat
                                    aecenase in hendrerit justo quisque quis.
                                </div>
                            </div>
                        </div>
                        <div className="steps wow slideInRight" data-wow-duration="3s">
                            <div className="count_step">
                                <span>2</span>
                            </div>
                            <div className="right_step">
                                <div className="step_tit">Пополнение баланаса</div>
                                <div className="step_descr">Yellentesque vestibulum fermentum velit non placerat
                                    aecenase in hendrerit justo quisque quis.
                                </div>
                            </div>
                        </div>
                        <div className="steps wow slideInRight" data-wow-duration="4s">
                            <div className="count_step"><span>3</span></div>
                            <div className="right_step">
                                <div className="step_tit">заключить контакт</div>
                                <div className="step_descr">Yellentesque vestibulum fermentum velit non placerat
                                    aecenase in hendrerit justo quisque quis.
                                </div>
                            </div>
                        </div>
                        <a href="#" className="invest_btn">Регистрация</a>
                    </div>
                </div>
            </div>
            <div className="video_blog">
                <div className="containerP">
                    <div className="title_bg wow slideInUp" data-wow-duration="2s">
                        <div className="bg wow pulse" data-wow-iteration="infinite" data-wow-duration="2.5s">
                            <img src="/images/bg_title.png" alt=""/>
                        </div>
                        <div className="pride_title">Видео блог компании</div>
                        <div className="pride_subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                            do <br/>eiusmod tempor incididunt ut labore et dolore magna</div>
                    </div>
                    <div className="flex_row_video">
                        <span
                           className="popup-youtube video_item wow slideInUp" data-wow-duration="2s">
	  							<iframe height="250" src="https://www.youtube.com/embed/ozq5pqdekuE"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            <span className="vider_title_you">Токены CBS - что будет дальше. Заголовок видео!</span>
                        </span>
                        <div
                           className="popup-youtube video_item wow slideInUp" data-wow-duration="3s">
                            <iframe height="250" src="https://www.youtube.com/embed/xD5EDTKFig4"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            <span className="vider_title_you">Где найти деньги на свой стартапв гараже!</span>
                        </div>
                        <span
                           className="popup-youtube video_item wow slideInUp" data-wow-duration="4s">

	  							<iframe height="250" src="https://www.youtube.com/embed/XReHfoqiDf0"
                                        allow="accelerometer; autoplay; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>

                            <span className="vider_title_you">Токены CBS - что будет дальше. Заголовок видео!</span>
                        </span>

                    </div>
                    <a href="#" className="invest_btn wow slideInUp" data-wow-duration="2s">наш youtube канал <img
                        src="/images/you_icon.png" alt=""/></a>
                </div>
            </div>
            <div className="new_pride">
                <div className="containerP">
                    <div className="pride_title">новости от pride.</div>
                </div>
                <div className="dflex_news">
                    <div className="news_left_img wow slideInLeft" data-wow-duration="2s">
                        <img src="/images/news.png" alt=""/>
                    </div>
                    <div className="news_right wow slideInRight" data-wow-duration="2s">

                        <div className="news_slider">
                            <Slider ref={slider} {...settings}>
                            <NewsCard url={'url(/images/newsimg.jpg)'}/>
                            <NewsCard url={'url(/images/newsimg2.png)'}/>
                            <NewsCard url={'url(/images/newsimg3.png)'}/>
                            <NewsCard url={'url(/images/newsimg.jpg)'}/>
                            <NewsCard url={'url(/images/newsimg2.png)'}/>
                            <NewsCard url={'url(/images/newsimg3.png)'}/>
                        </Slider>
                        </div>

                        <div className="slider_nav">
                            <div className="left_slide" onClick={() => slider?.current?.slickPrev()}>

                            </div>
                            <div className="right_slide" onClick={() => slider?.current?.slickNext()}>

                            </div>
                            <a onClick={handlePushAllNews} className="all_news">все новости</a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="show">
                <div className="containerP">
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
                                    <a href="#" className="fb"></a>
                                </li>
                                {/* <li>*/}
                                {/*    <a href="#" class="m"></a>*/}
                                {/*</li> */}
                                <li>
                                    <a href="#" className="telegram"></a>
                                </li>
                                <li>
                                    <a href="#" className="btc"></a>
                                </li>
                                <li>
                                    <a href="#" className="tw"></a>
                                </li>
                                <li>
                                    <a href="#" className="inst"></a>
                                </li>
                                <li>
                                    <a href="#" className="gith"></a>
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
                            <a href="#" className="open_prize">принять участие в конкурсе</a>
                            <div className="sow_foot">Количество участников: <span>12 985</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

