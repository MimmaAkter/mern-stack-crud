import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [list,setList]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3001')
        .then(result=>setList(result.data))
        .catch(err=>console.log(err))
    })

    //const users = useSelector(state => state.users.users)
    //const dispatch = useDispatch()

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res => {console.log(res)
            //dispatch(deleteUser({id}))
            window.location.reload()
        }).catch(err => console.log(err))
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to='/create' className='btn btn-success'>Add+</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((user)=>{
                                return(
                                    <tr>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.age}</td>
                                        <td>
                                            <Link to={'/update/'+user._id} className='btn btn-info'>Edit</Link>
                                            <button onClick={() => handleDelete(user._id)} className="btn btn-danger ms-1">Delete</button>                          
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;