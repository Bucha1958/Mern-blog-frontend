import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { UserContext } from "../UserContext";


const PostPage = () => {
    const { id } = useParams();
    const [postInfo, setPostInfo] = useState(null);
    const {userInfo} = useContext(UserContext)
    
    
    useEffect(() => {
        fetch(`https://mern-blog-backend-0o00.onrender.com/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo)
                })
            })
    }, []);
    if (!postInfo) return '';

    const timeAgo = formatDistanceToNow(new Date(postInfo.createdAt), {addSuffix: true});

    return ( 
        <div>
            <h1>{postInfo.title}</h1>
            <div className="nameTime">
                <p>By {postInfo.author['username']}</p>
                <time>{timeAgo}</time>
                {userInfo.id === postInfo.author["_id"] && (
                    <div className="edit-row">
                        <a className="edit-btn" href="edit">Edit Post</a>
                    </div>
                )}
            </div>
            <img src={`https://mern-blog-backend-0o00.onrender.com/${postInfo.cover}`} alt='post Image' />
            <div className="content" dangerouslySetInnerHTML={{__html: postInfo.content}}></div>
        </div>
     );
}
 
export default PostPage;