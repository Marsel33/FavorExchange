import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllActiveBartersAction } from "../../Redux/actions/thunkActions/activeBarters/thunkGetAllActiveBartersAction";
import { thunkGetAllDecliendBartersAction } from "../../Redux/actions/thunkActions/declinedBarters/thunkGetAllDecliendBartersAction";
import { thunkAcceptBarterAction } from "../../Redux/actions/thunkActions/reqBarters/thunkAcceptBarterAction";
import { thunkDeclineBarterAction } from "../../Redux/actions/thunkActions/reqBarters/thunkDeclineBarterAction";
import { thunkGetAllBarterAction } from "../../Redux/actions/thunkActions/reqBarters/thunkGetAllBarterAction";

const Notefication = () => {

  const reqBarters = useSelector(state => state.reqBarters)
  const meProfile = useSelector(state => state.profile);

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
    dispatch(thunkGetAllDecliendBartersAction(meProfile[0].id))
    dispatch(thunkGetAllBarterAction(Number(meProfile[0].id)))
  }

  useEffect(() => {
    if (meProfile[0]) {
      dispatch(thunkGetAllBarterAction(Number(meProfile[0])))
    }
  }, [])


  return (
    <>
      <div>
        {reqBarters && reqBarters.map(e => {
          return (<div style={{
            border: '1px solid black',
            margin: '1em',
            maxWidth: '20%'
          }}>
            barterId: {e.barterId} <br />
            service:{e.service}
            <button id={e.barterId} onClick={acceptHandler}>accept</button>
            <button id={`del-${e.barterId}`} onClick={declineHandler}>decline</button>
          </div>)
        })}
      </div>
    </>
  )
}

export default Notefication;
