import React, {useState} from 'react';

export const AutoCalculator = () => {
    const[price,setPrice]=useState('300000')
    return (
        <div className="blue_block blue_block_green">
            <form>
                <div className="form_entry_in_program">
                    <div className="form_entry_in_program_top">
                        <div className="form_entry_in_program_left">
                            <div className="form_entry_in_program_title">Выберите взнос:</div>
                            <div className="selectt">
                                <div className="selectt__title">Первый <br/> взнос
                                </div>
                                <label className="selectt__label">
                                    <input type="radio" name="first" checked/>
                                    <span className="selectt__item">25%</span>
                                </label>
                                <label className="selectt__label">
                                    <input type="radio" name="first"/>
                                    <span className="selectt__item">35%</span>
                                </label>
                                <label className="selectt__label">
                                    <input type="radio" name="first"/>
                                    <span className="selectt__item">50%</span>
                                </label>
                            </div>
                        </div>
                        <div className="form_entry_in_program_right">
                            <div className="form_entry_in_program_title">
                                Стоимость автомобиля <span>минимальная стоимость 300 000 рублей</span>
                            </div>
                            <div className="form_entry_in_program_right_range">
                                <div className="form_entry_in_program_right_top_range">
                                    <input type="text" name="amountInput" min="300000" max="15000000" value={price}
                                           />
                                    <span>Руб.</span>
                                </div>
                                <div className="form_entry_in_program_right_range_input">
                                    <input type="range" name="amountRange" min="300000" max="15000000" 
                                           onChange={event =>setPrice(event.target.value) }/>
                                </div>
                                <div className="form_entry_in_program_right_range_bottom">
                                    <div className="form_entry_in_program_right_range_bottom_left">300 000 Руб.
                                    </div>
                                    <div className="form_entry_in_program_right_range_bottom_right">15 000 000
                                        Руб.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="totalprice">
                        <input type="text" value=" 500 000" className="totalprice_input"/>
                        <span>Рублей</span>
                    </div>
                    <div className="form_entry_in_program_center">
                        <div className="form_entry_in_program_center_price">
                            <div className="form_entry_in_program_center_titl">Первый взнос</div>
                            <div className="form_entry_in_program_center_green">25%</div>
                        </div>
                        <div className="form_entry_in_program_center_all_price">
                            <div className="form_entry_in_program_center_titl">Срок программы</div>
                            <div className="form_entry_in_program_center_green">140 дней</div>
                        </div>
                        <div className="form_entry_in_program_center_all_price">
                            <div className="form_entry_in_program_center_titl">Общая сумма к оплате</div>
                            <div className="form_entry_in_program_center_green" style={{ color: '#e73351'}}>220 000
                                Руб.
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

