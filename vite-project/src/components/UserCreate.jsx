import React,{useState} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const UserCreate = () => {
    //const [formObj,setFormObj]=useState({name:"",email:"",age:""})
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[age,setAge]=useState()
    const navigate=useNavigate()

    const Submit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/createUser",{
            name,email,age
        })
        .then(result=>{
            navigate('/')
        })
        .catch(err=>console.log(err))
    }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={Submit}>
                    <h1>Add User</h1>
                    <div className='mb-2'>
                        <input type='text' placeholder='Enter Name' className='form-control' onChange={(e)=>setName(e.target.value)}></input>
                    </div>
                    <div className='mb-2'>
                        <input type='text' placeholder='Enter Email' className='form-control' onChange={(e)=>setEmail(e.target.value)}></input>
                    </div>
                    <div className='mb-2'>
                        <input type='text' placeholder='Enter Age' className='form-control' onChange={(e)=>setAge(e.target.value)}></input>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default UserCreate;