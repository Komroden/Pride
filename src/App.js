import './App.scss'
import React, {useCallback, useEffect, useState} from 'react';
import WOW from "wowjs";
import {useDispatch, useSelector} from "react-redux";
import {Route, Switch} from "react-router";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Faq} from "./pages/Faq";
import {Review} from "./pages/Review";
import {Contact} from "./pages/Contact";
import {FullNews} from "./pages/FullNews";
import {AllNews} from "./pages/AllNews";
import {Login} from "./pages/Login";
import {Registration} from "./pages/Registration";
import {LkHome} from "./pages/LkHome";
import { setMinute, setPrice, setSeconds} from "./store/timer/actions";
import {LkUser} from "./pages/LkUser";
import {LkUserTransactions} from "./pages/LkUserTransactions";
import {AddProg} from "./pages/AddProg";
import {Guest} from "./pages/Guest";
import {History} from "./pages/History";
import {Messages} from "./pages/Lk/Messages";
import {NewMessage} from "./pages/Lk/NewMessage";



export function App() {
    const { auth } = useSelector((state) => state);
    useEffect(()=>{
        new WOW.WOW().init();
    },[])
    const[sec,setSec]=useState(0);
    const[min,setMin]=useState(0);
    const[pri,setPri]=useState(0);

    const dispatch = useDispatch();
    const setSecond = useCallback(() => {
        dispatch(setSeconds(sec))
    }, [dispatch,sec]);
    const setMinutes = useCallback(() => {
        dispatch(setMinute(min))
    }, [dispatch,min]);
    const setPrices = useCallback(() => {
        dispatch(setPrice(pri))
    }, [dispatch,pri]);
    const { showMessage } = useSelector((state) => state);


    useEffect(() => {

        if(min===60){
            setMin(0);

        }else{
            setTimeout(() => setMin(min+1) , 60000);
        }
        if(sec===60){
            setSec(0)

        }else{
            setTimeout(() => setSec(sec+1) , 1000);

        }
        setTimeout(() => setPri(pri+25) , 5000);
    },);


    useEffect(() => {
        setSecond()
    },[sec])
    useEffect(() => {
        setMinutes()
    },[min])
    useEffect(() => {
        setPrices()
    },[pri])

  return(
<div>

    <Switch>

        <Route  exact path='/'>
            <Home/>
        </Route>
        <Route  path='/about'>
            <About/>
        </Route>
        <Route path='/faq'>
            <Faq/>
        </Route>
        <Route  path='/review'>
            <Review/>
        </Route>
        <Route  path='/contact'>
            <Contact/>
        </Route>
        <Route  path='/full'>
            <FullNews/>
        </Route>
        <Route  path='/allNews'>
            <AllNews/>
        </Route>
        <Route  path='/login'>
            <Login/>
        </Route>
        <Route  path='/register'>
            <Registration/>
        </Route>
            <Route  path='/lk'>
                <LkHome/>
            </Route>
        <Route  path='/user'>
           <LkUser/>
        </Route>
        <Route  path='/transactions'>
            <LkUserTransactions/>
        </Route>
        <Route  path='/addProg'>
          <AddProg/>
        </Route>
        <Route  path='/guest'>
           <Guest/>
        </Route>
        <Route  path='/history'>
           <History/>
        </Route>
        <Route  path='/messages'>
           <Messages/>
        </Route>
        <Route  path='/newMessage'>
            <NewMessage/>
        </Route>
    </Switch>





</div>


  )}


