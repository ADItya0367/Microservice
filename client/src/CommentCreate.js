import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default ({postId})=>{
     const [content, setContent] = useState('');
    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content
        });
        setContent('')
    }
    return <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>New Comment</label>
                <input type="text" className="form-control"/>
            </div>
            <button className="btn " style={ {color:"#ffffff",backgroundColor:'#000000',marginTop:'20px',textAlign:'center',justifyContent:'center' }}>Submit</button>
        </form>
    </div>
}