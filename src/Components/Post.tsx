import React from 'react';

interface IProps{

    name:string,
    email:string,
    handleRemove:(post:string)=>void


}

const Post = ({name,email,handleRemove}:IProps) => {
    return (
        <div>
            <p>COMMENTS: {name}</p>
            <p>email:{email}</p>
            <button onClick={()=>handleRemove(email)} >Delete</button>
        </div>
    );
};

export default Post;