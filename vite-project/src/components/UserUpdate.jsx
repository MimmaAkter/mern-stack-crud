import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UserUpdate = () => {
    const {id} = useParams()
    //const [formObj,setFormObj]=useState({name:"",email:"",age:""})
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[age,setAge]=useState()
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result=>{console.log(result)
            setName(result.data.name)
            setEmail(result.data.email)
            setAge(result.data.age)
        })
        .catch(err=>console.log(err))
    },[])

    const Update=(e)=>{
        e.preventDefault();
        axios.put('http://localhost:3001/updateUser/'+id,{
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
                <form onSubmit={Update}>
                    <h1>Update User</h1>
                    <div className='mb-2'>
                        <input type='text' placeholder='Enter Name' className='form-control' onChange={(e)=>setName(e.target.value)} value={name}></input>
                    </div>
                    <div className='mb-2'>
                        <input type='text' placeholder='Enter Email' className='form-control' onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                    </div>
                    <div className='mb-2'>
                        <input type='text' placeholder='Enter Age' className='form-control' onChange={(e)=>setAge(e.target.value)} value={age}></input>
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    );
};

export default UserUpdate;