import React from 'react';
import {NewsCard} from "../NewsCard";
import './style.scss';

export const ContAllNews = () => {
    return (
        <div className="main_cont">
            <div className="news_row containerP new_news_row">
				<NewsCard url={'url(/images/newsimg.jpg)'}/>
				<NewsCard url={'url(/images/newsimg2.png)'}/>
				<NewsCard url={'url(/images/newsimg3.png)'}/>
				<NewsCard url={'url(/images/newsimg.jpg)'}/>
				<NewsCard url={'url(/images/newsimg2.png)'}/>
				<NewsCard url={'url(/images/newsimg3.png)'}/>
				<NewsCard url={'url(/images/newsimg.jpg)'}/>
				<NewsCard url={'url(/images/newsimg2.png)'}/>
				<NewsCard url={'url(/images/newsimg3.png)'}/>
				<NewsCard url={'url(/images/newsimg.jpg)'}/>
				<NewsCard url={'url(/images/newsimg2.png)'}/>
				<NewsCard url={'url(/images/newsimg3.png)'}/>

            </div>
            <div className="pagination_p">
                <div className="containerP">
                    <a href="#" className="prev_pag ">
                        <i className="fa fa-arrow-left" aria-hidden="true"/>
                    </a>
                    <a href="#" className="prev_pag ">
                        1
                    </a>
                    <a href="#" className="prev_pag ">
                        2
                    </a>
                    <a href="#" className="prev_pag ">
                        3
                    </a>
                    <a href="#" className="prev_pag ">
                        <i className="fa fa-arrow-right" aria-hidden="true"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

