import React, { useState } from 'react';
import Post from './Post';

interface IPost {
    name: string,
    email: string,
}

const Posts = () => {
    const [comments, setComments] = useState<IPost>({} as IPost);
    const [commentsList, setCommentsList] = useState<IPost[]>([])

    const onClick = () => {
        setCommentsList([...commentsList, comments])
        setComments({
            name: "",
            email: "",
        })
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setComments({ ...comments, [e.target.name]: e.target.value })

    const handleRemove = (email: string) => {
        const newCommentsList = commentsList.filter(c =>c.email!==email)
        setCommentsList(newCommentsList)
    }
    return (
        <div>
            <h1>Textbook</h1>
            <br />

            <div className="form-group">
               
                    
                <input

                    
                    style={{width:"550px",height:"50px"}}
                    value={comments.name}
                    onChange={onChange}
                    name="name"
                    placeholder="post here"
                    
                    type="text" /> <br /><br />
                

                <input
                    value={comments.email}
                    onChange={onChange}
                    name="email"
                    placeholder="Enter your email"
                    type="email" /> <br /> <br />

                   

                <button onClick={onClick}>Post</button>

            </div>
            {
                commentsList.map((com) => <Post key={com.name} name={com.name} email={com.email} handleRemove={handleRemove} />)
            }

        </div>
    );
};

export default Posts;