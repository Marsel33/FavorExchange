import {Card, Col, Row} from "antd";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    thunkGetAllActiveBartersAction
} from "../../Redux/actions/thunkActions/activeBarters/thunkGetAllActiveBartersAction";
import {
    thunkGetAllDecliendBartersAction
} from "../../Redux/actions/thunkActions/declinedBarters/thunkGetAllDecliendBartersAction";
import {thunkAcceptBarterAction} from "../../Redux/actions/thunkActions/reqBarters/thunkAcceptBarterAction";
import {thunkDeclineBarterAction} from "../../Redux/actions/thunkActions/reqBarters/thunkDeclineBarterAction";
import {thunkGetAllBarterAction} from "../../Redux/actions/thunkActions/reqBarters/thunkGetAllBarterAction";

const Notefication = () => {

    const reqBarters = useSelector(state => state.reqBarters);
    const declinedBarters = useSelector(state => state.declinedBarters);
    const meProfile = useSelector(state => state.profile);

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()


    function acceptHandler(e) {
        e.preventDefault()
        console.log(e.target.id)
        dispatch(thunkAcceptBarterAction(e.target.id))
        dispatch(thunkGetAllActiveBartersAction(meProfile[0].id))
    }

    function declineHandler(e) {
        e.preventDefault()
        dispatch(thunkDeclineBarterAction(e.target.id.slice(4)))
        dispatch(thunkGetAllDecliendBartersAction(user)) //toto не забыть поменять user в init!!!!!!!
        dispatch(thunkGetAllBarterAction(Number(user))) //toto не забыть поменять user в init!!!!!!!
    }

    useEffect(() => {
        console.log(123000);
        if (user) {
            console.log(1234567890);
            dispatch(thunkGetAllBarterAction(Number(user))) //toto не забыть поменять user в init!!!!!!!
        }
    }, [])


    console.log('1111111111111', reqBarters)

    return (
        <>

            <Row>
                <Col sm={12}>

                    <div>
                        {reqBarters.map(e => {
                            return (<div style={{
                                border: '1px solid black',
                                margin: '1em',
                                maxWidth: '20%'
                            }}>
                                {/* barterId: {e.barterId} <br /> */}

                                <Card title={e.service} style={{width: 300}}>

                                    <button id={e.barterId} onClick={acceptHandler}>accept</button>
                                    <button id={`del-${e.barterId}`} onClick={declineHandler}>decline</button>
                                </Card>

                            </div>)
                        })}

                    </div>
                </Col>

                <Col sm={12}>
                    <div style={{width: '30%'}}>
                        declinedBarters
                        <div>
                            {declinedBarters && declinedBarters.map(e => {
                                console.log(e)
                                if (e.status == 'declined') {
                                    return (<div>
                                        <Card title={e.offer} style={{width: 300}}>

                                            <button id={e.barterId}>удалить</button>
                                        </Card>
                                    </div>)
                                }
                            })}
                        </div>
                    </div>
                </Col>
            </Row>


        </>
    )
}

export default Notefication;
