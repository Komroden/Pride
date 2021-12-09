import React, {useState} from 'react';
import {ProgramCalculatorValue} from "./ProgramCalculatorValue";
import Checkbox from '@mui/material/Checkbox';

export const ProgramCalculator = ({percent,minValue,toBeforeRange}) => {

    const[price,setPrice]=useState(0);
    const[speed,setSpeed]=useState(1);
    const[value,setValue]=useState('BTC')
    const[totalPrice,setTotalPrice]=useState(price);
    const course=56793;
    const year =new Date().getFullYear()
    const mounth = new Date().getMonth()
    const date1 = new Date( year, mounth, 1);
    const date2 = new Date( year, mounth+1, 1);
    const date3 = Math.round((date2 - date1) / 1000 / 3600 / 24);
    const before=(toBeforeRange/course).toFixed(5)
    const from =(minValue/course).toFixed(5)
    return (
        <div className="blue_block">
            <form>
                <div className="form_entry_in_program">
                    <div className="form_entry_in_program_top">
                        <div className="form_entry_in_program_left">
                            <div className="form_entry_in_program_title">Выберите валюту</div>
                            <select defaultValue={'BTC'}  className="form_entry_in_program_select" placeholder={'Выберите валюту'} onChange={e=>setValue(e.target.value)}>
                                <ProgramCalculatorValue name={'BTC'}/>
                                <ProgramCalculatorValue name={'ETH'}/>
                                <ProgramCalculatorValue name={'BTC'}/>
                                <ProgramCalculatorValue name={'BTC'}/>
                            </select>
                        </div>
                        <div className="form_entry_in_program_right">
                            <div className="form_entry_in_program_title">
                                Вход в программу <span>от {from} {value} до {before} {value}</span>
                            </div>
                            <div className="form_entry_in_program_right_range">
                                <div className="form_entry_in_program_right_top_range">
                                    <input type="text" name="amountInput" min={from} max={before} value={price} readOnly
                                           />
                                    <span>{value}</span>
                                </div>
                                <div className="form_entry_in_program_right_range_input">
                                    <input type="range" name="amountRange" min={from} max={before} step={0.00001}
                                          onChange={event => {
                                              setTotalPrice(event.target.value)
                                              setPrice(event.target.value)
                                          }} defaultValue={from}/>
                                </div>
                                <div className="form_entry_in_program_right_range_bottom">
                                    <div className="form_entry_in_program_right_range_bottom_left">{from} {value}</div>
                                    <div className="form_entry_in_program_right_range_bottom_right">{before} {value}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="totalprice">
                        <input type="text"  value={totalPrice} onChange={event => setTotalPrice(event.target.value)}  className="totalprice_input"/>
                        <span>{value}</span>
                    </div>
                    <div className="form_entry_in_program_center">
                        <div className="form_entry_in_program_center_price">
                            <div className="form_entry_in_program_center_titl">Цена скорости</div>
                            <div className="form_entry_in_program_center_purple">{(course*totalPrice/100).toFixed(3)} USD</div>
                        </div>
                        <div className="form_entry_in_program_center_all_price">
                            <div className="form_entry_in_program_center_titl">Общая цена</div>
                            <div className="form_entry_in_program_center_green">{((course*totalPrice/100*speed)+(totalPrice*course)).toFixed(3)} USD</div>
                        </div>
                        <div className="form_entry_in_program_center_last">
                            <div className="form_entry_in_program_center_last_title">Ваш заработок в день</div>
                            <div className="form_entry_in_program_center_last_pr">{(course*totalPrice*percent*(1+speed/100)/date3).toFixed(3)} USD</div>
                        </div>
                    </div>
                    <div className="form_entry_in_program_bottom">
                        <div className="form_entry_in_program_bottom_range">
                            <div className="form_entry_in_program_bottom_range_top">
                                <input type="text" name="amountInput1" min="1" max="5"  value={speed} readOnly
                                       />
                                <span>х Скорость</span>
                            </div>
                            <div className="form_entry_in_program_bottom_range_center">
                                <input type="range" name="amountRange1" min="1" max="5" defaultValue={'1'}
                                       onChange={event => setSpeed(event.target.value)}/>
                            </div>
                            <div className="form_entry_in_program_bottom_range_bottom">
                                <div className="form_entry_in_program_bottom_range_bottom_left">Обычная скорость
                                </div>
                                <div className="form_entry_in_program_bottom_range_bottom_right">5х скорость</div>
                            </div>
                            <div className="input_strax">
                            <Checkbox  defaultChecked color="success" />
                                <label >Страхование вклада</label>
                            </div>
                        </div>

                        <div className="form_entry_in_program_bottom_btn">
                            <button>Вход в программу</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

