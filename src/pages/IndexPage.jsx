import { useEffect, useState } from "react";
import Content from "../components/content";

const IndexPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://mern-blog-backend-0o00.onrender.com/post')
            .then(response => {
                response.json().then(posts => {
                setPosts(posts);
            })
        })
    }, []);
    return ( 
        <div>
            {posts.length > 0 && posts.map(post => (
                <Content {...post} />
            ))}
        </div>
     );
}
 
export default IndexPage;