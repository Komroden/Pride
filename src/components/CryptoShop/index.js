import React from 'react';
import './style.scss';

export const CryptoShop = () => {
    return (
        <div className="cripto_shop">
            <div className="text_bg"><span>Crypto</span></div>
            <div className="containerP">
                <div className="pride_title">онлайн рынок криптовалют</div>
                <div className="cripto_table wow bounceInUp" data-wow-duration="2s">
                    <div className="bottom_bg wow pulse" data-wow-duration="4s" data-wow-iteration="infinite"></div>
                    <table className="table_cripto">
                        <tr className="header_table">
                            <th className="name_t">Coin Name</th>
                            <th className="market_t">
						    	<span className="sorting">
						    		<i className="sorting_top fa fa-caret-up" aria-hidden="true"></i>
						    		<i className="sorting_bottom fa fa-caret-down" aria-hidden="true"></i>
						    	</span>
                                <span>Market Cap</span>
                            </th>
                            <th className="price_t">
						    	<span className="sorting">
						    		<i className="sorting_top fa fa-caret-up" aria-hidden="true"></i>
						    		<i className="sorting_bottom fa fa-caret-down" aria-hidden="true"></i>
						    	</span>
                                <span>Price</span>
                            </th>

                            <th className="volume_t">
						    	<span className="sorting">
						    		<i className="sorting_top fa fa-caret-up" aria-hidden="true"></i>
						    		<i className="sorting_bottom fa fa-caret-down" aria-hidden="true"></i>
						    	</span>
                                <span>Volume (24hr)</span>
                            </th>

                            <th className="supply_t">
						    	<span className="sorting">
						    		<i className="sorting_top fa fa-caret-up" aria-hidden="true"></i>
						    		<i className="sorting_bottom fa fa-caret-down" aria-hidden="true"></i>
						    	</span>
                                <span>Supply</span>
                            </th>

                            <th className="change_t">
						    	<span className="sorting">
						    		<i className="sorting_top fa fa-caret-up" aria-hidden="true"></i>
						    		<i className="sorting_bottom fa fa-caret-down" aria-hidden="true"></i>
						    	</span>
                                <span>Change</span>
                            </th>

                            <th className="actions_t">
						    	<span className="sorting">
						    		<i className="sorting_top fa fa-caret-up" aria-hidden="true"></i>
						    		<i className="sorting_bottom fa fa-caret-down" aria-hidden="true"></i>
						    	</span>
                                <span>Actions</span>
                            </th>
                        </tr>
                        <tr>
                            <td className="name_t">
								<span className="logo_t">
						    		<img src="/images/btc.png" alt=""/>
						    	</span>
                                <span className="name_tt">Bitcoin</span>
                            </td>
                            <td className="market_t">
                                $230,431,567,285.80
                            </td>
                            <td className="price_t">$13,689.10</td>
                            <td className="volume_t">$11,085,600,000.00</td>
                            <td className="supply_t">16803387</td>
                            <td className="change_t red_t">-3.73%</td>
                            <td className="actions_t">
                                <a href="#" className="link_info">Coin Info</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="name_t">
								<span className="logo_t">
						    		<img src="/images/t2.png" alt=""/>
						    	</span>
                                <span className="name_tt">Etherum</span>
                            </td>
                            <td className="market_t">
                                $130,263,207,306.82
                            </td>
                            <td className="price_t">$1,332.88</td>
                            <td className="volume_t">$4,863,330,000.00</td>
                            <td className="supply_t">96987899</td>
                            <td className="change_t red_t">-2.3%</td>
                            <td className="actions_t">
                                <a href="#" className="link_info">Coin Info</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="name_t">
								<span className="logo_t">
						    		<img src="/images/t3.png" alt=""/>
						    	</span>
                                <span className="name_tt">Ripple</span>
                            </td>
                            <td className="market_t">
                                $71,904,497,754.35
                            </td>
                            <td className="price_t">$1.83</td>
                            <td className="volume_t">$1,955,750,000.00</td>
                            <td className="supply_t">38739142811</td>
                            <td className="change_t green_t">4.68%</td>
                            <td className="actions_t">
                                <a href="#" className="link_info">Coin Info</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="name_t">
								<span className="logo_t">
						    		<img src="/images/btc.png" alt=""/>
						    	</span>
                                <span className="name_tt">Bitcoin cash</span>
                            </td>
                            <td className="market_t">
                                $42,874,658,196.30
                            </td>
                            <td className="price_t">$2,497.66</td>
                            <td className="volume_t">$995,310,000.00</td>
                            <td className="supply_t">16912450</td>
                            <td className="change_t red_t">-5.47%</td>
                            <td className="actions_t">
                                <a href="#" className="link_info">Coin Info</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="name_t">
								<span className="logo_t">
						    		<img src="/images/t2.png" alt=""/>
						    	</span>
                                <span className="name_tt">Etherum</span>
                            </td>
                            <td className="market_t">
                                $130,263,207,306.82
                            </td>
                            <td className="price_t">$1,332.88</td>
                            <td className="volume_t">$4,863,330,000.00</td>
                            <td className="supply_t">96987899</td>
                            <td className="change_t red_t">-2.3%</td>
                            <td className="actions_t">
                                <a href="#" className="link_info">Coin Info</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="name_t">
								<span className="logo_t">
						    		<img src="/images/t3.png" alt=""/>
						    	</span>
                                <span className="name_tt">Ripple</span>
                            </td>
                            <td className="market_t">
                                $71,904,497,754.35
                            </td>
                            <td className="price_t">$1.83</td>
                            <td className="volume_t">$1,955,750,000.00</td>
                            <td className="supply_t">38739142811</td>
                            <td className="change_t green_t">4.68%</td>
                            <td className="actions_t">
                                <a href="#" className="link_info">Coin Info</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="name_t">
								<span className="logo_t">
						    		<img src="/images/btc.png" alt=""/>
						    	</span>
                                <span className="name_tt">Bitcoin cash</span>
                            </td>
                            <td className="market_t">
                                $42,874,658,196.30
                            </td>
                            <td className="price_t">$2,497.66</td>
                            <td className="volume_t">$995,310,000.00</td>
                            <td className="supply_t">16912450</td>
                            <td className="change_t red_t">-5.47%</td>
                            <td className="actions_t">
                                <a href="#" className="link_info">Coin Info</a>
                            </td>
                        </tr>

                    </table>
                </div>
            </div>
        </div>
    );
};

