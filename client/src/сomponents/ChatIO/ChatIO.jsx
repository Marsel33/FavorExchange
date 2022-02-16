import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {ACTION_setChat} from "../../Redux/actions/chat/chatActions";

const ChatIO = ({socket}) => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    const chat = useSelector((state) => state.chat)
    const [state, setState] = useState({message: '', name: user?.name})
    const [open, setOpen] = useState(false)

    useEffect(() => {
        socket.on('message', ({name, message}) => {
            dispatch(ACTION_setChat({name, message}))
        })
    }, [socket])

    const onMessageSubmit = (e) => {
        e.preventDefault()
        const {name, message} = state
        socket.emit('message', {name, message})
        setState({message: '', name})
    }

    const inputChangeHandler = (e) =>
        setState({...state, [e.target.name]: e.target.value})

    return (
        <>
            {open === true ? (
                <div>
                    <form onSubmit={onMessageSubmit}>
                        <input
                            name={'message'}
                            value={state.message}
                            onChange={(e) => inputChangeHandler(e)}
                            type="text"
                        />
                        <div>
                            <button type={'submit'}>Send message</button>
                            <button onClick={() => setOpen(false)}>close chat
                            </button>
                        </div>
                    </form>
                    <div>
                        <p>Сообщения:</p>
                        <ul>
                            {chat &&
                                chat.map((el, i) => {
                                    return (
                                        <li key={i}>
                                            <p>
                                                {el.name}: <span>{el.message}</span>
                                            </p>
                                        </li>
                                    )
                                })}
                        </ul>
                    </div>

                </div>
            ) : (
                <div>
                    <button onClick={() => setOpen(true)}>
                        Open global chat
                    </button>
                </div>
            )}
        </>
    )
}

export default ChatIO