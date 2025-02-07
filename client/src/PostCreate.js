import React, {useState} from 'react';
import axios from 'axios';


export default ()=>{
    const [title, setTitle]=useState('');


    const onSubmit=async (e)=>{
        e.preventDefault();
        // here e.preventDefault() is used to prevent the default behaviour of the form which is to refresh the page
        await axios.post('http://localhost:4000/posts',{title});
        setTitle('');
    }

    return(
        <div>
           <form onSubmit={onSubmit}>
            <div className='form-group'>
                <label style={{color:'#ffffff'}}>Title</label>
                <input value={title} onChange={e=>setTitle(e.target.value)}  className='form-control' />
            </div>
            <button className='btn ' style={{backgroundColor:'#ffffff', marginTop:'10px',justifyContent:'center', textAlign:'center', color:'#000000'}}>Submit</button>
           </form>
        </div>
    )
}

