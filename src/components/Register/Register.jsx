import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../features/auth/authSlice'
const Register = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    })
    const {name,email,password} = formData

    const dispatch = useDispatch()

    const onChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(register(formData))
        console.log('formData',formData)
    }
  return (
    <form onSubmit={onSubmit}>
        <input type="text" name="name" value={name} onChange={onChange} />
        <input type="email" name="email" value={email} onChange={onChange}/>
        <input type="password" name="password" value={password} onChange={onChange}/>
        <button type="submit">Register</button>
    </form>
  )
}
export default Register