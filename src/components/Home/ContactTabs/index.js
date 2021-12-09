import React, {useEffect, useState} from 'react';
import './style.scss';
import {CountryItem} from "./CountryItem";
import {CountryCard} from "./CountryCard";

export const ContactTabs = () => {
    const [country,setCountry]=useState('');
    const [offices,setOfices]=useState({
        offices:[]
    })
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/offices/show-office-adress',{
            method:'GET',
            headers:{'Content-Type': 'application/json',
                'Accept': 'application/json'}
        })
            .then((res) => res.json())
            .then((body)=>setOfices(body)
            )
            .catch((e) => {
                console.log(e.message);
            });

    },[])


    return (
        <div className="contact_tabs">
            <div className="">
                <div className="tabs-container">
                    <ul  className="tabs containerP">
                        {offices.offices.map((item,index)=><CountryCard key={index} city={item.city} address={item.address} country={item.country} setCountry={setCountry}/>)}
                    </ul>
                    <div className="tabs-content">
                        {offices.offices.filter(item=>country===item.address).map((item,index)=><CountryItem key={index} city={item.city} address={item.address} country={item.country} email={item.email}
                                                                active={'active'} tel={item.phone_number} mapsUrl={item.latitude+', '+item.longitude} name={item.objectName}/>)}


                    </div>
                </div>
            </div>
        </div>
    );
};

