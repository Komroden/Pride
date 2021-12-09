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
import {LkHome} from "./pages/Lk/Home";
import {setMinute, setPrice, setSeconds} from "./store/timer/actions";
import {LkUser} from "./pages/Lk/User";
import {LkUserTransactions} from "./pages/Lk/UserTransactions";
import {AddProg} from "./pages/AddProg";
import {Guest} from "./pages/Lk/Guest";
import {History} from "./pages/Lk/History";
import {Messages} from "./pages/Lk/Messages";
import {NewMessage} from "./pages/Lk/NewMessage";
import {News} from "./pages/Lk/News";
import {Refill} from "./pages/Lk/Refill";
import {ProgramMaxi} from "./pages/Lk/ProgramMaxi";
import {Draw} from "./pages/Lk/Draw";
import {Settings} from "./pages/Lk/Settings";
import {PrivateRoute} from "./hocs/PrivateRoute";
import {GetUser} from "./api/GetUser";
import {Offer} from "./pages/Lk/Offer";
import {OfferImg} from "./pages/Lk/OfferImg";
import {UserRegistration} from "./store/auth/actions";
import {Output} from "./pages/Lk/Output";
import {Vote} from "./pages/Lk/Vote";

import {Notifications} from "./pages/Lk/Notifications";
import {setNewsList} from "./store/news/actions";
import {useTimerUp} from "./hooks/useTimerUp";
import {Structure} from "./pages/Lk/Structure";
import {ProgramMaxiThree} from "./pages/Lk/ProgramMaxiThree";
import {ProgramMaxiTwo} from "./pages/Lk/ProgramMaxiTwo";
import {Votes} from "./store/votes/actions";
import {CryptoData} from "./store/crypto/actions";


const loadJSON=key=>
    JSON.parse(sessionStorage.getItem(key));
export function App() {
    const[news,setNews]=useState({
        news:[]
    })
    const { auth } = useSelector((state) => state);

    GetUser()
    const dispatch = useDispatch();
    const setTokens = useCallback(() => {
        dispatch(UserRegistration(loadJSON('key')))
    }, [dispatch]);//auth.token
    useEffect(()=>{
        if (loadJSON('key')) {
            setTokens()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[auth.token])

    useEffect(()=>{
        new WOW.WOW({
            live:false,
            mobile: true,
        }).init();
    },[])
    const{seconds,minute,price}=useTimerUp()
    const setSecond = useCallback(() => {
        dispatch(setSeconds(seconds))
    }, [dispatch,seconds]);
    const setMinutes = useCallback(() => {
        dispatch(setMinute(minute))
    }, [dispatch,minute]);
    const setPrices = useCallback(() => {
        dispatch(setPrice(price))
    }, [dispatch,price]);


    useEffect(() => {
        setMinutes()
    },[setMinutes,minute])
    useEffect(() => {
        setPrices()
    },[setPrices,price])
    useEffect(() => {
        setSecond()
    },[setSecond,seconds])



    // news
    const setNewses = useCallback(() => {
        dispatch(setNewsList(news))
    }, [dispatch,news]);
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/news/show-news',{
            method:'GET',
            headers:{'Content-Type': 'application/json',
                'Accept': 'application/json'}
        })
            .then((res) => res.json())
            .then((body)=>{
                setNews(body)
            })

            .catch((e) => {
                console.log(e.message);
            });
    },[])
    useEffect(()=>{
        setNewses()
    },[setNewses,news])



    // fromHome

    const [value,setValue]=useState({
        post:[{
            question:'',
            answers:[{
                name:'',
                value: '',
            }],
            all_answers:[],
            all:[]
        }]
    })
    useEffect(()=>{
        if(auth.token){
        fetch('http://127.0.0.1:8000/api/contest/show-post',{
            method:'GET',
            headers:{
                "accept": "application/json",
                'Authorization':`Bearer ${auth.token}`}
        })
            .then(res=>res.json())
            .then(body=>setValue(body))
        }
    },[auth.token])

    const setVotes = useCallback(() => {
        dispatch(Votes(value))
    }, [dispatch,value]);

    useEffect(()=>{

        setVotes()
    },[setVotes,value])



    // CRYPTO
    const[crypto,setCrypto]=useState([])
    const setCryptoData = useCallback(() => {
        dispatch(CryptoData(crypto))
    }, [dispatch,crypto]);
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/finance/show-price-crypto',{
            method:'GET',
            headers:{'Content-Type': 'application/json',
                'Accept': 'application/json'}
        })
            .then((res) => res.json())
            .then((body)=>setCrypto(body.data)
            )
            .catch((e) => {
                console.log(e.message);
            });

    },[])
    useEffect(()=>{
        if(!crypto) return
        setCryptoData()
    },[setCryptoData,crypto])
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
        <Route  path='/full/:newsId'>
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
        <PrivateRoute auth={auth}  path='/structure'>
            <Structure/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/lk'>
            <LkHome/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/user'>
           <LkUser/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/transactions'>
            <LkUserTransactions/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/addProg'>
          <AddProg/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/guest'>
           <Guest/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/history'>
           <History/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/messages'>
           <Messages/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/notifications'>
            <Notifications/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/newMessage'>
            <NewMessage/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/lkNews'>
            <News/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/refill'>
            <Refill/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/programMaxi'>
            <ProgramMaxi/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/programMaxi2'>
            <ProgramMaxiTwo/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/programMaxi3'>
            <ProgramMaxiThree/>
        </PrivateRoute>
        {/*<PrivateRoute auth={auth} path='/program15'>*/}
        {/*   <Program15/>*/}
        {/*</PrivateRoute>*/}
        {/*<PrivateRoute auth={auth} path='/programMatrix'>*/}
        {/*  <ProgramMatrix/>*/}
        {/*</PrivateRoute>*/}
        {/*<PrivateRoute auth={auth} path='/programAuto'>*/}
        {/*    <ProgramAuto/>*/}
        {/*</PrivateRoute>*/}
        {/*<PrivateRoute auth={auth} path='/technique'>*/}
        {/*    <ProgramTechnique/>*/}
        {/*</PrivateRoute>*/}
        <PrivateRoute auth={auth} path='/draw'>
            <Draw/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/settings'>
            <Settings/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/offer'>
            <Offer/>
        </PrivateRoute>
        <Route  path='/offerImg'>
            <OfferImg/>
        </Route>
        <PrivateRoute auth={auth} path='/output'>
            <Output/>
        </PrivateRoute>
        <PrivateRoute auth={auth} path='/vote'>
            <Vote/>
        </PrivateRoute>
    </Switch>

</div>


  )}


