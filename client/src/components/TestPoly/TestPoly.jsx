import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {oneProfile} from "../../Redux/actions/profileAction";
import {thunkSetNewBarterAction} from "../../Redux/actions/thunkActions/reqBarters/thunkSetNewBarterAction";
import {thunkGetAllBarterAction} from "../../Redux/actions/thunkActions/reqBarters/thunkGetAllBarterAction";
import {thunkAcceptBarterAction} from "../../Redux/actions/thunkActions/reqBarters/thunkAcceptBarterAction";
import {thunkDeclineBarterAction} from "../../Redux/actions/thunkActions/reqBarters/thunkDeclineBarterAction";
import {
    thunkGetAllActiveBartersAction
} from "../../Redux/actions/thunkActions/activeBarters/thunkGetAllActiveBartersAction";
import {
    thunkGetAllDecliendBartersAction
} from "../../Redux/actions/thunkActions/declinedBarters/thunkGetAllDecliendBartersAction";
import {thunkGetAllEndedBarterAction} from "../../Redux/actions/thunkActions/endedBarters/thunkGetAllEndedBarterAction";

const TestPoly = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const meProfile = useSelector(state => state.profile);
    const reqBarters = useSelector(state => state.reqBarters)
    const activeBarters = useSelector(state => state.activeBarters)
    const declinedBarters = useSelector(state => state.declinedBarters)
    const [title, setTitle] = useState('')
    const [service, setService] = useState('')
    const [offer, setOffer] = useState('')
    useEffect(() => {
        dispatch(oneProfile(id))

    }, [])
    console.log('prooooooofile', meProfile)
    useEffect(() => {
        console.log('hueta')
        if (meProfile[0]) {
            dispatch(thunkGetAllActiveBartersAction(meProfile[0].id))
            dispatch(thunkGetAllDecliendBartersAction(meProfile[0].id))
            dispatch(thunkGetAllEndedBarterAction(meProfile[0].id))
        }
    }, [meProfile[0]])

    console.log(activeBarters)

    function requestHandler(e) {
        e.preventDefault()
        dispatch(thunkGetAllBarterAction(Number(meProfile[0].id)))

    }

    function barterHandler(e) {
        e.preventDefault()
        console.log(title)
        const data = {title, service, offer, id: 1, opponentId: Number(id)} // TODO CHANGE ID TO ACTIVE PROFILE
        dispatch(thunkSetNewBarterAction(data))
    }

    function titleHandler(e) {
        e.preventDefault()
        setTitle(e.target.value)
    }

    function serviceHandler(e) {
        e.preventDefault()
        setService(e.target.value)
    }

    function offerHandler(e) {
        e.preventDefault()
        setOffer(e.target.value)
    }

    function acceptHandler(e) {
        e.preventDefault()
        console.log(e.target.id)
        dispatch(thunkAcceptBarterAction(e.target.id))
        dispatch(thunkGetAllActiveBartersAction(meProfile[0].id))
    }

    function declineHandler(e) {
        e.preventDefault()
        dispatch(thunkDeclineBarterAction(e.target.id.slice(4)))
        dispatch(thunkGetAllDecliendBartersAction(meProfile[0].id))
        dispatch(thunkGetAllBarterAction(Number(meProfile[0].id)))
    }

    return (
        <div>
            {meProfile && meProfile.map(e => {
                return (<div>{e.id}</div>)
            })}
            <button onClick={requestHandler}>Request</button>
            <form
                onSubmit={barterHandler}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '20%'
                }}>
                <label htmlFor="title">title</label>
                <input type="text" name="title" onChange={titleHandler}/>
                <label htmlFor="service">service</label>
                <input type="text" name="service" onChange={serviceHandler}/>
                <label htmlFor="offer">offer</label>
                <input type="text" name="offer" onChange={offerHandler}/>
                <input type="submit"/>
            </form>
            <div>
                {reqBarters && reqBarters.map(e => {
                    return (<div style={{
                        border: '1px solid black',
                        margin: '1em',
                        maxWidth: '20%'
                    }}>
                        barterId: {e.barterId} <br/>
                        service:{e.service}
                        <button id={e.barterId} onClick={acceptHandler}>accept</button>
                        <button id={`del-${e.barterId}`} onClick={declineHandler}>decline</button>
                    </div>)
                })}
            </div>
            <div style={{
                display: 'flex',
                justifyContent: "space-around"
            }}>
                <div style={{width: '30%'}}>
                    ACTIVE BARTERS
                    <div>
                        {activeBarters && activeBarters.map(e => {
                            console.log(e)
                            if (e.status == 'active') {
                                return (<div>
                                    {e.offer}
                                    <button>end</button>
                                </div>)
                            }
                        })}
                    </div>
                </div>
                <div style={{width: '30%'}}>
                    ENDED BARTERS
                    {/*<div>*/}
                    {/*    {activeBarters && activeBarters.map(e => {*/}
                    {/*        console.log(e)*/}
                    {/*        if (e.status == 'active') {*/}
                    {/*            return (<div>*/}
                    {/*                {e.offer}*/}
                    {/*                <button>end</button>*/}
                    {/*            </div>)*/}
                    {/*        }*/}
                    {/*    })}*/}
                    {/*</div>*/}
                </div>
                <div style={{width: '30%'}}>
                    declinedBarters
                    <div>
                        {declinedBarters && declinedBarters.map(e => {
                            console.log(e)
                            if (e.status == 'declined') {
                                return (<div>
                                    {e.offer}
                                    <button>del</button>

                                </div>)
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestPoly;