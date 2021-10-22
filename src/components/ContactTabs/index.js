import React, {useState} from 'react';
import './style.scss';

export const ContactTabs = () => {
    const [country,setCountry]=useState('');

    return (
        <div className="contact_tabs">
            <div className="">
                <div className="tabs-container">
                    <ul  className="tabs containerP">

                        <li    className= "wow bounceInLeft " data-wow-duration="3s">
                            <a  onClick={()=>setCountry('Greece')}>
                                <span  className="tab_name">Greece.</span>
                                <span className="tab_detail">
				      		<span className="r_tab">
				      			<span className="tab_city">Stambul</span>
				      			<span className="tab_adres">201 Oak Street Building 27</span>
				      		</span>
				      	</span>
                            </a>
                        </li>
                        <li className="wow bounceInLeft" data-wow-duration="3s">
                            <a onClick={()=>setCountry('Turkey')}>
                                <span  className="tab_name">Turkey.</span>
                                <span className="tab_detail">
				      		<span className="r_tab">
				      			<span className="tab_city">Stambul</span>
				      			<span className="tab_adres">201 Oak Street Building 27</span>
				      		</span>
				      	</span>
                            </a>
                        </li>
                        <li className="wow bounceInLeft" data-wow-duration="3s">
                            <a onClick={()=>setCountry('Germany')}>
                                <span  className="tab_name">Germany.</span>
                                <span className="tab_detail">
				      		<span className="r_tab">
				      			<span className="tab_city">Stambul</span>
				      			<span className="tab_adres">201 Oak Street Building 27</span>
				      		</span>
				      	</span>
                            </a>
                        </li>
                        <li className="wow bounceInLeft" data-wow-duration="3s">
                            <a onClick={()=>setCountry('England')}>
                                <span  className="tab_name">England.</span>
                                <span className="tab_detail">
				      		<span className="r_tab">
				      			<span className="tab_city">Stambul</span>
				      			<span className="tab_adres">201 Oak Street Building 27</span>
				      		</span>
				      	</span>
                            </a>
                        </li>
                        <li className="wow bounceInLeft" data-wow-duration="3s">
                            <a onClick={()=>setCountry('Russia')}>
                                <span  className="tab_name">Russia.</span>
                                <span className="tab_detail">
				      		<span className="r_tab">
				      			<span className="tab_city">Stambul</span>
				      			<span className="tab_adres">201 Oak Street Building 27</span>
				      		</span>
				      	</span>
                            </a>
                        </li>
                    </ul>
                    <div className="tabs-content">
                        <div className="tabs-panel active" data-index="0">
                            <iframe height="710"
                                    src="https://maps.google.com/maps?q=turkey%20stambul&t=&z=5&ie=UTF8&iwloc=&output=embed"/>
                            <div className="box_upper">
                                <div className="box_title">Contact Us</div>
                                <div className="box_city">{country}</div>
                                <div className="box_adress">75 South Park Avenue, <br/>Melbourne, Australia</div>
                                <div className="box_tel"><span><a href="tel:880056789011">8 800 567.890.11</a> <br/>Central Office</span>
                                </div>
                                <div className="box_meil"><a href="mailto:support@pride.io">support@pride.io</a></div>
                            </div>
                        </div>
                        <div className="tabs-panel" data-index="1">
                            <iframe height="710"
                                    src="https://maps.google.com/maps?q=turkey%20stambul&t=&z=5&ie=UTF8&iwloc=&output=embed"/>
                            <div className="box_upper">
                                <div className="box_title">Contact Us</div>
                                <div className="box_city">TURKEY</div>
                                <div className="box_adress">75 South Park Avenue, <br/>Melbourne, Australia</div>
                                <div className="box_tel"><span><a href="tel:880056789011">8 800 567.890.11</a> <br/>Central Office</span>
                                </div>
                                <div className="box_meil"><a href="mailto:support@pride.io">support@pride.io</a></div>
                            </div>
                        </div>
                        <div className="tabs-panel" data-index="2">
                            <iframe height="710"
                                    src="https://maps.google.com/maps?q=turkey%20stambul&t=&z=5&ie=UTF8&iwloc=&output=embed"/>
                            <div className="box_upper">
                                <div className="box_title">Contact Us</div>
                                <div className="box_city">Germany</div>
                                <div className="box_adress">75 South Park Avenue, <br/>Melbourne, Australia</div>
                                <div className="box_tel"><span><a href="tel:880056789011">8 800 567.890.11</a> <br/>Central Office</span>
                                </div>
                                <div className="box_meil"><a href="mailto:support@pride.io">support@pride.io</a></div>
                            </div>
                        </div>
                        <div className="tabs-panel" data-index="3">
                            <iframe height="710"
                                    src="https://maps.google.com/maps?q=turkey%20stambul&t=&z=5&ie=UTF8&iwloc=&output=embed"/>
                            <div className="box_upper">
                                <div className="box_title">Contact Us</div>
                                <div className="box_city">England</div>
                                <div className="box_adress">75 South Park Avenue, <br/>Melbourne, Australia</div>
                                <div className="box_tel"><span><a href="tel:880056789011">8 800 567.890.11</a> <br/>Central Office</span>
                                </div>
                                <div className="box_meil"><a href="mailto:support@pride.io">support@pride.io</a></div>
                            </div>
                        </div>
                        <div className="tabs-panel" data-index="4">
                            <iframe height="710"
                                    src="https://maps.google.com/maps?q=turkey%20stambul&t=&z=5&ie=UTF8&iwloc=&output=embed"/>
                            <div className="box_upper">
                                <div className="box_title">Contact Us</div>
                                <div className="box_city">Russia</div>
                                <div className="box_adress">75 South Park Avenue, <br/>Melbourne, Australia</div>
                                <div className="box_tel"><span><a href="tel:880056789011">8 800 567.890.11</a> <br/>Central Office</span>
                                </div>
                                <div className="box_meil"><a href="mailto:support@pride.io">support@pride.io</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

