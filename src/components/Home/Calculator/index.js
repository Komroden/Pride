import React,{useState} from 'react';
import './style.scss';
import {Slider} from '@material-ui/core';
import {CSSTransition} from "react-transition-group";
export const Calculator = () => {
    const [showCurr,setShowCurr]=useState(false);
    const [showPlan,setShowPlan]=useState(false);


    return (
        <div className="calcul">
            <div className="housebg">
                {/*<img src="images/houses_together.png" alt="">*/}
            </div>
            <div className="containerP">
                <div className="pride_title wow slideInUp" data-wow-duration="2s">Калькулятор Доходности</div>
                <div className="pride_subtitle wow slideInUp" data-wow-duration="2s">Мы подобрали для вас самы
                    актуальные по соотношению сроков\процентов <br/>оптимальные пакетные платы для ваших дипозитных
                        вкладов. Тут вобщем <br/>текст для сео можно вставить.</div>
                <div className="cripto_table wow bounceInUp" data-wow-duration="2s">
                    <div className="bottom_bg wow pulse" data-wow-duration="4s" data-wow-iteration="infinite"></div>
                    <div className="table_cripto">

                        <form>
                            <div className="flex_row">
                                <div className="select3 sel_plan">
                                    <div className="select_title">Выберите план</div>
                                    <div className="select_item_calc">
                                        <div onClick={()=>setShowPlan(!showPlan)} className="select_item_calc_name ope1">
                                            Тарифный план БИЗНЕС
                                        </div>
                                        <CSSTransition in={showPlan} classNames='alert' timeout={300} unmountOnExit >
                                        <div
                                            className="open_select_categ select_item_calc_body select_item_calc_body1 inputp">
												<span className="sel_r">
													<input type="radio" name="categ" id="categ1"/>
													<label htmlFor="categ1">Тарифный план Старт</label>
												</span>
                                            <span className="sel_r">
													<input type="radio" name="categ" id="categ2"/>
													<label htmlFor="categ2">Тарифный план Выгодный</label>
												</span>
                                            <span className="sel_r">
													<input type="radio" name="categ" id="categ3"/>
													<label htmlFor="categ3">Тарифный план БИЗНЕС</label>
												</span>
                                        </div>
                                        </CSSTransition>
                                    </div>
                                </div>
                                <div className="select3 sel_money">
                                    <div className="select_title ">Выберите валюту</div>
                                    <div className="select_item_calc">
                                        <div onClick={()=>setShowCurr(!showCurr)} className="select_item_calc_name ope2">
                                            Выберите валюту
                                        </div>
                                        <CSSTransition in={showCurr} classNames='alert' timeout={300} unmountOnExit >
                                        <div
                                            className="open_select_categ select_item_calc_body select_item_calc_body2 inputp">
												<span className="sel_r">
													<input type="radio" name="categ3" id="mon1"/>
													<label htmlFor="mon1">Выберите валюту</label>
												</span>
                                            <span className="sel_r">
													<input type="radio" name="categ3" id="mon2"/>
													<label htmlFor="mon2">Долар США</label>
												</span>
                                            <span className="sel_r">
													<input type="radio" name="categ3" id="mon3"/>
													<label htmlFor="mon3">Рубль Россия</label>
												</span>
                                        </div>
                                        </CSSTransition>
                                    </div>
                                </div>
                                <div className="select3 sel_price">
                                    <div className="select_title">Введите сумму</div>
                                    <input placeholder="15" type="number" className="number_input"/>
                                </div>
                            </div>
                            <div className="flex_row take_money">
                                <div className="take_money_left">
                                    <div className="take_money_tit">Ежедневный доход:</div>
                                    <div className="take_money_sum fiolet_t">0.026400 BTC</div>
                                </div>
                                <div className="take_money_right">
                                    <div className="take_money_tit">Общий доход:</div>
                                    <div className="take_money_sum green_t">1.320000 BTC</div>
                                </div>

                            </div>
                            <div className="flex_row range_btn">
                                <div className="range_calc">
                                    <div className="slider">

                                        <div className="range">
                                            <Slider size="medium"  defaultValue={50} aria-label="Temperature" valueLabelDisplay="auto" min={1} max={200} step={1}  />
                                        </div>
                                        <div className="under">
                                            <span className="startyear">1 BTC</span>
                                            <span className="endyear">200 BTC</span>
                                        </div>

                                    </div>
                                </div>
                                <button className="invest_btn">Инвестировать</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};
