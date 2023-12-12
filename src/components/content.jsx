import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';

const Content = ({_id, title, summary, cover, content, createdAt, author}) => {
    const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true });
    return ( 
        <div className='entry'>
            <Link to={`/post/${_id}`}>
                <div className='image'>
                    <img src={'https://mern-blog-backend-0o00.onrender.com/'+cover} alt="speaker" />
                </div>
            </Link>
            <div className='text'>
                <Link to={`/post/${_id}`}>
                    <h2>{title}</h2>
                </Link>
                <p className='info'>
                    <a className='author'>{author.username}</a>
                    <time>{timeAgo}</time>
                </p>
                <p className='summary'>{summary}</p>
            </div>
        </div>

     );
}
 
export default Content;
