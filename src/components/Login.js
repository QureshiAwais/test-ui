import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ServerCall from '@/common/ServerCall';
import { ctx } from '@/context/appContext';


export const Login = () => {
  const [msg, setMsg] = useState('')
  const { dispatch } = useContext(ctx)
  const [data, setData] = useState({});
  const fnChange = (eve) => {
    const { id, value } = eve.target;
    setData({
      ...data,
      [id]: value
    })
  }
  const fnLogin = () => {
    //console.log(data)
    ServerCall.fnSendPostReq("auth/login", data)
      .then((res) => {
        // console.log("then",res)
        const { token, message } = res.data
        if (token) {
            dispatch({
              type: "LOGIN",
              payload: token
            })
        } else {
          setMsg(message)
        }
      })
      .catch((res) => {
        setMsg(res.data)
      })
  }
  
  return (
    <div className='container-fluid'>
      <h3 className='text-center my-3'>Login</h3>
      <div className='row mb-3'>
        <div className='col-sm-5 text-end'>
          <b className='mui-label'>User ID:</b>
        </div>
        <div className='col-sm-3 mui-tb-div'>
          <TextField id="uid" onChange={fnChange} label="User id" variant="standard" />
        </div>
      </div>

      <div className='row mb-3'>
        <div className='col-sm-5 text-end'>
          <b className='mui-label'>Password:</b>
        </div>
        <div className='col-sm-3 mui-tb-div'>
          <TextField id="pwd" onChange={fnChange} label="Password" variant="standard" />
        </div>
      </div>
      <div className='offset-sm-5 col-sm-7'>
        <Button onClick={fnLogin} variant="contained">LOGIN</Button>
      </div>
      <div className='row text-center mt-3'>
        <b className='text-danger'>{msg}</b>
      </div>
    </div>
  )
}
